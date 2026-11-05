import Image from 'next/image';
import Link from 'next/link';
import SiteHead, { SITE_URL } from '../../components/SiteHead';
import SiteNav from '../../components/SiteNav';
import Footer from '../../components/Footer';
import CtaBanner from '../../components/CtaBanner';
import ScrollAnimation from '../../components/ScrollAnimation';

const ritual = [
    { emoji: '🌼', step: 'Grateful', guide: 'with Maya', body: 'Notice one good thing from today. This is the only required step.' },
    { emoji: '💛', step: 'Kind to myself', guide: 'with Nana June', body: 'A gentle prompt to go easy on yourself. Skip it on hard days.' },
    { emoji: '🌍', step: 'Green', guide: 'with Grandpa Hari', body: 'Log one small green action, like a reusable cup or a walk instead of a drive.' },
    { emoji: '🙂', step: 'Mood', guide: 'one tap', body: 'A quick mood check so you can see how your weeks really feel.' },
];

const levels = ['Seed', 'Sprout', 'Seedling', 'Young plant', 'Budding', 'In bloom', 'Flourishing'];
const levelAt = [0, 1, 3, 7, 14, 30, 60];

const features = [
    { icon: '🫙', title: 'Gratitude jar', body: 'Pull a random good moment from your past entries whenever you need a lift, plus an “on this day” memory.' },
    { icon: '🔥', title: 'Gentle streaks', body: 'One grace day every week, spent only when you need it. Missing a day never shrinks your plant.' },
    { icon: '📓', title: 'Journal', body: 'Every past check-in in one place, with a full view of each day and the option to delete any entry.' },
    { icon: '🌱', title: 'Daily seeds', body: 'A new one-minute mini-lesson unlocks with each check-in: healthy living, green living and self-kindness, each with its source.' },
    { icon: '📚', title: 'Learn more', body: 'Short multi-part reads for going deeper, like the good news about the ozone layer, all cited and all offline.' },
    { icon: '📈', title: 'Growth & impact', body: 'Current and longest streak, total check-ins, green actions and an approximate CO₂ total, plus your last 7 days.' },
    { icon: '⏰', title: 'Daily reminders', body: 'Pick a time and get a gentle nudge. Reminders are scheduled on your phone and skip days you already checked in.' },
    { icon: '📤', title: 'Export & restore', body: 'Export your whole journal as a readable file any time. Restoring a backup is free for everyone.' },
    { icon: '🤝', title: 'Support when it matters', body: 'If an entry suggests distress, a support card with 9-8-8 appears. The check runs only on your phone.' },
];

const privacy = [
    { title: 'No account', body: 'Open the app and start. No sign-up, no email, no password.' },
    { title: 'Encrypted on your phone', body: 'Your journal lives in a SQLCipher database. Its 256-bit key never leaves the iOS Keychain or Android Keystore.' },
    { title: 'No ads, no tracking', body: 'No analytics, no advertising SDKs, no advertising ID. Nothing you write is sent to an AI service.' },
    { title: 'Backups only you can open', body: 'Backups are sealed with AES-256-GCM using a recovery key that only you hold.' },
];

const plusPerks = [
    { emoji: '🔒', title: 'Encrypted backup', body: 'Save an end-to-end encrypted copy of your journal to iCloud Drive, Google Drive or Files.' },
    { emoji: '📈', title: 'Weekly reflections', body: 'Themes and mood trends over months, not just last week.' },
    { emoji: '🧭', title: 'Guided journeys', body: '7 and 30-day programs for self-worth, slow living and more.' },
    { emoji: '💌', title: 'Gratitude letters', body: 'A guided way to thank someone who mattered.' },
    { emoji: '🎨', title: 'Themes and app icons', body: 'Make your garden your own.' },
];

