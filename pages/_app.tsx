import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { BOOKING_URL, GOOGLE_ADS_CONVERSIONS, GOOGLE_ADS_ID } from '../utils/site';
import { trackConversion } from '../utils/gtag';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  // Count clicks on any booking link as a Google Ads conversion.
  useEffect(() => {
    if (!GOOGLE_ADS_ID) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a');
      if (link?.href.startsWith(BOOKING_URL)) trackConversion(GOOGLE_ADS_CONVERSIONS.bookingClick);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      {GOOGLE_ADS_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="afterInteractive" />
          <Script id="google-ads" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ADS_ID}');`}
          </Script>
        </>
      )}
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp
