import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, type ReactNode } from 'react';
import SiteHead, { SITE_URL } from '../../components/SiteHead';
import SiteNav from '../../components/SiteNav';
import Footer from '../../components/Footer';
import CtaBanner from '../../components/CtaBanner';
import ScrollAnimation from '../../components/ScrollAnimation';
import Skyline from '../../components/loopbot/Skyline';
import StoreBadges, { StoreLine } from '../../components/loopbot/StoreBadges';
import Screenshots from '../../components/loopbot/Screenshots';
import { CONTACT_EMAIL } from '../../utils/site';
import {
    ANDROID_LIVE,
    APPLE_APP_ID,
    DAILY_IMAGE,
    GITHUB_URL,
    HERO_BACKGROUND,
    HERO_POSTER,
    HERO_VIDEO,
    IOS_LIVE,
    ITCH_EMBED_URL,
    ITCH_URL,
    LOCKER_IMAGE,
    LOOPBOT_ICONS,
    LOOPBOT_STATUS,
    LOOPBOT_THEME_COLOR,
    OG_IMAGE,
    PRESS_KIT_ZIP,
    TABLET_SHOT,
    TOWER_IMAGES,
} from '../../utils/loopbot';

const PAGE_URL = `${SITE_URL}/loopbot`;
const OG_ALT = 'LoopBot, a small cream robot with a teal eye, next to the words LoopBot: program a little robot up a tower, one floor at a time.';

/* ---------- Content ---------- */

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
        body: 'Every program you build has a read-only code view. On the top floors, you can type the code yourself.',
    },
];

/** Tower 1, listed top floor first so it reads like a building. */
const zones = [
    { floors: '41 to 50', zone: 'Rooftop', learn: 'Pro mode: type real code yourself, with line-numbered error messages.' },
    { floors: '31 to 40', zone: 'Control Room', learn: 'Conditions: if/else and while loops that react to walls, crates and switches.' },
    { floors: '21 to 30', zone: 'Workshop', learn: 'Functions (F1, F2): name a routine once, use it everywhere.' },
    { floors: '11 to 20', zone: 'Maintenance', learn: 'Repeat loops: do more with fewer blocks.' },
    { floors: '1 to 10', zone: 'Lobby', learn: 'Sequences: forward, turn, jump. Plan a route step by step.' },
];

const dailyCards = [
    { title: 'Daily puzzle and streaks.', body: 'One shared puzzle a day, with a streak counter and freezes to protect it.' },
    { title: 'Achievements and the Locker.', body: 'Earn stars and achievements to unlock new paints, eye colours and antenna tips for LoopBot.' },
    { title: 'Share your best.', body: 'Share a spoiler-free picture of your Daily result, or a card of any floor you’ve cleared.' },
];

const everyone = [
    { lead: 'Français inclus.', body: 'Play the whole game in English or French. It follows your device language, or switch in Settings.' },
    { lead: 'Larger text and colour shapes.', body: 'Bigger text when you need it, and shapes on coloured tiles so colour is never the only clue.' },
    { lead: 'Reduce motion.', body: 'Calmer animations, from your device setting or a switch in the game.' },
    { lead: 'Screen reader and keyboard friendly.', body: 'Buttons and blocks are labelled, and you can play with a keyboard.' },
    { lead: 'Works offline.', body: 'No internet needed to play. Progress stays on your device, with a backup code you can save.' },
    { lead: 'No account, no ads.', body: 'Just open it and play.' },
    { lead: 'LoopBot has moods.', body: 'It blinks, looks around, chirps when it’s happy and gets nervous before a risky jump.' },
    { lead: 'Step, speed up, or slow down.', body: 'Watch your program one move at a time, or at 2x and 4x.' },
    { lead: 'Hints when you’re stuck.', body: 'Never a wall of text.' },
    { lead: 'Original music and sound.', body: 'Every tune and chirp is made for the game.' },
];

/** Tower cards. `band` is the gradient used until a tower picture is added. */
const towers = [
    { city: 'Meridian', tower: 'The Meridian Spire', adds: 'Sequences, loops, functions, if/while, typed code', tag: 'Free · Available now', band: 'from-[#2b2546] via-[#6d4b8f] to-[#f2a65a]', now: true },
    { city: 'Frostline', tower: 'The Northstar Needle', adds: 'Icy floors where LoopBot slides until it hits something', tag: 'Part of LoopBot Plus', band: 'from-[#14304a] via-[#3d7ea6] to-[#cfeefa]' },
    { city: 'Heatwave', tower: 'The Sandglass', adds: 'Timing: heat vents, the wait block and a heat sensor', tag: 'City pack', band: 'from-[#4a1d14] via-[#c2562b] to-[#f6c76b]' },
    { city: 'Twist', tower: 'The Helix', adds: 'Turntables that spin LoopBot, and a compass sensor', tag: 'City pack', band: 'from-[#1c3a2e] via-[#2f8f6f] to-[#b8f0c9]' },
    { city: 'Dockyard', tower: 'The Wavehouse', adds: 'Variables: count with a tally, repeat by it, measure with while', tag: 'City pack', band: 'from-[#0f2a3d] via-[#1f6f8b] to-[#7fd1d9]' },
    { city: 'Twin Spires', tower: 'The Skybridge', adds: 'Two bots, one program: each senses its own world', tag: 'City pack', band: 'from-[#2a1f4a] via-[#5b5bd6] to-[#f0b4e4]' },
    { city: 'Fractal', tower: 'The Fernwork', adds: 'Recursion: functions that call themselves', tag: 'City pack', band: 'from-[#1d3318] via-[#5c8f2f] to-[#e3f2a1]' },
    { city: 'Precinct 404', tower: 'The Watchhouse', adds: 'Teamwork: a partner bot with its own program and a radio', tag: 'City pack', band: 'from-[#1a1a24] via-[#4b4f6b] to-[#ff6b6b]' },
];

