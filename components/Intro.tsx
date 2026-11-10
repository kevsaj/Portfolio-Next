import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_EMAIL } from '../utils/site';

function Intro() {
    return (
        <section id="intro" className="mx-auto max-w-5xl px-4 pt-16 pb-8">
            <div className="flex flex-col items-center gap-10 rounded-3xl bg-gradient-to-b from-white/60 to-pink-100/80 p-8 shadow-lg md:flex-row md:items-start md:p-12 dark:from-gray-800/60 dark:to-gray-900/60">
                <Image
                    src="/self.png"
                    alt="Kevin Sajan"
                    width={176}
                    height={176}
                    className="h-44 w-44 shrink-0 rounded-full border-4 border-pink-200 object-cover shadow-xl"
                    priority
                />
                <div>
                    <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                        Open to software engineering roles
                    </p>
                    <h1 className="mt-3 text-4xl font-extrabold text-gray-900 dark:text-white">Hi, I&apos;m Kevin Sajan</h1>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">Software developer · machine HMIs and full-stack apps · Greater Toronto Area, on-site, hybrid or remote</p>
                    <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
                        <p>
                            I build the screens people use to run heavy machines. At MacLean Engineering I develop operator HMIs
                            (human-machine interfaces) for underground mining equipment: in-cab displays written in C++ and Qt/QML that
                            talk to the machine&apos;s controller, and Python software on rugged tablets for running machines by remote control.
                        </p>
                        <p>
                            I&apos;m just as comfortable on the web. I&apos;ve built React front ends, Node and PostgreSQL APIs and Azure
                            deployments at work, and on my own time I&apos;ve designed, built and shipped two products end to end:{' '}
                            <Link href="/goodsprout" className="font-semibold text-pink-600 hover:underline dark:text-pink-400">Goodsprout</Link>, an Android app, and{' '}
                            <Link href="/loopbot" className="font-semibold text-pink-600 hover:underline dark:text-pink-400">LoopBot</Link>, a coding puzzle game.
                        </p>
                        <p>
                            Before software I worked in financial advisory and tax at Deloitte, where I started automating my own paperwork
                            and never stopped. I&apos;m also completing a Master of Data Science at the University of Pittsburgh.
                        </p>
                    </div>
                    <dl className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                        {[
                            ['5+ years', 'building software professionally'],
                            ['5 HMIs', 'worked on across machine lines'],
                            ['4 → 12', 'developers on my team as it grew'],
                            ['2 products', 'shipped on my own'],
                        ].map(([k, v]) => (
                            <div key={k} className="rounded-2xl border border-white/60 bg-white/70 p-3 dark:border-gray-700/60 dark:bg-gray-800/60">
                                <dt className="text-lg font-extrabold text-gray-900 dark:text-white">{k}</dt>
                                <dd className="text-gray-600 dark:text-gray-300">{v}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="/Kevin Sajan Resume.pdf" download="Kevin Sajan Resume.pdf" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow hover:from-pink-600 hover:to-purple-700">
                            Download résumé (PDF)
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-sajan/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-blue-300 px-5 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30">
                            LinkedIn
                        </a>
                        <a href="https://github.com/kevsaj" target="_blank" rel="noopener noreferrer" className="rounded-full border border-purple-300 px-5 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/30">
                            GitHub
                        </a>
                        <Link href="/hmi" className="rounded-full border border-gray-300 bg-white/70 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-white dark:border-gray-600 dark:bg-gray-800/70 dark:text-gray-100">
                            HMI case study
                        </Link>
                        <a href={`mailto:${CONTACT_EMAIL}?subject=Software%20role`} className="rounded-full border border-gray-300 bg-white/70 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-white dark:border-gray-600 dark:bg-gray-800/70 dark:text-gray-100">
                            Email me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
