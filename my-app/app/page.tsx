
export default function Home() {
    return (<div className="flex flex-col gap-32"> {/* Intro */}
        <section className="flex flex-col gap-6"><h1
            className="text-5xl leading-tight tracking-tight font-medium"> Structural Alignment for Software
            Systems. </h1> <p className="text-neutral-600 max-w-xl leading-relaxed"> Most companies scale revenue before
            structure. We correct the sequence. </p></section>
        {/* Structure */}
        <section id="structure" className="flex flex-col gap-6">
            <div className="text-xs font-mono tracking-widest uppercase text-neutral-400"> 01 Structure</div>
            <h2 className="text-3xl tracking-tight"> Product logic defines scale potential. </h2> <p
            className="text-neutral-600 leading-relaxed max-w-2xl"> Without structural clarity in product architecture,
            revenue becomes fragile and organizational load increases. </p></section>
        {/* Revenue */}
        <section id="revenue" className="flex flex-col gap-6">
            <div className="text-xs font-mono tracking-widest uppercase text-neutral-400"> 02 Revenue</div>
            <h2 className="text-3xl tracking-tight"> Monetization must follow structural coherence. </h2> <p
            className="text-neutral-600 leading-relaxed max-w-2xl"> Revenue mechanisms are downstream from product
            integrity. </p></section>
        {/* Organization */}
        <section id="organization" className="flex flex-col gap-6">
            <div className="text-xs font-mono tracking-widest uppercase text-neutral-400"> 03 Organization</div>
            <h2 className="text-3xl tracking-tight"> Teams scale through alignment, not hiring. </h2> <p
            className="text-neutral-600 leading-relaxed max-w-2xl"> Organizational clarity prevents entropy during
            growth. </p></section>
        {/* Systems */}
        <section id="systems" className="flex flex-col gap-6">
            <div className="text-xs font-mono tracking-widest uppercase text-neutral-400"> 04 Systems Lab</div>
            <h2 className="text-3xl tracking-tight"> Operational frameworks and diagnostic tools. </h2> <p
            className="text-neutral-600 leading-relaxed max-w-2xl"> Access structured models designed for real scaling
            conditions. </p></section>
        {/* Evidence */}
        <section id="evidence" className="flex flex-col gap-6">
            <div className="text-xs font-mono tracking-widest uppercase text-neutral-400"> 05 Evidence</div>
            <h2 className="text-3xl tracking-tight"> Field applications and case systems. </h2> <p
            className="text-neutral-600 leading-relaxed max-w-2xl"> Applied structural redesign across product and
            revenue layers. </p></section>
        {/* Access */}
        <section id="access" className="flex flex-col gap-6">
            <div className="text-xs font-mono tracking-widest uppercase text-neutral-400"> 06 Access</div>
            <h2 className="text-3xl tracking-tight"> Initiate structural diagnostic. </h2>
            <div className="flex gap-10 text-xs font-mono tracking-widest uppercase"><a href="/contact"
                                                                                        className="border-b border-neutral-900 pb-1"> Open
                Channel </a> <a href="/cases"
                                className="border-b border-neutral-300 pb-1 hover:border-neutral-900 transition"> Review
                Systems </a></div>
        </section>
    </div>);
}