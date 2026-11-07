import Head from 'next/head';
import { BING_SITE_VERIFICATION, GOOGLE_SITE_VERIFICATION } from '../utils/site';

export const SITE_URL = 'https://kisstudios.net';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SiteHeadProps {
    title: string;
    description: string;
    path?: string;
    /** Schema.org structured data, rendered as JSON-LD. */
    jsonLd?: object;
    /** Page-specific share image. Defaults to the site-wide og-image.png. */
    image?: { url: string; width: number; height: number; alt: string };
    /** Page-specific favicon. Defaults to /favicon.ico. */
    icon?: string;
}

export default function SiteHead({ title, description, path = '/', jsonLd, image, icon = '/favicon.ico' }: SiteHeadProps) {
    const url = `${SITE_URL}${path}`;
    const og = image ?? { url: OG_IMAGE, width: 1200, height: 630, alt: 'KIS Studios: websites, apps, Shopify stores, games and data by Kevin Sajan' };
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="author" content="Kevin Sajan" />
            <meta name="theme-color" content="#ec4899" />
            <link rel="icon" href={icon} />
            <link rel="canonical" href={url} />
            {GOOGLE_SITE_VERIFICATION && <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />}
            {BING_SITE_VERIFICATION && <meta name="msvalidate.01" content={BING_SITE_VERIFICATION} />}

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="KIS Studios" />
            <meta property="og:locale" content="en_CA" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={og.url} />
            <meta property="og:image:width" content={String(og.width)} />
            <meta property="og:image:height" content={String(og.height)} />
            <meta property="og:image:alt" content={og.alt} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={og.url} />

            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
        </Head>
    );
}
