'use client'

import Link from "next/link";

import {motion} from "motion/react";
import {ArrowRight, Cpu, Network, Zap} from "lucide-react";
import {NetworkDiagram} from "@/app/components/NetworkDiagram";

export default function Page() {
    return (
        <div className="relative min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden">
                {/* Background Network */}
                <NetworkDiagram/>

                <div className="relative z-10 max-w-5xl">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >
            <span
                className="inline-block px-2 py-1 mb-6 border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase">
              :: System Status: Nominal ::
            </span>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            Institutional <br/>
                            <span
                                className="text-stroke-1 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Mediation</span>
                        </h1>

                        <p className="max-w-xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10 border-l-2 border-primary/50 pl-6">
                            Axial coding for the research-industry interface. <br/>
                            Translating organizational ontologies into viable economic structures.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider overflow-hidden"
                            >
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Protocol <ArrowRight size={16}/>
                </span>
                                <div
                                    className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
                            </Link>

                            <Link
                                href="/method"
                                className="group px-8 py-4 border border-border text-foreground font-mono text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
                            >
                                View Architecture
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scrolling Ticker */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-12 bg-black border-t border-border flex items-center overflow-hidden">
                    <motion.div
                        className="flex gap-12 whitespace-nowrap text-xs font-mono text-muted-foreground uppercase tracking-widest"
                        animate={{x: ["0%", "-50%"]}}
                        transition={{duration: 20, repeat: Infinity, ease: "linear"}}
                    >
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-12">
                                <span>// Strategic Analysis</span>
                                <span>// Deep Tech Translation</span>
                                <span>// Organizational Ontology</span>
                                <span>// Venture Architecture</span>
                                <span>// Innovation Systems</span>
                                <span>// Institutional Logic</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Grid Section - Domains */}
            <section className="py-32 px-6 lg:px-12 border-t border-border relative">
                <div className="absolute top-0 left-12 w-[1px] h-full bg-border"/>
                <div className="absolute top-0 right-12 w-[1px] h-full bg-border"/>

                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 flex items-end justify-between">
                        <div>
              <span className="text-primary font-mono text-xs tracking-widest uppercase mb-2 block">
                01 // Strategic Domains
              </span>
                            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">
                                System Capabilities
                            </h2>
                        </div>
                        <Link href="/domains"
                              className="hidden md:flex items-center gap-2 text-xs font-mono uppercase text-muted-foreground hover:text-primary transition-colors">
                            Full Index <ArrowRight size={14}/>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
                        <FeatureCard
                            icon={<Network className="w-6 h-6 text-primary"/>}
                            title="Ecosystem Architecture"
                            desc="Mapping actor-networks and power structures within complex institutional environments."
                        />
                        <FeatureCard
                            icon={<Cpu className="w-6 h-6 text-accent"/>}
                            title="Ontology Translation"
                            desc="Bridging the gap between academic rigor and market velocity through semantic alignment."
                        />
                        <FeatureCard
                            icon={<Zap className="w-6 h-6 text-purple-500"/>}
                            title="Venture Synthesis"
                            desc="Constructing viable economic vehicles from raw scientific capability."
                        />
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-32 px-6 lg:px-12 bg-secondary/20 border-y border-border">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{opacity: 0, scale: 0.95}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                    >
                        <p className="text-2xl md:text-4xl font-light leading-tight text-foreground/80 mb-8">
                            "The interface between discovery and capital is not a market problem. It is a <span
                            className="text-foreground font-normal border-b border-primary">structural</span> one."
                        </p>
                        <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                            // System Directive 04
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({icon, title, desc}: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="group relative bg-background p-10 hover:bg-secondary/50 transition-colors">
            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {icon}
            </div>
            <h3 className="text-xl font-display uppercase mb-4 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
            </p>

            {/* Hover decoration */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary/0 group-hover:bg-primary transition-colors"/>
        </div>
    );
}
