import { SectionHead } from "./section-head";

export function AiRoadmap() {
    return (
        <>
            <SectionHead title="3-Month Roadmap" code="// AI GENERATED · PERSONALIZED" />
            <div className="grid grid-cols-[2fr_1fr] gap-[1px] bg-border-dark border border-border-dark mt-0">
                <div className="bg-bg1 p-6 animate-fade-in">
                    <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">Priority Improvement Plan</div>
                    <div className="relative pl-8 mt-2">
                        <div className="absolute left-2 top-2 bottom-2 w-px bg-border-dark"></div>

                        <div className="relative mb-7">
                            <div className="absolute -left-7 top-1 w-2 h-2 border border-gold bg-bg1 flex items-center justify-center">
                                <div className="w-[3px] h-[3px] bg-gold"></div>
                            </div>
                            <div className="font-mono text-[9px] text-gold tracking-[0.1em] uppercase mb-1.5">Month 01 · Weeks 1–4</div>
                            <div className="font-display text-[14px] font-bold mb-1.5">DSA Foundation Repair</div>
                            <div className="font-sans text-[12px] text-muted leading-[1.6] mb-2.5">
                                Your Hard problem rate (7%) is significantly below the SWE market threshold (12–18%). Focus exclusively on Dynamic Programming and Graph traversal patterns. Target 3 medium + 1 hard problem per day.
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">Dynamic Programming</span>
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">Graph BFS/DFS</span>
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">Topological Sort</span>
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">LeetCode Grind</span>
                            </div>
                        </div>

                        <div className="relative mb-7">
                            <div className="absolute -left-7 top-1 w-2 h-2 border border-gold bg-bg1 flex items-center justify-center">
                                <div className="w-[3px] h-[3px] bg-gold"></div>
                            </div>
                            <div className="font-mono text-[9px] text-gold tracking-[0.1em] uppercase mb-1.5">Month 02 · Weeks 5–8</div>
                            <div className="font-display text-[14px] font-bold mb-1.5">Cloud & Infrastructure Stack</div>
                            <div className="font-sans text-[12px] text-muted leading-[1.6] mb-2.5">
                                Kubernetes appears in 74% of senior SWE listings but is absent from your GitHub. Build a containerized personal project and deploy it. This single skill adds an estimated +14 pts to your market score.
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">Docker</span>
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">Kubernetes</span>
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">CI/CD Pipeline</span>
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">AWS/GCP Basics</span>
                            </div>
                        </div>

                        <div className="relative mb-7">
                            <div className="absolute -left-7 top-1 w-2 h-2 border border-gold bg-bg1 flex items-center justify-center">
                                <div className="w-[3px] h-[3px] bg-gold"></div>
                            </div>
                            <div className="font-mono text-[9px] text-gold tracking-[0.1em] uppercase mb-1.5">Month 03 · Weeks 9–12</div>
                            <div className="font-display text-[14px] font-bold mb-1.5">Differentiation Layer</div>
                            <div className="font-sans text-[12px] text-muted leading-[1.6] mb-2.5">
                                Low saturation, high-ROI skills. Rust and LLM API integration appear in fast-growing job categories. A single portfolio project combining both positions you in the top 8% of SWE candidates.
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">Rust Basics</span>
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">LLM API Integration</span>
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">System Design</span>
                                <span className="font-mono text-[9px] px-2 py-[3px] tracking-[0.08em] border border-border-dark text-muted">Portfolio Project</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-bg1 p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                    <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">Skill Priority Index</div>
                    <div className="flex flex-col gap-3.5 mt-2">
                        <SkillBar name="Dynamic Programming" pct={95} color="bg-red" status="CRITICAL" statusColor="text-red" />
                        <SkillBar name="Kubernetes" pct={88} color="bg-red" status="CRITICAL" statusColor="text-red" />
                        <SkillBar name="System Design" pct={74} color="bg-gold" status="HIGH" statusColor="text-gold" />
                        <SkillBar name="Rust" pct={62} color="bg-gold" status="HIGH" statusColor="text-gold" />
                        <SkillBar name="LLM APIs" pct={50} color="bg-purple" status="EMERGING" statusColor="text-purple" />
                        <SkillBar name="Graph Algorithms" pct={38} color="bg-blue" status="MED" statusColor="text-gold" />
                    </div>

                    <div className="mt-6 pt-4 border-t border-border-dark">
                        <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">Projected Score @ 90 days</div>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="font-mono text-[32px] font-semibold text-green">89</span>
                            <span className="font-mono text-[12px] text-muted">/ 100 · <span className="text-green">+11 pts</span></span>
                        </div>
                        <div className="font-mono text-[9px] text-dimmed mt-1 tracking-[0.06em] leading-[1.6]">
                            TOP 15% PERCENTILE FOR SWE ROLES<br />IF ROADMAP IS FOLLOWED
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function SkillBar({ name, pct, color, status, statusColor }: { name: string; pct: number; color: string; status: string, statusColor: string }) {
    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-baseline">
                <span className="font-mono text-[11px] text-text-main tracking-[0.03em]">{name}</span>
                <span className={`font-mono text-[10px] ${statusColor}`}>{status}</span>
            </div>
            <div className="h-0.5 bg-bg3 relative overflow-hidden">
                <div
                    className={`h-full ${color} origin-left animate-skill-fill`}
                    style={{ width: `${pct}%` }}
                ></div>
            </div>
        </div>
    );
}
