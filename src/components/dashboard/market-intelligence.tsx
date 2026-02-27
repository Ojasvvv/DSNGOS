import { SectionHead } from "./section-head";

interface Props { aiData: any; role: string; }

const DEFAULT_DEMAND = [
    { skill: "Python", demand_pct: 92, level: "Strong", roi: "High", saturation: "Low", skillColor: "border-green text-green" },
    { skill: "TypeScript", demand_pct: 88, level: "Good", roi: "High", saturation: "Low", skillColor: "border-border-light text-text-main" },
    { skill: "Kubernetes", demand_pct: 74, level: "Missing", roi: "Very High", saturation: "Low", skillColor: "border-gold text-gold" },
    { skill: "Rust", demand_pct: 42, level: "Weak", roi: "Very High", saturation: "Low", skillColor: "border-gold text-gold" },
    { skill: "Java", demand_pct: 68, level: "N/A", roi: "Low", saturation: "High", skillColor: "border-border-light text-text-main" },
    { skill: "LLM APIs", demand_pct: 55, level: "Missing", roi: "Emerging", saturation: "Low", skillColor: "border-purple text-purple" },
];

function levelColor(l: string) {
    if (l === "Strong") return "text-green";
    if (l === "Good") return "text-gold";
    return "text-red";
}
function roiColor(r: string) {
    if (r === "Emerging") return "text-purple";
    if (r === "Very High" || r === "High") return "text-gold";
    return "text-muted";
}
function satColor(s: string) {
    return s === "Low" ? "text-green border-green" : s === "High" ? "text-red border-red" : "text-gold border-gold-dim";
}
function barColor(l: string) {
    if (l === "Strong") return "bg-green";
    if (l === "Good") return "bg-gold";
    if (l === "Missing" || l === "Weak") return "bg-red";
    return "bg-dimmed";
}

const defaultScore = 64;
const defaultDesc = `Your current stack matches 64 of 100 skill requirements for SWE roles.\n\n+23 pts possible by acquiring Rust, Kubernetes, and System Design.`;

export function MarketIntelligence({ aiData, role }: Props) {
    const score = aiData?.skill_assessment?.market_match ?? defaultScore;
    const demand: any[] = aiData?.market_demand ?? DEFAULT_DEMAND;
    const strengthSummary = aiData?.strength_summary ?? defaultDesc;

    return (
        <>
            <SectionHead title="Market Intelligence" code="// 120K LISTINGS · REFRESHED WED" />
            <div className="grid grid-cols-3 gap-px bg-border-dark border border-border-dark">
                <div className="bg-bg1 p-6">
                    <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">Market Demand Score</div>
                    <div className="flex items-end gap-3 my-2 mb-5">
                        <div className="font-display text-[80px] font-extrabold leading-none tracking-[-0.04em] text-gold">{score}</div>
                        <div className="font-mono text-[20px] text-dimmed mb-2.5">/100</div>
                    </div>
                    <div className="font-mono text-[10px] text-muted leading-[1.7] whitespace-pre-line">{strengthSummary.slice(0, 200)}</div>
                </div>

                <div className="col-span-2 bg-bg1 p-6">
                    <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">Skill Demand vs. Your Profile</div>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                {["Skill", "Job Demand", "Your Level", "ROI", "Saturation"].map(h => (
                                    <th key={h} className="font-mono text-[9px] text-dimmed tracking-[0.1em] uppercase text-left pb-2.5 border-b border-border-dark font-normal">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {demand.slice(0, 6).map((row: any, i: number) => {
                                const sc = row.skillColor ?? "border-border-light text-text-main";
                                return (
                                    <tr key={i}>
                                        <td className="py-2.5 border-b border-bg2 align-middle">
                                            <span className={`inline-block px-2 py-0.5 font-mono text-[10px] border tracking-[0.04em] ${sc}`}>{row.skill}</span>
                                        </td>
                                        <td className="py-2.5 border-b border-bg2 align-middle">
                                            <div className="h-0.5 bg-bg3 w-20 relative">
                                                <div className={`h-full ${barColor(row.level)}`} style={{ width: `${row.demand_pct}%` }} />
                                            </div>
                                        </td>
                                        <td className={`py-2.5 border-b border-bg2 align-middle font-mono text-[11px] ${levelColor(row.level)}`}>{row.level}</td>
                                        <td className={`py-2.5 border-b border-bg2 align-middle font-mono text-[11px] ${roiColor(row.roi)}`}>{row.roi}</td>
                                        <td className="py-2.5 border-b border-bg2 align-middle">
                                            <span className={`font-mono text-[9px] px-1.5 py-0.5 tracking-[0.06em] uppercase border ${satColor(row.saturation)}`}>{row.saturation}</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
