import { FormspreeProvider } from '@formspree/react';
import type { AppProps } from 'next/app';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormspreeProvider project="mdoykbyg">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp
