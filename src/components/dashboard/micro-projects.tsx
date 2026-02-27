import { SectionHead } from "./section-head";

export function MicroProjects() {
    return (
        <>
            <SectionHead title="Suggested Micro-Projects" code="// PORTFOLIO ACCELERATORS" />
            <div className="grid grid-cols-3 gap-[1px] bg-border-dark border border-border-dark mt-[1px]">
                <ProjectCard
                    num="PROJECT_01 / MONTH 2"
                    title="K8s-Deployed FastAPI Microservice"
                    desc="Build a REST API with FastAPI, containerize it with Docker, deploy to a local Kubernetes cluster with horizontal pod autoscaling. Document the architecture."
                    stack="Python · Docker · K8s"
                    effort="2 WEEKS"
                />
                <ProjectCard
                    num="PROJECT_02 / MONTH 3"
                    title="Rust CLI Tool with Crates.io Publish"
                    desc="Build a real utility CLI in Rust (file processor, JSON formatter, or network tool), publish it to crates.io. Shows initiative in low-saturation tech."
                    stack="Rust · CLI · Crates.io"
                    effort="2 WEEKS"
                />
                <ProjectCard
                    num="PROJECT_03 / MONTH 3"
                    title="LLM-Powered Code Review Bot"
                    desc="GitHub Action that uses an LLM API to auto-review PRs. Combines your Python strength with the emerging LLM skill. High visibility project for job applications."
                    stack="Python · GitHub API · LLM"
                    effort="1.5 WEEKS"
                />
            </div>
        </>
    );
}

function ProjectCard({ num, title, desc, stack, effort }: { num: string; title: string; desc: string; stack: string; effort: string }) {
    return (
        <div className="bg-bg1 p-5 cursor-crosshair transition-colors hover:bg-bg2 group">
            <div className="font-mono text-[9px] text-dimmed tracking-[0.1em] mb-3">{num}</div>
            <div className="font-display text-[15px] font-bold mb-2 leading-[1.2]">{title}</div>
            <div className="font-sans text-[11px] text-muted leading-[1.6] mb-3.5">{desc}</div>
            <div className="flex justify-between items-center mt-auto">
                <div className="flex gap-1 items-center">
                    <span className="font-mono text-[9px] text-muted">{stack}</span>
                </div>
                <div className="font-mono text-[9px] text-dimmed tracking-[0.08em]">{effort}</div>
            </div>
        </div>
    );
}
