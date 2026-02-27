interface Props {
    githubData: any;
    leetData: any;
    aiData: any;
}

export function SkillDifficulty({ githubData, leetData, aiData }: Props) {
    const languages = githubData?.topLanguages ?? [
        { name: "Python", count: 92 },
        { name: "TypeScript", count: 78 },
        { name: "Go", count: 61 },
        { name: "Rust", count: 34 },
        { name: "C++", count: 28 },
    ];

    const colors = ["bg-gold", "bg-blue", "bg-green", "bg-purple", "bg-red"];
    const totalCount = languages.reduce((s: number, l: any) => s + l.count, 0) || 1;

    const easy = leetData?.easySolved ?? 201;
    const medium = leetData?.mediumSolved ?? 89;
    const hard = leetData?.hardSolved ?? 22;
    const total = (easy + medium + hard) || 1;

    const weakArea = aiData?.weaknesses?.[0] ?? "Hard problems below market average (12%) for SWE roles";

    return (
        <div className="grid grid-cols-[2fr_1fr] gap-px bg-border-dark border border-border-dark mt-px">
            <div className="bg-bg1 p-6">
                <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">Language Proficiency</div>
                <div className="flex flex-col gap-3.5 mt-1">
                    {languages.slice(0, 5).map((lang: any, i: number) => {
                        const pct = Math.round((lang.count / totalCount) * 100);
                        return (
                            <div key={lang.name} className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-baseline">
                                    <span className="font-mono text-[11px] text-text-main">{lang.name}</span>
                                    <span className="font-mono text-[10px] text-muted">{pct}%</span>
                                </div>
                                <div className="h-0.5 bg-bg3 overflow-hidden">
                                    <div className={`h-full ${colors[i % colors.length]} animate-skill-fill origin-left`} style={{ width: `${pct}%`, animationDelay: `${i * 0.08}s` }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-bg1 p-6">
                <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">LeetCode Difficulty</div>
                <div className="flex justify-around items-center py-4">
                    <Ring value={easy} total={total} label="Easy" color="var(--color-green)" delay="0s" />
                    <Ring value={medium} total={total} label="Medium" color="var(--color-gold)" delay="0.2s" />
                    <Ring value={hard} total={total} label="Hard" color="var(--color-red)" delay="0.4s" />
                </div>
                <div className="font-mono text-[10px] text-dimmed mt-2 border-t border-border-dark pt-3 leading-[1.5]">
                    ⚠ {weakArea.slice(0, 80)}
                </div>
            </div>
        </div>
    );
}

function Ring({ value, total, label, color, delay }: { value: number; total: number; label: string; color: string; delay: string }) {
    const pct = total === 0 ? 0 : value / total;
    const r = 28;
    const circ = 2 * Math.PI * r;
    const offset = circ - pct * circ;
    return (
        <div className="flex flex-col items-center gap-2.5">
            <div className="relative w-[70px] h-[70px]">
                <svg viewBox="0 0 60 60" width="70" height="70" className="-rotate-90">
                    <circle cx="30" cy="30" r={r} fill="none" stroke="var(--color-bg3)" strokeWidth={4} />
                    <circle
                        cx="30" cy="30" r={r} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round"
                        strokeDasharray={circ} strokeDashoffset={offset}
                        className="animate-ring-fill"
                        style={{ "--offset": offset } as React.CSSProperties}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                    <span className="text-[14px] font-semibold leading-none" style={{ color }}>{value}</span>
                    <span className="text-[8px] text-muted mt-px">{Math.round(pct * 100)}%</span>
                </div>
            </div>
            <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted">{label}</span>
        </div>
    );
}
