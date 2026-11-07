import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SiteHead, { SITE_URL } from '../../components/SiteHead';
import SiteNav from '../../components/SiteNav';
import Footer from '../../components/Footer';
import CtaBanner from '../../components/CtaBanner';
import ScrollAnimation from '../../components/ScrollAnimation';
import Skyline from '../../components/loopbot/Skyline';
import { CONTACT_EMAIL } from '../../utils/site';
import {
    FEATURE_GRAPHIC,
    GITHUB_URL,
    ITCH_EMBED_URL,
    ITCH_URL,
    PLAY_LIVE,
    PLAY_URL,
    SCREENSHOTS,
    TESTER_FORM_URL,
} from '../../utils/loopbot';

const features = [
    {
        icon: '🧩',
        title: 'Real coding ideas, no jargon.',
        body: 'Sequences, loops, functions, if/else and while loops, introduced one at a time, so each idea clicks before the next one arrives.',
    },
    {
        icon: '💡',
        title: 'Small floors, big “aha” moments.',
        body: 'Every floor fits on one screen. Some teach a new idea without a single word of text. Clear it in as few blocks as possible to earn all three stars.',
    },
    {
        icon: '</>',
        title: 'See the real code.',
        body: 'Every program you build has a read-only code view. On the top floors you can switch to typing the code yourself.',
    },
];

/** Tower 1, listed top floor first so it reads like a building. */
const zones = [
    { floors: '41 to 50', zone: 'Rooftop', learn: 'Pro mode: type the code yourself.' },
    { floors: '31 to 40', zone: 'Control Room', learn: 'Conditions: if/else and while loops that react to walls, crates and switches.' },
    { floors: '21 to 30', zone: 'Workshop', learn: 'Functions (F1, F2): name a routine once, use it everywhere.' },
    { floors: '11 to 20', zone: 'Maintenance', learn: 'Repeat loops: do more with fewer blocks.' },
    { floors: '1 to 10', zone: 'Lobby', learn: 'Sequences: forward, turn, jump. Plan a route step by step.' },
];

const littleThings = [
    'LoopBot has moods: it blinks, looks around, chirps when it’s happy and gets nervous before a risky jump.',
    'Step through your program one move at a time, or speed it up 2x or 4x.',
    'Hints when you’re stuck, never a wall of text.',
    'Confetti when you nail par. Calm, kind feedback when you don’t.',
    'Works offline. Progress is saved on your device. No account needed.',
    'Respects “reduce motion” settings.',
];

const stack = ['React 19', 'TypeScript', 'Phaser 3', 'Capacitor 8', 'Vite', 'Vitest', 'dnd-kit', 'GitHub Actions'];

const story = [
    {
        title: 'One codebase, every screen.',
        body: 'The editor (blocks, drag and drop, undo, the code view) is a React app. The isometric board is a Phaser scene inside it. Capacitor wraps the same web build as a native Android app, with real phone haptics. The free demo on itch.io is the same build, limited to the first ten floors.',
    },
    {
        title: 'A tiny programming language.',
        body: 'LoopBot runs your program through its own interpreter, written in TypeScript. It steps through blocks one action at a time, so it can highlight the current block, pause, step, and stop runaway loops safely. There’s no eval anywhere. The Rooftop’s typed-code mode parses what you type back into blocks, with line-numbered error messages.',
    },
    {
        title: 'A deterministic simulation.',
        body: 'The game world is pure TypeScript with fixed rules, so the same program always gives the same result. That makes every floor testable.',
    },
    {
        title: 'Floors are data.',
        body: 'Each of the 50 floors is a small JSON file: the grid, tile heights, crates, switches, doors, the allowed blocks and the par. Adding a floor means writing a file, not code.',
    },
    {
        title: 'A solver that checks every floor.',
        body: 'A built-in solver searches for the shortest route and the smallest possible program for each floor. Automated tests run it on every floor on every change, so a floor can’t ship with a par that’s wrong or a shortcut nobody planned for.',
    },
    {
        title: 'Art drawn in code.',
        body: 'There are no image files for the game world. The isometric dioramas, the bot, its moods and the confetti are all drawn with code in Phaser, and the sky is CSS and SVG. The look is inspired by isometric puzzle games, with boards that turn in 90-degree steps.',
    },
    {
        title: 'Sound made from scratch.',
        body: 'Every chirp, click and fanfare is synthesised live with the Web Audio API. No audio files.',
    },
    {
        title: 'Fast and light.',
        body: 'The board engine loads in the background while you look at the menu, so the first screen opens fast (about 0.4 MB of JavaScript to start).',
    },
    {
        title: 'Built with AI as a teammate.',
        body: 'LoopBot was designed and built by Kevin working with Claude, Anthropic’s AI assistant: planning the requirements, writing and reviewing code, designing floors and testing them. Every change went through pull requests and automated tests on GitHub.',
    },
];

