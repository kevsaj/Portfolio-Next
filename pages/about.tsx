import SiteHead, { SITE_URL } from '../components/SiteHead'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import CtaBanner from '../components/CtaBanner'
import ScrollAnimation from '../components/ScrollAnimation'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/about`,
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#kevin`,
    name: 'Kevin Sajan',
    jobTitle: 'Full-stack software developer',
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/self.png`,
    worksFor: { '@id': `${SITE_URL}/#business` },
    homeLocation: { '@type': 'City', name: 'Toronto' },
    sameAs: ['https://github.com/kevsaj', 'https://www.linkedin.com/in/kevin-sajan/'],
  },
}

export default function About() {
  return (
    <>
      <SiteHead
        title="About Kevin Sajan | KIS Studios"
        description="Kevin Sajan is a Toronto full-stack developer at MacLean Engineering, former Deloitte financial advisory technician and Master of Data Science student at the University of Pittsburgh."
        path="/about"
        jsonLd={jsonLd}
      />
      <SiteNav />
      <main>
        <Intro />
        <ScrollAnimation animation="fadeInUp"><WorkExperience /></ScrollAnimation>
        <ScrollAnimation animation="fadeInUp"><Skills /></ScrollAnimation>
        <ScrollAnimation animation="fadeInUp"><Education /></ScrollAnimation>
        <CtaBanner title="Have a project in mind?" body="I take on websites, apps, stores, games, data and marketing work. Let’s talk about yours." />
      </main>
      <Footer />
    </>
  )
}
