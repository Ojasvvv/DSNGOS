export function Ticker() {
    const items = [
        { name: "RUST", status: "up" as const, text: "+42% YoY Demand" },
        { name: "REACT", status: "up" as const, text: "89K listings" },
        { name: "KUBERNETES", status: "up" as const, text: "HIGH ROI" },
        { name: "PHP", status: "down" as const, text: "Saturation Risk" },
        { name: "LLM FINE-TUNING", status: "up" as const, text: "+218% YoY" },
        { name: "GRAPHQL", status: "up" as const, text: "Rising Demand" },
        { name: "JAVA", status: "down" as const, text: "Market Peaked" },
        { name: "TYPESCRIPT", status: "up" as const, text: "61K listings" },
        { name: "PYTHON", status: "up" as const, text: "#1 Market Demand" },
        { name: "WASM", status: "up" as const, text: "Emerging Skill" },
    ];

    return (
        <div className="fixed top-[52px] left-0 right-0 z-[99] h-[28px] bg-bg1 border-b border-border-dark overflow-hidden flex items-center">
            <div
                className="flex gap-10 whitespace-nowrap pl-full"
                style={{ animation: "ticker 30s linear infinite" }}
            >
                {items.map((item, i) => (
                    <TickerItem key={i} {...item} />
                ))}
                {/* Duplicate for infinite seamless loop */}
                {items.map((item, i) => (
                    <TickerItem key={`dup-${i}`} {...item} />
                ))}
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}} />
        </div>
    );
}

function TickerItem({ name, status, text }: { name: string; status: "up" | "down"; text: string }) {
    return (
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted tracking-[0.05em]">
            {name} <span className={status === "up" ? "text-green" : "text-red"}>{status === "up" ? "↑" : "↓"} {text}</span>
        </div>
    );
}