/** FAQ: `answer` is shown on the page, `text` (plain, no links) goes in the FAQPage JSON-LD. */
const faq: { q: string; answer: ReactNode; text: string }[] = [
    {
        q: 'Is LoopBot free?',
        text: 'Yes. Tower 1, all 50 floors, and the Daily puzzle are free. There are no ads. More towers will be available later as optional one-time purchases.',
        answer: 'Yes. Tower 1, all 50 floors, and the Daily puzzle are free. There are no ads. More towers will be available later as optional one-time purchases.',
    },
    {
        q: 'Do I need to know how to code?',
        text: 'No. LoopBot starts with three simple blocks and adds one new idea at a time. By the top floors you’re using loops, functions and if/while, and typing real code if you want to.',
        answer: 'No. LoopBot starts with three simple blocks and adds one new idea at a time. By the top floors you’re using loops, functions and if/while, and typing real code if you want to.',
    },
    {
        q: 'What age is it for?',
        text: 'LoopBot is made for teens and adults, ages 13 and up. Younger players who enjoy puzzles can play with a grown-up.',
        answer: 'LoopBot is made for teens and adults, ages 13 and up. Younger players who enjoy puzzles can play with a grown-up.',
    },
    {
        q: 'Which devices can I play on?',
        text: 'Android phones and tablets (Android 7.0 or newer), iPhone and iPad (iOS 15.4 or newer), and any modern web browser for the free 10-floor demo.',
        answer: 'Android phones and tablets (Android 7.0 or newer), iPhone and iPad (iOS 15.4 or newer), and any modern web browser for the free 10-floor demo.',
    },
    {
        q: 'Does it work offline?',
        text: 'Yes. Once installed, you don’t need an internet connection to play.',
        answer: 'Yes. Once installed, you don’t need an internet connection to play.',
    },
    {
        q: 'Is my progress saved? Do I need an account?',
        text: 'No account needed. Progress is saved on your device. You can copy a backup code from Settings to move your progress or keep it safe.',
        answer: 'No account needed. Progress is saved on your device. You can copy a backup code from Settings to move your progress or keep it safe.',
    },
    {
        q: 'What data does LoopBot collect?',
        text: 'No personal information: no name, email or account, no ads and no third-party tracking. The app can send anonymous gameplay statistics (like which floors are hard) to help improve the puzzles, and you can turn that off in Settings. Full details are in the privacy policy.',
        answer: (
            <>
                No personal information: no name, email or account, no ads and no third-party tracking. The app can send anonymous gameplay
                statistics (like which floors are hard) to help improve the puzzles, and you can turn that off in Settings. Full details in
                the <Link href="/loopbot/privacy">privacy policy</Link>.
            </>
        ),
    },
    {
        q: 'Is it available in French?',
        text: 'Oui! The whole game is in English and French. It follows your device language, and you can switch in Settings.',
        answer: 'Oui! The whole game is in English and French. It follows your device language, and you can switch in Settings.',
    },
    {
        q: 'Can I use LoopBot in a classroom?',
        text: `Yes, and I’d love to hear how it goes. Every floor teaches one idea, and the code view shows what the blocks mean in real code. Get in touch at ${CONTACT_EMAIL}.`,
        answer: (
            <>
                Yes, and I&apos;d love to hear how it goes. Every floor teaches one idea, and the code view shows what the blocks mean in
                real code. Get in touch at <a href={`mailto:${CONTACT_EMAIL}?subject=LoopBot%20in%20the%20classroom`}>{CONTACT_EMAIL}</a>.
            </>
        ),
    },
    {
        q: 'What do the code blocks teach?',
        text: 'Sequencing, loops, functions, conditions (if/else), while loops and reading and writing simple code. Later towers add timing, variables, recursion and two bots working together.',
        answer: 'Sequencing, loops, functions, conditions (if/else), while loops and reading and writing simple code. Later towers add timing, variables, recursion and two bots working together.',
    },
    {
        q: 'I found a bug or have an idea. Where do I send it?',
        text: `Use Send feedback in the game’s Settings, or email ${CONTACT_EMAIL}.`,
        answer: (
            <>
                Use <strong>Send feedback</strong> in the game&apos;s Settings, or email{' '}
                <a href={`mailto:${CONTACT_EMAIL}?subject=LoopBot%20feedback`}>{CONTACT_EMAIL}</a>.
            </>
        ),
    },
];

