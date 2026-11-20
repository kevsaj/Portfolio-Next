import { ANDROID_LIVE, BADGES, IOS_LIVE, LOOPBOT_STATUS } from '../../utils/loopbot';

const pill = 'whitespace-nowrap rounded-full bg-[#7ff2e0]/15 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#7ff2e0]';
const textBadge = 'inline-flex h-12 items-center justify-center gap-2 rounded-xl border px-5 font-semibold max-sm:h-11';

/** One store's badge: the official artwork once it's added, a text button until then. */
function Badge({ store, live, href }: { store: 'play' | 'appStore'; live: boolean; href?: string }) {
    const name = store === 'play' ? 'Google Play' : 'the App Store';
    const art = BADGES[store];
    const verb = store === 'play' ? 'Get it on' : 'Download on';
    const label = live ? `${verb} ${name}` : `${store === 'play' ? 'Google Play' : 'App Store'}: coming soon`;

    const inner = art ? (
        // Official artwork, unmodified; only dimmed while not yet live.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={art} alt={`${verb} ${name}`} className={`h-12 w-auto max-sm:h-11 ${live ? '' : 'opacity-50'}`} />
    ) : (
        <span
            className={`${textBadge} ${live
                ? 'border-[#7ff2e0]/60 bg-black text-white hover:bg-black/80'
                : 'border-white/20 bg-black/40 text-[#ece6f5]/70'}`}
        >
            <span className="text-left leading-tight">
                <span className="block text-[10px] font-medium uppercase tracking-wider opacity-80">{verb}</span>
                <span className="block text-base">{store === 'play' ? 'Google Play' : 'App Store'}</span>
            </span>
        </span>
    );

    const withPill = (
        <span className="inline-flex items-center gap-2">
            {inner}
            {!live && <span className={pill}>Coming soon</span>}
        </span>
    );

    if (href) {
        const external = href.startsWith('http');
        return (
            <a
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex rounded-xl transition hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ff2e0]"
            >
                {withPill}
            </a>
        );
    }
    return (
        <span className="inline-flex cursor-default">
            {withPill}
        </span>
    );
}

/** Google Play + App Store badges, driven by LOOPBOT_STATUS. */
export default function StoreBadges({ className = '' }: { className?: string }) {
    return (
        <div className={`flex flex-wrap items-center gap-3 ${className}`}>
            <Badge store="play" live={ANDROID_LIVE} href={ANDROID_LIVE ? LOOPBOT_STATUS.playUrl : '#testers'} />
            <Badge store="appStore" live={IOS_LIVE} href={IOS_LIVE ? LOOPBOT_STATUS.appStoreUrl : undefined} />
        </div>
    );
}

/** The one-line status under the badges. */
export function StoreLine({ className = '' }: { className?: string }) {
    if (ANDROID_LIVE && IOS_LIVE) {
        return <p className={className}>Free on Android, iPhone and iPad. Tower 1 is all yours.</p>;
    }
    if (ANDROID_LIVE) {
        return <p className={className}>Free on Android now. Coming soon to iPhone and iPad.</p>;
    }
    return (
        <p className={className}>
            Coming soon to Android, iPhone and iPad.{' '}
            <a href="#testers" className="font-semibold text-[#7ff2e0] underline-offset-2 hover:underline">
                Join the Android test
            </a>{' '}
            to play it first.
        </p>
    );
}
