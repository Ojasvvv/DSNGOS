export function CommitHeatmap() {
    const weeks = 52;
    const days = 7;
    // Deterministic "random" heatmap to match mockup's static structure roughly
    const weights = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];

    // Create a seeded set of cells for visual consistency
    function getLevel(w: number, d: number) {
        const seed = (w * 13 + d * 7) % 100;
        if (seed < 40) return 0;
        if (seed < 60) return 1;
        if (seed < 80) return 2;
        if (seed < 95) return 3;
        return 4;
    }

    const levelsToColors: Record<number, string> = {
        0: "bg-bg3",
        1: "bg-[rgba(245,166,35,0.2)]",
        2: "bg-[rgba(245,166,35,0.4)]",
        3: "bg-[rgba(245,166,35,0.65)]",
        4: "bg-gold",
    };

    return (
        <div className="bg-bg1 border border-border-dark mt-[1px] p-6 animate-fade-in">
            <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-4">
                Commit Activity — Last 52 Weeks
            </div>
            <div className="grid grid-cols-[repeat(52,1fr)] gap-0.5 mt-4">
                {Array.from({ length: weeks }).map((_, w) => (
                    <div key={w} className="flex flex-col gap-0.5">
                        {Array.from({ length: days }).map((_, d) => {
                            const lvl = getLevel(w, d);
                            return (
                                <div
                                    key={d}
                                    className={`w-full aspect-square ${levelsToColors[lvl]}`}
                                    title={`Activity Level ${lvl}`}
                                ></div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="flex gap-2 mt-3 items-center">
                <span className="font-mono text-[9px] text-dimmed">LESS</span>
                <div className="w-2.5 h-2.5 bg-bg3"></div>
                <div className="w-2.5 h-2.5 bg-[rgba(245,166,35,0.2)]"></div>
                <div className="w-2.5 h-2.5 bg-[rgba(245,166,35,0.4)]"></div>
                <div className="w-2.5 h-2.5 bg-[rgba(245,166,35,0.65)]"></div>
                <div className="w-2.5 h-2.5 bg-gold"></div>
                <span className="font-mono text-[9px] text-dimmed">MORE</span>
                <span className="ml-auto font-mono text-[9px] text-muted">
                    1,240 contributions · 18 week streak
                </span>
            </div>
        </div>
    );
}
