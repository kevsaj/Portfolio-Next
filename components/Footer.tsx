import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/40 bg-white/40 dark:border-gray-700/50 dark:bg-gray-900/60">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-gray-600 dark:text-gray-400 md:flex-row md:items-center md:justify-between">
                <p>© {new Date().getFullYear()} KIS Studios · Keep it simple · Kevin Sajan, Toronto</p>
                <div className="flex flex-wrap gap-4">
                    <Link href="/#services" className="hover:text-pink-600">Services</Link>
                    <Link href="/about" className="hover:text-pink-600">About</Link>
                    <Link href="/#contact" className="hover:text-pink-600">Contact</Link>
                    <a href="mailto:kevsaj@gmail.com" className="hover:text-pink-600">kevsaj@gmail.com</a>
                    <a href="https://github.com/kevsaj" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">GitHub</a>
                    <a href="https://www.linkedin.com/in/kevin-sajan/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
