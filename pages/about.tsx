import SiteHead, { SITE_URL } from '../components/SiteHead'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import CtaBanner from '../components/CtaBanner'
import ScrollAnimation from '../components/ScrollAnimation'
import { PERSONAL_PROFILES } from '../utils/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/about`,
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#kevin`,
    name: 'Kevin Sajan',
    jobTitle: 'Software developer',
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/self.png`,
    worksFor: { '@id': `${SITE_URL}/#business` },
    homeLocation: { '@type': 'City', name: 'Toronto' },
    sameAs: PERSONAL_PROFILES,
  },
}

export default function About() {
  return (
    <>
      <SiteHead
        title="Kevin Sajan, Software Developer | Résumé and experience"
        description="Kevin Sajan is a Toronto-area software developer who builds machine HMIs in C++, Qt/QML and Python at MacLean Engineering, plus full-stack web and mobile apps. Open to software engineering roles."
        path="/about"
        jsonLd={jsonLd}
      />
      <SiteNav />
      <main>
        <Intro />
        <ScrollAnimation animation="fadeInUp"><WorkExperience /></ScrollAnimation>
        <ScrollAnimation animation="fadeInUp"><Skills /></ScrollAnimation>
        <ScrollAnimation animation="fadeInUp"><Education /></ScrollAnimation>
        <CtaBanner title="Hiring, or have a project in mind?" body="I’m open to software engineering roles, and I take on client projects through KIS Studios. Either way, let’s talk." />
      </main>
      <Footer />
    </>
  )
}
