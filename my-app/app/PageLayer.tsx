import Link from "next/link";
import {Footer} from "@/app/Footer";

export default function PageLayer({children}) {
    return (
        <div className={`flex justify-center px-3 w-full`}>
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
    );
}
