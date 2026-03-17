import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Shared'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema, FAQPageSchema } from '@/components/seo/JsonLd'
import { FAQSection } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/Features'
import { faqs } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about WordPress development, pricing, timelines, maintenance, and SEO services from Code In WordPress.',
  path: '/faq',
})

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq' }]} />
      <FAQPageSchema faqs={faqs} />

      <section className="pt-32 pb-4 md:pt-40 md:pb-4 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} />
        </Container>
      </section>

      <FAQSection
        faqs={faqs}
        heading="Frequently Asked Questions"
        subheading="Everything you need to know about our WordPress services. Can't find what you need? Contact us and we will help."
        showCategories
      />

      <CTABanner
        heading="Still Have Questions?"
        subheading="Our team is happy to answer any questions you have. Get in touch and we will respond within 24 hours."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText=""
        secondaryHref=""
      />
    </>
  )
}
