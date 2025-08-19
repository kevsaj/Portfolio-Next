import Head from 'next/head'
import dynamic from 'next/dynamic'

import Intro from '../components/Intro'
import Icons from '../components/Icons'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import ThemeToggle from '../components/ThemeToggle'
import FloatingNav from '../components/FloatingNav'
import ScrollAnimation from '../components/ScrollAnimation'

const Header = dynamic(
  () => import('../components/Header'),
  { ssr: true }
)

export default function Home() {
  return (
    <div className='h-full min-w-full'>      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Kevin Sajan - Full-Stack Developer and aspiring Data Scientist. Expert in Python, React, Azure, and data visualization."
        />
        <meta name="keywords" content="Kevin Sajan, Full-Stack Developer, Data Scientist, Python, React, Azure, Portfolio" />
        <meta name="author" content="Kevin Sajan" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kisstudios.net/" />
        <meta property="og:title" content="Kevin Sajan - Full-Stack Developer & Data Scientist" />
        <meta property="og:description" content="Expert in Python, React, Azure, and data visualization. View my portfolio of innovative projects." />
        <meta property="og:image" content="/self.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kisstudios.net/" />
        <meta property="twitter:title" content="Kevin Sajan - Full-Stack Developer & Data Scientist" />
        <meta property="twitter:description" content="Expert in Python, React, Azure, and data visualization. View my portfolio of innovative projects." />
        <meta property="twitter:image" content="/self.png" />
        
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <title>Kevin Sajan - Full-Stack Developer & Data Scientist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ThemeToggle />
      <FloatingNav />
      
      <div className='h-full'>
        <ScrollAnimation animation="fadeInUp">
          <Header />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={200}>
          <Intro />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInLeft" delay={300}>
          <Icons />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInRight" delay={400}>
          <WorkExperience />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={500}>
          <Projects />
        </ScrollAnimation>
        
        <ScrollAnimation animation="scaleIn" delay={600}>
          <Contact />
        </ScrollAnimation>
      </div>
    </div>
  )
}
