import { FormspreeProvider } from '@formspree/react';
import '../styles/globals.scss'
import GetServerSideProps from "next/app"

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="{your-project-id}">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}

export default MyApp
