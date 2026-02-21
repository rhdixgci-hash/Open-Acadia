

export function Footer() {
    return (
        <footer className="border-t border-border bg-black text-foreground relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-24">

                <div className="grid md:grid-cols-4 gap-12 mb-16 font-mono text-xs">
                    <div className="space-y-4">
                        <h3 className="uppercase tracking-widest text-primary mb-6">:: Signal Origin</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Strategic mediation node. <br />
                            Operating at the intersection of <br />
                            research ecosystems and capital flows.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="uppercase tracking-widest text-primary mb-6">:: Navigation Index</h3>
                        <ul className="space-y-2">
                            {[
                                { label: "Methodology", href: "/method" },
                                { label: "Strategic Domains", href: "/domains" },
                                { label: "Case Architecture", href: "/cases" },
                                { label: "Insights", href: "/insights" },
                            ].map((link) => (
                                <li key={link.href}>
                                    {/*<Link*/}
                                    {/*    to={link.href}*/}
                                    {/*    className="block hover:text-primary transition-colors hover:translate-x-1 duration-200"*/}
                                    {/*>*/}
                                    {/*    {link.label}*/}
                                    {/*</Link>*/}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="uppercase tracking-widest text-primary mb-6">:: System Modules</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Research Commercialization</li>
                            <li>Innovation Office Advisory</li>
                            <li>Corporate–University Interface</li>
                            <li>Ecosystem Design</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="uppercase tracking-widest text-primary mb-6">:: Communication</h3>
                        {/*<Link*/}
                        {/*    to="/contact"*/}
                        {/*    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"*/}
                        {/*>*/}
                        {/*    Initiate Contact <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" />*/}
                        {/*</Link>*/}
                        <p className="text-muted-foreground mt-4">
                            strategic@institutional-translation.org
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-end gap-4 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    <div className="flex flex-col gap-2">
                        <span>© 2026 Institutional Translation Node.</span>
                        <span>All Systems Nominal.</span>
                    </div>
                    <div className="flex gap-8">
                        <span className="hover:text-primary cursor-pointer transition-colors">Data Privacy Protocol</span>
                        <span className="hover:text-primary cursor-pointer transition-colors">Engagement Terms</span>
                    </div>
                </div>
            </div>

            {/* Decorative Grid Background for Footer */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        </footer>
    );
}
