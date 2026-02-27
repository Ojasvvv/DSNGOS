import { SectionHead } from "./section-head";

interface Props { aiData: any; }

const DEFAULT_TOPICS = [
    { name: "Arrays", score: 88, textClass: "text-green", fill: "var(--color-green)" },
    { name: "HashMap", score: 82, textClass: "text-green", fill: "var(--color-green)" },
    { name: "Trees", score: 76, textClass: "text-gold", fill: "var(--color-gold)" },
    { name: "2-Pointer", score: 71, textClass: "text-gold", fill: "var(--color-gold)" },
    { name: "BFS/DFS", score: 65, textClass: "text-gold", fill: "var(--color-gold)" },
    { name: "Sliding Win", score: 58, textClass: "text-gold", fill: "var(--color-gold)" },
    { name: "Dyn. Prog.", score: 42, textClass: "text-red", fill: "var(--color-red)" },
    { name: "Graphs", score: 38, textClass: "text-red", fill: "var(--color-red)" },
    { name: "Backtrack", score: 31, textClass: "text-red", fill: "var(--color-red)" },
    { name: "Trie", score: 24, textClass: "text-red", fill: "var(--color-red)" },
    { name: "Heap", score: 20, textClass: "text-red", fill: "var(--color-red)" },
    { name: "Seg. Tree", score: 16, textClass: "text-red", fill: "var(--color-red)" },
];

export function DsaTopics({ aiData }: Props) {
    const raw = aiData?.dsa_topic_analysis;
    const topics = raw?.length
        ? raw.map((t: any) => ({
            name: t.name,
            score: t.score,
            textClass: t.score >= 70 ? "text-green" : t.score >= 50 ? "text-gold" : "text-red",
            fill: t.score >= 70 ? "var(--color-green)" : t.score >= 50 ? "var(--color-gold)" : "var(--color-red)",
        }))
        : DEFAULT_TOPICS;

    return (
        <>
            <SectionHead title="DSA Topic Analysis" code="// LEETCODE SIGNAL" />
            <div className="bg-bg1 border border-border-dark p-6">
                <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-4">Topic Strength Heatmap</div>
                <div className="grid grid-cols-4 gap-1.5">
                    {topics.map((t: any, i: number) => (
                        <div key={i} className="p-2.5 border border-border-dark bg-bg cursor-crosshair transition-all relative overflow-hidden group hover:border-border-light">
                            <div className="absolute left-0 right-0 bottom-0 opacity-10 group-hover:opacity-20 pointer-events-none transition-opacity"
                                style={{ height: `${t.score}%`, backgroundColor: t.fill }} />
                            <div className="font-mono text-[9px] tracking-[0.06em] uppercase text-text-main relative z-10">{t.name}</div>
                            <div className={`font-mono text-base font-semibold relative z-10 mt-1 ${t.textClass}`}>{t.score}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