const stack = [
    { group: 'App', items: [
        { name: 'React Native', note: '0.88, one codebase for Android and iOS' },
        { name: 'Expo SDK 58', note: 'Native modules, config plugins and dev builds' },
        { name: 'TypeScript', note: 'Typed end to end, strict mode' },
        { name: 'Expo Router', note: 'File-based navigation with typed routes' },
        { name: 'Zustand', note: 'Small, fast app state' },
    ] },
    { group: 'Data & security', items: [
        { name: 'SQLite + SQLCipher', note: 'Encrypted on-device database with versioned migrations' },
        { name: 'Keychain / Keystore', note: 'Hardware-backed key storage through expo-secure-store' },
        { name: 'AES-256-GCM', note: 'Authenticated encryption for backups' },
        { name: 'Offline-first', note: 'Every lesson and prompt ships inside the app' },
    ] },
    { group: '3D & design', items: [
        { name: 'three.js', note: 'The plant is a live 3D scene, not an animation' },
        { name: 'expo-gl', note: 'WebGL rendering inside a native app' },
        { name: 'Playwright', note: 'Renders the app icon and splash from the same 3D model' },
        { name: 'Light & dark themes', note: 'Follows the system setting' },
    ] },
    { group: 'Platform & quality', items: [
        { name: 'RevenueCat', note: 'Store subscriptions with an anonymous ID, no account' },
        { name: 'Local notifications', note: 'Reminders with no server involved' },
        { name: 'EAS Build & Submit', note: 'Cloud builds and Google Play releases' },
        { name: 'Jest', note: 'Unit tests for streaks, impact, encryption, restore and the database' },
    ] },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Goodsprout',
    url: `${SITE_URL}/goodsprout`,
    image: `${SITE_URL}/goodsprout/icon.webp`,
    description: 'A 60-second daily ritual: notice something good, be kind to yourself, do one green thing. Private, offline-first and encrypted on your phone.',
    operatingSystem: 'Android, iOS',
    applicationCategory: 'HealthApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
    author: { '@id': `${SITE_URL}/#business` },
    publisher: { '@id': `${SITE_URL}/#business` },
};

