import Link from 'next/link';
import type { ReactNode } from 'react';
import SiteHead from '../SiteHead';
import SiteNav from '../SiteNav';
import Footer from '../Footer';

interface LegalPageProps {
    title: string;
    description: string;
    path: string;
    effective: string;
    summary: ReactNode;
    children: ReactNode;
}

/** Shared layout for Goodsprout's Privacy Policy and Terms of Service. */
export default function LegalPage({ title, description, path, effective, summary, children }: LegalPageProps) {
    return (
        <>
            <SiteHead title={`${title} | Goodsprout`} description={description} path={path} />
            <SiteNav />
            <main className="mx-auto max-w-3xl px-4 pt-12 pb-20">
                <Link href="/goodsprout" className="text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400">
                    ← Goodsprout
                </Link>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">Goodsprout {title}</h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Effective {effective}</p>
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 text-gray-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-gray-200">
                    {summary}
                </div>
                <div className="legal mt-4 text-gray-700 dark:text-gray-300 [&_a]:font-medium [&_a]:text-emerald-700 [&_a]:underline [&_a]:underline-offset-2 dark:[&_a]:text-emerald-400 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 dark:[&_h2]:text-white [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}
