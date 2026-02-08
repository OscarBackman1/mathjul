'use client';

import { Country } from '@/lib/countries';

interface DishModalProps {
    country: Country;
    onClose: () => void;
    onSpinAgain: () => void;
    canSpinAgain: boolean;
}

export default function DishModal({ country, onClose, onSpinAgain, canSpinAgain }: DishModalProps) {
    // Generate a placeholder image URL using the dish keywords
    const imageUrl = `https://source.unsplash.com/800x600/?${encodeURIComponent(country.dish.imageKeywords)}`;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black/40 glass-blur px-0 sm:px-4 animate-fade-in">
            {/* Bottom Sheet / Modal Card */}
            <div className="relative w-full max-w-md bg-white rounded-t-xl sm:rounded-xl shadow-2xl overflow-hidden animate-slide-up">
                {/* Handle for mobile */}
                <div className="flex h-6 w-full items-center justify-center sm:hidden">
                    <div className="h-1.5 w-12 rounded-full bg-[#dbe6df]"></div>
                </div>

                <div className="flex flex-col">
                    {/* Hero Image */}
                    <div className="px-4 pt-2 pb-0 sm:pt-4">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-black/5">
                            <img
                                src={imageUrl}
                                alt={country.dish.name}
                                className="w-full h-full object-cover"
                            />
                            {/* Badge */}
                            <div className="absolute top-3 left-3 bg-[#2bee6c] text-[#102216] font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                                NEW DISCOVERY
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center">
                        <div className="inline-flex items-center gap-2 mb-2">
                            <span className="text-[#2bee6c] text-sm">🌍</span>
                            <h3 className="text-[#2bee6c] font-bold tracking-widest text-xs uppercase">
                                Destination: {country.name} {country.flag}
                            </h3>
                        </div>

                        <h1 className="text-[#111813] text-3xl font-extrabold leading-tight tracking-tight mb-3">
                            {country.dish.name}
                        </h1>

                        <p className="text-[#4a5a4e] text-base font-normal leading-relaxed mb-8 px-2">
                            {country.dish.description}
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col gap-3">
                            {canSpinAgain ? (
                                <button
                                    onClick={onSpinAgain}
                                    className="w-full bg-[#2bee6c] hover:bg-[#2bee6c]/90 text-[#102216] font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 group active:scale-95"
                                >
                                    <span className="group-active:rotate-180 transition-transform">🔄</span>
                                    Spin Again
                                </button>
                            ) : (
                                <div className="w-full bg-gray-200 text-gray-500 font-bold py-4 rounded-xl text-center">
                                    🎉 All 70 countries explored!
                                </div>
                            )}
                            <button
                                onClick={onClose}
                                className="w-full bg-transparent hover:bg-black/5 text-[#111813]/60 font-semibold py-3 rounded-xl transition-colors"
                            >
                                Close Discovery
                            </button>
                        </div>
                    </div>

                    {/* Footer Decor */}
                    <div className="h-2 w-full bg-[#2bee6c]/10"></div>
                </div>
            </div>

            {/* Confetti decorations */}
            <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
                <span className="absolute top-10 left-[10%] text-[#2bee6c] opacity-30 text-4xl confetti">🎉</span>
                <span className="absolute top-40 right-[15%] text-[#2bee6c] opacity-30 text-2xl confetti" style={{ animationDelay: '0.5s' }}>⭐</span>
                <span className="absolute bottom-40 left-[20%] text-[#2bee6c] opacity-30 text-3xl confetti" style={{ animationDelay: '1s' }}>🍽️</span>
                <span className="absolute top-[60%] right-[10%] text-[#2bee6c] opacity-30 text-4xl confetti" style={{ animationDelay: '0.3s' }}>🍜</span>
            </div>
        </div>
    );
}
