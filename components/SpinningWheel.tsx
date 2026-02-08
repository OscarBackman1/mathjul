'use client';

import { useState, useEffect } from 'react';
import { Country } from '@/lib/countries';

interface SpinningWheelProps {
    availableCountries: Country[];
    isSpinning: boolean;
}

export default function SpinningWheel({
    availableCountries,
    isSpinning
}: SpinningWheelProps) {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (isSpinning) {
            // Add random rotation when spinning starts
            const newRotation = rotation + 1800 + Math.random() * 720;
            setRotation(newRotation);
        }
    }, [isSpinning]);

    return (
        <div className="relative w-full aspect-square flex items-center justify-center p-8">
            {/* Outer Ring Glow */}
            <div className="absolute inset-0 bg-[#2bee6c]/20 blur-[80px] rounded-full scale-75"></div>

            {/* The Wheel */}
            <div
                className="relative z-10 w-full aspect-square rounded-full border-8 border-white shadow-2xl overflow-hidden roulette-gradient flex items-center justify-center"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: isSpinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
                }}
            >
                {/* Country flags around the wheel */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full opacity-40 text-xs font-bold text-white uppercase tracking-widest">
                        {availableCountries.slice(0, 14).map((country, index) => {
                            const angle = (index * 360) / Math.min(14, availableCountries.length);
                            return (
                                <div
                                    key={country.code}
                                    className="absolute left-1/2 top-1/2 origin-center whitespace-nowrap text-center text-2xl"
                                    style={{
                                        transform: `rotate(${angle}deg) translateY(-120px)`,
                                        marginLeft: '-12px',
                                    }}
                                >
                                    {country.flag}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Center Hub */}
                <div className="z-20 size-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#2bee6c]">
                    <span className="text-[#2bee6c] text-2xl">🍽️</span>
                </div>
            </div>

            {/* Pointer */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-t-[24px] border-l-transparent border-r-transparent border-t-[#2bee6c] drop-shadow-lg"></div>
            </div>
        </div>
    );
}
