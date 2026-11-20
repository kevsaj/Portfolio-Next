import Link from 'next/link';
import SiteHead, { SITE_URL } from '../../components/SiteHead';
import SiteNav from '../../components/SiteNav';
import Footer from '../../components/Footer';
import { CONTACT_EMAIL } from '../../utils/site';
import { FEATURE_GRAPHIC, LOOPBOT_ICONS, LOOPBOT_THEME_COLOR, OG_IMAGE, PRESS_KIT_ZIP, SCREENSHOTS } from '../../utils/loopbot';

const facts: [string, string][] = [
    ['Developer', 'KIS Studios (Kevin Sajan), Ontario, Canada'],
    ['Release date', 'December 2026 (Android, iPhone and iPad)'],
    ['Platforms', 'Android, iOS, iPadOS, web demo (itch.io)'],
    ['Price', 'Free (Tower 1, 50 floors). Optional one-time purchases planned.'],
    ['Languages', 'English, French'],
    ['Age', '13+'],
    ['Website', 'https://www.kisstudios.net/loopbot'],
    ['Press contact', CONTACT_EMAIL],
];

const features = [
    '50 free floors in five zones',
    'Blocks plus a real-code view, typed code on the top floors',
    'Daily puzzle with streaks',
    'Achievements and the Locker',
    'English and French',
    'Offline, no account, no ads',
    'Accessibility options',
];

/** Press images. Screenshots link to the full-size PNG in /loopbot/press/. */
const images = [
    { src: '/loopbot/icon-512.png', preview: '/loopbot/icon-512.webp', alt: 'LoopBot app icon', size: '512 x 512', square: true },
    { src: OG_IMAGE, preview: OG_IMAGE, alt: 'Social image', size: '1200 x 630' },
    { src: FEATURE_GRAPHIC, preview: FEATURE_GRAPHIC.replace(/\.png$/, '.webp'), alt: 'Store header (feature graphic)', size: '1024 x 500' },
    ...SCREENSHOTS.map((s) => ({
        src: `/loopbot/press/${s.src.replace('/loopbot/', '').replace(/\.webp$/, '.png')}`,
        preview: s.src,
        alt: s.alt,
        size: '1080 x 2160',
        phone: true,
    })),
];

const card = 'rounded-2xl border border-white/60 bg-white/70 shadow-sm dark:border-gray-700/60 dark:bg-gray-800/60';
const h2 = 'mt-14 mb-4 text-2xl font-bold text-gray-900 dark:text-white';

