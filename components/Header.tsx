'use client';

interface HeaderProps {
    onHistoryClick?: () => void;
}

export default function Header({ onHistoryClick }: HeaderProps) {
    return (
        <header className="flex items-center bg-white/80 backdrop-blur-md sticky top-0 z-20 p-4 justify-between border-b border-[#111813]/5">
            <div className="text-[#111813] flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f6f8f6]">
                <span className="text-xl">🌍</span>
            </div>
            <h2 className="text-[#111813] text-lg font-bold leading-tight tracking-tight flex-1 text-center">
                Global Food Roulette
            </h2>
            <div className="flex w-10 items-center justify-end">
                <button
                    onClick={onHistoryClick}
                    className="flex size-10 items-center justify-center rounded-full bg-[#f6f8f6] text-[#111813] transition-all active:scale-95 hover:bg-[#2bee6c]/10"
                >
                    <span className="text-xl">📜</span>
                </button>
            </div>
        </header>
    );
}
