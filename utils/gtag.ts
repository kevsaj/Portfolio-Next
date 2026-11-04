import { GOOGLE_ADS_ID } from './site';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

/** Report a Google Ads conversion. Does nothing until GOOGLE_ADS_ID and the label are set. */
export function trackConversion(label: string) {
    if (!GOOGLE_ADS_ID || !label || typeof window === 'undefined' || !window.gtag) return;
    window.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${label}` });
}
