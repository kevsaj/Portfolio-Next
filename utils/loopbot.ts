/**
 * Settings for the LoopBot pages (/loopbot, /loopbot/privacy, /loopbot/terms).
 * Fill in the blanks below; every one has a working fallback until then.
 */

/** Public itch.io page for the free demo (Floors 1 to 10). */
export const ITCH_URL = 'https://kisstudios98.itch.io/loopbot';

/**
 * The "Embed the game itself" iframe src from itch.io
 * (Dashboard → LoopBot → Edit game → Distribute → Embed game, size 420 x 820).
 * It looks like 'https://itch.io/embed-upload/12345678?color=1b1d2a'.
 * While empty, the Play button opens the itch.io page in a new tab instead.
 */
export const ITCH_EMBED_URL = '';

/**
 * Sign-up form for the Android closed test (Google Form or similar).
 * While empty, "Join the test" opens an email to the studio address instead.
 */
export const TESTER_FORM_URL = '';

/** Source code. */
export const GITHUB_URL = 'https://github.com/kevsaj/LoopBot';

/** Where a store release stands. */
export type StoreStatus = 'soon' | 'testing' | 'live';

/**
 * Google Play listing.
 *   'soon'    → greyed-out "Coming soon" label, no link
 *   'testing' → links to the listing with an "Early access" tag
 *   'live'    → links to the listing as a normal release
 * Switch to 'live' on launch day.
 */
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.kisstudios.loopbot';
export const PLAY_STATUS: StoreStatus = 'testing';

/**
 * Apple App Store listing. While APP_STORE_URL is empty the page shows a
 * label with no link ("In testing" or "Coming soon"). Paste the App Store URL
 * and set APP_STORE_STATUS to 'live' on launch day.
 */
export const APP_STORE_URL = '';
export const APP_STORE_STATUS: StoreStatus = 'testing';

/**
 * Phone screenshots, shown in a phone frame. Add the WebP files to
 * public/loopbot/ and list them here; the Screenshots section stays hidden
 * while this list is empty.
 *
 * Example entry:
 *   { src: '/loopbot/phone-1-tower.webp', caption: 'Climb 50 floors' },
 */
export const SCREENSHOTS: { src: string; caption: string }[] = [
    { src: '/loopbot/phone-1-tower.webp', caption: 'Climb 50 floors' },
    { src: '/loopbot/phone-2-repeat.webp', caption: 'Loops do the heavy lifting' },
    { src: '/loopbot/phone-3-ifelse.webp', caption: 'Make LoopBot think' },
    { src: '/loopbot/phone-4-code.webp', caption: 'See the real code' },
    { src: '/loopbot/phone-5-cleared.webp', caption: 'Three stars for a perfect program' },
];

/**
 * Wide hero image (feature-graphic-1024x500). The share image (og:image) uses
 * the PNG next to it, since not every social site reads WebP. While empty, the
 * hero shows the drawn skyline and the share card uses the app icon.
 */
export const FEATURE_GRAPHIC = '/loopbot/feature-graphic-1024x500.webp';