const stack = ['React 19', 'TypeScript', 'Phaser 3', 'Capacitor 8', 'Vite', 'Vitest', 'dnd-kit', 'GitHub Actions'];
const platforms = ['iOS', 'Android'];

const story = [
    {
        title: 'One codebase, every screen.',
        body: 'The editor (blocks, drag and drop, undo, the code view) is a React app. The isometric board is a Phaser scene inside it. Capacitor wraps the same web build as native Android and iOS apps, with real phone haptics. The free demo on itch.io is the same build, limited to the first ten floors.',
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
        body: 'Each of the 50 floors is a small JSON file: the grid, tile heights, crates, switches, doors, the allowed blocks and the par. Adding a floor means writing a file, not code. The same solver also builds the Daily puzzle bank: 364 puzzles, each one proven solvable.',
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
        body: 'Every chirp, click and fanfare, and all the music, is synthesised live with the Web Audio API. No audio files.',
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
    { value: '5', label: 'zones, one idea each' },
    { value: '0', label: 'image or audio files for the game world' },
    { value: '1', label: 'codebase for web, Android and iOS' },
];

/* ---------- Structured data ---------- */

const storeUrls = [...(ANDROID_LIVE ? [LOOPBOT_STATUS.playUrl] : []), ...(IOS_LIVE ? [LOOPBOT_STATUS.appStoreUrl] : [])];

const jsonLd = [
    {
        '@context': 'https://schema.org',
        '@type': 'VideoGame',
        name: 'LoopBot',
        url: PAGE_URL,
        image: `${SITE_URL}${OG_IMAGE}`,
        description: 'A coding puzzle game. Program a little robot and climb a 50-floor skyscraper, learning loops, functions and logic one floor at a time.',
        genre: ['Puzzle', 'Educational'],
        gamePlatform: ['Android', 'iOS', 'Web browser'],
        applicationCategory: 'GameApplication',
        operatingSystem: 'Android 7.0+, iOS 15.4+',
        inLanguage: ['en', 'fr'],
        typicalAgeRange: '13-',
        author: { '@type': 'Organization', name: 'KIS Studios', url: `${SITE_URL}/` },
        publisher: { '@type': 'Organization', name: 'KIS Studios' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD', ...(storeUrls.length ? { url: storeUrls[0] } : {}) },
        ...(ANDROID_LIVE ? { installUrl: LOOPBOT_STATUS.playUrl } : {}),
        sameAs: [ITCH_URL, GITHUB_URL, ...storeUrls],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.text },
        })),
    },
];

const testerHref = LOOPBOT_STATUS.testerFormUrl || `mailto:${CONTACT_EMAIL}?subject=LoopBot%20Android%20tester&body=Hi%20Kevin%2C%20I%27d%20like%20to%20test%20LoopBot.%20My%20Play%20Store%20Gmail%20address%20is%3A%20`;
const testerFallback = `mailto:${CONTACT_EMAIL}?subject=LoopBot%20Android%20tester`;

/* ---------- Small pieces ---------- */

const label = 'text-sm font-semibold uppercase tracking-[0.08em] text-teal-700 dark:text-[#7ff2e0]';
const darkLabel = 'text-sm font-semibold uppercase tracking-[0.08em] text-[#7ff2e0]';
const card = 'rounded-2xl border border-white/60 bg-white/70 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60';
const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1d2a]';

function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
    return (
        <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className={label}>{eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{title}</h2>
            {children}
        </div>
    );
}

/** Simple CSS phone frame. */
function PhoneFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <div className={`overflow-hidden rounded-[2rem] border-[10px] border-[#0f1018] bg-[#0f1018] shadow-2xl ${className}`}>
            <div className="overflow-hidden rounded-[1.4rem]">{children}</div>
        </div>
    );
}

/** Hero phone: the gameplay loop when it exists, the still screenshot otherwise or with reduced motion. */
function HeroPhone() {
    const hasVideo = Boolean(HERO_VIDEO.webm || HERO_VIDEO.mp4);
    const poster = (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={HERO_POSTER}
            alt="LoopBot gameplay: a repeat loop of blocks under an isometric floor"
            width={540}
            height={1080}
            className={`block h-auto w-full ${hasVideo ? 'hidden motion-reduce:block' : ''}`}
            fetchPriority="high"
        />
    );
    return (
        <PhoneFrame className="mx-auto w-full max-w-[280px] md:max-w-[300px]">
            {hasVideo && (
                <video
                    className="block h-auto w-full motion-reduce:hidden"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={HERO_POSTER}
                    width={540}
                    height={1080}
                    aria-label="LoopBot gameplay: building a program and running it"
                >
                    {HERO_VIDEO.webm && <source src={HERO_VIDEO.webm} type="video/webm" />}
                    {HERO_VIDEO.mp4 && <source src={HERO_VIDEO.mp4} type="video/mp4" />}
                </video>
            )}
            {poster}
        </PhoneFrame>
    );
}

