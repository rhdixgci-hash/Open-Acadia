import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-24">

            {/* Header */}
            <div className="mb-20 max-w-3xl">
                <h1 className="text-3xl md:text-4xl mb-6">
                    Methodology & Strategic Approach
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                    Our work is structured, measurable, and systemic.
                    We design methods to translate research, product strategy,
                    and organizational design into actionable and scalable systems.
                </p>
            </div>

            {/* Step 01 */}
            <section className="mb-24 border-t border-border pt-16">
                <h2 className="text-2xl mb-8">01. Contextual Analysis</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            Understanding institutional, market, and operational context
                            is the foundation of durable strategy.
                        </p>
                        <p>
                            We map organizational complexity, competitive landscapes,
                            and historical positioning to identify structural levers.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• Institutional & market diagnostics</li>
                            <li>• Stakeholder & decision-flow mapping</li>
                            <li>• Competitive & positioning analysis</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Step 02 */}
            <section className="mb-24 border-t border-border pt-16">
                <h2 className="text-2xl mb-8">02. Strategic Architecture</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            Strategy is encoded in systems, not slide decks.
                        </p>
                        <p>
                            We design product, revenue, and organizational architectures
                            aligned to long-term market positioning.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• Product & revenue system design</li>
                            <li>• Offer & pricing architecture</li>
                            <li>• Organizational structure & decision flows</li>
                            <li>• Execution alignment frameworks</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Step 03 */}
            <section className="mb-24 border-t border-border pt-16">
                <h2 className="text-2xl mb-8">03. Implementation & Testing</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            Systems require validation in operational context.
                        </p>
                        <p>
                            We implement pilot interventions, measure outcomes,
                            and iterate structures to ensure scalable results.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• Pilot & sprint-based implementation</li>
                            <li>• KPIs & structural outcome tracking</li>
                            <li>• Iterative refinement & scaling</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Step 04 */}
            <section className="mb-24 border-t border-border pt-16">
                <h2 className="text-2xl mb-8">04. Ongoing Advisory & Optimization</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            Strategy execution is continuous and adaptive.
                        </p>
                        <p>
                            We partner with executive teams to maintain alignment,
                            optimize processes, and support strategic scale.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• Executive-level advisory</li>
                            <li>• Process & system optimization</li>
                            <li>• Scale support & decision alignment</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <div className="mt-24 border-t border-border pt-16 text-center max-w-3xl mx-auto">
                <h3 className="text-xl mb-6">
                    Begin With Structural Clarity
                </h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    Complex systems demand methodical intervention.
                    Start with a diagnostic to map opportunity and risk.
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