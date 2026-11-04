const problems = [
    { q: '“My website is old, slow or doesn’t work on phones.”', a: 'I’ll rebuild it on a modern stack that loads fast and that you can update yourself.' },
    { q: '“I want to sell online but don’t know where to start.”', a: 'We’ll set up a Shopify or custom store, payments and shipping, and get your first products live.' },
    { q: '“My business runs on messy spreadsheets.”', a: 'I’ll move it into a proper database with a simple app or dashboard on top.' },
    { q: '“I have an app idea but no technical team.”', a: 'We’ll scope a first version together, then I design, build and launch it.' },
    { q: '“Nobody can find me on Google.”', a: 'I’ll fix the SEO basics, set up Google Business and analytics, and show you what’s working.' },
    { q: '“I do the same boring task every day.”', a: 'If a computer can do it, I can probably automate it and give you those hours back.' },
];

export default function Problems() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-20">
            <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-2xl md:p-12 dark:from-gray-800 dark:to-gray-900">
                <div className="mb-10 max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-widest text-pink-400">Sound familiar?</p>
                    <h2 className="mt-2 text-3xl font-bold md:text-4xl">Stuck with your online presence? You&apos;re not alone.</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {problems.map((p) => (
                        <div key={p.q} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                            <p className="font-semibold text-pink-200">{p.q}</p>
                            <p className="mt-2 text-gray-300">{p.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