/* Line icons (Lucide-style), stroke in the Signal colour. */
const iconProps = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: '#7ff2e0', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
const proof = [
    {
        text: '50 free floors',
        icon: (
            <svg {...iconProps}><path d="M4 21V3h8v4h4v4h4v10" /><path d="M8 7h.01M8 11h.01M8 15h.01M12 11h.01M12 15h.01M16 15h.01" /><path d="M2 21h20" /></svg>
        ),
    },
    {
        text: 'No ads',
        icon: (
            <svg {...iconProps}><path d="m3 11 15-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /><path d="M2 2l20 20" /></svg>
        ),
    },
    {
        text: 'Works offline',
        icon: (
            <svg {...iconProps}><path d="M12 20h.01" /><path d="M8.5 16.4a5 5 0 0 1 7 0" /><path d="M5 12.9a10 10 0 0 1 5.2-2.7" /><path d="M19 12.9a10 10 0 0 0-2.1-1.6" /><path d="M2 8.8a15 15 0 0 1 4.2-2.6" /><path d="M22 8.8A15 15 0 0 0 10.7 5" /><path d="M2 2l20 20" /></svg>
        ),
    },
    {
        text: 'English and Français',
        icon: (
            <svg {...iconProps}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 9h8M8 13h5" /></svg>
        ),
    },
];

