import React from "react";
import Link from "next/link";

export default function Blogs() {
    const blogPosts = [
        {
            title: "Systemic Revenue Architecture in SaaS",
            date: "2026-02-15",
            excerpt:
                "Exploring how structured revenue systems create scalable outcomes for high-growth software companies.",
            href: "/blogs/systemic-revenue-architecture",
        },
        {
            title: "Decision-Flow Optimization for Tech Teams",
            date: "2026-02-08",
            excerpt:
                "How mapping decision flows can eliminate friction and accelerate execution in product-led organizations.",
            href: "/blogs/decision-flow-optimization",
        },
        {
            title: "Structuring Competitive Advantage",
            date: "2026-02-01",
            excerpt:
                "A framework to turn product-market differentiation into durable organizational assets.",
            href: "/blogs/structuring-competitive-advantage",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-24">

            {/* Header */}
            <div className="mb-20 max-w-3xl">
                <h1 className="text-3xl md:text-4xl mb-6">
                    Insights & Articles
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                    Explore structured analyses, frameworks, and reflections on strategy,
                    product design, revenue systems, and organizational scalability.
                </p>
            </div>

            {/* Blog Posts */}
            <div className="grid md:grid-cols-3 gap-12">
                {blogPosts.map((post, index) => (
                    <div key={index} className="border border-border p-6 rounded-md hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                        <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">{post.date}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                        <Link
                            href={post.href}
                            className="text-primary font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors"
                        >
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-24 border-t border-border pt-16 text-center max-w-3xl mx-auto">
                <h3 className="text-xl mb-6">
                    Stay Ahead with Insights
                </h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    Subscribe to receive strategic analyses, frameworks, and reflections
                    from our research and product teams.
                </p>
                <Link
                    href="/contact"
                    className="px-8 py-3 bg-primary text-white text-sm uppercase tracking-wide"
                >
                    Subscribe / Contact
                </Link>
            </div>

        </div>
    );
}