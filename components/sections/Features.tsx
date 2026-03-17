import { SectionWrapper, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Container } from '@/components/ui/Shared'
import { siteConfig } from '@/content/site-config'

const features = [
  {
    icon: '⚡',
    title: 'Built for Speed',
    description: 'Every site we build scores 90+ on Google Lighthouse. Faster sites mean better rankings, lower bounce rates, and happier visitors.',
  },
  {
    icon: '🔍',
    title: 'SEO from Day One',
    description: 'Schema markup, meta optimization, sitemaps, and clean architecture baked into every project. Not bolted on as an afterthought.',
  },
  {
    icon: '🛡️',
    title: 'Security First',
    description: 'Hardened WordPress installations with firewall config, login protection, malware scanning, and regular security audits.',
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    description: 'Over 60% of web traffic is mobile. Every layout, button, and image is optimized for smaller screens first, then scaled up.',
  },
  {
    icon: '🤝',
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprise invoices. You know exactly what you are paying for before we write a single line of code.',
  },
  {
    icon: '🔧',
    title: '6 Months Free Support',
    description: 'Every project includes half a year of post-launch support. Bug fixes, minor updates, and guidance at no extra cost.',
  },
]

export function WhyChooseUs() {
  return (
    <SectionWrapper
      heading="Why Businesses Choose Us"
      subheading="We combine deep technical WordPress expertise with business strategy. Here is what sets us apart from template-based agencies."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, i) => (
          <AnimateOnScroll key={feature.title} delay={i * 80}>
            <Card className="h-full" padding="lg">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}

/* ── CTA Banner ── */
export function CTABanner({
  heading = 'Ready to Get a Website That Works?',
  subheading = 'Let us build you a fast, secure, SEO-optimized WordPress website. Get a free quote today.',
  primaryText = siteConfig.ctaPrimary,
  primaryHref = '/contact',
  secondaryText = 'View Pricing',
  secondaryHref = '/pricing',
}: {
  heading?: string
  subheading?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
}) {
  return (
    <section className="py-16 md:py-24 bg-primary-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/50 to-transparent" aria-hidden="true" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl" aria-hidden="true" />
      <Container className="relative z-10 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">{heading}</h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">{subheading}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryHref} variant="white" size="lg">{primaryText}</Button>
            {secondaryText && (
              <Button href={secondaryHref} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                {secondaryText}
              </Button>
            )}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
