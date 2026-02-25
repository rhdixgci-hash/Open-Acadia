import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/app/Footer";

export default function Home() {
    return (
        <div className="main-center">

            {/* HERO */}
            <section className="py-28 bg-secondary/30">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-display tracking-tight mb-6">
                        Strategic Product Architecture & Revenue Systems for Scalable Software Companies
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        We design high-performance product, revenue, and organizational systems
                        for SaaS and technology companies operating in competitive markets.
                        Our focus: positioning clarity, structural alignment, and measurable growth.
                    </p>

                    <div className="mt-10 flex justify-center gap-6">
                        <Link href="/contact" className="px-6 py-3 bg-primary text-white text-sm uppercase tracking-wide">
                            Request Strategic Diagnostic
                        </Link>
                        <Link href="/cases" className="px-6 py-3 border border-border text-sm uppercase tracking-wide">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>


            {/* CORE SERVICES */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl mb-16 text-center">
                        Core Strategic Services
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">

                        <div>
                            <h3 className="text-xl mb-4">
                                Product Strategy & Market Positioning
                            </h3>
                            <ul className="text-muted-foreground space-y-2">
                                <li>• Product-market alignment frameworks</li>
                                <li>• SaaS differentiation strategy</li>
                                <li>• Offer architecture & pricing logic</li>
                                <li>• Competitive narrative positioning</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl mb-4">
                                Revenue Architecture & Growth Systems
                            </h3>
                            <ul className="text-muted-foreground space-y-2">
                                <li>• SaaS revenue model design</li>
                                <li>• Conversion funnel optimization</li>
                                <li>• Lifecycle monetization systems</li>
                                <li>• B2B acquisition strategy</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl mb-4">
                                Organizational Design for Tech Teams
                            </h3>
                            <ul className="text-muted-foreground space-y-2">
                                <li>• Product team structure optimization</li>
                                <li>• Decision-flow architecture</li>
                                <li>• Leadership alignment systems</li>
                                <li>• Operational scalability design</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>


            {/* DIFFERENTIATION */}
            <section className="py-24 bg-secondary/30">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl mb-16 text-center">
                        How We Are Different
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10 text-justify">

                        <div>
                            <h4 className="mb-3 font-semibold">
                                Structural Over Cosmetic
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We do not provide surface-level innovation workshops.
                                We redesign product, revenue, and decision systems to create durable competitive advantage.
                            </p>
                        </div>

                        <div>
                            <h4 className="mb-3 font-semibold">
                                Integrated, Not Fragmented
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Strategy, product, growth, and organization operate as one system.
                                We eliminate silos and align execution with market positioning.
                            </p>
                        </div>

                        <div>
                            <h4 className="mb-3 font-semibold">
                                Designed for Complexity
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We work with founder-led and scaling software companies
                                navigating institutional complexity, competitive saturation,
                                and structural growth barriers.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* STRATEGIC ENGAGEMENT MODEL */}
            <section className="py-32 border-t border-border relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl mb-16">
                        Engagement Model
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">

                        <div>
                            <h3 className="text-lg mb-3">01. Strategic Diagnostic</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                2–4 week deep analysis of product positioning, revenue systems,
                                and organizational structure. Deliverable: Strategic Architecture Blueprint.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg mb-3">02. Implementation Sprint</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                8–12 week execution phase focused on revenue architecture,
                                product clarity, and growth system alignment.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg mb-3">03. Strategic Partnership</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Ongoing executive-level advisory for scaling SaaS
                                and high-growth software companies.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* CASE STUDY FRAMEWORK */}
            <section className="py-16 border-b border-border">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <div className="bg-card border border-border p-10">
                        <h3 className="text-xl mb-4">
                            Case Study Framework
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Each case study documents: Market Context, Structural Challenge,
                            Strategic Intervention, and Measurable Outcome
                            (revenue growth, conversion improvement, or operational efficiency).
                            Data is anonymized while preserving strategic clarity.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}