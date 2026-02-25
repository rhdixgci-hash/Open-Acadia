import Link from "next/link";
import {Footer} from "@/app/Footer";

export default function PageLayer({children}) {
    return (
        <div className=" inset-0 pointer-events-none z-50 p-4 md:p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div className="flex gap-2">
                    <div className="w-2 h-2 bg-primary animate-pulse"></div>
                    <span
                        className="font-mono text-xs text-muted-foreground tracking-widest uppercase">System: Active</span>
                </div>
                <div
                    className="font-mono text-xs text-muted-foreground tracking-widest uppercase text-right hidden md:block">2026-02-25 <br/>COORD:
                    METHOD
                </div>
            </div>
            <div className={`flex justify-center px-3 w-full my-4`}>
                <div className="w-1/9 main-sides">
                    <section className="py-24 bg-secondary/30">

                    </section>
                    <section className="py-24 bg-secondary/30">

                    </section>

                    <section className="py-32 px-6 lg:px-12 border-t border-border relative">
                        <div className="absolute top-0 left-12 w-[1px] h-full bg-border"/>
                        <div className="absolute top-0 right-12 w-[1px] h-full bg-border"/>

                        <div className="max-w-7xl mx-auto">
                            <div className="mb-20 flex flex-col items-end justify-between">
                            </div>
                            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
                            </div>
                        </div>
                    </section>


                    <section className="py-12 border-b border-border">

                    </section>
                </div>
                <div>
                    {children}
                </div>
                <div className="w-1/9 main-sides">
                    <section className="py-24 bg-secondary/30">

                    </section>
                    <section className="py-24 bg-secondary/30">

                    </section>

                    <section className="py-32 px-6 lg:px-12 border-t border-border relative">
                        <div className="absolute top-0 left-12 w-[1px] h-full bg-border"/>
                        <div className="absolute top-0 right-12 w-[1px] h-full bg-border"/>

                        <div className="max-w-7xl mx-auto">
                            <div className="mb-20 flex flex-col items-end justify-between">
                            </div>
                            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
                            </div>
                        </div>
                    </section>


                    <section className="py-12 border-b border-border">

                    </section>
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className="w-[100px] h-[1px] bg-border relative">
                    <div className="absolute left-0 bottom-0 w-[1px] h-[10px] bg-border"></div>
                </div>
                <div className="w-[100px] h-[1px] bg-border relative">
                    <div className="absolute right-0 bottom-0 w-[1px] h-[10px] bg-border"></div>
                </div>
            </div>
        </div>
    );
}
