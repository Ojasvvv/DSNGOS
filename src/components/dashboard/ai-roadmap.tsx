import { SectionHead } from "./section-head";

interface Props { aiData: any; role: string; }

const DEFAULT_MONTHS = [
    { label: "Month 01 · Weeks 1–4", title: "DSA Foundation Repair", desc: "Your Hard problem rate (7%) is significantly below the SWE market threshold (12–18%). Focus exclusively on Dynamic Programming and Graph traversal patterns. Target 3 medium + 1 hard problem per day.", tags: ["Dynamic Programming", "Graph BFS/DFS", "Topological Sort", "LeetCode Grind"] },
    { label: "Month 02 · Weeks 5–8", title: "Cloud & Infrastructure Stack", desc: "Kubernetes appears in 74% of senior SWE listings but is absent from your GitHub. Build a containerized personal project and deploy it. This single skill adds an estimated +14 pts to your market score.", tags: ["Docker", "Kubernetes", "CI/CD Pipeline", "AWS/GCP Basics"] },
    { label: "Month 03 · Weeks 9–12", title: "Differentiation Layer", desc: "Low saturation, high-ROI skills. Rust and LLM API integration appear in fast-growing job categories. A single portfolio project combining both positions you in the top 8% of SWE candidates.", tags: ["Rust Basics", "LLM API Integration", "System Design", "Portfolio Project"] },
];

const DEFAULT_SKILLS = [
    { name: "Dynamic Programming", status: "CRITICAL", pct: 95, color: "bg-red", statusColor: "text-red" },
    { name: "Kubernetes", status: "CRITICAL", pct: 88, color: "bg-red", statusColor: "text-red" },
    { name: "System Design", status: "HIGH", pct: 74, color: "bg-gold", statusColor: "text-gold" },
    { name: "Rust", status: "HIGH", pct: 62, color: "bg-gold", statusColor: "text-gold" },
    { name: "LLM APIs", status: "EMERGING", pct: 50, color: "bg-purple", statusColor: "text-purple" },
    { name: "Graph Algorithms", status: "MED", pct: 38, color: "bg-blue", statusColor: "text-gold" },
];

function statusStyles(s: string) {
    if (s === "CRITICAL") return { color: "bg-red", text: "text-red" };
    if (s === "HIGH") return { color: "bg-gold", text: "text-gold" };
    if (s === "EMERGING") return { color: "bg-purple", text: "text-purple" };
    return { color: "bg-blue", text: "text-gold" };
}

export function AiRoadmap({ aiData, role }: Props) {
    const roadmap = aiData?.three_month_roadmap;
    const months: any[] = roadmap
        ? [
            ...(roadmap.month1 ?? []).map((m: any, i: number) => ({ ...m, label: `Month 01 · Weeks 1–4` })),
            ...(roadmap.month2 ?? []).map((m: any, i: number) => ({ ...m, label: `Month 02 · Weeks 5–8` })),
            ...(roadmap.month3 ?? []).map((m: any, i: number) => ({ ...m, label: `Month 03 · Weeks 9–12` })),
        ]
        : DEFAULT_MONTHS;

    const skills: any[] = (aiData?.skill_priority_ranking ?? DEFAULT_SKILLS).map((s: any) => ({ ...s, ...statusStyles(s.status) }));
    const projectedScore = (aiData?.skill_assessment?.market_match ?? 64) + 11;

    return (
        <>
            <SectionHead title="3-Month Roadmap" code="// AI GENERATED · PERSONALIZED" />
            <div className="grid grid-cols-[2fr_1fr] gap-px bg-border-dark border border-border-dark mt-0">
                <div className="bg-bg1 p-6">
                    <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">Priority Improvement Plan</div>
                    <div className="relative pl-8 mt-2">
                        <div className="absolute left-2 top-2 bottom-2 w-px bg-border-dark" />
                        {months.slice(0, 3).map((m: any, i: number) => (
                            <div key={i} className="relative mb-7">
                                <div className="absolute -left-7 top-1 w-2 h-2 border border-gold bg-bg1 flex items-center justify-center">
                                    <div className="w-[3px] h-[3px] bg-gold" />
                                </div>
                                <div className="font-mono text-[9px] text-gold tracking-[0.1em] uppercase mb-1.5">{m.label}</div>
                                <div className="font-display text-[14px] font-bold mb-1.5">{m.title}</div>
                                <div className="font-sans text-[12px] text-muted leading-[1.6] mb-2.5">{m.desc}</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {(m.tags ?? []).map((t: string, j: number) => (
                                        <span key={j} className="font-mono text-[9px] px-2 py-[3px] border border-border-dark text-muted">{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-bg1 p-6">
                    <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">Skill Priority Index</div>
                    <div className="flex flex-col gap-3.5 mt-2">
                        {skills.slice(0, 6).map((s: any, i: number) => (
                            <div key={i} className="flex flex-col gap-1.5">
                                <div className="flex justify-between items-baseline">
                                    <span className="font-mono text-[11px] text-text-main">{s.name}</span>
                                    <span className={`font-mono text-[10px] ${s.text}`}>{s.status}</span>
                                </div>
                                <div className="h-0.5 bg-bg3 overflow-hidden">
                                    <div className={`h-full ${s.color} animate-skill-fill origin-left`} style={{ width: `${s.pct}%`, animationDelay: `${i * 0.08}s` }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-border-dark">
                        <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">Projected Score @ 90 Days</div>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="font-mono text-[32px] font-semibold text-green">{projectedScore}</span>
                            <span className="font-mono text-[12px] text-muted">/ 100 · <span className="text-green">+11 pts</span></span>
                        </div>
                        <div className="font-mono text-[9px] text-dimmed mt-1 tracking-[0.06em] leading-[1.6]">
                            TOP 15% PERCENTILE FOR {role} ROLES<br />IF ROADMAP IS FOLLOWED
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
