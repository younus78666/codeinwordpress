import { Hero } from '@/components/sections/Hero'
import { ServicesOverview, StatsBar } from '@/components/sections/Services'
import { WhyChooseUs, CTABanner } from '@/components/sections/Features'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQSection } from '@/components/sections/FAQ'
import { OrganizationSchema, WebSiteSchema } from '@/components/seo/JsonLd'
import { faqs } from '@/content/faqs'

export default function HomePage() {
  const homeFaqs = faqs.slice(0, 5)

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials limit={3} />
      <CTABanner />
      <FAQSection faqs={homeFaqs} background="alt" />
    </>
  )
}