/** Click-to-load demo: nothing from itch.io loads until the player asks for it. */
function ItchDemo() {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[1.75rem] border-4 border-[#262a3d] bg-[#0f1018] shadow-2xl" style={{ aspectRatio: '420 / 820' }}>
            {loaded && ITCH_EMBED_URL ? (
                <iframe src={ITCH_EMBED_URL} title="LoopBot demo" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
            ) : (
                <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={HERO_POSTER} alt="" width={540} height={1080} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-[#1b1d2a]/30 to-[#1b1d2a]/80 p-6 text-center">
                        <Image src="/loopbot/icon-512.webp" alt="" width={128} height={128} className="h-24 w-24 rounded-3xl shadow-xl md:h-32 md:w-32" unoptimized />
                        {ITCH_EMBED_URL ? (
                            <button type="button" onClick={() => setLoaded(true)} className={`h-12 rounded-xl bg-[#7ff2e0] px-8 text-lg font-bold text-[#1b1d2a] shadow-lg transition hover:scale-105 ${focusRing}`}>
                                ▶ Play LoopBot
                            </button>
                        ) : (
                            <a href={ITCH_URL} target="_blank" rel="noopener noreferrer" className={`inline-flex h-12 items-center rounded-xl bg-[#7ff2e0] px-8 text-lg font-bold text-[#1b1d2a] shadow-lg transition hover:scale-105 ${focusRing}`}>
                                ▶ Play LoopBot
                            </a>
                        )}
                        <p className="text-sm text-[#ece6f5]/80">Floors 1 to 10 · Free</p>
                    </div>
                </>
            )}
        </div>
    );
}

/** Stand-in for the Daily screenshot: a drawn streak card. */
function DailyCard() {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    return (
        <div className="mx-auto w-full max-w-[300px] rounded-[2rem] border-[10px] border-[#0f1018] bg-gradient-to-b from-[#2b2546] to-[#1b1d2a] p-6 text-[#ece6f5] shadow-2xl" aria-hidden="true">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#7ff2e0]">Daily puzzle</p>
            <p className="mt-1 text-2xl font-bold">Today</p>
            <div className="mt-6 flex items-center gap-3">
                <span className="text-4xl">🔥</span>
                <div>
                    <p className="text-3xl font-extrabold">12</p>
                    <p className="text-sm text-[#b7aecb]">day streak</p>
                </div>
            </div>
            <ul className="mt-6 grid grid-cols-7 gap-1.5 text-center text-xs">
                {days.map((d, i) => (
                    <li key={i} className="flex flex-col items-center gap-1">
                        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${i < 5 ? 'bg-[#7ff2e0] text-[#1b1d2a]' : i === 5 ? 'border-2 border-[#7ff2e0] text-[#7ff2e0]' : 'bg-white/10 text-[#b7aecb]'}`}>
                            {i < 5 ? '★' : i === 5 ? '❄' : ''}
                        </span>
                        <span className="text-[#b7aecb]">{d}</span>
                    </li>
                ))}
            </ul>
            <p className="mt-6 rounded-xl bg-[#262a3d] px-4 py-3 text-sm">
                <span className="font-semibold text-[#f3eedf]">2 streak freezes</span> saved for busy days
            </p>
            <div className="mt-6 h-12 rounded-xl bg-[#7ff2e0] text-center font-bold leading-[3rem] text-[#1b1d2a]">▶ Play today&apos;s puzzle</div>
        </div>
    );
}

/* ---------- Page ---------- */

export default function LoopBot() {
    return (
        <>
            <SiteHead
                title="LoopBot: Coding Puzzle Game for Android, iPhone and iPad | KIS Studios"
                description="Program a little robot and climb a 50-floor skyscraper. LoopBot teaches loops, functions, if/else and real code through bite-sized puzzles. Free, no ads, works offline. Ages 13+."
                social={{
                    title: 'LoopBot: program a little robot up a tower',
                    description: 'A coding puzzle game. 50 free floors of loops, functions and logic. No ads, works offline.',
                }}
                path="/loopbot"
                jsonLd={jsonLd}
                image={{ url: `${SITE_URL}${OG_IMAGE}`, width: 1200, height: 630, alt: OG_ALT }}
                icons={LOOPBOT_ICONS}
                themeColor={LOOPBOT_THEME_COLOR}
            />
            {IOS_LIVE && APPLE_APP_ID && (
                <Head>
                    <meta name="apple-itunes-app" content={`app-id=${APPLE_APP_ID}`} />
                </Head>
            )}
            <SiteNav />
            <main>
                {/* 1. Hero */}
                <section className="mx-auto max-w-6xl px-4 pt-8 pb-10 md:pt-12">
                    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1b1d2a] to-[#2b2546] text-[#ece6f5] shadow-2xl">
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 opacity-[0.18]" aria-hidden="true">
                            {HERO_BACKGROUND ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={HERO_BACKGROUND} alt="" className="w-full object-cover object-bottom" />
                            ) : (
                                <Skyline />
                            )}
                        </div>
                        <div className="relative grid grid-cols-1 items-center gap-10 p-6 sm:p-10 md:grid-cols-[1.3fr_1fr] md:p-14">
                            <div>
                                <p className="mb-4 inline-block rounded-full bg-[#7ff2e0]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#7ff2e0]">
                                    A KIS Studios game · Ages 13+
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image src="/loopbot/icon.webp" alt="LoopBot app icon" width={64} height={64} className="h-16 w-16 rounded-2xl shadow-lg" unoptimized priority />
                                    <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">LoopBot</h1>
                                </div>
                                <p className="mt-6 text-2xl font-semibold leading-snug md:text-3xl">
                                    Program a little robot. Climb the tallest tower in the city.{' '}
                                    <span className="text-[#7ff2e0]">Learn to think like a coder.</span>
                                </p>
                                <p className="mt-5 max-w-xl text-lg text-[#ece6f5]/85">
                                    Every floor is a tiny coding puzzle. Snap command blocks together, press Run, and watch LoopBot follow
                                    your plan, mistakes and all.
                                </p>
                                <StoreBadges className="mt-8" />
                                <a href="#play" className={`mt-4 inline-flex h-12 items-center justify-center rounded-xl bg-[#7ff2e0] px-7 font-bold text-[#1b1d2a] shadow-lg transition hover:scale-105 max-sm:w-full ${focusRing}`}>
                                    ▶ Play the free demo
                                </a>
                                <StoreLine className="mt-4 text-sm text-[#ece6f5]/80" />
                            </div>
                            <HeroPhone />
                        </div>
                    </div>
                </section>

                {/* 2. Proof strip */}
                <section aria-label="LoopBot at a glance" className="mx-auto max-w-6xl px-4 pb-6">
                    <ul className="grid grid-cols-2 overflow-hidden rounded-2xl bg-[#1b1d2a] text-[#ece6f5] shadow-lg md:grid-cols-4">
                        {proof.map((p, i) => (
                            <li
                                key={p.text}
                                className={`flex items-center justify-center gap-3 px-4 py-5 text-center font-bold ${i % 2 === 1 ? 'border-l border-white/10' : ''} ${i >= 2 ? 'border-t border-white/10 md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''}`}
                            >
                                {p.icon}
                                <span>{p.text}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* 3. What is LoopBot */}
                <ScrollAnimation animation="fadeInUp">
                    <section id="what" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 md:py-24">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className={label}>What is LoopBot</p>
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
                                <div key={f.title} className={`${card} p-6 transition hover:-translate-y-1 hover:shadow-xl`}>
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1b1d2a] font-mono text-xl font-bold text-[#7ff2e0]" aria-hidden="true">{f.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{f.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </ScrollAnimation>

                {/* 4. Screenshots */}
                <section id="screenshots" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
                    <SectionHead eyebrow="Screenshots" title="A look inside the tower" />
                    <Screenshots />
                    {TABLET_SHOT ? (
                        <figure className="mx-auto mt-10 max-w-3xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={TABLET_SHOT.src} alt="LoopBot on iPad: a floor in the tower" width={TABLET_SHOT.width} height={TABLET_SHOT.height} loading="lazy" className="h-auto w-full rounded-2xl border-[8px] border-[#0f1018] shadow-xl" />
                            <figcaption className="mt-3 text-center text-sm italic text-gray-500 dark:text-gray-400">Also made for iPad and tablets.</figcaption>
                        </figure>
                    ) : (
                        <p className="mt-6 text-center text-sm italic text-gray-500 dark:text-gray-400">Also made for iPad and tablets.</p>
                    )}
                </section>

                {/* 5. How you learn */}
                <ScrollAnimation animation="fadeInUp">
                    <section id="learn" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 md:py-24">
                        <SectionHead eyebrow="How you learn" title="Five zones, one idea each">
                            <p className="mt-4 text-gray-600 dark:text-gray-300">Tower 1 has 50 floors. Start in the Lobby and work your way up to the Rooftop.</p>
                        </SectionHead>
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
                        <p className="mt-6 text-center text-sm italic text-gray-600 dark:text-gray-400">
                            Tower 1 is free, all 50 floors. More towers in new cities are on the way.{' '}
                            <a href="#coming" className="font-semibold not-italic text-teal-700 underline underline-offset-2 dark:text-[#7ff2e0]">See what&apos;s coming</a>
                        </p>
                    </section>
                </ScrollAnimation>

                {/* 6. Daily */}
                <ScrollAnimation animation="fadeInUp">
                    <section id="daily" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 md:py-24">
                        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
                            <div>
                                <p className={label}>Keep playing</p>
                                <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">A new puzzle every day</h2>
                                <p className="mt-5 max-w-[680px] text-lg text-gray-700 dark:text-gray-300">
                                    Once you reach Floor 11, a fresh Daily puzzle unlocks every day. Everyone gets the same one. Mondays start
                                    easy, weekends get tricky. Keep your streak going, and earn streak freezes for the days life gets in the way.
                                </p>
                            </div>
                            {DAILY_IMAGE ? (
                                <PhoneFrame className="mx-auto w-full max-w-[300px]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={DAILY_IMAGE} alt="The Daily puzzle screen with a streak counter" width={800} height={1640} loading="lazy" className="block h-auto w-full" />
                                </PhoneFrame>
                            ) : (
                                <DailyCard />
                            )}
                        </div>
                        <div className="mt-10 grid gap-4 md:grid-cols-3">
                            {dailyCards.map((c) => (
                                <div key={c.title} className={`${card} p-5`}>
                                    <h3 className="font-bold text-gray-900 dark:text-white">{c.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{c.body}</p>
                                </div>
                            ))}
                        </div>
                        {LOCKER_IMAGE && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={LOCKER_IMAGE} alt="The Locker and achievements: paints, eye colours and antenna tips for LoopBot" width={1630} height={860} loading="lazy" className="mt-10 h-auto w-full rounded-2xl shadow-xl" />
                        )}
                    </section>
                </ScrollAnimation>

                {/* 7. Play the demo */}
                <section id="play" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
                    <div className="rounded-3xl bg-[#1b1d2a] px-4 py-12 text-center text-[#ece6f5] shadow-2xl sm:px-10">
                        <p className={darkLabel}>Play it now</p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Play the demo</h2>
                        <p className="mx-auto mt-4 max-w-xl text-[#ece6f5]/85">
                            Floors 1 to 10 are free, right here in your browser. Works with a mouse or a touchscreen.
                        </p>
                        <div className="mt-8">
                            <ItchDemo />
                        </div>
                        <p className="mt-6 text-sm text-[#ece6f5]/80">
                            Prefer a bigger window?{' '}
                            <a href={ITCH_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7ff2e0] underline underline-offset-2">
                                Play on itch.io
                            </a>
                            .
                        </p>
                        {(ANDROID_LIVE || IOS_LIVE) && (
                            <div className="mt-8 flex flex-col items-center gap-4">
                                <p className="font-semibold">Liked it? Get the full Tower 1 free on your phone.</p>
                                <StoreBadges className="justify-center" />
                            </div>
                        )}
                    </div>
                </section>

                {/* 8. Made for everyone */}
                <ScrollAnimation animation="fadeInUp">
                    <section id="everyone" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 md:py-24">
                        <SectionHead eyebrow="Thoughtful details" title="Made for every kind of player" />
                        <ul className={`${card} mx-auto grid max-w-5xl gap-x-10 gap-y-4 p-8 md:grid-cols-2 md:p-10`}>
                            {everyone.map((e) => (
                                <li key={e.lead} className="flex gap-3 text-gray-700 dark:text-gray-300">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600 dark:bg-[#7ff2e0]" aria-hidden="true" />
                                    <span><strong className="text-gray-900 dark:text-white">{e.lead}</strong> {e.body}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </ScrollAnimation>

                {/* 9. What's coming */}
                <section id="coming" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 md:py-24">
                    <SectionHead eyebrow="After launch" title="More towers, more cities">
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Tower 1 is free forever. Next, LoopBot heads out to new cities, each with its own tower and a new coding idea to master.
                        </p>
                    </SectionHead>
                    <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
                        {towers.map((t) => {
                            const img = TOWER_IMAGES[t.city];
                            return (
                                <li key={t.city} className="w-[70vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl bg-[#1b1d2a] text-[#ece6f5] shadow-lg md:w-auto md:max-w-none">
                                    {img ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={img} alt={`${t.tower} in ${t.city}`} loading="lazy" className="h-28 w-full object-cover" />
                                    ) : (
                                        <div className={`h-28 bg-gradient-to-br ${t.band}`} aria-hidden="true" />
                                    )}
                                    <div className="p-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#b7aecb]">{t.city}</p>
                                        <h3 className="mt-1 text-lg font-bold">{t.tower}</h3>
                                        <p className="mt-2 text-sm text-[#ece6f5]/85">{t.adds}</p>
                                        <p className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-bold ${t.now ? 'bg-[#7ff2e0] text-[#1b1d2a]' : 'bg-white/10 text-[#ece6f5]'}`}>{t.tag}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="mt-6 rounded-2xl border-2 border-[#d4a72c] bg-gradient-to-br from-[#1f3a8a] to-[#142761] p-6 text-white shadow-xl md:p-8">
                        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#d4a72c]">Coming later</p>
                        <h3 className="mt-1 text-2xl font-bold">Overflow: the endless tower</h3>
                        <p className="mt-2 max-w-2xl text-white/90">
                            An ancient tower that never stops rising. Hundreds of floors, stacked one after another. How high can you build?
                        </p>
                    </div>
                    <div className={`${card} mt-4 flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between`}>
                        <p className="text-gray-800 dark:text-gray-100">
                            <strong>Skyline Pass.</strong> One purchase, every tower: LoopBot Plus, every city pack, Overflow and every future tower.
                        </p>
                        <span className="shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Coming later</span>
                    </div>
                    <p className="mt-4 text-center text-sm italic text-gray-600 dark:text-gray-400">All extras are one-time purchases. No subscriptions, no ads.</p>
                </section>

                {/* 10. Become a tester (pre-launch only) */}
                {!ANDROID_LIVE ? (
                    <section id="testers" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
                        <div className="rounded-3xl bg-gradient-to-br from-[#1b1d2a] to-[#2b2546] p-8 text-[#ece6f5] shadow-2xl md:p-12">
                            <div className="mx-auto max-w-2xl text-center">
                                <p className={darkLabel}>Become a tester</p>
                                <h2 className="mt-2 text-3xl font-bold md:text-4xl">Help launch LoopBot on Android</h2>
                                <p className="mt-5 text-lg text-[#ece6f5]/85">
                                    LoopBot is heading to Google Play, and I&apos;m looking for testers. You get the full game early, free, on
                                    your Android phone. All I ask is that you stay in the test for 14 days and tell me what you think: what
                                    was fun, what was confusing, what broke.
                                </p>
                                <a
                                    href={testerHref}
                                    {...(LOOPBOT_STATUS.testerFormUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className={`mt-8 inline-flex h-12 items-center rounded-xl bg-[#7ff2e0] px-8 text-lg font-bold text-[#1b1d2a] shadow-lg transition hover:scale-105 ${focusRing}`}
                                >
                                    Join the test
                                </a>
                                {LOOPBOT_STATUS.testerFormUrl && (
                                    <p className="mt-4 text-sm text-[#ece6f5]/80">
                                        Can&apos;t open the form? Email{' '}
                                        <a href={testerFallback} className="font-semibold text-[#7ff2e0] underline underline-offset-2">{CONTACT_EMAIL}</a>.
                                    </p>
                                )}
                                <p className="mt-5 text-xs text-[#ece6f5]/70">
                                    Android 7.0 or newer. Use the Google account that&apos;s signed in to your Play Store. I&apos;ll only use your
                                    email to invite you to the test.
                                </p>
                            </div>
                        </div>
                    </section>
                ) : (
                    <p id="testers" className="mx-auto max-w-6xl px-4 py-8 text-center italic text-gray-600 dark:text-gray-400">
                        Thank you to everyone who tested LoopBot before launch.
                    </p>
                )}

                {/* 11. FAQ */}
                <section id="faq" className="scroll-mt-24 mx-auto max-w-[720px] px-4 py-16 md:py-24">
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Questions</h2>
                    <div className="space-y-3">
                        {faq.map((f) => (
                            <details key={f.q} className={`${card} group p-0`}>
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0] dark:text-white [&::-webkit-details-marker]:hidden">
                                    {f.q}
                                    <span className="shrink-0 text-xl text-teal-700 transition group-open:rotate-45 dark:text-[#7ff2e0]" aria-hidden="true">+</span>
                                </summary>
                                <p className="px-5 pb-5 text-gray-700 dark:text-gray-300 [&_a]:font-medium [&_a]:text-teal-700 [&_a]:underline [&_a]:underline-offset-2 dark:[&_a]:text-[#7ff2e0]">{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* 12. How it was built */}
                <ScrollAnimation animation="fadeInUp">
                    <section id="built" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
                        <div className="rounded-[2rem] bg-[#262a3d] px-5 py-12 text-[#ece6f5] shadow-2xl sm:px-10 md:py-16">
                            <div className="mx-auto mb-8 max-w-2xl text-center">
                                <p className={darkLabel}>Under the hood</p>
                                <h2 className="mt-2 text-3xl font-bold md:text-4xl">How LoopBot was built</h2>
                                <p className="mt-4 text-[#ece6f5]/85">
                                    LoopBot is a one-person project, built with a modern web stack and shipped to the browser and to phones from the same code.
                                </p>
                            </div>
                            <ul className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2" aria-label="The stack and platforms">
                                {stack.map((s) => (
                                    <li key={s} className="rounded-full bg-[#1b1d2a] px-4 py-1.5 text-sm font-semibold text-[#7ff2e0] shadow-sm">{s}</li>
                                ))}
                                {platforms.map((s) => (
                                    <li key={s} className="rounded-full border border-[#7ff2e0]/60 px-4 py-1.5 text-sm font-semibold text-[#ece6f5]">{s}</li>
                                ))}
                            </ul>

                            <dl className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                                {numbers.map((n) => (
                                    <div key={n.label} className="rounded-2xl bg-[#1b1d2a] p-5 text-center">
                                        <dt className="sr-only">{n.label}</dt>
                                        <dd>
                                            <span className="block text-4xl font-extrabold text-[#7ff2e0]">{n.value}</span>
                                            <span className="mt-1 block text-sm text-[#b7aecb]">{n.label}</span>
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {story.map((s) => (
                                    <div key={s.title} className="rounded-2xl bg-[#1b1d2a] p-6">
                                        <h3 className="font-bold">{s.title}</h3>
                                        <p className="mt-2 text-sm text-[#b7aecb]">{s.body}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 rounded-3xl bg-[#1b1d2a] p-6 md:p-8">
                                <h3 className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-[#7ff2e0]">How a floor works</h3>
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
                                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={`inline-flex h-12 items-center rounded-xl border border-[#7ff2e0] px-7 font-semibold text-[#ece6f5] transition hover:bg-white/10 ${focusRing}`}>
                                    Read the code on GitHub
                                </a>
                            </p>
                        </div>
                    </section>
                </ScrollAnimation>

                {/* 13. Press strip */}
                <section id="press" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12">
                    <div className={`${card} flex flex-col items-center gap-6 p-8 text-center md:flex-row md:justify-between md:text-left`}>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Press and creators</h2>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                Writing about LoopBot or making a video? Grab the logo, screenshots and fact sheet.
                            </p>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Press contact: <a href={`mailto:${CONTACT_EMAIL}?subject=LoopBot%20press`} className="font-medium text-teal-700 underline underline-offset-2 dark:text-[#7ff2e0]">{CONTACT_EMAIL}</a>
                            </p>
                        </div>
                        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                            <Link href="/loopbot/press" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#1b1d2a] px-6 font-semibold text-[#7ff2e0] transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0]">
                                Press kit
                            </Link>
                            <a href={PRESS_KIT_ZIP} download className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-300 px-6 font-semibold text-gray-800 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0] dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800">
                                Download all (zip)
                            </a>
                        </div>
                    </div>
                </section>

                {/* 14. Hire CTA */}
                <CtaBanner
                    title="Want a game or app like LoopBot?"
                    body="I design and build games, web apps and mobile apps, from the first idea to the store listing. Let’s talk about yours, free."
                />

                {/* 15. Footer strip */}
                <nav aria-label="LoopBot links" className="mx-auto max-w-6xl px-4 pb-12">
                    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li><Link href="/loopbot/privacy" className="hover:text-pink-600">Privacy Policy</Link></li>
                        <li><Link href="/loopbot/terms" className="hover:text-pink-600">Terms of Use</Link></li>
                        <li><Link href="/loopbot/press" className="hover:text-pink-600">Press kit</Link></li>
                        <li><a href={ITCH_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">itch.io</a></li>
                        <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">GitHub</a></li>
                        <li><a href={`mailto:${CONTACT_EMAIL}?subject=LoopBot`} className="hover:text-pink-600">Contact</a></li>
                        <li>
                            {ANDROID_LIVE ? (
                                <a href={LOOPBOT_STATUS.playUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Google Play</a>
                            ) : (
                                <a href="#testers" className="hover:text-pink-600">Google Play: coming soon</a>
                            )}
                        </li>
                        <li>
                            {IOS_LIVE ? (
                                <a href={LOOPBOT_STATUS.appStoreUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">App Store</a>
                            ) : (
                                <span>App Store: coming soon</span>
                            )}
                        </li>
                    </ul>
                </nav>
            </main>
            <Footer />
        </>
    );
}
