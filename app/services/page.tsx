import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { services } from '@/content/services'
import { ServiceIconComponent } from '@/components/ui/ServiceIcon'
import { Container, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { CTABanner } from '@/components/sections/Features'
import { StyledProseSection } from '@/components/ui/ContentRenderer'

export const metadata: Metadata = generatePageMetadata({
  title: 'WordPress Services | Dev, SEO, Speed & Maintenance',
  description: 'Professional WordPress development, speed optimization, SEO, maintenance, security, WooCommerce, and redesign services. Serving businesses across New Mexico.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              WordPress Services That <span className="text-primary-600">Deliver Results</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              From custom development to ongoing optimization, every service is designed to make your website faster, more visible, and more profitable. No fluff, no filler.
            </p>
            <Button href="/contact" size="lg">Get a Free Quote</Button>
          </div>
        </Container>
      </section>

      {/* Services Introduction */}
      <StyledProseSection background="white" showImage imageIndex={1} imagePosition="left">
        <h2>A Comprehensive Approach to WordPress Services</h2>

        <p>
          Over the past 8 years, we have refined our service offerings based on
          what New Mexico businesses actually need, not what looks good on a
          sales page. Every service listed below was born from real client
          needs. When businesses in Albuquerque kept asking us to fix sites
          built by other agencies that were painfully slow, we formalized our{' '}
          <Link href="/services/wordpress-speed-optimization">speed optimization</Link>{' '}
          service. When clients in Santa Fe started losing leads because their
          sites were getting hacked, we built a comprehensive{' '}
          <Link href="/services/wordpress-security">security hardening</Link>{' '}
          program. Our 400+ completed projects across New Mexico have taught
          us exactly what services businesses need to succeed online.
        </p>

        <p>
          What sets our services apart is that each one was designed by
          practitioners, not marketers. Our team members are the ones writing
          the code, configuring the servers, and optimizing the databases. We
          do not outsource to overseas contractors or pass your project through
          a chain of subcontractors. When you hire Code In WordPress for a
          service, you get our team directly, working on your project with
          the same care and technical rigor we bring to every engagement.
        </p>

        <h2>Why We Specialize Rather Than Generalize</h2>

        <p>
          We are not a full-service digital agency that offers WordPress as one
          of thirty different services. We are WordPress specialists. That
          singular focus means we know the platform at a depth that generalist
          agencies simply cannot match. We know which plugins are reliable and
          which ones will cause conflicts six months from now. We know how to
          configure WordPress to handle 50,000 monthly visitors without
          breaking a sweat. We know the security vulnerabilities that affect
          specific versions and how to patch them before they become a problem.
        </p>

        <p>
          This specialization also means we stay current with every major
          WordPress development. When WordPress released the Full Site Editing
          paradigm, we had already tested it extensively and knew how to
          implement it for client sites where it made sense. When Google
          updated its Core Web Vitals requirements, we had already optimized
          our development practices to meet the new standards. Specialization
          is not a limitation. It is a competitive advantage that directly
          benefits every client we work with.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-1">
        <h2>How Our Services Work Together</h2>

        <p>
          A fast website that nobody can find is worthless. A highly visible
          website that takes eight seconds to load will drive visitors away. A
          fast, visible website that gets hacked loses everything overnight.
          That is why our three core disciplines, speed, SEO, and security,
          are designed to work together as a unified system. When we build or
          optimize a WordPress site, we address all three simultaneously
          because they are interconnected.
        </p>

        <p>
          Site speed directly impacts SEO rankings. Google has confirmed that
          page speed is a ranking factor, and our speed optimization work
          consistently lifts our clients in search results. Proper SEO
          architecture improves user experience metrics like bounce rate and
          time on page, which in turn reinforces your rankings. Security
          protects the SEO equity you have built, preventing the devastating
          ranking drops that come with a hacked site. We have seen businesses
          lose six months of SEO progress from a single security breach. Our
          integrated approach ensures that never happens to our clients.
        </p>

        <h2>The Technology Stack We Use</h2>

        <p>
          We are transparent about the tools and technologies we use because
          we believe our clients should understand what their website is built
          on. Our standard WordPress development stack includes PHP 8.2 or
          later for server-side processing, MySQL 8.0 for database management,
          and Nginx or LiteSpeed as the web server. We configure Redis for
          object caching, implement CDN distribution through Cloudflare, and
          set up server-level page caching for maximum performance.
        </p>

        <p>
          On the WordPress side, we build with lightweight starter themes
          customized for each project. We use Advanced Custom Fields Pro for
          flexible content management that clients can easily update. We
          implement custom Gutenberg blocks when appropriate, giving clients
          an intuitive editing experience without the bloat of page builder
          plugins. For e-commerce projects, we use WooCommerce with carefully
          selected extensions based on the client's specific requirements.
          Every plugin we install is vetted for performance, security, update
          frequency, and compatibility. We never install a plugin without a
          clear reason, and we regularly audit our clients' plugin stacks to
          remove anything that is no longer necessary.
        </p>
      </StyledProseSection>

      <StyledProseSection background="muted">
        <h2>Our Quality Assurance Process</h2>

        <p>
          Before any website or optimization project goes live, it passes
          through our multi-point quality assurance checklist. This includes
          cross-browser testing across Chrome, Firefox, Safari, and Edge.
          Mobile responsiveness testing on actual devices, not just browser
          simulators. Load time benchmarking on both fast connections and
          throttled 3G to simulate rural New Mexico internet speeds.
          Accessibility auditing against WCAG 2.1 guidelines. Security
          scanning for vulnerabilities. SEO validation including schema
          markup, meta tags, XML sitemaps, and robots.txt configuration.
        </p>

        <p>
          We also perform content review, link checking, form testing, and
          analytics verification before launch. Our QA process typically
          catches 30 to 50 issues per project that would have gone live on a
          site built by an agency without a formal testing protocol. These
          issues range from minor visual inconsistencies to critical
          functionality bugs that would have cost the client leads and revenue.
          It is not glamorous work, but it is the difference between a
          professional WordPress website and an amateur one.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-2">
        <h2>Industries We Serve Across New Mexico</h2>

        <p>
          Our services are tailored for the industries that drive New Mexico's
          economy. We work with healthcare providers who need HIPAA-aware
          website practices and patient intake form integration. We partner
          with law firms that require attorney profile architecture, practice
          area content strategies, and lead capture systems that comply with
          state bar advertising rules. We build for restaurants and hospitality
          businesses that need online ordering, reservation systems, and menu
          management.
        </p>

        <p>
          We also serve construction and home services companies across{' '}
          <Link href="/locations/albuquerque">Albuquerque</Link>,{' '}
          <Link href="/locations/rio-rancho">Rio Rancho</Link>, and{' '}
          <Link href="/locations/las-cruces">Las Cruces</Link> that depend on
          local SEO to generate service calls. We work with nonprofits and
          educational institutions that need accessible, compliant websites on
          limited budgets. We support artists, galleries, and tourism operators
          in <Link href="/locations/santa-fe">Santa Fe</Link> and{' '}
          <Link href="/locations/farmington">Farmington</Link> who need
          visually rich sites that load quickly and rank well. Whatever your
          industry, our WordPress expertise and New Mexico market knowledge
          combine to deliver websites that actually grow your business. Explore
          our services below to find the right solution for your needs.
        </p>
      </StyledProseSection>

      {/* Service Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.slug} delay={i * 80}>
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <Card className="h-full flex flex-col" padding="lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 text-primary-600">
                        <ServiceIconComponent icon={service.icon} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-primary-600 transition-colors mb-1">
                          {service.title}
                        </h2>
                        {service.price && (
                          <span className="text-sm font-heading font-semibold text-primary-600">{service.price}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-5 flex-1">{service.description}</p>
                    <ul className="space-y-2 mb-5">
                      {service.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-secondary-600">
                          <svg className="w-4 h-4 mt-0.5 shrink-0 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                      View details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
