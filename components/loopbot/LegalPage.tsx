import Link from 'next/link';
import type { ReactNode } from 'react';
import SiteHead from '../SiteHead';
import SiteNav from '../SiteNav';
import Footer from '../Footer';

interface LegalPageProps {
    /** Page heading, exactly as in the source document, e.g. "LoopBot Privacy Policy". */
    title: string;
    description: string;
    path: string;
    updated: string;
    summary?: ReactNode;
    children: ReactNode;
}

/** Shared layout for LoopBot's Privacy Policy and Terms of Use. */
export default function LegalPage({ title, description, path, updated, summary, children }: LegalPageProps) {
    return (
        <>
            <SiteHead title={`${title} | KIS Studios`} description={description} path={path} icon="/loopbot/icon.webp" />
            <SiteNav />
            <main className="mx-auto max-w-[70ch] px-4 pt-12 pb-20">
                <Link href="/loopbot" className="text-sm font-semibold text-teal-700 hover:underline dark:text-[#7ff2e0]">
                    ← LoopBot
                </Link>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">{title}</h1>
                <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">Last updated: {updated}</p>
                {summary && (
                    <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50/80 p-5 text-gray-800 dark:border-[#7ff2e0]/30 dark:bg-[#1b1d2a] dark:text-[#ece6f5]">
                        {summary}
                    </div>
                )}
                <div className="legal mt-4 text-gray-700 dark:text-gray-300 [&_a]:font-medium [&_a]:text-teal-700 [&_a]:underline [&_a]:underline-offset-2 dark:[&_a]:text-[#7ff2e0] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 dark:[&_h2]:text-white [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_strong]:font-semibold [&_strong]:text-gray-900 dark:[&_strong]:text-white">
                    {children}
                </div>
                <p className="mt-12 text-sm">
                    <Link href="/loopbot" className="font-semibold text-teal-700 hover:underline dark:text-[#7ff2e0]">← Back to LoopBot</Link>
                </p>
            </main>
            <Footer />
        </>
    );
}
