"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Ticker } from "@/components/ticker";
import { CoreMetrics } from "@/components/dashboard/core-metrics";
import { SkillDifficulty } from "@/components/dashboard/skill-difficulty";
import { CommitHeatmap } from "@/components/dashboard/commit-heatmap";
import { DsaTopics } from "@/components/dashboard/dsa-topics";
import { MarketIntelligence } from "@/components/dashboard/market-intelligence";
import { AiRoadmap } from "@/components/dashboard/ai-roadmap";
import { MicroProjects } from "@/components/dashboard/micro-projects";
import { StatsCharts } from "@/components/dashboard/stats-charts";
import { fetchGithubStats, fetchLeetCodeStats } from "@/lib/api";

type Role = "SWE" | "ML ENG" | "DATA" | "DEVOPS";
type AnalysisState = "idle" | "loading" | "done" | "error";

export default function Home() {
  const [githubUsername, setGithubUsername] = useState("");
  const [githubPat, setGithubPat] = useState("");
  const [leetcodeUsername, setLeetcodeUsername] = useState("");
  const [role, setRole] = useState<Role>("SWE");
  const [state, setState] = useState<AnalysisState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [aiData, setAiData] = useState<any>(null);
  const [githubData, setGithubData] = useState<any>(null);
  const [leetData, setLeetData] = useState<any>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  async function runAnalysis() {
    if (!githubUsername || !leetcodeUsername) {
      setErrorMsg("GitHub and LeetCode usernames are required.");
      return;
    }
    setErrorMsg("");
    setState("loading");

    try {
      const [gh, lc] = await Promise.all([
        fetchGithubStats(githubUsername, githubPat || undefined),
        fetchLeetCodeStats(leetcodeUsername),
      ]);
      setGithubData(gh);
      setLeetData(lc);

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ github: gh, leetcode: lc, role }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);

      setAiData(json);
      setState("done");

      setTimeout(() => {
        dashboardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } catch (err: any) {
      setErrorMsg(err.message || "Analysis failed.");
      setState("error");
    }
  }

  const btnLabel =
    state === "loading" ? "ANALYZING..." : state === "done" ? "✓ ANALYSIS COMPLETE →" : "RUN ANALYSIS →";
  const btnClass =
    state === "done"
      ? "bg-green text-black"
      : state === "loading"
        ? "bg-bg2 text-muted cursor-not-allowed"
        : "bg-gold text-black hover:-translate-y-px hover:bg-white";

  return (
    <>
      <Navbar />
      <Ticker />

      <main className="mt-[80px] min-h-screen">
        {/* HERO + INPUT */}
        <section className="pt-20 px-16 pb-16 max-w-[1400px] mx-auto grid grid-cols-2 gap-20 items-center">
          <div style={{ animation: "fadeUp 0.5s ease forwards", opacity: 0, transform: "translateY(8px)" }}>
            <h1 className="font-display text-[clamp(40px,5vw,72px)] font-extrabold tracking-[-0.04em] leading-none mb-5">
              Your code<br />doesn&apos;t <em className="not-italic text-gold">lie.</em>
            </h1>
            <p className="font-mono text-[12px] text-muted tracking-[0.06em] leading-[1.8] max-w-[380px] mb-8">
              // PROOF-BASED SKILL ANALYSIS<br />
              Connect GitHub + LeetCode. We extract<br />
              real signal from your actual work — not<br />
              what you claim to know.<br />
              <br />
              // MARKET INTELLIGENCE LAYER<br />
              Mapped against 120K+ live job listings<br />
              updated weekly. Know your exact ROI gap.
            </p>
            <div className="flex gap-6">
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-2xl font-semibold">120K+</span>
                <span className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase">Job Listings</span>
              </div>
              <div className="w-px bg-border-dark self-stretch" />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-2xl font-semibold">340</span>
                <span className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase">Skills Tracked</span>
              </div>
              <div className="w-px bg-border-dark self-stretch" />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-2xl font-semibold">Weekly</span>
                <span className="font-mono text-[9px] text-dimmed tracking-[0.12em] uppercase">Market Refresh</span>
              </div>
            </div>
          </div>

          {/* INPUT PANEL */}
          <div
            className="bg-bg1 border border-border-dark"
            style={{ animation: "fadeUp 0.5s ease 0.2s forwards", opacity: 0, transform: "translateY(8px)" }}
          >
            <div className="p-4 px-6 border-b border-border-dark flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase">// ANALYSIS TERMINAL</span>
              <div className={`flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] ${state === "loading" ? "text-gold" : state === "done" ? "text-green" : "text-green"}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${state === "loading" ? "bg-gold animate-pulse" : "bg-green animate-pulse"}`} />
                {state === "loading" ? "ANALYZING..." : "ENGINE READY"}
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4">
              {/* GitHub PAT */}
              <div className="flex flex-col gap-1.5">
                <div className="font-mono text-[10px] text-dimmed tracking-[0.1em] uppercase flex items-center gap-2">
                  GitHub PAT (Token)
                  <span className="text-[8px] bg-bg3 border border-border-dark px-1.5 py-px text-muted tracking-[0.08em]">SECURE</span>
                </div>
                <div className="flex items-stretch border border-border-dark bg-bg focus-within:border-gold-dim transition-colors">
                  <span className="px-3 py-2.5 bg-bg2 border-r border-border-dark font-mono text-[11px] text-muted flex items-center whitespace-nowrap">ghp_</span>
                  <input
                    type="password"
                    className="flex-1 bg-transparent border-none outline-none px-3.5 py-2.5 font-mono text-[13px] text-text-main placeholder:text-dimmed caret-gold"
                    placeholder="••••••••••••••••••"
                    value={githubPat}
                    onChange={e => setGithubPat(e.target.value)}
                  />
                </div>
              </div>

              {/* GitHub Username */}
              <div className="flex flex-col gap-1.5">
                <div className="font-mono text-[10px] text-dimmed tracking-[0.1em] uppercase flex items-center gap-2">
                  GitHub Username
                  <span className="text-[8px] bg-bg3 border border-border-dark px-1.5 py-px text-muted tracking-[0.08em]">REQUIRED</span>
                </div>
                <div className="flex items-stretch border border-border-dark bg-bg focus-within:border-gold-dim transition-colors">
                  <span className="px-3 py-2.5 bg-bg2 border-r border-border-dark font-mono text-[11px] text-muted flex items-center whitespace-nowrap">github.com /</span>
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none px-3.5 py-2.5 font-mono text-[13px] text-text-main placeholder:text-dimmed caret-gold"
                    placeholder="torvalds"
                    value={githubUsername}
                    onChange={e => setGithubUsername(e.target.value)}
                  />
                </div>
              </div>

              {/* LeetCode Username */}
              <div className="flex flex-col gap-1.5">
                <div className="font-mono text-[10px] text-dimmed tracking-[0.1em] uppercase flex items-center gap-2">
                  LeetCode Username
                  <span className="text-[8px] bg-bg3 border border-border-dark px-1.5 py-px text-muted tracking-[0.08em]">REQUIRED</span>
                </div>
                <div className="flex items-stretch border border-border-dark bg-bg focus-within:border-gold-dim transition-colors">
                  <span className="px-3 py-2.5 bg-bg2 border-r border-border-dark font-mono text-[11px] text-muted flex items-center whitespace-nowrap">leetcode.com /u/</span>
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none px-3.5 py-2.5 font-mono text-[13px] text-text-main placeholder:text-dimmed caret-gold"
                    placeholder="neal_wu"
                    value={leetcodeUsername}
                    onChange={e => setLeetcodeUsername(e.target.value)}
                  />
                </div>
              </div>

              {/* Role */}
              <div className="flex flex-col gap-1.5">
                <div className="font-mono text-[10px] text-dimmed tracking-[0.1em] uppercase flex items-center gap-2">
                  Target Role
                  <span className="text-[8px] bg-bg3 border border-border-dark px-1.5 py-px text-muted tracking-[0.08em]">OPTIONAL</span>
                </div>
                <div className="flex gap-2">
                  {(["SWE", "ML ENG", "DATA", "DEVOPS"] as Role[]).map(r => (
                    <button
                      key={r}
                      onClick={() => setRole(r)}
                      className={`flex-1 py-2 px-3 font-mono text-[10px] tracking-[0.06em] text-center transition-all border ${role === r
                        ? "border-gold text-gold bg-[rgba(245,166,35,0.08)]"
                        : "border-border-dark text-muted bg-bg hover:border-gold-dim hover:text-gold hover:bg-[rgba(245,166,35,0.04)]"
                        }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {errorMsg && (
                <div className="font-mono text-[10px] text-red border border-red px-3 py-2 bg-[rgba(239,68,68,0.05)]">
                  ⚠ {errorMsg}
                </div>
              )}

              <button
                onClick={runAnalysis}
                disabled={state === "loading"}
                className={`w-full py-3.5 font-mono text-[12px] font-semibold tracking-[0.12em] uppercase transition-all flex items-center justify-center gap-2.5 mt-2 group ${btnClass}`}
              >
                {btnLabel}
              </button>
            </div>
          </div>
        </section>

        <hr className="border-t border-border-dark m-0" />

        {/* Dashboard sections — shown after analysis is done */}
        {state === "done" && (
          <div ref={dashboardRef} id="dashboard" className="max-w-[1400px] mx-auto px-16 pb-20">
            <CoreMetrics githubData={githubData} leetData={leetData} aiData={aiData} role={role} />
            <SkillDifficulty githubData={githubData} leetData={leetData} aiData={aiData} />
            <StatsCharts githubData={githubData} leetData={leetData} />
            <CommitHeatmap />
            <DsaTopics aiData={aiData} />
            <MarketIntelligence aiData={aiData} role={role} />
            <AiRoadmap aiData={aiData} role={role} />
            <MicroProjects aiData={aiData} />
          </div>
        )}

        {/* If idle, show static demo below */}
        {state === "idle" && (
          <div className="max-w-[1400px] mx-auto px-16 pb-20">
            <div className="flex items-baseline gap-4 pt-10 pb-6">
              <h2 className="font-display text-[13px] font-bold tracking-[0.1em] uppercase">DEMO PREVIEW</h2>
              <div className="flex-1 h-px bg-border-dark"></div>
              <span className="font-mono text-[10px] text-dimmed">// SAMPLE DATA · torvalds</span>
            </div>
            <CoreMetrics githubData={null} leetData={null} aiData={null} role="SWE" />
            <SkillDifficulty githubData={null} leetData={null} aiData={null} />
            <CommitHeatmap />
            <DsaTopics aiData={null} />
            <MarketIntelligence aiData={null} role="SWE" />
            <AiRoadmap aiData={null} role="SWE" />
            <MicroProjects aiData={null} />
          </div>
        )}
      </main>

      {/* Footer */}
      <div className="bg-bg1 border-t border-border-dark py-4 px-16 flex items-center justify-between">
        <div className="font-mono text-[10px] text-dimmed tracking-[0.08em]">
          SKILLPROOF v0.9-beta · Data sourced from GitHub API, LeetCode GraphQL, LinkedIn Jobs
        </div>
        <div className="flex gap-6">
          {["Privacy", "API Docs", "GitHub", "Feedback"].map(l => (
            <a key={l} href="#" className="font-mono text-[10px] text-dimmed tracking-[0.06em] hover:text-gold transition-colors">{l}</a>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes skillFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes ringFill { to { stroke-dashoffset: var(--offset); } }
        .animate-skill-fill {
          animation: skillFill 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
          transform-origin: left;
        }
        .animate-ring-fill {
          animation: ringFill 1.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      ` }} />
    </>
  );
}
