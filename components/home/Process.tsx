const steps = [
    { n: '01', title: 'Free chat', body: 'Tell me what you need or where you’re stuck. No jargon and no obligation.' },
    { n: '02', title: 'Plan & quote', body: 'I map out what to build, how long it takes and what it costs, before any work starts.' },
    { n: '03', title: 'Build together', body: 'You see progress early and often, and your feedback shapes every step.' },
    { n: '04', title: 'Launch & support', body: 'I launch it, show you how it works, and stick around for updates and fixes.' },
];

export default function Process() {
    return (
        <section id="process" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-20">
            <div className="mx-auto mb-12 max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">How it works</p>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">From idea to launch in four steps</h2>
            </div>
            <ol className="grid gap-6 md:grid-cols-4">
                {steps.map((s) => (
                    <li key={s.n} className="rounded-2xl border border-white/60 bg-white/70 p-6 dark:border-gray-700/60 dark:bg-gray-800/60">
                        <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">{s.n}</span>
                        <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">{s.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.body}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}
