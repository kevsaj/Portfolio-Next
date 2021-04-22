import Head from 'next/head'
import dynamic from 'next/dynamic'

import Intro from '../components/Intro'
import Icons from '../components/Icons'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Header = dynamic(
  () => import('../components/Header'),
  { ssr: false }
)

export default function Home() {
  return (
    <div className='h-full w-full bg-pink-200'>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Kevin Sajan's Portfolio to showcase Web Development projects and work"
        />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css" />
        <title>Kevin Sajan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Intro />
        <Icons />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
