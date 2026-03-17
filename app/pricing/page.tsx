import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Container, SectionWrapper } from '@/components/ui/Shared'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { PricingTable } from '@/components/sections/PricingTable'
import { FAQSection } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/Features'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { faqs } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Pricing',
  description: 'WordPress website pricing starting at $500. Transparent packages for starter sites, professional builds, and enterprise solutions. 14-day money-back guarantee included.',
  path: '/pricing',
})

const guarantees = [
  { icon: '🛡️', title: '14-Day Money-Back Guarantee', text: 'Not satisfied with the initial design direction? Full refund within the first 14 days, no questions asked.' },
  { icon: '🔧', title: '6 Months Free Support', text: 'Every project includes six months of post-launch support for bug fixes, minor updates, and guidance.' },
  { icon: '📞', title: 'Free Consultation', text: 'Book a call to discuss your project. We will provide a detailed scope, timeline, and quote before you commit.' },
]

export default function PricingPage() {
  const pricingFaqs = faqs.filter(f => f.category === 'pricing')

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Pricing', href: '/pricing' }]} />

      <section className="pt-32 pb-4 md:pt-40 md:pb-4 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'Pricing', href: '/pricing' }]} />
        </Container>
      </section>

      <PricingTable />

      {/* Guarantees */}
      <SectionWrapper background="alt" heading="Our Guarantees" subheading="Every project comes with built-in protection for your investment.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {guarantees.map((g, i) => (
            <AnimateOnScroll key={g.title} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl mb-4">{g.icon}</div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <FAQSection faqs={pricingFaqs} heading="Pricing Questions" subheading="Common questions about our packages and payment options." />

      <CTABanner
        heading="Ready to Get Started?"
        subheading="Book a free consultation and get a custom quote for your project."
        primaryText="Get a Free Quote"
        primaryHref="/contact"
      />
    </>
  )
}
