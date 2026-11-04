import Head from 'next/head';

export const SITE_URL = 'https://kisstudios.net';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SiteHeadProps {
    title: string;
    description: string;
    path?: string;
    /** Schema.org structured data, rendered as JSON-LD. */
    jsonLd?: object;
}

export default function SiteHead({ title, description, path = '/', jsonLd }: SiteHeadProps) {
    const url = `${SITE_URL}${path}`;
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="author" content="Kevin Sajan" />
            <meta name="theme-color" content="#ec4899" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={url} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="KIS Studios" />
            <meta property="og:locale" content="en_CA" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={OG_IMAGE} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="KIS Studios: websites, apps, Shopify stores, games and data by Kevin Sajan" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={OG_IMAGE} />

            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
        </Head>
    );
}
