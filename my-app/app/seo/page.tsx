import React from "react";
import Link from "next/link";

export default function SEOMachine() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">

            {/* HERO / Intro */}
            <section className=" mb-16">
                <h1 className="text-4xl md:text-5xl font-display mb-6">
                    SEO Knowledge Hub & Content Engine
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                    Structured insights, research-backed articles, and case-driven content designed
                    to capture high-intent searches, drive leads, and reinforce market authority.
                    Every piece is optimized for search engines and aligned with strategic revenue objectives.
                </p>
            </section>

            {/* SEO Categories / Taxonomies */}
            <section className="grid md:grid-cols-3 gap-10 mb-24">
                <div className="bg-card p-6 border border-border rounded">
                    <h3 className="text-xl mb-4 font-semibold">Product Systems</h3>
                    <ul className="text-muted-foreground space-y-2">
                        <li><Link href="/seo/product-strategy" className="hover:text-primary">Market Positioning Frameworks</Link></li>
                        <li><Link href="/seo/product-offers" className="hover:text-primary">Offer Architecture & Pricing Logic</Link></li>
                        <li><Link href="/seo/product-differentiation" className="hover:text-primary">SaaS Differentiation Playbooks</Link></li>
                    </ul>
                </div>
                <div className="bg-card p-6 border border-border rounded">
                    <h3 className="text-xl mb-4 font-semibold">Revenue Systems</h3>
                    <ul className="text-muted-foreground space-y-2">
                        <li><Link href="/seo/revenue-models" className="hover:text-primary">Lifecycle Monetization Systems</Link></li>
                        <li><Link href="/seo/funnel-optimization" className="hover:text-primary">Conversion Funnel Optimizations</Link></li>
                        <li><Link href="/seo/b2b-strategy" className="hover:text-primary">B2B Acquisition & Scaling</Link></li>
                    </ul>
                </div>
                <div className="bg-card p-6 border border-border rounded">
                    <h3 className="text-xl mb-4 font-semibold">Organizational Design</h3>
                    <ul className="text-muted-foreground space-y-2">
                        <li><Link href="/seo/team-architecture" className="hover:text-primary">Decision Flow Architecture</Link></li>
                        <li><Link href="/seo/leadership-alignment" className="hover:text-primary">Leadership Alignment Systems</Link></li>
                        <li><Link href="/seo/scalable-teams" className="hover:text-primary">Operational Scalability Design</Link></li>
                    </ul>
                </div>
            </section>

            {/* Featured / Lead Capture */}
            <section className="bg-secondary/30 p-12 rounded-lg text-center mb-24">
                <h2 className="text-3xl mb-6 font-display">Featured SEO Insights</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    Each insight is crafted to attract high-value search traffic, highlight unique methodologies,
                    and convert visitors into consultation requests.
                </p>
                <Link href="/contact" className="px-6 py-3 bg-primary text-white uppercase tracking-wide">
                    Request Strategic Diagnostic
                </Link>
            </section>

            {/* SEO Engine / Dynamic Content Placeholder */}
            <section>
                <div className="grid md:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-card p-6 border border-border rounded hover:border-primary transition-colors">
                            <h4 className="text-lg mb-2 font-semibold">SEO Insight {i + 1}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Placeholder for a high-value keyword-driven insight. This can be a case, tip, or structured data snippet.
                            </p>
                            <Link href="/blogs" className="text-primary text-xs uppercase mt-2 inline-block hover:text-accent">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}