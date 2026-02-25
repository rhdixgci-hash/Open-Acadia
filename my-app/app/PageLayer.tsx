import Link from "next/link";

export default function PageLayer({ children }) {
    return (
        <div className="relative min-h-screen flex flex-col justify-between">

            {/* Top System Bar */}
            <div className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-border text-xs font-mono tracking-widest uppercase text-muted-foreground">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary animate-pulse" />
                    <span>Operational Status: Active</span>
                </div>

                <div className="hidden md:block text-right">
                    Strategic Systems Advisory<br />
                    SaaS | Revenue | Organizational Architecture
                </div>
            </div>


            {/* Main Layout */}
            <div className="flex-1 flex justify-center px-4 md:px-8 py-12">
                <div className="w-full max-w-6xl relative">

                    {/* Vertical Grid Lines (Subtle Structural Framing) */}
                    <div className="absolute left-0 top-0 h-full w-px bg-border hidden lg:block" />
                    <div className="absolute right-0 top-0 h-full w-px bg-border hidden lg:block" />

                    {children}
                </div>
            </div>


            {/* Bottom Structural Frame */}
            <div className="px-6 md:px-12 pb-8">
                <div className="flex justify-between items-end">
                    <div className="w-24 h-px bg-border relative">
                        <div className="absolute left-0 bottom-0 w-px h-3 bg-border" />
                    </div>
                    <div className="w-24 h-px bg-border relative">
                        <div className="absolute right-0 bottom-0 w-px h-3 bg-border" />
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-muted-foreground tracking-wide">
                    © 2026 Strategic Product & Revenue Architecture Advisory
                </div>
            </div>

        </div>
    );
}