import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/Hero'
import { ServicesOverview, StatsBar } from '@/components/sections/Services'
import { HomepageIntro } from '@/components/sections/HomepageIntro'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { WhyChooseUs, CTABanner } from '@/components/sections/Features'
import { CitiesServed } from '@/components/sections/CitiesServed'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrustedBy } from '@/components/sections/TrustedBy'
import { PortfolioHighlights } from '@/components/sections/PortfolioHighlights'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { IndustriesServed } from '@/components/sections/IndustriesServed'
import { FAQSection } from '@/components/sections/FAQ'
import { OrganizationSchema, WebSiteSchema, FAQPageSchema } from '@/components/seo/JsonLd'
import { faqs } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'WordPress Agency New Mexico | Development, SEO & Speed',
  description: 'Code In WordPress is a WordPress agency in New Mexico serving Albuquerque, Santa Fe, and Las Cruces. Custom development, speed optimization, and SEO. 400+ projects. 99% satisfaction. Get a free quote.',
  path: '',
})

export default function HomePage() {
  const homeFaqs = faqs.slice(0, 6)

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <FAQPageSchema faqs={homeFaqs} />
      <Hero />
      <TrustedBy />
      <StatsBar />
      <HomepageIntro />
      <ServicesOverview />
      <BeforeAfter />
      <HowWeWork />
      <PortfolioHighlights />
      <WhyChooseUs />
      <IndustriesServed />
      <CitiesServed />
      <Testimonials limit={3} />
      <CTABanner />
      <FAQSection
        faqs={homeFaqs}
        background="alt"
        heading="Common Questions About WordPress Development"
        subheading="Straight answers to the questions New Mexico business owners ask us most."
      />
    </>
  )
}
