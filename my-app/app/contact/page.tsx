import React from "react";

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-24">

            {/* Header */}
            <div className="mb-16">
                <h1 className="text-3xl md:text-4xl mb-6">
                    Request Strategic Diagnostic
                </h1>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    We work with founder-led and scaling SaaS companies facing
                    structural growth constraints, positioning ambiguity, or
                    revenue system inefficiencies.
                    Engagements begin with a focused strategic diagnostic.
                </p>
            </div>

            {/* Qualification Block */}
            <div className="mb-16 border border-border p-8 bg-card">
                <h2 className="text-lg mb-6">
                    Typical Client Profile
                </h2>

                <ul className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                    <li>• SaaS or software company with validated product</li>
                    <li>• Revenue between early traction and scale phase</li>
                    <li>• Founder or executive team seeking structural clarity</li>
                    <li>• Willing to commit to diagnostic + implementation sprint</li>
                </ul>
            </div>

            {/* Engagement Overview */}
            <div className="mb-16">
                <h2 className="text-lg mb-6">
                    What Happens Next
                </h2>

                <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                    <p>
                        1. Initial strategic screening call (30 minutes)
                    </p>
                    <p>
                        2. Diagnostic scope definition
                    </p>
                    <p>
                        3. 2–4 week deep structural analysis
                    </p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="border-t border-border pt-12">
                <form className="space-y-6">

                    <div>
                        <label className="block text-sm mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2">
                            Role / Title
                        </label>
                        <input
                            type="text"
                            className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2">
                            Annual Revenue Range
                        </label>
                        <select className="w-full bg-gray-950 border border-border  px-4 py-3 text-sm focus:outline-none focus:border-primary">
                            <option>Pre-revenue</option>
                            <option>$0 – $500k</option>
                            <option>$500k – $2M</option>
                            <option>$2M – $10M</option>
                            <option>$10M+</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm mb-2">
                            Primary Strategic Challenge
                        </label>
                        <textarea
                            rows={4}
                            className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-primary"
                        />
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-primary text-white text-sm uppercase tracking-wide"
                        >
                            Submit Diagnostic Request
                        </button>
                    </div>

                </form>
            </div>

        </div>
    );
}