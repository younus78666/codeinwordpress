import { SectionWrapper, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Container } from '@/components/ui/Shared'
import { siteConfig } from '@/content/site-config'

const features = [
  {
    icon: '⚡',
    title: 'Speed That Actually Matters',
    description: 'Your visitors decide in under 3 seconds whether to stay or leave. We build every site to score 90+ on Google Lighthouse because speed directly impacts your bottom line. Not just fast on a test, fast for real people on real connections.',
  },
  {
    icon: '🔍',
    title: 'SEO Baked In, Not Bolted On',
    description: 'Most agencies build a pretty site and then "add SEO later." We do it backwards. Schema markup, meta tags, sitemaps, internal linking, clean URLs. All of it goes in before the first pixel is placed. That way your site actually gets found.',
  },
  {
    icon: '🛡️',
    title: 'Security You Can Sleep On',
    description: 'WordPress powers 43% of the web, which also makes it the biggest target for hackers. We harden every installation with firewall rules, two-factor auth, file permission lockdowns, and ongoing malware monitoring. Because one breach can undo years of trust.',
  },
  {
    icon: '📱',
    title: 'Mobile-First, Always',
    description: 'Over 60% of your visitors are on their phone right now. Every layout, every button, every image we create starts on a small screen and scales up. Not the other way around. Your site will look and work great on any device.',
  },
  {
    icon: '🤝',
    title: 'No Surprises on the Invoice',
    description: 'You will know exactly what you are paying for before we write a single line of code. Our pricing page is public, our scope documents are detailed, and we will never hit you with charges we did not discuss upfront. That is just how we operate.',
  },
  {
    icon: '🔧',
    title: '6 Months of Free Support',
    description: 'We do not disappear after launch. Every project comes with six months of post-launch support for bug fixes, minor tweaks, and questions. If something breaks that we built, we fix it. Period. After that, our maintenance plans keep things running smooth.',
  },
]

export function WhyChooseUs() {
  return (
    <SectionWrapper
      heading="Why New Mexico Businesses Choose Us"
      subheading="We are not a template shop. We write real code, do real SEO, and build websites that generate real leads. Here is what makes working with us different."
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
  heading = 'Ready to Get a Website That Actually Works?',
  subheading = 'Tell us about your project. We will send you a detailed quote within 24 hours. No pressure, no commitment.',
  primaryText = siteConfig.ctaPrimary,
  primaryHref = '/contact',
  secondaryText = 'See Our Pricing',
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
