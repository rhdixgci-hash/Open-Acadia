import Link from "next/link";
import Logo from "@/app/Logo";

export default function Header() {
    return (
        <header className="relative border-b border-border bg-background/80 backdrop-blur-md">
            <div
                className="relative mx-auto px-6 lg:px-12 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

                {/* Logo + Meta */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                    <Logo size={48}/>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary animate-pulse rounded-full"/>
                            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                                Strategic System Online
                            </span>
                        </div>

                        <nav
                            className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase text-muted-foreground">
                            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
                            <Link href="/cases" className="hover:text-foreground transition-colors">Cases</Link>
                            <Link href="/method" className="hover:text-foreground transition-colors">Method</Link>
                            <Link href="/blogs" className="hover:text-foreground transition-colors">Blogs</Link>
                            <Link href="/seo" className="hover:text-foreground transition-colors">SEO Hub</Link>
                            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                        </nav>
                    </div>
                </div>

                {/* Hero Text – lightened */}

                {/* Hero Text – minimal, airy, structural */}
                <div className="relative max-w-full md:max-w-xl flex flex-col gap-6 md:gap-8">
                    <h1 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug">
                        Structural Product & Revenue Design
                    </h1>

                    <span className="text-muted-foreground text-sm md:text-base">
    Aligning product, revenue, and organization for scaling software companies.
  </span>

                    <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs tracking-widest uppercase">
                        <Link
                            href="/contact"
                            className="border-b border-primary text-primary pb-1 hover:opacity-80 transition"
                        >
                            Request Diagnostic
                        </Link>
                        <Link
                            href="/cases"
                            className="border-b border-border pb-1 hover:border-foreground transition"
                        >
                            View Results
                        </Link>
                    </div>
                </div>

            </div>

            {/* Vertical structural lines – moved out slightly to reduce heaviness */}
            <div className="absolute top-0 left-1/3 w-[1px] h-full bg-border pointer-events-none"/>
            <div className="absolute top-0 right-1/3 w-[1px] h-full bg-border pointer-events-none"/>
        </header>
    );
}