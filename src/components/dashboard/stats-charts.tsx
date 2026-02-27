"use client";

import {
    RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    Cell
} from "recharts";

interface Props {
    githubData: any;
    leetData: any;
}

const COLORS = ["#f5a623", "#22c55e", "#3b82f6", "#a78bfa", "#ef4444"];

export function StatsCharts({ githubData, leetData }: Props) {
    // --- Radar data: domain expertise ---
    const langMap: Record<string, number> = {};
    (githubData?.topLanguages ?? []).forEach((l: any) => { langMap[l.name] = l.count; });

    const easy = leetData?.easySolved ?? 0;
    const medium = leetData?.mediumSolved ?? 0;
    const hard = leetData?.hardSolved ?? 0;
    const totalSolved = easy + medium + hard || 1;

    const radarData = [
        { subject: "Frontend", val: Math.min(100, ((langMap["TypeScript"] || 0) + (langMap["JavaScript"] || 0)) * 8 + 10) },
        { subject: "Backend", val: Math.min(100, ((langMap["Python"] || 0) + (langMap["Java"] || 0) + (langMap["Go"] || 0)) * 8 + 10) },
        { subject: "DSA", val: Math.min(100, totalSolved / 5) },
        { subject: "DevOps", val: Math.min(100, (githubData?.publicRepos ?? 0) * 2 + 10) },
        { subject: "Impact", val: Math.min(100, (githubData?.totalStars ?? 0) * 3 + 5) },
        { subject: "Network", val: Math.min(100, (githubData?.followers ?? 0) * 2 + 5) },
    ];

    // --- Bar chart: LC difficulty breakdown ---
    const diffData = [
        { name: "Easy", val: easy, fill: "#22c55e" },
        { name: "Medium", val: medium, fill: "#f5a623" },
        { name: "Hard", val: hard, fill: "#ef4444" },
    ];

    // --- Language bar chart ---
    const langData = (githubData?.topLanguages ?? []).slice(0, 5).map((l: any, i: number) => ({
        name: l.name,
        val: l.count,
        fill: COLORS[i % COLORS.length],
    }));

    const customTooltipStyle = {
        backgroundColor: "#161616",
        border: "1px solid #2a2a2a",
        fontFamily: "IBM Plex Mono, monospace",
        fontSize: "10px",
        color: "#e8e8e8",
    };

    return (
        <div className="mt-px border border-border-dark bg-bg1">
            {/* Section header */}
            <div className="p-4 px-6 border-b border-border-dark">
                <span className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase">
          // SKILL TELEMETRY — COMPOSITE CHARTS
                </span>
            </div>

            <div className="grid grid-cols-3 gap-px bg-border-dark">

                {/* Radar Chart */}
                <div className="bg-bg1 p-6 flex flex-col" style={{ minHeight: 320 }}>
                    <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-4">
                        Domain Expertise Radar
                    </div>
                    <div className="flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                <PolarGrid stroke="#2a2a2a" />
                                <PolarAngleAxis
                                    dataKey="subject"
                                    tick={{ fill: "#666", fontSize: 9, fontFamily: "IBM Plex Mono, monospace" }}
                                />
                                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar name="You" dataKey="val" stroke="#f5a623" fill="#f5a623" fillOpacity={0.25} strokeWidth={1.5} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* LC Difficulty Bar */}
                <div className="bg-bg1 p-6 flex flex-col" style={{ minHeight: 320 }}>
                    <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-4">
                        LeetCode Difficulty Split
                    </div>
                    <div className="flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={diffData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a2a2a" />
                                <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#666", fontSize: 9, fontFamily: "IBM Plex Mono, monospace" }} />
                                <YAxis tickLine={false} axisLine={false} tick={{ fill: "#444", fontSize: 9, fontFamily: "IBM Plex Mono, monospace" }} />
                                <Tooltip contentStyle={customTooltipStyle} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                                <Bar dataKey="val" radius={[2, 2, 0, 0]} barSize={40}>
                                    {diffData.map((entry, i) => (
                                        <Cell key={i} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Languages Bar */}
                <div className="bg-bg1 p-6 flex flex-col" style={{ minHeight: 320 }}>
                    <div className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase mb-4">
                        Top Languages (Repos)
                    </div>
                    {langData.length === 0 ? (
                        <div className="flex-1 flex items-center justify-center font-mono text-[10px] text-dimmed">
                            — No GitHub data yet —
                        </div>
                    ) : (
                        <div className="flex-1">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={langData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#2a2a2a" />
                                    <XAxis type="number" tickLine={false} axisLine={false} tick={{ fill: "#444", fontSize: 9, fontFamily: "IBM Plex Mono, monospace" }} />
                                    <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} width={72} tick={{ fill: "#e8e8e8", fontSize: 9, fontFamily: "IBM Plex Mono, monospace" }} />
                                    <Tooltip contentStyle={customTooltipStyle} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                                    <Bar dataKey="val" radius={[0, 2, 2, 0]} barSize={14}>
                                        {langData.map((entry: any, i: number) => (
                                            <Cell key={i} fill={entry.fill} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
