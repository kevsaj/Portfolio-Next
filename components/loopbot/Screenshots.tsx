import { useCallback, useEffect, useRef, useState } from 'react';
import { SCREENSHOTS } from '../../utils/loopbot';

/**
 * Horizontal scroll-snap row of phone screenshots. Arrow buttons on desktop,
 * swipe on phones; click a shot to open it larger (Esc closes, arrows move).
 */
export default function Screenshots() {
    const rowRef = useRef<HTMLUListElement>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [open, setOpen] = useState<number | null>(null);

    const scroll = (dir: 1 | -1) => {
        const row = rowRef.current;
        if (!row) return;
        row.scrollBy({ left: dir * row.clientWidth * 0.8, behavior: 'smooth' });
    };

    const show = (i: number) => {
        setOpen(i);
        dialogRef.current?.showModal();
    };
    const close = () => dialogRef.current?.close();
    const move = useCallback((dir: 1 | -1) => {
        setOpen((i) => (i === null ? i : (i + dir + SCREENSHOTS.length) % SCREENSHOTS.length));
    }, []);

    useEffect(() => {
        const d = dialogRef.current;
        if (!d) return;
        const onClose = () => setOpen(null);
        d.addEventListener('close', onClose);
        return () => d.removeEventListener('close', onClose);
    }, []);

    const current = open === null ? null : SCREENSHOTS[open];

    return (
        <div className="relative">
            <ul
                ref={rowRef}
                className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:thin] md:gap-5"
                aria-label="Screenshots"
            >
                {SCREENSHOTS.map((s, i) => (
                    <li key={s.src} className="w-[70vw] max-w-[280px] shrink-0 snap-start md:w-[240px]">
                        <figure>
                            <button
                                type="button"
                                onClick={() => show(i)}
                                className="block w-full overflow-hidden rounded-[1.75rem] border-[6px] border-[#0f1018] bg-[#0f1018] shadow-xl transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0]"
                                aria-label={`Open screenshot: ${s.alt}`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={s.src}
                                    srcSet={s.src2x ? `${s.src} 540w, ${s.src2x} 1080w` : undefined}
                                    sizes="(min-width: 768px) 240px, 70vw"
                                    alt={s.alt}
                                    width={540}
                                    height={1080}
                                    loading={i < 2 ? 'eager' : 'lazy'}
                                    className="h-auto w-full rounded-[1.25rem]"
                                />
                            </button>
                            <figcaption className="mt-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">{s.alt}</figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
            <div className="mt-2 hidden justify-center gap-3 md:flex">
                <button type="button" onClick={() => scroll(-1)} aria-label="Previous screenshots" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white/70 text-xl text-gray-800 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0] dark:border-gray-600 dark:bg-gray-800/70 dark:text-gray-100">
                    ←
                </button>
                <button type="button" onClick={() => scroll(1)} aria-label="Next screenshots" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white/70 text-xl text-gray-800 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0] dark:border-gray-600 dark:bg-gray-800/70 dark:text-gray-100">
                    →
                </button>
            </div>

            <dialog
                ref={dialogRef}
                aria-label="Screenshot"
                onClick={(e) => { if (e.target === dialogRef.current) close(); }}
                onKeyDown={(e) => {
                    if (e.key === 'ArrowRight') move(1);
                    if (e.key === 'ArrowLeft') move(-1);
                }}
                className="m-auto max-h-[100dvh] max-w-[100vw] bg-transparent p-4 backdrop:bg-black/80"
            >
                {current && (
                    <figure className="flex flex-col items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={current.src2x ?? current.src} alt={current.alt} className="max-h-[80dvh] w-auto rounded-[1.5rem] border-[6px] border-[#0f1018]" />
                        <figcaption className="mt-3 text-center text-sm font-medium text-white">{current.alt}</figcaption>
                        <div className="mt-3 flex gap-3">
                            <button type="button" onClick={() => move(-1)} aria-label="Previous screenshot" className="h-11 w-11 rounded-full bg-white/15 text-xl text-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0]">←</button>
                            <button type="button" onClick={close} className="h-11 rounded-full bg-white/15 px-5 font-semibold text-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0]">Close</button>
                            <button type="button" onClick={() => move(1)} aria-label="Next screenshot" className="h-11 w-11 rounded-full bg-white/15 text-xl text-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0]">→</button>
                        </div>
                    </figure>
                )}
            </dialog>
        </div>
    );
}
