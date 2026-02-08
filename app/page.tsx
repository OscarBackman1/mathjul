'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createNewSession = async () => {
    setIsCreating(true);
    setError(null);

    try {
      const res = await fetch('/api/session', { method: 'POST' });
      if (!res.ok) throw new Error('Failed to create session');

      const data = await res.json();
      router.push(`/${data.sessionId}`);
    } catch (err) {
      console.error('Error creating session:', err);
      setError('Failed to create a new game. Please try again.');
      setIsCreating(false);
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-[480px] mx-auto shadow-2xl bg-white">
      {/* Header */}
      <header className="flex items-center bg-white/80 backdrop-blur-md sticky top-0 z-20 p-4 justify-center border-b border-[#111813]/5">
        <div className="text-[#111813] flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8f6] mr-3">
          <span className="text-xl">🌍</span>
        </div>
        <h2 className="text-[#111813] text-lg font-bold leading-tight tracking-tight">
          Global Food Roulette
        </h2>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        {/* Decorative wheel */}
        <div className="relative w-48 h-48 mb-8">
          <div className="absolute inset-0 bg-[#2bee6c]/20 blur-[40px] rounded-full"></div>
          <div className="relative z-10 w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden roulette-gradient flex items-center justify-center">
            <div className="z-20 size-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#2bee6c]">
              <span className="text-[#2bee6c] text-xl">🍽️</span>
            </div>
          </div>
        </div>

        <h1 className="text-[#111813] text-3xl font-extrabold leading-tight tracking-tight mb-4">
          Ready to explore<br />world cuisines?
        </h1>

        <p className="text-[#111813]/60 text-base mb-8 max-w-xs">
          Spin the wheel to discover dishes from the world&apos;s 70 largest countries. Share the link with friends!
        </p>

        {error && (
          <div className="mb-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <button
          onClick={createNewSession}
          disabled={isCreating}
          className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full font-extrabold text-lg shadow-[0_8px_30px_rgb(43,238,108,0.3)] transition-all active:scale-95 ${isCreating
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#2bee6c] text-[#102216] hover:shadow-[0_8px_40px_rgb(43,238,108,0.4)]'
            }`}
        >
          {isCreating ? (
            <>
              <span className="animate-spin">🔄</span>
              Creating Game...
            </>
          ) : (
            <>
              <span>🎲</span>
              Start New Game
            </>
          )}
        </button>

        <p className="text-[10px] uppercase tracking-widest text-[#111813]/40 mt-6 font-bold">
          70 Countries • Unlimited Fun
        </p>
      </main>

      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-[0.03] pointer-events-none flex items-center justify-center text-[400px]">
        🗺️
      </div>
    </div>
  );
}
