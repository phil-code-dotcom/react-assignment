import Button from "./Button";

export default function HeroSection() {

    return (
        <section
            className="py-12 px-4 bg-gradient-to-r from-white via-indigo-100 to-white lg:py-16 md:px-8 dark:bg-gradient-to-r dark:from-neutral-900 dark:via-slate-900 dark:to-neutral-900">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <h1 className="text-slate-900 text-4xl font-bold !leading-tight md:text-5xl lg:text-6xl dark:text-slate-50">The
                        Most Modern Card Platform for Debit</h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 mt-6">
                    <div>
                        <p className="text-slate-600 text-lg leading-relaxed dark:text-slate-400">Explore a curated collection of
                            ready-to-use components and design blocks, responsive interfaces with ease. Streamline your workflow and
                            discover the future of web development.</p>

                        <div className="mt-8 flex gap-6 items-center flex-wrap">
                            <Button href="#">Get Started</Button>
                            <Button href="#" variant="link">API Documentation</Button>
                        </div>

                        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-6">
                            <img src="https://readymadeui.com/images/brand-logo1.webp"
                                className="w-28 shrink-0 dark:invert dark:brightness-200" alt="brand-logo1" />
                            <img src="https://readymadeui.com/images/brand-logo2.webp"
                                className="w-28 shrink-0 dark:invert dark:brightness-200" alt="brand-logo2" />
                            <img src="https://readymadeui.com/images/brand-logo3.webp"
                                className="w-28 shrink-0 dark:invert dark:brightness-200" alt="brand-logo3" />
                            <img src="https://readymadeui.com/images/brand-logo4.webp"
                                className="w-28 shrink-0 dark:invert dark:brightness-200" alt="brand-logo4" />
                        </div>
                    </div>

                    <div className="aspect-[7/4]">
                        <img src='https://readymadeui.com/images/kpis-dashboard-img.webp'
                            className="shrink-0 w-full h-full rounded-md object-contain" alt="kpi dashboard image" />
                    </div>
                </div>
            </div>
        </section>
    );
}