export default function Goodsprout() {
    return (
        <>
            <SiteHead
                title="Goodsprout: a 60-second daily gratitude and green living journal | KIS Studios"
                description="Goodsprout is a private, offline-first journal app: notice something good, be kind to yourself, do one green thing, and watch a 3D plant grow. Built by KIS Studios with React Native, Expo and SQLCipher."
                path="/goodsprout"
                jsonLd={jsonLd}
            />
            <SiteNav />
            <main>
                {/* Hero */}
                <section className="mx-auto max-w-6xl px-4 pt-16 pb-16 md:pt-24">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.3fr_1fr]">
                        <div>
                            <p className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                                A KIS Studios app · Coming soon to Google Play
                            </p>
                            <div className="flex items-center gap-4">
                                <Image src="/goodsprout/icon.webp" alt="Goodsprout app icon" width={72} height={72} className="h-16 w-16 rounded-2xl shadow-lg md:h-[72px] md:w-[72px]" unoptimized priority />
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-6xl">Goodsprout</h1>
                            </div>
                            <p className="mt-6 text-2xl font-semibold leading-snug text-gray-900 dark:text-white md:text-3xl">
                                Notice something good. Be kind to yourself.{' '}
                                <span className="bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">Do one green thing.</span>
                            </p>
                            <p className="mt-5 max-w-xl text-lg text-gray-700 dark:text-gray-300">
                                A 60-second daily ritual for gratitude, self-kindness and greener living. Every check-in grows your own
                                3D plant, and your journal stays private, encrypted on your phone. No account, no ads, no tracking.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a href="#features" className="rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-7 py-3 text-center font-semibold text-white shadow-lg transition hover:scale-105">
                                    See what it does
                                </a>
                                <a href="#tech" className="rounded-full border border-gray-300 bg-white/60 px-7 py-3 text-center font-semibold text-gray-800 transition hover:bg-white dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-100 dark:hover:bg-gray-800">
                                    How it&apos;s built
                                </a>
                            </div>
                            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Highlights">
                                {['Free daily habit', 'Works offline', 'Encrypted on-device', 'Android & iOS'].map((c) => (
                                    <li key={c} className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm dark:bg-gray-800/70 dark:text-gray-300">{c}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative mx-auto w-64 md:w-full md:max-w-sm">
                            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-200 via-lime-200 to-amber-100 opacity-70 blur-2xl dark:from-emerald-800 dark:via-lime-900 dark:to-amber-900" aria-hidden="true" />
                            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/80 bg-[#F6F2EC] shadow-2xl dark:border-gray-700">
                                <Image src="/goodsprout/level-5.webp" alt="A Goodsprout plant in bloom in a terracotta pot" width={320} height={320} className="h-auto w-full" unoptimized priority />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Daily ritual */}
                <ScrollAnimation animation="fadeInUp">
                    <section className="mx-auto max-w-6xl px-4 py-16">
                        <div className="mx-auto mb-10 max-w-2xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">The daily check-in</p>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">One minute, three small goods</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                Three warm guides walk you through it. They&apos;re characters with hand-written messages, not chatbots, so nothing you write ever leaves your phone.
                            </p>
                        </div>
                        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {ritual.map((r, i) => (
                                <li key={r.step} className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60">
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl" aria-hidden="true">{r.emoji}</span>
                                        <span className="text-xs font-semibold text-gray-400">Step {i + 1}</span>
                                    </div>
                                    <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">{r.step}</h3>
                                    <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{r.guide}</p>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{r.body}</p>
                                </li>
                            ))}
                        </ol>
                    </section>
                </ScrollAnimation>

                {/* Plant growth */}
                <ScrollAnimation animation="fadeInUp">
                    <section className="mx-auto max-w-6xl px-4 py-16">
                        <div className="mx-auto mb-10 max-w-2xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Grow your garden</p>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">A plant that grows with you</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                Your plant is drawn live in 3D and grows through seven stages with every day you check in. It counts total days, not streaks, so a missed week never shrinks it. Hope, not guilt.
                            </p>
                        </div>
                        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
                            {levels.map((name, i) => (
                                <li key={name} className="flex flex-col items-center rounded-2xl bg-[#F6F2EC] p-3 text-center shadow-sm">
                                    <Image src={`/goodsprout/level-${i}.webp`} alt={`${name} stage`} width={160} height={160} className="h-auto w-full" unoptimized />
                                    <p className="mt-1 text-sm font-bold text-gray-900">{name}</p>
                                    <p className="text-xs text-gray-500">{levelAt[i] === 1 ? '1 check-in' : `${levelAt[i]} check-ins`}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </ScrollAnimation>

                {/* Features */}
                <ScrollAnimation animation="fadeInUp">
                    <section id="features" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
                        <div className="mx-auto mb-10 max-w-2xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Features</p>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Small habits, real encouragement</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">The daily habit is free forever. Here&apos;s everything that comes with it.</p>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((f) => (
                                <div key={f.title} className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-700/60 dark:bg-gray-800/60">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-lime-100 text-2xl dark:from-emerald-900/40 dark:to-lime-900/40" aria-hidden="true">{f.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{f.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </ScrollAnimation>

                {/* Privacy */}
                <ScrollAnimation animation="fadeInUp">
                    <section className="mx-auto max-w-6xl px-4 py-16">
                        <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-2xl md:p-12">
                            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-100">Private by design</p>
                            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Your journal is yours. We never see it.</h2>
                            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                                {privacy.map((p) => (
                                    <div key={p.title}>
                                        <h3 className="text-lg font-bold">{p.title}</h3>
                                        <p className="mt-1 text-emerald-50">{p.body}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-sm text-emerald-100">
                                Read the full <Link href="/goodsprout/privacy" className="font-semibold text-white underline underline-offset-2">Privacy Policy</Link>.
                            </p>
                        </div>
                    </section>
                </ScrollAnimation>

                {/* Plus */}
                <ScrollAnimation animation="fadeInUp">
                    <section className="mx-auto max-w-6xl px-4 py-16">
                        <div className="mx-auto mb-10 max-w-2xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Goodsprout Plus</p>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Optional extras for going further</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                A monthly or yearly subscription through Google Play or the App Store, with a free trial on yearly. Still no account: purchases restore through your store account.
                            </p>
                        </div>
                        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
                            {plusPerks.map((p) => (
                                <li key={p.title} className="flex gap-4 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60">
                                    <span className="text-2xl" aria-hidden="true">{p.emoji}</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">{p.title}</h3>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">Plus perks are rolling out over time, starting with encrypted backup.</p>
                    </section>
                </ScrollAnimation>

                {/* Tech */}
                <ScrollAnimation animation="fadeInUp">
                    <section id="tech" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16">
                        <div className="mx-auto mb-10 max-w-2xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">Under the hood</p>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">How we built Goodsprout</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                One TypeScript codebase for Android and iOS, with privacy built into the architecture rather than promised in a policy.
                            </p>
                        </div>
                        <div className="grid gap-5 md:grid-cols-2">
                            {stack.map((g) => (
                                <div key={g.group} className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60">
                                    <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400">{g.group}</h3>
                                    <ul className="mt-4 space-y-3">
                                        {g.items.map((t) => (
                                            <li key={t.name} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                                                <span className="shrink-0 font-bold text-gray-900 dark:text-white sm:w-44">{t.name}</span>
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{t.note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </ScrollAnimation>

                <CtaBanner
                    title="Want an app like Goodsprout?"
                    body="I design and build mobile apps, from the idea to the store listing. Let’s talk about yours, free."
                />

                <p className="mx-auto max-w-6xl px-4 pb-12 text-center text-sm text-gray-500 dark:text-gray-400">
                    <Link href="/goodsprout/privacy" className="hover:text-pink-600">Privacy Policy</Link>
                    {' · '}
                    <Link href="/goodsprout/terms" className="hover:text-pink-600">Terms of Service</Link>
                </p>
            </main>
            <Footer />
        </>
    );
}
