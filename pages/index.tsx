import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Header from '../components/Header'
// import dynamic from 'next/dynamic'

// const Header = dynamic(
//   () => import('../components/Header'),
//   { ssr: false }
// )

export default function Home() {
  return (
    <div className={`${styles.container} bg-pink-200 flex flex-col`}>
      <Head>
        <title>Kevin Sajan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
      </div>
    </div>
  )
}
