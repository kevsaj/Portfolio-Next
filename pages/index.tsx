import SiteHead, { SITE_URL } from '../components/SiteHead'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import { services } from '../components/home/Services'
import { BOOKING_URL, BUSINESS_PROFILES, CONTACT_EMAIL, PERSONAL_PROFILES } from '../utils/site'
import Services from '../components/home/Services'
import Problems from '../components/home/Problems'
import Process from '../components/home/Process'
import WhyMe from '../components/home/WhyMe'
import CtaBanner from '../components/CtaBanner'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import ScrollAnimation from '../components/ScrollAnimation'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#business`,
      name: 'KIS Studios',
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/og-image.png`,
      email: CONTACT_EMAIL,
      description:
        'Freelance web developer in Toronto building websites, web and mobile apps, Shopify stores, games, APIs, databases, dashboards and SEO for small businesses.',
      address: { '@type': 'PostalAddress', addressLocality: 'Toronto', addressRegion: 'ON', addressCountry: 'CA' },
      areaServed: [
        { '@type': 'City', name: 'Toronto' },
        { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
        { '@type': 'Country', name: 'Canada' },
      ],
      founder: { '@id': `${SITE_URL}/about#kevin` },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: CONTACT_EMAIL,
        url: BOOKING_URL,
        areaServed: 'CA',
        availableLanguage: 'English',
      },
      sameAs: BUSINESS_PROFILES.length ? BUSINESS_PROFILES : PERSONAL_PROFILES,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web development services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.body },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'KIS Studios',
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-CA',
    },
  ],
}

export default function Home() {
  return (
    <>
      <SiteHead
        title="Web Developer in Toronto | Websites, Apps & Shopify | KIS Studios"
        description="Freelance web developer in Toronto building websites, web and mobile apps, Shopify stores, games, APIs and databases, plus SEO so people can find you. Free consult."
        jsonLd={jsonLd}
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
