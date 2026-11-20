/**
 * Settings for the LoopBot pages (/loopbot, /loopbot/press, /loopbot/privacy,
 * /loopbot/terms). Every blank below has a working fallback, so the page is
 * always shippable. On launch day, flip the statuses in LOOPBOT_STATUS.
 */

/**
 * Launch-status switch. This one object drives the store badges in the hero
 * and footer, the line under the badges, the tester section and the JSON-LD.
 *
 *   android: 'closed-test' → dimmed "Coming soon" badge linking to #testers,
 *                            tester section shown
 *            'live'        → full badge linking to playUrl, tester section
 *                            replaced by a thank-you line
 *   ios:     'in-review'   → dimmed "Coming soon" badge, no link
 *            'live'        → full badge linking to appStoreUrl (needs the URL)
 */
export const LOOPBOT_STATUS = {
    android: 'closed-test' as 'closed-test' | 'live',
    ios: 'in-review' as 'in-review' | 'live',
    playUrl: 'https://play.google.com/store/apps/details?id=com.kisstudios.loopbot',
    /** Fill on launch day: https://apps.apple.com/app/id<APPLE_ID> */
    appStoreUrl: '',
    /** Google Form or Google Group join link. While empty, "Join the test" opens an email instead. */
    testerFormUrl: '',
    itchUrl: 'https://kisstudios98.itch.io/loopbot',
};

/** Numeric Apple ID (from appStoreUrl). Adds the Smart App Banner on iPhone once iOS is live. */
export const APPLE_APP_ID = '';

export const ANDROID_LIVE = LOOPBOT_STATUS.android === 'live';
export const IOS_LIVE = LOOPBOT_STATUS.ios === 'live' && LOOPBOT_STATUS.appStoreUrl !== '';

/** Public itch.io page for the free demo (Floors 1 to 10). */
export const ITCH_URL = LOOPBOT_STATUS.itchUrl;

/**
 * The "Embed the game itself" iframe src from itch.io
 * (Dashboard → LoopBot → Edit game → Distribute → Embed game, size 420 x 820).
 * It looks like 'https://itch.io/embed-upload/12345678?color=1b1d2a'.
 * While empty, the Play button opens the itch.io page in a new tab instead.
 */
export const ITCH_EMBED_URL = '';

/** Source code. */
export const GITHUB_URL = 'https://github.com/kevsaj/LoopBot';

/**
 * Official store badge artwork (unmodified, from
 * https://play.google.com/intl/en_us/badges/ and
 * https://developer.apple.com/app-store/marketing/guidelines/).
 * Drop the files in public/loopbot/badges/ and set the paths here. While a path
 * is empty, that store shows a plain text button in the same spot instead.
 */
export const BADGES = {
    play: '', // e.g. '/loopbot/badges/google-play-en.png' (646 x 250 incl. clear space)
    appStore: '', // e.g. '/loopbot/badges/app-store-black.svg' (120 x 40)
};

/**
 * Hero gameplay loop (10–15 s, silent, portrait 9:16). While both are empty,
 * the phone frame shows HERO_POSTER as a still image.
 */
export const HERO_VIDEO = { webm: '', mp4: '' }; // e.g. '/loopbot/loopbot-hero.webm', '/loopbot/loopbot-hero.mp4'
export const HERO_POSTER = '/loopbot/phone-2-repeat.webp';

/** Faint skyline behind the hero (theme-background-1920x1080). While empty, the drawn skyline is used. */
export const HERO_BACKGROUND = '';

/**
 * Phone screenshots for the scroller. `src` is the 540w WebP; add `src2x` (the
 * 1080w WebP) for sharper phones. The alt text doubles as the visible caption.
 *
 * Currently the first (v0) set. Swap in the v1 set (phone-1-title … phone-7-map)
 * when it's copied over; the list order is the page order.
 */
export const SCREENSHOTS: { src: string; src2x?: string; alt: string }[] = [
    { src: '/loopbot/phone-1-tower.webp', src2x: '/loopbot/phone-1-tower-1080.webp', alt: 'The tower map: 50 floors across five zones' },
    { src: '/loopbot/phone-2-repeat.webp', src2x: '/loopbot/phone-2-repeat-1080.webp', alt: 'Repeat blocks: loops do the heavy lifting' },
    { src: '/loopbot/phone-3-ifelse.webp', src2x: '/loopbot/phone-3-ifelse-1080.webp', alt: 'If and else: make LoopBot react to the world' },
    { src: '/loopbot/phone-4-code.webp', src2x: '/loopbot/phone-4-code-1080.webp', alt: 'See the real code behind your blocks' },
    { src: '/loopbot/phone-5-cleared.webp', src2x: '/loopbot/phone-5-cleared-1080.webp', alt: 'Floor cleared with three stars' },
];

/** Optional wide iPad shot under the screenshots ("Also made for iPad and tablets"). */
export const TABLET_SHOT: { src: string; width: number; height: number } | null = null;

/** Daily puzzle screenshot (loopbot-daily/2-daily, 800 x 1640). While empty, a drawn streak card stands in. */
export const DAILY_IMAGE = '';
/** Optional wide strip under the Daily cards (loopbot-phase2/locker-and-achievements, 1630 x 860). */
export const LOCKER_IMAGE = '';

/**
 * Tower card pictures for "What's coming", keyed by city. A city without a
 * picture gets a gradient band in its own colours.
 */
export const TOWER_IMAGES: Partial<Record<string, string>> = {};

/** Feature graphic (1024 x 500), used on the press page. */
export const FEATURE_GRAPHIC = '/loopbot/feature-graphic-1024x500.png';

/** 1200 x 630 share image for og:image / twitter:image and the press kit. */
export const OG_IMAGE = '/loopbot/og-loopbot-1200x630.png';

/** Press kit zip, rebuilt with scripts/loopbot-press-kit.sh. */
export const PRESS_KIT_ZIP = '/loopbot/loopbot-press-kit.zip';

/** LoopBot's own colours, also the browser bar colour on these pages. */
export const LOOPBOT_THEME_COLOR = '#1b1d2a';

/** Icon links shared by every LoopBot page. */
export const LOOPBOT_ICONS = [
    { rel: 'icon' as const, type: 'image/png', sizes: '32x32', href: '/loopbot/favicon-32.png' },
    { rel: 'icon' as const, type: 'image/png', sizes: '192x192', href: '/loopbot/icon-192.png' },
    { rel: 'apple-touch-icon' as const, href: '/loopbot/apple-touch-icon-180.png' },
];
