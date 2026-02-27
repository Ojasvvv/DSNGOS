import { SectionHead } from "./section-head";

interface Props { aiData: any; }

const DEFAULT_PROJECTS = [
    { num: "PROJECT_01 / MONTH 2", title: "K8s-Deployed FastAPI Microservice", desc: "Build a REST API with FastAPI, containerize it with Docker, deploy to a local Kubernetes cluster with horizontal pod autoscaling. Document the architecture.", stack: "Python · Docker · K8s", effort: "2 WEEKS" },
    { num: "PROJECT_02 / MONTH 3", title: "Rust CLI Tool with Crates.io Publish", desc: "Build a real utility CLI in Rust (file processor, JSON formatter, or network tool), publish it to crates.io. Shows initiative in low-saturation tech.", stack: "Rust · CLI · Crates.io", effort: "2 WEEKS" },
    { num: "PROJECT_03 / MONTH 3", title: "LLM-Powered Code Review Bot", desc: "GitHub Action that uses an LLM API to auto-review PRs. Combines your Python strength with the emerging LLM skill. High visibility project for job applications.", stack: "Python · GitHub API · LLM", effort: "1.5 WEEKS" },
];

export function MicroProjects({ aiData }: Props) {
    const projects = aiData?.project_suggestions?.map((p: any, i: number) => ({
        num: `PROJECT_0${i + 1} / AI GENERATED`,
        title: p.title,
        desc: p.desc,
        stack: p.stack,
        effort: p.effort,
    })) ?? DEFAULT_PROJECTS;

    return (
        <>
            <SectionHead title="Suggested Micro-Projects" code="// PORTFOLIO ACCELERATORS" />
            <div className="grid grid-cols-3 gap-px bg-border-dark border border-border-dark mt-px">
                {projects.slice(0, 3).map((p: any, i: number) => (
                    <div key={i} className="bg-bg1 p-5 cursor-crosshair transition-colors hover:bg-bg2">
                        <div className="font-mono text-[9px] text-dimmed tracking-[0.1em] mb-3">{p.num}</div>
                        <div className="font-display text-[15px] font-bold mb-2 leading-[1.2]">{p.title}</div>
                        <div className="font-sans text-[11px] text-muted leading-[1.6] mb-3.5">{p.desc}</div>
                        <div className="flex justify-between items-center">
                            <span className="font-mono text-[9px] text-muted">{p.stack}</span>
                            <span className="font-mono text-[9px] text-dimmed tracking-[0.08em]">{p.effort}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
