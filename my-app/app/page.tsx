import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex min-h-screen bg-neutral-50 text-neutral-900 antialiased">
            {/* Fixed Sidebar / System Rail */}
            <aside className="fixed left-0 top-0 h-screen w-24 border-r border-neutral-200 flex flex-col justify-between py-10 bg-white/80 backdrop-blur-md">
                {/* Top */}
                <div className="flex flex-col items-center gap-12">
                    <div className="text-lg font-semibold tracking-tight">FAVEN</div>
                    <nav className="flex flex-col gap-6 text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                        <a href="#structure">01</a>
                        <a href="#revenue">02</a>
                        <a href="#organization">03</a>
                        <a href="#systems">04</a>
                        <a href="#evidence">05</a>
                        <a href="#access">06</a>
                    </nav>
                </div>
                {/* Bottom */}
                <div className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 text-center">
                    Strategic System
                </div>
            </aside>

            {/* Content Chamber */}
            <main className="ml-24 flex-1 flex justify-center w-full">
                <div className="w-full max-w-6xl relative">
                    {/* Floating vertical lines for structure */}
                    <div className="absolute left-1/4 top-0 h-full w-px bg-border hidden lg:block" />
                    <div className="absolute right-1/3 top-0 h-full w-px bg-border hidden lg:block" />

                    {/* Sections / Vertical Scroll */}
                    <section
                        id="structure"
                        className="min-h-screen flex flex-col justify-center items-start relative px-6 md:px-12 py-24 scroll-section"
                    >
                        <div className="absolute left-0 top-1/3 w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
                            Structural Product & Revenue Design
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
                            Aligning product, revenue, and organizational flows for scaling software
                            companies in competitive markets. Designed for founders, PMs, and growth
                            teams.
                        </p>
                        <div className="flex flex-wrap gap-4 font-mono text-xs tracking-widest uppercase">
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
                    </section>

                    <section
                        id="revenue"
                        className="min-h-screen flex flex-col justify-center items-start relative px-6 md:px-12 py-24 scroll-section"
                    >
                        <div className="absolute right-0 top-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                            Our Services
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-lg md:text-xl">
                            <li>Product Architecture & Alignment</li>
                            <li>Revenue & Pricing Strategy</li>
                            <li>Organizational & Decision Flows</li>
                            <li>Research & Evidence-Based Insights</li>
                        </ul>
                    </section>

                    <section
                        id="organization"
                        className="min-h-screen flex flex-col justify-center items-start relative px-6 md:px-12 py-24 scroll-section"
                    >
                        <div className="absolute left-0 top-1/3 w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                            Evidence & Case Studies
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
                            Showcase structural implementations, impact metrics, and examples of SaaS
                            scaling.
                        </p>
                    </section>

                    <section
                        id="systems"
                        className="min-h-screen flex flex-col justify-center items-start relative px-6 md:px-12 py-24 scroll-section"
                    >
                        <div className="absolute right-0 top-1/3 w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                            Our Method
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
                            Evidence-driven, human-centered, and structurally aligned methods to
                            optimize product, revenue, and organizational decisions.
                        </p>
                    </section>

                    <section
                        id="evidence"
                        className="min-h-screen flex flex-col justify-center items-start relative px-6 md:px-12 py-24 scroll-section"
                    >
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                            Insights & Blog
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed mb-6">
                            Articles, research findings, and thought leadership on scaling software
                            enterprises.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/blogs"
                                className="border-b border-primary text-primary pb-1 hover:opacity-80 transition"
                            >
                                Explore Blog
                            </Link>
                            <Link
                                href="/seo"
                                className="border-b border-border pb-1 hover:border-foreground transition"
                            >
                                SEO Hub
                            </Link>
                        </div>
                    </section>

                    <section
                        id="access"
                        className="min-h-screen flex flex-col justify-center items-start relative px-6 md:px-12 py-24 scroll-section"
                    >
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                            Join Our Network
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed mb-6">
                            Collaborate, learn, and connect with SaaS founders, PMs, researchers, and
                            students in our hub.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="border-b border-primary text-primary pb-1 hover:opacity-80 transition"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/blogs"
                                className="border-b border-border pb-1 hover:border-foreground transition"
                            >
                                Learn More
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}