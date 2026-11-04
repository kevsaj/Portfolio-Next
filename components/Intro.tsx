import Image from 'next/image';
import Link from 'next/link';

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
                    <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">About me</p>
                    <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white">Hi, I&apos;m Kevin Sajan</h1>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">Full-stack developer and data scientist in training · Toronto, Ontario, Canada</p>
                    <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
                        <p>
                            I build software that solves real problems. By day I&apos;m a software developer at MacLean Engineering, where I build machine HMIs, the
                            interfaces operators use to monitor and run heavy equipment. Over the years there I&apos;ve also built full-stack web apps, REST APIs, Python desktop tools and 3D point cloud
                            visualizations, and deployed them on Microsoft Azure.
                        </p>
                        <p>
                            Before that I worked in financial advisory and tax at Deloitte, automating document workflows and digging into
                            invoices and financial data. That mix of code and business is why I care about results, not just features.
                        </p>
                        <p>
                            I&apos;m currently completing a Master of Data Science at the University of Pittsburgh, focused on data modelling,
                            warehousing and AI in data management. Through KIS Studios I take on client projects of every shape: websites,
                            apps, stores, games, data work and whatever else is holding your business back online.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/#contact" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow hover:from-pink-600 hover:to-purple-700">
                            Work with me
                        </Link>
                        <a href="/Kevin Sajan Resume.pdf" download="Kevin Sajan Resume.pdf" className="rounded-full border border-gray-300 bg-white/70 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-white dark:border-gray-600 dark:bg-gray-800/70 dark:text-gray-100">
                            Download resume (PDF)
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-sajan/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-blue-300 px-5 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30">
                            LinkedIn
                        </a>
                        <a href="https://github.com/kevsaj" target="_blank" rel="noopener noreferrer" className="rounded-full border border-purple-300 px-5 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/30">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
