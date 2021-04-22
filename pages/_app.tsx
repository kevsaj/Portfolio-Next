import '../styles/globals.scss'
import GetServerSideProps from "next/app"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
