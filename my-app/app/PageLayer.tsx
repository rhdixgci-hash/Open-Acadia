import { ReactNode } from "react";

export default function PageLayer({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex flex-col min-h-screen w-full sticky top-0">

            {/* --- Top System Bar --- */}
            <header
                className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-[var(--color-border)] text-xs font-mono tracking-widest uppercase text-[var(--color-muted)] bg-[var(--color-secondary)]/50 backdrop-blur-sm"
                role="banner"
                aria-label="System status bar"
            >
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--color-primary)] animate-pulse rounded-full" />
                    <span>Operational Status: Active</span>
                </div>

                <div className="hidden md:block text-right text-[var(--color-muted-foreground)]">
                    Strategic Systems Advisory<br />
                    SaaS | Revenue | Organizational Architecture
                </div>
            </header>

            {/* --- Main Scroll Chamber --- */}
            <div className="flex-1 flex justify-center px-4 md:px-8 py-12 overflow-y-auto">
                <div className="relative w-full max-w-6xl">

                    {/* Vertical Structural Lines (Subtle Grid / Calm Sphere) */}
                    <div className="absolute left-0 top-0 h-full w-px bg-[var(--color-border)] hidden lg:block" />
                    <div className="absolute right-0 top-0 h-full w-px bg-[var(--color-border)] hidden lg:block" />

                    {/* Content Chamber */}
                    <div
                        className="scroll-chamber fade-in space-y-16"
                        role="main"
                        aria-label="Primary content area"
                    >
                        {children}
                    </div>
                </div>
            </div>

            {/* --- Bottom Structural Footer --- */}
            <footer className="px-6 md:px-12 pb-8 pt-6 border-t border-[var(--color-border)]">
                <div className="flex justify-between items-end">
                    <div className="w-24 h-px bg-[var(--color-border)] relative">
                        <div className="absolute left-0 bottom-0 w-px h-3 bg-[var(--color-border)]" />
                    </div>
                    <div className="w-24 h-px bg-[var(--color-border)] relative">
                        <div className="absolute right-0 bottom-0 w-px h-3 bg-[var(--color-border)]" />
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-[var(--color-muted)] tracking-wide">
                    © 2026 Strategic Product & Revenue Architecture Advisory
                </div>
            </footer>
        </div>
    );
}