import Link from 'next/link';

const reasons = [
    { title: 'Real engineering experience', body: 'Software developer at MacLean Engineering since 2021. Today I build HMIs (the screens operators use to monitor and control heavy machines), plus full-stack apps, APIs, 3D data tools and Azure deployments.' },
    { title: 'Business and data sense', body: 'A background in financial advisory at Deloitte and a Master of Data Science in progress, so the numbers matter as much as the code.' },
    { title: 'One person, whole picture', body: 'Design, code, data and marketing under one roof. No hand-offs, and you always know who to call.' },
];

export default function WhyMe() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-20">
            <div className="grid items-start gap-10 md:grid-cols-[1fr_1.5fr]">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">Why work with me</p>
                    <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Built by someone who does this every day</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        I&apos;m not an agency with layers of account managers. You work directly with me, the person writing your code.
                    </p>
                    <Link href="/about" className="mt-6 inline-block font-semibold text-pink-600 underline-offset-4 hover:underline dark:text-pink-400">
                        Read my background →
                    </Link>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                        Hiring an engineer?{' '}
                        <Link href="/about" className="font-semibold text-purple-700 underline-offset-4 hover:underline dark:text-purple-300">
                            See my experience and résumé →
                        </Link>
                    </p>
                </div>
                <div className="grid gap-5">
                    {reasons.map((r) => (
                        <div key={r.title} className="rounded-2xl border border-white/60 bg-white/70 p-6 dark:border-gray-700/60 dark:bg-gray-800/60">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{r.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{r.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
