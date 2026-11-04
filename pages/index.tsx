import SiteHead from '../components/SiteHead'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Problems from '../components/home/Problems'
import Process from '../components/home/Process'
import WhyMe from '../components/home/WhyMe'
import CtaBanner from '../components/CtaBanner'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import ScrollAnimation from '../components/ScrollAnimation'

export default function Home() {
  return (
    <>
      <SiteHead
        title="KIS Studios | Websites, apps, Shopify, games & data"
        description="Toronto developer Kevin Sajan builds websites, web and mobile apps, Shopify stores, games, APIs, databases, dashboards and reports, and helps fix your online presence. Book a free consult."
      />
      <SiteNav />
      <main>
        <Hero />
        <ScrollAnimation animation="fadeInUp"><Services /></ScrollAnimation>
        <ScrollAnimation animation="fadeInUp"><Problems /></ScrollAnimation>
        <ScrollAnimation animation="fadeInUp"><Process /></ScrollAnimation>
        <ScrollAnimation animation="fadeInUp"><WhyMe /></ScrollAnimation>
        <ScrollAnimation animation="fadeInUp"><Projects /></ScrollAnimation>
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