const flow = ['Floor file (JSON)', 'Solver checks par', 'You build a program', 'Interpreter runs it', 'Board animates it', 'Stars'];

const numbers = [
    { value: '50', label: 'floors in Tower 1' },
    { value: '5', label: 'zones, one coding idea each' },
    { value: '0', label: 'image or audio files for the game world' },
    { value: '1', label: 'codebase for web and Android' },
];

const testerHref = TESTER_FORM_URL || `mailto:${CONTACT_EMAIL}?subject=LoopBot%20Android%20tester&body=Hi%20Kevin%2C%20I%27d%20like%20to%20test%20LoopBot.%20My%20Play%20Store%20Gmail%20address%20is%3A%20`;

const shareImage = FEATURE_GRAPHIC
    ? { url: `${SITE_URL}${FEATURE_GRAPHIC.replace(/\.webp$/, '.png')}`, width: 1024, height: 500, alt: 'LoopBot: a coding puzzle game by KIS Studios' }
    : { url: `${SITE_URL}/loopbot/icon-512.png`, width: 512, height: 512, alt: 'LoopBot app icon: a small white robot with a glowing teal eye' };

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'LoopBot',
    url: ITCH_URL,
    sameAs: [`${SITE_URL}/loopbot`, GITHUB_URL],
    image: `${SITE_URL}/loopbot/icon-512.png`,
    description: 'Program a little robot and climb a 50-floor skyscraper. LoopBot teaches loops, functions and logic through bite-sized puzzles.',
    genre: 'Puzzle',
    gamePlatform: ['Web browser', 'Android'],
    audience: { '@type': 'PeopleAudience', suggestedMinAge: 13 },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
    author: { '@id': `${SITE_URL}/#business` },
    publisher: { '@id': `${SITE_URL}/#business` },
};

