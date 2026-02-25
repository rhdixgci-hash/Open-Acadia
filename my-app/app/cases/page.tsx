import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-24">

            {/* Header */}
            <div className="mb-20 max-w-3xl">
                <h1 className="text-3xl md:text-4xl mb-6">
                    Strategic Case Studies
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                    Each engagement documents structural context, intervention logic,
                    and measurable outcome. Data is anonymized while preserving
                    architectural clarity.
                </p>
            </div>

            {/* Case Grid */}
            <div className="grid md:grid-cols-2 gap-12">

                {/* CASE 01 */}
                <div className="border border-border p-8 bg-card">
                    <h2 className="text-xl mb-6">
                        SaaS Revenue Realignment
                    </h2>

                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            <strong>Market Context:</strong> B2B SaaS operating in
                            saturated vertical with stagnating growth.
                        </p>

                        <p>
                            <strong>Structural Challenge:</strong> Misaligned pricing tiers,
                            unclear value differentiation, high churn in mid-tier accounts.
                        </p>

                        <p>
                            <strong>Strategic Intervention:</strong> Offer architecture redesign,
                            tier consolidation, monetization pathway restructuring.
                        </p>

                        <p>
                            <strong>Outcome:</strong> +34% ARPU increase within 6 months,
                            18% churn reduction, improved expansion revenue logic.
                        </p>
                    </div>
                </div>

                {/* CASE 02 */}
                <div className="border border-border p-8 bg-card">
                    <h2 className="text-xl mb-6">
                        Product Positioning Re-Architecture
                    </h2>

                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            <strong>Market Context:</strong> Founder-led software company
                            struggling with narrative clarity and enterprise traction.
                        </p>

                        <p>
                            <strong>Structural Challenge:</strong> Feature-led messaging,
                            no clear category ownership, inconsistent go-to-market motion.
                        </p>

                        <p>
                            <strong>Strategic Intervention:</strong> Category reframing,
                            value narrative consolidation, executive decision-flow redesign.
                        </p>

                        <p>
                            <strong>Outcome:</strong> Enterprise deal size doubled within 9 months,
                            shortened sales cycle, clearer market positioning.
                        </p>
                    </div>
                </div>

                {/* CASE 03 */}
                <div className="border border-border p-8 bg-card">
                    <h2 className="text-xl mb-6">
                        Growth System Consolidation
                    </h2>

                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            <strong>Market Context:</strong> Scaling SaaS with rapid
                            acquisition spend but declining efficiency.
                        </p>

                        <p>
                            <strong>Structural Challenge:</strong> Fragmented funnel ownership,
                            disconnected product and growth teams.
                        </p>

                        <p>
                            <strong>Strategic Intervention:</strong> Lifecycle revenue mapping,
                            cross-functional accountability system, funnel architecture redesign.
                        </p>

                        <p>
                            <strong>Outcome:</strong> CAC reduced by 22%, improved activation
                            metrics, measurable increase in LTV.
                        </p>
                    </div>
                </div>

                {/* CASE 04 */}
                <div className="border border-border p-8 bg-card">
                    <h2 className="text-xl mb-6">
                        Organizational Scalability Design
                    </h2>

                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                            <strong>Market Context:</strong> 40+ person product organization
                            experiencing execution bottlenecks.
                        </p>

                        <p>
                            <strong>Structural Challenge:</strong> Decision latency,
                            unclear ownership boundaries, roadmap instability.
                        </p>

                        <p>
                            <strong>Strategic Intervention:</strong> Decision-rights architecture,
                            product squad restructuring, strategic planning cadence redesign.
                        </p>

                        <p>
                            <strong>Outcome:</strong> 30% improvement in delivery velocity,
                            improved cross-team alignment, roadmap stability restored.
                        </p>
                    </div>
                </div>

            </div>

            {/* CTA Section */}
            <div className="mt-24 border-t border-border pt-16 text-center max-w-3xl mx-auto">
                <h3 className="text-xl mb-6">
                    Structural Growth Requires Structural Thinking
                </h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    If your company is navigating complexity, revenue stagnation,
                    or strategic misalignment, begin with a diagnostic.
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