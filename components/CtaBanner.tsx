import Link from 'next/link';

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
                <Link href="/#contact" className="shrink-0 rounded-full bg-white px-7 py-3 font-semibold text-purple-700 shadow-lg transition hover:scale-105">
                    Start a project
                </Link>
            </div>
        </section>
    );
}