/** Google Play slot: "coming soon" until PLAY_LIVE is switched on. */
function PlaySlot({ className = '' }: { className?: string }) {
    if (PLAY_LIVE) {
        return (
            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-full border border-[#7ff2e0]/60 px-6 py-3 font-semibold text-[#ece6f5] transition hover:bg-white/10 ${className}`}>
                Get it on Google Play
            </a>
        );
    }
    return (
        <span className={`inline-flex cursor-default items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-[#ece6f5]/60 ${className}`} aria-label="Google Play: coming soon">
            Google Play
            <span className="rounded-full bg-[#7ff2e0]/15 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[#7ff2e0]">Coming soon</span>
        </span>
    );
}

/** Click-to-load demo: nothing from itch.io loads until the player asks for it. */
function ItchDemo() {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[1.75rem] border-4 border-[#262a3d] bg-gradient-to-b from-[#2b2546] to-[#1b1d2a] shadow-2xl" style={{ aspectRatio: '420 / 820' }}>
            {loaded && ITCH_EMBED_URL ? (
                <iframe
                    src={ITCH_EMBED_URL}
                    title="LoopBot demo"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                />
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                    <Image src="/loopbot/icon-512.webp" alt="" width={160} height={160} className="h-32 w-32 rounded-3xl shadow-xl md:h-40 md:w-40" unoptimized />
                    {ITCH_EMBED_URL ? (
                        <button
                            type="button"
                            onClick={() => setLoaded(true)}
                            className="rounded-full bg-[#7ff2e0] px-8 py-3 text-lg font-bold text-[#1b1d2a] shadow-lg transition hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7ff2e0]/50"
                        >
                            ▶ Play LoopBot
                        </button>
                    ) : (
                        <a
                            href={ITCH_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-[#7ff2e0] px-8 py-3 text-lg font-bold text-[#1b1d2a] shadow-lg transition hover:scale-105"
                        >
                            ▶ Play LoopBot
                        </a>
                    )}
                    <p className="text-sm text-[#ece6f5]/70">Floors 1 to 10 · Free</p>
                </div>
            )}
        </div>
    );
}

export default function LoopBot() {
    return (
        <>
            <SiteHead
                title="LoopBot: a coding puzzle game | KIS Studios"
                description="Program a little robot and climb a 50-floor skyscraper. LoopBot teaches loops, functions and logic through bite-sized puzzles. Play the free demo."
                path="/loopbot"
                jsonLd={jsonLd}
                image={shareImage}
                icon="/loopbot/icon.webp"
            />
            <SiteNav />
            <main>
                {/* Hero */}
                <section className="mx-auto max-w-6xl px-4 pt-8 pb-12 md:pt-12">
                    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1b1d2a] via-[#1f2033] to-[#2b2546] text-[#ece6f5] shadow-2xl">
                        <div className="grid grid-cols-1 items-center gap-8 p-6 pb-0 sm:p-10 sm:pb-0 md:grid-cols-[1.2fr_1fr] md:p-14 md:pb-14">
                            <div className="relative z-10">
                                <p className="mb-4 inline-block rounded-full bg-[#7ff2e0]/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#7ff2e0]">
                                    A KIS Studios game · Ages 13+
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image src="/loopbot/icon.webp" alt="LoopBot app icon" width={72} height={72} className="h-16 w-16 rounded-2xl shadow-lg md:h-[72px] md:w-[72px]" unoptimized priority />
                                    <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">LoopBot</h1>
                                </div>
                                <p className="mt-6 text-2xl font-semibold leading-snug md:text-3xl">
                                    Program a little robot. Climb the tallest tower in the city.{' '}
                                    <span className="text-[#7ff2e0]">Learn to think like a coder.</span>
                                </p>
                                <p className="mt-5 max-w-xl text-lg text-[#ece6f5]/80">
                                    A puzzle game where every floor is a tiny coding challenge. Snap command blocks together, press Run,
                                    and watch LoopBot carry out your plan, mistakes and all.
                                </p>
                                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                    <a href="#play" className="rounded-full bg-[#7ff2e0] px-7 py-3 text-center font-bold text-[#1b1d2a] shadow-lg transition hover:scale-105">
                                        Play the free demo
                                    </a>
                                    <PlaySlot />
                                </div>
                                <p className="mt-4 text-sm text-[#ece6f5]/70">
                                    {PLAY_LIVE ? (
                                        <>Now on Android. </>
                                    ) : (
                                        <>Coming soon to Android. </>
                                    )}
                                    <a href="#testers" className="font-semibold text-[#7ff2e0] underline-offset-2 hover:underline">
                                        Join the Android test
                                    </a>
                                    {!PLAY_LIVE && ' to play it first.'}
                                </p>
                            </div>
                            <div className="relative -mx-6 sm:-mx-10 md:mx-0">
                                {FEATURE_GRAPHIC ? (
                                    <Image src={FEATURE_GRAPHIC} alt="LoopBot, the little robot, in front of a city skyline at dusk" width={1024} height={500} className="h-auto w-full rounded-2xl" unoptimized priority />
                                ) : (
                                    <Skyline />
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is LoopBot */}
                <ScrollAnimation animation="fadeInUp">
                    <section className="mx-auto max-w-6xl px-4 py-16">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-[#7ff2e0]">What is LoopBot</p>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Take the tower back, one program at a time</h2>
                            <p className="mt-5 text-lg text-gray-700 dark:text-gray-300">
                                VANTA, a rogue salvage AI, has taken over the Meridian Spire, the tallest skyscraper in the city, floor by
                                floor. You&apos;re LoopBot, a small maintenance robot with a big job. With PATCH talking you through it over
                                the radio, you climb all 50 floors, one puzzle at a time, to take the tower back.
                            </p>
                            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                                You don&apos;t steer LoopBot. You program it. Plan a route with blocks like forward, turn and jump, press
                                Run, and see if your plan works. When it doesn&apos;t, LoopBot shows you exactly where it went wrong, so you
                                can fix it and try again.
                            </p>
                        </div>
                        <div className="grid gap-5 md:grid-cols-3">
                            {features.map((f) => (
                                <div key={f.title} className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-700/60 dark:bg-gray-800/60">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1b1d2a] font-mono text-xl font-bold text-[#7ff2e0]" aria-hidden="true">{f.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{f.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </ScrollAnimation>

                {/* Play it now */}
                <section id="play" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
                    <div className="rounded-3xl bg-[#1b1d2a] px-4 py-12 text-center text-[#ece6f5] shadow-2xl sm:px-10">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#7ff2e0]">Play it now</p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Play the demo</h2>
                        <p className="mx-auto mt-4 max-w-xl text-[#ece6f5]/80">
                            Floors 1 to 10, free, right here in your browser. Works with a mouse or a touchscreen.
                        </p>
                        <div className="mt-8">
                            <ItchDemo />
                        </div>
                        <p className="mt-6 text-sm text-[#ece6f5]/70">
                            Prefer a bigger window?{' '}
                            <a href={ITCH_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7ff2e0] underline underline-offset-2">
                                Play on itch.io
                            </a>
                            .
                        </p>
                    </div>
                </section>

                {/* How you learn */}
                <ScrollAnimation animation="fadeInUp">
                    <section className="mx-auto max-w-6xl px-4 py-16">
                        <div className="mx-auto mb-10 max-w-2xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-[#7ff2e0]">How you learn</p>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Five zones, one idea each</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Tower 1 has 50 floors. Start in the Lobby and work your way up to the Rooftop.</p>
                        </div>
                        <ol className="mx-auto max-w-2xl" aria-label="The five zones of Tower 1, from the Rooftop down to the Lobby">
                            {zones.map((z, i) => (
                                <li
                                    key={z.zone}
                                    className={`flex gap-4 border-x-4 border-t-4 border-[#262a3d] bg-[#1b1d2a] p-5 text-[#ece6f5] sm:gap-6 sm:p-6 ${i === 0 ? 'rounded-t-2xl' : ''} ${i === zones.length - 1 ? 'rounded-b-2xl border-b-4' : ''}`}
                                    style={{ marginInline: `${(zones.length - 1 - i) * 0.75}rem` }}
                                >
                                    <div className="flex w-20 shrink-0 flex-col justify-center rounded-xl bg-[#262a3d] p-2 text-center sm:w-24">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#ece6f5]/60">Floors</span>
                                        <span className="text-sm font-bold text-[#7ff2e0] sm:text-base">{z.floors}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">{z.zone}</h3>
                                        <p className="mt-1 text-sm text-[#ece6f5]/80">{z.learn}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-6 text-center text-sm italic text-gray-500 dark:text-gray-400">More towers in new cities are on the way.</p>
                    </section>
                </ScrollAnimation>

                {/* Little things */}
                <ScrollAnimation animation="fadeInUp">
                    <section className="mx-auto max-w-6xl px-4 py-12">
                        <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60 md:p-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Little things players notice</h2>
                            <ul className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
                                {littleThings.map((t) => (
                                    <li key={t} className="flex gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-500 dark:bg-[#7ff2e0]" aria-hidden="true" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </ScrollAnimation>

                {/* Screenshots (shown once the images are added) */}
                {SCREENSHOTS.length > 0 && (
                    <ScrollAnimation animation="fadeInUp">
                        <section className="mx-auto max-w-6xl px-4 py-16">
                            <div className="mx-auto mb-10 max-w-2xl text-center">
                                <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-[#7ff2e0]">Screenshots</p>
                                <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">A look inside the tower</h2>
                            </div>
                            <ul className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
                                {SCREENSHOTS.map((s) => (
                                    <li key={s.src} className="w-56 shrink-0 snap-center lg:w-auto">
                                        <figure>
                                            <div className="overflow-hidden rounded-[1.75rem] border-[6px] border-[#1b1d2a] bg-[#1b1d2a] shadow-xl">
                                                <Image src={s.src} alt={s.caption} width={540} height={1080} className="h-auto w-full rounded-[1.25rem]" unoptimized />
                                            </div>
                                            <figcaption className="mt-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300">{s.caption}</figcaption>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </ScrollAnimation>
                )}

                {/* How it was built */}
                <ScrollAnimation animation="fadeInUp">
                    <section id="tech" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
                        <div className="mx-auto mb-8 max-w-2xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">Under the hood</p>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">How LoopBot was built</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                LoopBot is a one-person project, built with a modern web stack and shipped to the browser and to phones from the same code.
                            </p>
                        </div>
                        <ul className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2" aria-label="The stack">
                            {stack.map((s) => (
                                <li key={s} className="rounded-full bg-[#1b1d2a] px-4 py-1.5 text-sm font-semibold text-[#7ff2e0] shadow-sm">{s}</li>
                            ))}
                        </ul>

                        <dl className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                            {numbers.map((n) => (
                                <div key={n.label} className="rounded-2xl border border-white/60 bg-white/70 p-5 text-center shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60">
                                    <dt className="sr-only">{n.label}</dt>
                                    <dd>
                                        <span className="block text-4xl font-extrabold text-teal-700 dark:text-[#7ff2e0]">{n.value}</span>
                                        <span className="mt-1 block text-sm text-gray-600 dark:text-gray-300">{n.label}</span>
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {story.map((s) => (
                                <div key={s.title} className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60">
                                    <h3 className="font-bold text-gray-900 dark:text-white">{s.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.body}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 rounded-3xl bg-[#1b1d2a] p-6 text-[#ece6f5] shadow-xl md:p-8">
                            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-[#7ff2e0]">How a floor works</h3>
                            <ol className="mt-6 flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
                                {flow.map((step, i) => (
                                    <li key={step} className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row">
                                        <span className={`w-full rounded-xl px-3 py-3 text-center text-sm font-semibold ${i === flow.length - 1 ? 'bg-[#7ff2e0] text-[#1b1d2a]' : 'bg-[#262a3d]'}`}>
                                            {step}
                                        </span>
                                        {i < flow.length - 1 && (
                                            <span className="text-[#7ff2e0]" aria-hidden="true">
                                                <span className="lg:hidden">↓</span>
                                                <span className="hidden lg:inline">→</span>
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <p className="mt-8 text-center">
                            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full border border-gray-300 bg-white/60 px-7 py-3 font-semibold text-gray-800 transition hover:bg-white dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-100 dark:hover:bg-gray-800">
                                Read the code on GitHub
                            </a>
                        </p>
                    </section>
                </ScrollAnimation>

                {/* Become a tester */}
                <section id="testers" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
                    <div className="rounded-3xl bg-gradient-to-br from-[#1b1d2a] to-[#2b2546] p-8 text-[#ece6f5] shadow-2xl md:p-12">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-[#7ff2e0]">Become a tester</p>
                            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Help launch LoopBot on Android</h2>
                            <p className="mt-5 text-lg text-[#ece6f5]/85">
                                LoopBot is heading to Google Play, and I&apos;m looking for testers. You&apos;ll get the full game early, free,
                                on your Android phone. All I ask is that you stay in the test for 14 days and tell me what you think: what
                                was fun, what was confusing, what broke.
                            </p>
                            <a
                                href={testerHref}
                                {...(TESTER_FORM_URL ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="mt-8 inline-block rounded-full bg-[#7ff2e0] px-8 py-3 text-lg font-bold text-[#1b1d2a] shadow-lg transition hover:scale-105"
                            >
                                Join the test
                            </a>
                            <p className="mt-5 text-xs text-[#ece6f5]/60">
                                Android 7.0 or newer. You&apos;ll need the Google account you use for the Play Store. I&apos;ll only use your
                                email to invite you to the test.
                            </p>
                        </div>
                    </div>
                </section>

                <CtaBanner
                    title="Want a game or app like LoopBot?"
                    body="I design and build games, web apps and mobile apps, from the first idea to the store listing. Let’s talk about yours, free."
                />

                {/* Footer strip */}
                <nav aria-label="LoopBot links" className="mx-auto max-w-6xl px-4 pb-12">
                    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <li><Link href="/loopbot/privacy" className="hover:text-pink-600">Privacy Policy</Link></li>
                        <li><Link href="/loopbot/terms" className="hover:text-pink-600">Terms of Use</Link></li>
                        <li><a href={ITCH_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">itch.io</a></li>
                        <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">GitHub</a></li>
                        <li><a href={`mailto:${CONTACT_EMAIL}?subject=LoopBot`} className="hover:text-pink-600">Contact</a></li>
                        <li>
                            {PLAY_LIVE ? (
                                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Google Play</a>
                            ) : (
                                <span>Google Play: coming soon</span>
                            )}
                        </li>
                    </ul>
                </nav>
            </main>
            <Footer />
        </>
    );
}
