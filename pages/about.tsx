import SiteHead from '../components/SiteHead'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import CtaBanner from '../components/CtaBanner'
import ScrollAnimation from '../components/ScrollAnimation'

export default function About() {
  return (
    <>
      <SiteHead
        title="About Kevin Sajan | KIS Studios"
        description="Kevin Sajan is a Toronto full-stack developer at MacLean Engineering, former Deloitte financial advisory technician and Master of Data Science student at the University of Pittsburgh."
        path="/about"
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
