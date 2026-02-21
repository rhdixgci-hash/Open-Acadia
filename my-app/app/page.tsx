import Image from "next/image";
import Link from "next/link";
import {Footer} from "@/app/Footer";

export default function Home() {
    return (
        <div className="">
            <section className="py-24 bg-secondary/30">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <p className="text-sm text-right uppercase tracking-wider text-muted-foreground mb-6">
                        معماری رشد برای آژانس‌های پیشرو
                    </p>
                    <h1 className="text-5xl text-right tracking-tight leading-tight mb-6">
                        ما یک آژانس دیگر سئو یا طراحی نیستیم.
                        ما زیرساخت رقابتی شما را بازطراحی می‌کنیم. </h1>
                    <p className="text-lg text-right text-muted-foreground leading-relaxed">
                        رقبا خدمات ارائه می‌دهند.
                        ما معماری هم‌راستاسازی درآمد، دیده‌شدن و اقتدار طراحی می‌کنیم.
                    </p>
                </div>
            </section>
            <section className="py-24 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl tracking-tight mb-12">
                        تمایز FAVEN چیست؟
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="mb-3">Not Innovation Theater</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                بازتعریف جایگاه برند در سطح فرهنگی

                                طراحی معماری درآمد پایدار

                                ساخت مزیت رقابتی غیرقابل تقلید

                                تبدیل تخصص به سرمایه اجتماعی و اقتصادی
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-3">Not Technology Consulting</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We do not assess technologies or markets. Our focus is organizational
                                architecture—the systems that enable research translation, not the research itself.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-3">Not Startup Methodology</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Universities are not startups. We reject imported Silicon Valley frameworks
                                that ignore institutional complexity and academic integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 px-6 lg:px-12 border-t border-border relative">
                <div className="absolute top-0 left-12 w-[1px] h-full bg-border"/>
                <div className="absolute top-0 right-12 w-[1px] h-full bg-border"/>

                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 flex flex-col items-end justify-between">
                        <div>
              <span className="text-primary font-mono text-xs tracking-widest uppercase mb-2 block">
                01 // Strategic Streams
              </span>
                            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">
                                زیرا ما فقط پروژه نمی‌گیریم —
                                ما ساختار بازار شما را بازتعریف می‌کنیم.
                            </h2>
                        </div>
                        <Link href="/" className="

                        hidden md:flex items-center gap-2 text-xs font-mono uppercase text-muted-foreground hover:text-primary transition-colors">
                            <p> ما کمک می‌کنیم:
                            </p>
                            از رقابت شلوغ دیجیتال مارکتینگ خارج شوید

                            مشتریان سطح بالاتر جذب کنید

                            برند خود را در سطح مرجع تثبیت کنید

                            درآمد پایدار و قابل پیش‌بینی بسازید
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-px bg-border border border-border">

                    </div>
                </div>
            </section>
            <section className="py-24 bg-secondary/30">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
                        با FAVEN وارد گفتگوی استراتژیک شوید.
                    </p>
                    <h1 className="text-5xl tracking-tight leading-tight mb-6">
                        دعوت به اقدام
                        اگر می‌خواهید:
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">

                        در بازار شلوغ جلو بزنید،
                        اقتدار بسازید،
                        و درآمد پایدار طراحی کنید،


                    </p>
                </div>
            </section>

            <section className="py-12 border-b border-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="bg-card border border-border p-8">
                        <h3 className="text-lg mb-3">Case Presentation Methodology</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            The following cases are presented in structured format: Context (institutional setting and
                            presenting problem),
                            Strategic Intervention (architectural approach and specific mechanisms), and Structural
                            Outcome (measurable
                            organizational and economic results). Details have been generalized to protect institutional
                            confidentiality
                            while preserving strategic clarity.
                        </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
