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

/**
 * Google Play listing. Set PLAY_LIVE to true on launch day: the hero and footer
 * then link to the store and drop the "coming soon" label.
 * Confirm the app ID matches the Play Console listing first.
 */
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.kisstudios.loopbot';
export const PLAY_LIVE = false;

/**
 * Phone screenshots, shown in a phone frame. Add the WebP files to
 * public/loopbot/ and list them here; the Screenshots section stays hidden
 * while this list is empty.
 *
 * Example entry:
 *   { src: '/loopbot/phone-1-tower.webp', caption: 'Climb 50 floors' },
 */
export const SCREENSHOTS: { src: string; caption: string }[] = [];

/**
 * Wide hero image (feature-graphic-1024x500) and share image. While empty, the
 * hero shows the drawn skyline and the share card uses the app icon.
 */
export const FEATURE_GRAPHIC = '';
