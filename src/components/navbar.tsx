import Link from "next/link";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] h-[52px] bg-bg/96 border-b border-border-dark flex items-center px-8 gap-8 backdrop-blur-md">
            <div className="font-display text-[15px] font-extrabold tracking-[-0.02em] flex items-center gap-2">
                <span className="w-2 h-2 bg-gold inline-block"></span>
                SKILLPROOF
            </div>
            <div className="font-mono text-[10px] text-dimmed ml-1 hidden sm:block">
                / INTELLIGENCE PLATFORM
            </div>
            <div className="flex gap-6 ml-auto items-center">
                <Link
                    href="#"
                    className="font-mono text-[11px] text-muted tracking-[0.08em] uppercase transition-colors hover:text-text-main"
                >
                    API
                </Link>
                <Link
                    href="#"
                    className="font-mono text-[11px] text-muted tracking-[0.08em] uppercase transition-colors hover:text-text-main"
                >
                    Docs
                </Link>
                <Link
                    href="#"
                    className="font-mono text-[11px] text-muted tracking-[0.08em] uppercase transition-colors hover:text-text-main"
                >
                    Changelog
                </Link>
                <div className="font-mono text-[9px] text-gold border border-gold-dim px-2 py-0.5 tracking-[0.1em] uppercase">
                    BETA · v0.9
                </div>
            </div>
        </nav>
    );
}
