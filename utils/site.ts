export const BOOKING_URL = 'https://cal.com/kis-studios-hrr3yh/30min';
export const CONTACT_EMAIL = 'kisstudios98@gmail.com';

/**
 * Public profiles for KIS Studios and Kevin. These feed the `sameAs` links in the
 * JSON-LD so Google and Bing can tie the site to the same business everywhere.
 * Add each new listing here once it exists (Google Business Profile share link,
 * LinkedIn company page, Clutch, etc.).
 */
export const BUSINESS_PROFILES: string[] = [
    // 'https://www.linkedin.com/company/kis-studios/',
    // 'https://clutch.co/profile/kis-studios',
];
export const PERSONAL_PROFILES: string[] = [
    'https://github.com/kevsaj',
    'https://www.linkedin.com/in/kevin-sajan/',
];

/**
 * Only needed if a search engine is verified with an HTML meta tag. Domain (DNS)
 * verification in Search Console is preferred and needs nothing here.
 * Paste only the token, e.g. 'abc123...' from
 * <meta name="google-site-verification" content="abc123..." />.
 */
export const GOOGLE_SITE_VERIFICATION = '';
export const BING_SITE_VERIFICATION = '';

/** Google review link ("Ask for reviews" in Google Business Profile). Shown in the footer once set. */
export const REVIEW_URL = '';

/**
 * Google Ads conversion tracking. Leave GOOGLE_ADS_ID empty and no Google tag loads.
 * From Google Ads: Goals > Conversions > (your conversion) > Tag setup > Install the tag yourself.
 * The snippet shows send_to: 'AW-123456789/AbCdEfGh' -> ID is 'AW-123456789', label is 'AbCdEfGh'.
 */
export const GOOGLE_ADS_ID = '';
export const GOOGLE_ADS_CONVERSIONS = {
    /** Contact form sent successfully. */
    contactForm: '',
    /** Click on any "Book a free consult" (Cal.com) link. */
    bookingClick: '',
};
