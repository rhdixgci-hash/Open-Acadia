import Link from "next/link";
import { Footer } from "@/app/Footer";

export default function Home() {
    return (
        <div className="main-center">

            {/* HERO */}
            <section className="py-32 border-b border-border relative">

                <div className="absolute top-0 left-12 w-[1px] h-full bg-border" />
                <div className="absolute top-0 right-12 w-[1px] h-full bg-border" />

                <div className="max-w-6xl mx-auto px-6 lg:px-12">

                    <div className="mb-10 font-mono text-xs tracking-widest uppercase text-muted-foreground">
                        01 / Strategic Architecture Node
                    </div>

                    <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-tight max-w-4xl mb-10">
                        Product, Revenue & Organizational Architecture
                        <span className="block text-2xl md:text-3xl text-muted-foreground mt-4">
              for Competitive SaaS & Software Markets
            </span>
                    </h1>

                    <p className="text-muted-foreground max-w-2xl leading-relaxed mb-12">
                        We design structural alignment across product positioning,
                        monetization systems, and institutional decision flows.
                        Built for founder-led and growth-stage technology companies.
                    </p>

                    <div className="flex gap-10 font-mono text-xs tracking-widest uppercase">
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
                            View Case Results
                        </Link>
                    </div>

                </div>
            </section>


            {/* CORE SYSTEMS */}
            <section className="py-32">

                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    <div className="mb-20 font-mono text-xs tracking-widest uppercase text-muted-foreground">
                        02 / Core Strategic Systems
                    </div>

                    <div className="grid md:grid-cols-3 gap-px bg-border border border-border">

                        <div className="p-12 bg-background">
                            <h3 className="font-display text-2xl mb-6">
                                Product Positioning
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Market differentiation, offer architecture, pricing logic,
                                and narrative clarity for SaaS operating in saturated sectors.
                            </p>
                        </div>

                        <div className="p-12 bg-background">
                            <h3 className="font-display text-2xl mb-6">
                                Revenue Architecture
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Conversion systems, lifecycle monetization,
                                and scalable growth mechanics built for B2B software.
                            </p>
                        </div>

                        <div className="p-12 bg-background">
                            <h3 className="font-display text-2xl mb-6">
                                Organizational Design
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Decision-flow mapping, leadership alignment,
                                and structural scalability for tech teams.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* DIFFERENTIATION */}
            <section className="py-32 bg-secondary/30 border-t border-border border-b border-border">

                <div className="max-w-6xl mx-auto px-6 lg:px-12">

                    <div className="mb-20 font-mono text-xs tracking-widest uppercase text-muted-foreground">
                        03 / Structural Differentiation
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">

                        <div>
                            <h4 className="font-display text-xl mb-4">
                                Structural Over Cosmetic
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We redesign systems, not slides. Durable advantage
                                comes from architecture, not innovation theatre.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-display text-xl mb-4">
                                Integrated Intelligence
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Product, revenue, and organization operate as one
                                aligned system. No fragmentation. No silos.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-display text-xl mb-4">
                                Designed for Complexity
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Built for companies scaling inside competitive,
                                saturated, institutionally complex markets.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* ENGAGEMENT MODEL */}
            <section className="py-32 relative">

                <div className="absolute top-0 left-12 w-[1px] h-full bg-border" />
                <div className="absolute top-0 right-12 w-[1px] h-full bg-border" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    <div className="mb-20 font-mono text-xs tracking-widest uppercase text-muted-foreground">
                        04 / Engagement Model
                    </div>

                    <div className="grid md:grid-cols-3 gap-20">

                        <div>
                            <h3 className="font-display text-xl mb-4">
                                01. Strategic Diagnostic
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                2–4 week structural audit. Deliverable:
                                Strategic Architecture Blueprint.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-display text-xl mb-4">
                                02. Implementation Sprint
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Revenue system execution and product realignment
                                over 8–12 weeks.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-display text-xl mb-4">
                                03. Strategic Partnership
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Ongoing executive advisory for scaling SaaS teams.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* CASE FRAMEWORK */}
            <section className="py-20 border-t border-border">

                <div className="max-w-6xl mx-auto px-6 lg:px-12">

                    <div className="border border-border p-12">

                        <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-6">
                            Case Documentation Protocol
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                            Each case maps: Market Context, Structural Constraint,
                            Strategic Intervention, and Measurable Economic Outcome.
                            Data anonymized. Structural clarity preserved.
                        </p>

                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}