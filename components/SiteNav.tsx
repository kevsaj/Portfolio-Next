import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
    { href: '/#services', label: 'Services' },
    { href: '/#process', label: 'How it works' },
    { href: '/#work', label: 'Work' },
    { href: '/about', label: 'About' },
];

export default function SiteNav() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-900/70">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Main">
                <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
                    <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">KIS Studios</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400">
                            {l.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <Link href="/#contact" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:from-pink-600 hover:to-purple-700">
                        Start a project
                    </Link>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        className="rounded-md p-2 text-gray-700 dark:text-gray-200"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                            {open
                                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </nav>

            {open && (
                <div id="mobile-menu" className="md:hidden border-t border-white/40 px-4 pb-4 dark:border-gray-700/50">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 font-medium text-gray-800 dark:text-gray-200">
                            {l.label}
                        </Link>
                    ))}
                    <Link href="/#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-center font-semibold text-white">
                        Start a project
                    </Link>
                </div>
            )}
        </header>
    );
}
