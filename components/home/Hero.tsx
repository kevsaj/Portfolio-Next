import Link from 'next/link';
import Image from 'next/image';

const chips = ['Websites', 'Web & mobile apps', 'Shopify stores', 'Games', 'APIs', 'Databases', 'Dashboards & reports', 'Branding', 'Marketing'];

export default function Hero() {
    return (
        <section id="top" className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-24">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.4fr_1fr]">
                <div>
                    <p className="mb-4 inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
                        KIS Studios · Keep it simple · Toronto & remote
                    </p>
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl">
                        Got an idea, or stuck online?{' '}
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Let&apos;s build it together.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-gray-700 dark:text-gray-300">
                        I&apos;m Kevin, a full-stack developer and data person. I design and build websites, apps, online stores,
                        games, APIs, databases and the reports that make sense of it all, and I help you get found online once it&apos;s live.
                        One person, start to finish, in plain English.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href="/#contact" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3 text-center font-semibold text-white shadow-lg transition hover:scale-105 hover:from-pink-600 hover:to-purple-700">
                            Book a free consult
                        </Link>
                        <Link href="/#services" className="rounded-full border border-gray-300 bg-white/60 px-7 py-3 text-center font-semibold text-gray-800 transition hover:bg-white dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-100 dark:hover:bg-gray-800">
                            See what I can build
                        </Link>
                    </div>
                    <ul className="mt-8 flex flex-wrap gap-2" aria-label="Things I build">
                        {chips.map((c) => (
                            <li key={c} className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm dark:bg-gray-800/70 dark:text-gray-300">{c}</li>
                        ))}
                    </ul>
                </div>
                <div className="relative mx-auto w-64 md:w-full md:max-w-sm">
                    <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-pink-300 via-purple-300 to-yellow-200 opacity-60 blur-2xl dark:from-pink-700 dark:via-purple-800 dark:to-indigo-800" aria-hidden="true" />
                    <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/80 shadow-2xl dark:border-gray-700">
                        <Image src="/self.png" alt="Kevin Sajan" width={480} height={480} className="h-auto w-full object-cover" priority />
                    </div>
                    <div className="relative -mt-8 ml-4 inline-block rounded-2xl bg-white px-4 py-3 shadow-xl dark:bg-gray-800">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Kevin Sajan</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Developer since 2021 · MDS student</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
