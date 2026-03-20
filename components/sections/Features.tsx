import { SectionWrapper, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Container } from '@/components/ui/Shared'
import { siteConfig } from '@/content/site-config'

type FeatureItem = {
  iconPath: string
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    title: 'Speed That Actually Matters',
    description: 'Your visitors decide in under 3 seconds whether to stay or leave. We build every site to score 90+ on Google Lighthouse because speed directly impacts your bottom line. Not just fast on a test, fast for real people on real connections.',
  },
  {
    iconPath: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
    title: 'SEO Baked In, Not Bolted On',
    description: 'Most agencies build a pretty site and then "add SEO later." We do it backwards. Schema markup, meta tags, sitemaps, internal linking, clean URLs. All of it goes in before the first pixel is placed. That way your site actually gets found.',
  },
  {
    iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    title: 'Security You Can Sleep On',
    description: 'WordPress powers 43% of the web, which also makes it the biggest target for hackers. We harden every installation with firewall rules, two-factor auth, file permission lockdowns, and ongoing malware monitoring. Because one breach can undo years of trust.',
  },
  {
    iconPath: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
    title: 'Mobile-First, Always',
    description: 'Over 60% of your visitors are on their phone right now. Every layout, every button, every image we create starts on a small screen and scales up. Not the other way around. Your site will look and work great on any device.',
  },
  {
    iconPath: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
    title: 'No Surprises on the Invoice',
    description: 'You will know exactly what you are paying for before we write a single line of code. Our pricing page is public, our scope documents are detailed, and we will never hit you with charges we did not discuss upfront. That is just how we operate.',
  },
  {
    iconPath: 'M11.42 15.17l-5.384-3.19A.75.75 0 005.25 12.72v6.57a.75.75 0 00.786.72l5.384-.32a.75.75 0 00.684-.663v-3.78a.75.75 0 00-.684-.077zM21.75 12a.75.75 0 01-.22.53l-5.25 5.25a.75.75 0 01-1.06 0l-5.25-5.25A.75.75 0 019.75 12V2.25a.75.75 0 01.22-.53l5.25-5.25',
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
            <Card className="h-full relative border-l-4 border-l-transparent hover:border-l-primary-500 transition-all duration-300" padding="lg">
              {/* Decorative number */}
              <span className="absolute top-4 right-4 text-5xl font-display font-bold text-secondary-100 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-5 text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}

/* -- CTA Banner -- */
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
