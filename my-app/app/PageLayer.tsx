import "./globals.css";
import PageLayer from "@/app/PageLayer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>FAVEN – Structural Product & Revenue Hub</title>
            <meta name="description" content="FAVEN – A calm, structured, digital servicescape for scaling software companies. Align products, revenue, and organizational architecture." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
        </head>
        <body className="bg-[var(--color-background)] text-[var(--color-foreground)] antialiased font-sans">
        <div className="flex min-h-screen">

            {/* --- Fixed System Rail / Sidebar --- */}
            <aside
                className="fixed left-0 top-0 h-screen w-28 border-r border-[var(--color-border)] bg-[var(--color-secondary)] flex flex-col justify-between py-10 px-2"
                role="navigation"
                aria-label="Section navigation"
            >
                {/* Logo / Branding */}
                <div className="flex flex-col items-center gap-12">
                    <div className="text-xl font-bold tracking-tight text-[var(--color-primary)]">
                        FAVEN
                    </div>

                    {/* Section Navigation */}
                    <nav className="flex flex-col gap-6 text-[11px] font-mono tracking-widest uppercase text-[var(--color-muted)]">
                        <a href="#structure" className="hover:text-[var(--color-foreground)] transition">01</a>
                        <a href="#revenue" className="hover:text-[var(--color-foreground)] transition">02</a>
                        <a href="#organization" className="hover:text-[var(--color-foreground)] transition">03</a>
                        <a href="#systems" className="hover:text-[var(--color-foreground)] transition">04</a>
                        <a href="#evidence" className="hover:text-[var(--color-foreground)] transition">05</a>
                        <a href="#access" className="hover:text-[var(--color-foreground)] transition">06</a>
                    </nav>
                </div>

                {/* Footer / Branding */}
                <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted)] text-center">
                    Strategic System
                </div>
            </aside>

            {/* --- Main Content Chamber --- */}
            <main className="ml-28 flex-1 flex justify-center">
                <PageLayer>
                    <div
                        className="scroll-chamber fade-in w-full max-w-6xl p-6 md:p-8"
                        role="main"
                        aria-label="Primary content"
                    >
                        {children}
                    </div>
                </PageLayer>
            </main>

        </div>
        </body>
        </html>
    );
}