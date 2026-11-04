import Link from 'next/link';
import { BOOKING_URL } from '../utils/site';

interface CtaBannerProps {
    title?: string;
    body?: string;
}

export default function CtaBanner({
    title = 'Ready to get unstuck?',
    body = 'Tell me what you’re working on. I’ll reply within a day with ideas and next steps, free.',
}: CtaBannerProps) {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-600 p-10 text-center text-white shadow-2xl md:flex-row md:justify-between md:text-left">
                <div>
                    <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
                    <p className="mt-2 text-pink-50">{body}</p>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-7 py-3 text-center font-semibold text-purple-700 shadow-lg transition hover:scale-105">
                        Book a free call
                    </a>
                    <Link href="/#contact" className="rounded-full border border-white/70 px-7 py-3 text-center font-semibold text-white transition hover:bg-white/10">
                        Send a message
                    </Link>
                </div>
            </div>
        </section>
    );
}
