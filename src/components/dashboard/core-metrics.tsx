import { SectionHead } from "./section-head";

interface Props {
    githubData: any;
    leetData: any;
    aiData: any;
    role: string;
}

export function CoreMetrics({ githubData, leetData, aiData, role }: Props) {
    const skillScore = aiData?.skill_assessment?.strength_score ?? 78;
    const marketMatch = aiData?.skill_assessment?.market_match ?? 64;
    const saturation = aiData?.skill_assessment?.saturation_risk ?? "MED";
    const totalSolved = leetData?.totalSolved ?? leetData?.data?.totalSolved ?? 312;
    const easySolved = leetData?.easySolved ?? 201;
    const medSolved = leetData?.mediumSolved ?? 89;
    const hardSolved = leetData?.hardSolved ?? 22;

    const satColor = saturation === "LOW" ? "text-green" : saturation === "HIGH" ? "text-red" : "text-red";
    const satFilled = saturation === "LOW" ? 3 : saturation === "HIGH" ? 8 : 5;
    const satBlockColor = saturation === "LOW" ? "green" : "red";

    return (
        <div className="w-full">
            <SectionHead title="Core Metrics" code={`// PROFILE · ${githubData ? 'live data' : 'sample'}`} />
            <div className="grid grid-cols-4 gap-px bg-border-dark border border-border-dark">
                <MetricCell label="Skill Strength Index" value={String(skillScore)} valueColor="text-gold" filled={Math.round(skillScore / 10)} total={10} blockColor="gold" subEl={<><span className="text-green">↑ live</span> score</>} delay="0ms" />
                <MetricCell label="Market Match %" value={`${marketMatch}%`} valueColor="text-green" filled={Math.round(marketMatch / 16.7)} total={6} blockColor="green" subEl={<>For <span className="text-text-main">{role}</span> roles</>} delay="100ms" />
                <MetricCell label="Problems Solved" value={String(totalSolved)} valueColor="text-text-main" filled={4} total={10} blockColor="gold" subEl={`Easy ${easySolved} · Med ${medSolved} · Hard ${hardSolved}`} delay="200ms" />
                <MetricCell label="Saturation Risk" value={saturation} valueColor={satColor} filled={satFilled} total={10} blockColor={satBlockColor as any} subEl={<><span className={satColor}>3 skills</span> at risk</>} delay="300ms" />
            </div>
        </div>
    );
}

function MetricCell({ label, value, valueColor, filled, total, blockColor, subEl, delay }: {
    label: string; value: string; valueColor: string;
    filled: number; total: number; blockColor: "gold" | "green" | "red";
    subEl: React.ReactNode; delay: string;
}) {
    const blocks = Array.from({ length: total });
    const colorMap = { gold: "bg-gold", green: "bg-green", red: "bg-red" };
    return (
        <div className="bg-bg1 p-6 flex flex-col" style={{ animation: `fadeUp 0.5s ease ${delay} forwards`, opacity: 0, transform: "translateY(8px)" }}>
            <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-3">{label}</div>
            <div className={`font-mono text-4xl font-semibold tracking-[-0.02em] leading-none ${valueColor}`}>{value}</div>
            <div className="flex gap-[3px] mt-2">
                {blocks.map((_, i) => (
                    <div key={i} className={`flex-1 h-1 ${i < filled ? colorMap[blockColor] : "bg-bg3"}`} />
                ))}
            </div>
            <div className="font-mono text-[10px] text-muted mt-1.5">{subEl}</div>
        </div>
    );
}
