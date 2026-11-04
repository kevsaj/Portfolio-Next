import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp
