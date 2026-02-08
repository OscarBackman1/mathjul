'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import SpinningWheel from '@/components/SpinningWheel';
import DishModal from '@/components/DishModal';
import HistoryList from '@/components/HistoryList';
import { Country, countries, getAvailableCountries } from '@/lib/countries';
import { DrawnCountry } from '@/lib/supabase';

export default function GamePage() {
    const params = useParams();
    const sessionId = params.sessionId as string;

    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [drawnCountries, setDrawnCountries] = useState<DrawnCountry[]>([]);
    const [availableCountries, setAvailableCountries] = useState<Country[]>(countries);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch existing drawn countries on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/spin?sessionId=${sessionId}`);
                if (!res.ok) throw new Error('Failed to fetch data');

                const data = await res.json();
                setDrawnCountries(data.drawnCountries || []);

                const drawnCodes = (data.drawnCountries || []).map((d: DrawnCountry) => d.country_code);
                setAvailableCountries(getAvailableCountries(drawnCodes));
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to load game data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [sessionId]);

    const handleSpin = useCallback(async () => {
        if (isSpinning || availableCountries.length === 0) return;

        setIsSpinning(true);

        try {
            // Call API first to get the result
            const res = await fetch('/api/spin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sessionId })
            });

            if (!res.ok) {
                const errorData = await res.json();
                if (errorData.allDrawn) {
                    setError('All 70 countries have been drawn! 🎉');
                }
                setIsSpinning(false);
                return;
            }

            const data = await res.json();

            // Start visual animation (the result is already determined)
            // Wait for animation to complete, then show modal
            setTimeout(() => {
                setSelectedCountry(data.country);
                setDrawnCountries(prev => [data.drawnRecord, ...prev]);
                setAvailableCountries(prev => prev.filter(c => c.code !== data.country.code));
                setIsSpinning(false);
                setShowModal(true);
            }, 4000); // Animation duration

        } catch (err) {
            console.error('Error spinning:', err);
            setIsSpinning(false);
            setError('Failed to spin. Please try again.');
        }
    }, [isSpinning, availableCountries.length, sessionId]);

    const handleSpinAgain = () => {
        setShowModal(false);
        setSelectedCountry(null);
        // Small delay before allowing next spin
        setTimeout(() => {
            handleSpin();
        }, 300);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCountry(null);
    };

    if (isLoading) {
        return (
            <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-[480px] mx-auto shadow-2xl bg-white">
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl mb-4 animate-pulse">🌍</div>
                        <p className="text-[#111813]/60">Loading your culinary journey...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-[480px] mx-auto shadow-2xl bg-white">
            <Header />

            <main className="flex-1 overflow-y-auto pb-32">
                {/* Hero Title */}
                <div className="px-6 pt-8 pb-4 text-center">
                    <h1 className="text-[#111813] text-3xl font-extrabold leading-tight tracking-tight">
                        Where will we eat today?
                    </h1>
                    <p className="text-[#111813]/60 mt-2 text-sm">
                        Discover local flavors from the world&apos;s 70 largest nations.
                    </p>
                </div>

                {/* Spinning Wheel */}
                <SpinningWheel
                    availableCountries={availableCountries}
                    isSpinning={isSpinning}
                />

                {/* History List */}
                <HistoryList drawnCountries={drawnCountries} />
            </main>

            {/* Fixed Bottom Action Area */}
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] p-6 bg-gradient-to-t from-white via-white/95 to-transparent pt-10">
                <button
                    onClick={handleSpin}
                    disabled={isSpinning || availableCountries.length === 0}
                    className={`w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-5 text-lg font-extrabold leading-normal tracking-wide shadow-[0_8px_30px_rgb(43,238,108,0.3)] active:scale-95 transition-transform ${isSpinning || availableCountries.length === 0
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                            : 'bg-[#2bee6c] text-[#102216]'
                        }`}
                >
                    {isSpinning ? (
                        <>
                            <span className="animate-spin mr-2">🔄</span>
                            <span className="truncate uppercase">SPINNING...</span>
                        </>
                    ) : availableCountries.length === 0 ? (
                        <span className="truncate uppercase">ALL COUNTRIES EXPLORED! 🎉</span>
                    ) : (
                        <>
                            <span className="mr-2">🔄</span>
                            <span className="truncate uppercase">SPIN THE WHEEL</span>
                        </>
                    )}
                </button>
                <p className="text-center text-[10px] uppercase tracking-widest text-[#111813]/40 mt-4 font-bold">
                    {availableCountries.length} Countries Available • {drawnCountries.length} Visited
                </p>
            </div>

            {/* Dish Modal */}
            {showModal && selectedCountry && (
                <DishModal
                    country={selectedCountry}
                    onClose={handleCloseModal}
                    onSpinAgain={handleSpinAgain}
                    canSpinAgain={availableCountries.length > 0}
                />
            )}

            {/* Background World Map */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-[0.03] pointer-events-none flex items-center justify-center text-[400px]">
                🗺️
            </div>
        </div>
    );
}
