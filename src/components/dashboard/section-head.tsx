export function SectionHead({ title, code }: { title: string; code?: string }) {
    return (
        <div className="flex items-baseline gap-4 pt-10 pb-6 w-full">
            <h2 className="font-display text-[13px] font-bold tracking-[0.1em] uppercase whitespace-nowrap">
                {title}
            </h2>
            <div className="flex-1 h-px bg-border-dark"></div>
            {code && (
                <span className="font-mono text-[10px] text-dimmed tracking-[0.06em] whitespace-nowrap">
                    {code}
                </span>
            )}
        </div>
    );
}