export default function LoopBotPress() {
    return (
        <>
            <SiteHead
                title="LoopBot press kit | KIS Studios"
                description="Fact sheet, descriptions, logo and screenshots for LoopBot, a coding puzzle game for Android, iPhone and iPad by KIS Studios."
                path="/loopbot/press"
                image={{ url: `${SITE_URL}${OG_IMAGE}`, width: 1200, height: 630, alt: 'LoopBot: program a little robot up a tower' }}
                icons={LOOPBOT_ICONS}
                themeColor={LOOPBOT_THEME_COLOR}
            />
            <SiteNav />
            <main className="mx-auto max-w-5xl px-4 pt-12 pb-20">
                <Link href="/loopbot" className="text-sm font-semibold text-teal-700 hover:underline dark:text-[#7ff2e0]">
                    ← LoopBot
                </Link>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">LoopBot press kit</h1>
                <p className="mt-3 max-w-[680px] text-lg text-gray-700 dark:text-gray-300">
                    Everything you need to write about LoopBot or feature it in a video. Use anything on this page freely in coverage.
                </p>
                <p className="mt-6">
                    <a href={PRESS_KIT_ZIP} download className="inline-flex h-12 items-center rounded-xl bg-[#1b1d2a] px-6 font-semibold text-[#7ff2e0] transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0]">
                        Download all (zip)
                    </a>
                </p>

                <h2 className={h2}>Fact sheet</h2>
                <table className={`${card} w-full overflow-hidden text-left`}>
                    <tbody>
                        {facts.map(([k, v]) => (
                            <tr key={k} className="border-t border-gray-200 first:border-t-0 dark:border-gray-700">
                                <th scope="row" className="w-36 px-4 py-3 align-top font-semibold text-gray-900 dark:text-white sm:w-48 sm:px-5">{k}</th>
                                <td className="px-4 py-3 text-gray-700 [overflow-wrap:anywhere] dark:text-gray-300 sm:px-5">
                                    {k === 'Press contact' ? (
                                        <a href={`mailto:${v}?subject=LoopBot%20press`} className="text-teal-700 underline underline-offset-2 dark:text-[#7ff2e0]">{v}</a>
                                    ) : k === 'Website' ? (
                                        <Link href="/loopbot" className="text-teal-700 underline underline-offset-2 dark:text-[#7ff2e0]">{v}</Link>
                                    ) : (
                                        v
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="max-w-[680px] text-gray-700 dark:text-gray-300">
                    <h2 className={h2}>Short description</h2>
                    <p>
                        LoopBot is a coding puzzle game. A rogue AI has taken over the city&apos;s tallest skyscraper, and you program a
                        small maintenance robot to climb all 50 floors and take it back. Snap together blocks, press Run, and learn loops,
                        functions and logic one floor at a time.
                    </p>

                    <h2 className={h2}>Long description</h2>
                    <p>
                        VANTA, a rogue salvage AI, has taken over the Meridian Spire, the tallest skyscraper in the city, floor by floor.
                        You&apos;re LoopBot, a small maintenance robot with a big job. With PATCH talking you through it over the radio, you
                        climb all 50 floors, one puzzle at a time, to take the tower back.
                    </p>
                    <p className="mt-4">
                        You don&apos;t steer LoopBot. You program it. Plan a route with blocks like forward, turn and jump, press Run, and
                        see if your plan works. When it doesn&apos;t, LoopBot shows you exactly where it went wrong, so you can fix it and
                        try again.
                    </p>
                    <p className="mt-4">
                        Every floor fits on one screen and teaches a single idea, from simple sequences in the Lobby to typing real code on
                        the Rooftop. A Daily puzzle, achievements and unlockable looks keep players coming back. LoopBot is free, has no
                        ads, works offline and is fully translated into French. It&apos;s built by one developer with React, Phaser and
                        Capacitor, and every floor is checked by a solver so its par is always fair.
                    </p>

                    <h2 className={h2}>Features</h2>
                    <ul className="list-disc space-y-1 pl-6">
                        {features.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                </div>

                <h2 className={h2}>Images</h2>
                <ul className="grid grid-cols-2 gap-5 md:grid-cols-3">
                    {images.map((img) => (
                        <li key={img.src} className={`${card} flex flex-col p-4`}>
                            <div className="flex flex-1 items-center justify-center rounded-xl bg-[#1b1d2a] p-3">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={img.preview}
                                    alt={img.alt}
                                    loading="lazy"
                                    className={`h-auto rounded-lg ${'phone' in img ? 'max-h-64 w-auto' : 'square' in img ? 'w-28' : 'w-full'}`}
                                />
                            </div>
                            <p className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-100">{img.alt}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">PNG · {img.size}</p>
                            <a href={img.src} download className="mt-2 text-sm font-semibold text-teal-700 underline underline-offset-2 dark:text-[#7ff2e0]">
                                Download
                            </a>
                        </li>
                    ))}
                </ul>

                <h2 className={h2}>Logo</h2>
                <p className="max-w-[680px] text-gray-700 dark:text-gray-300">
                    Use the app icon as the logo: <a href="/loopbot/icon-512.png" download className="font-medium text-teal-700 underline underline-offset-2 dark:text-[#7ff2e0]">icon-512.png</a>.
                </p>

                <h2 className={h2}>About KIS Studios</h2>
                <p className="max-w-[680px] text-gray-700 dark:text-gray-300">
                    KIS Studios is Kevin Sajan&apos;s one-person studio in Ontario, Canada, making small games that make you think, plus{' '}
                    <Link href="/" className="font-medium text-teal-700 underline underline-offset-2 dark:text-[#7ff2e0]">websites and apps for clients</Link>.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Press contact: <a href={`mailto:${CONTACT_EMAIL}?subject=LoopBot%20press`} className="font-medium text-teal-700 underline underline-offset-2 dark:text-[#7ff2e0]">{CONTACT_EMAIL}</a>
                </p>
            </main>
            <Footer />
        </>
    );
}
