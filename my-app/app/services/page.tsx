import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-24">

            {/* Header */}
            <div className="mb-20 max-w-3xl">
                <h1 className="text-3xl md:text-4xl mb-6">
                    Strategic Services
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                    We design structural product, revenue, and organizational
                    systems for software companies operating in competitive
                    and complex markets.
                </p>
            </div>

            {/* Service 01 */}
            <section className="mb-24 border-t border-border pt-16">
                <h2 className="text-2xl mb-8">
                    Product Strategy & Market Architecture
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            Product-market misalignment is rarely tactical.
                            It is structural.
                        </p>
                        <p>
                            We redesign product architecture, value narratives,
                            and positioning logic to create durable competitive
                            differentiation.
                        </p>
                    </div>

                    <div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• Product-market alignment frameworks</li>
                            <li>• Category positioning strategy</li>
                            <li>• Offer architecture & pricing logic</li>
                            <li>• Competitive narrative systems</li>
                            <li>• Value ladder design</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Service 02 */}
            <section className="mb-24 border-t border-border pt-16">
                <h2 className="text-2xl mb-8">
                    Revenue Architecture & Growth Systems
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            Growth breakdowns typically stem from
                            fragmented systems, not lack of effort.
                        </p>
                        <p>
                            We design integrated revenue models aligned with
                            product structure, lifecycle monetization,
                            and acquisition efficiency.
                        </p>
                    </div>

                    <div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• SaaS revenue model design</li>
                            <li>• Funnel architecture optimization</li>
                            <li>• Lifecycle monetization systems</li>
                            <li>• CAC/LTV structural analysis</li>
                            <li>• Enterprise sales alignment</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Service 03 */}
            <section className="mb-24 border-t border-border pt-16">
                <h2 className="text-2xl mb-8">
                    Organizational Design for Scaling Teams
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            Execution friction is often a decision-architecture problem.
                        </p>
                        <p>
                            We redesign ownership systems, decision rights,
                            and cross-functional alignment to support scale.
                        </p>
                    </div>

                    <div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• Product team structure optimization</li>
                            <li>• Decision-flow architecture</li>
                            <li>• Leadership alignment systems</li>
                            <li>• Strategic planning cadence design</li>
                            <li>• Operational scalability frameworks</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Engagement Model */}
            <section className="border-t border-border pt-20">
                <h2 className="text-2xl mb-12">
                    Engagement Structure
                </h2>

                <div className="grid md:grid-cols-3 gap-12 text-sm text-muted-foreground leading-relaxed">
                    <div>
                        <h3 className="text-base mb-4">
                            Strategic Diagnostic
                        </h3>
                        <p>
                            2–4 week structural analysis producing a comprehensive
                            architecture blueprint.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-base mb-4">
                            Implementation Sprint
                        </h3>
                        <p>
                            8–12 week execution focused on revenue and product
                            system realignment.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-base mb-4">
                            Ongoing Advisory
                        </h3>
                        <p>
                            Executive-level partnership supporting strategic
                            scale and institutional clarity.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="mt-24 border-t border-border pt-16 text-center max-w-3xl mx-auto">
                <h3 className="text-xl mb-6">
                    Complex Systems Require Structural Intervention
                </h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    If growth has slowed, positioning is unclear, or execution
                    friction is increasing, begin with a structured diagnostic.
                </p>

                <Link
                    href="/contact"
                    className="px-8 py-3 bg-primary text-white text-sm uppercase tracking-wide"
                >
                    Request Strategic Diagnostic
                </Link>
            </div>

        </div>
    );
}