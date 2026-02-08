'use client';

import { DrawnCountry } from '@/lib/supabase';

interface HistoryListProps {
    drawnCountries: DrawnCountry[];
    onSeeAll?: () => void;
}

export default function HistoryList({ drawnCountries, onSeeAll }: HistoryListProps) {
    // Get the most recent items (max 3 for preview)
    const recentItems = drawnCountries.slice(0, 3);

    if (drawnCountries.length === 0) {
        return (
            <div className="px-6 pt-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[#111813] text-lg font-bold tracking-tight">Previously Visited</h3>
                </div>
                <div className="text-center py-8 text-[#111813]/40">
                    <p className="text-4xl mb-2">🌍</p>
                    <p className="text-sm">Spin the wheel to start your culinary journey!</p>
                </div>
            </div>
        );
    }

    const formatTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        return `${diffDays}d ago`;
    };

    return (
        <div className="px-6 pt-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#111813] text-lg font-bold tracking-tight">Previously Visited</h3>
                {drawnCountries.length > 3 && (
                    <button
                        onClick={onSeeAll}
                        className="text-[#2bee6c] text-xs font-bold uppercase tracking-wider hover:underline"
                    >
                        See All ({drawnCountries.length})
                    </button>
                )}
            </div>

            <div className="space-y-3">
                {recentItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex items-center p-3 bg-white rounded-xl border border-[#111813]/5 shadow-sm ${index > 0 ? 'opacity-80' : ''}`}
                    >
                        <div className="size-14 rounded-lg overflow-hidden shrink-0 bg-[#f6f8f6] flex items-center justify-center text-3xl">
                            {/* Country flag as placeholder */}
                            {(() => {
                                const flagEmojis: { [key: string]: string } = {
                                    CN: '🇨🇳', IN: '🇮🇳', US: '🇺🇸', ID: '🇮🇩', PK: '🇵🇰', NG: '🇳🇬', BR: '🇧🇷',
                                    BD: '🇧🇩', RU: '🇷🇺', MX: '🇲🇽', JP: '🇯🇵', ET: '🇪🇹', PH: '🇵🇭', EG: '🇪🇬',
                                    VN: '🇻🇳', CD: '🇨🇩', TR: '🇹🇷', IR: '🇮🇷', DE: '🇩🇪', TH: '🇹🇭', GB: '🇬🇧',
                                    FR: '🇫🇷', IT: '🇮🇹', TZ: '🇹🇿', ZA: '🇿🇦', MM: '🇲🇲', KR: '🇰🇷', CO: '🇨🇴',
                                    KE: '🇰🇪', ES: '🇪🇸', AR: '🇦🇷', DZ: '🇩🇿', SD: '🇸🇩', UA: '🇺🇦', IQ: '🇮🇶',
                                    AF: '🇦🇫', PL: '🇵🇱', CA: '🇨🇦', MA: '🇲🇦', SA: '🇸🇦', UZ: '🇺🇿', PE: '🇵🇪',
                                    AO: '🇦🇴', MY: '🇲🇾', MZ: '🇲🇿', GH: '🇬🇭', YE: '🇾🇪', NP: '🇳🇵', VE: '🇻🇪',
                                    MG: '🇲🇬', CM: '🇨🇲', AU: '🇦🇺', CI: '🇨🇮', TW: '🇹🇼', NE: '🇳🇪', LK: '🇱🇰',
                                    BF: '🇧🇫', ML: '🇲🇱', RO: '🇷🇴', MW: '🇲🇼', CL: '🇨🇱', ZM: '🇿🇲', KZ: '🇰🇿',
                                    EC: '🇪🇨', SY: '🇸🇾', NL: '🇳🇱', SN: '🇸🇳', GT: '🇬🇹', TD: '🇹🇩', SO: '🇸🇴'
                                };
                                return flagEmojis[item.country_code] || '🌍';
                            })()}
                        </div>
                        <div className="ml-4 flex-1 min-w-0">
                            <p className="text-xs font-medium text-[#2bee6c] uppercase tracking-wide">
                                {item.country_name}
                            </p>
                            <h4 className="text-[#111813] font-bold leading-tight truncate">
                                {item.dish_name}
                            </h4>
                            <p className="text-[#111813]/40 text-xs mt-0.5">
                                Visited {formatTimeAgo(item.drawn_at)}
                            </p>
                        </div>
                        <span className="text-[#111813]/20 text-xl ml-2">›</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
