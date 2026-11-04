import Head from 'next/head';

interface SiteHeadProps {
    title: string;
    description: string;
    path?: string;
}

export default function SiteHead({ title, description, path = '/' }: SiteHeadProps) {
    const url = `https://kisstudios.net${path}`;
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="author" content="Kevin Sajan" />
            <meta name="theme-color" content="#ec4899" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
            <link rel="canonical" href={url} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://kisstudios.net/self.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://kisstudios.net/self.png" />
        </Head>
    );
}
