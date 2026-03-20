import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { projects } from '@/content/portfolio'
import { Container, Card, Badge } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { CTABanner } from '@/components/sections/Features'

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Work: WordPress Case Studies & Results',
  description:
    'See how we help New Mexico businesses grow with WordPress. Real case studies with measurable results: faster sites, higher rankings, and more revenue.',
  path: '/portfolio',
})

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Portfolio', href: '/portfolio' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'Portfolio', href: '/portfolio' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              Real Results for{' '}
              <span className="text-primary-600">New Mexico Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Every project below is a real business with measurable outcomes.
              Faster load times, higher rankings, and more revenue — not vague
              promises.
            </p>
            <Button href="/contact" size="lg">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>

      {/* Portfolio Introduction */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-p:text-secondary-600 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline">
              <h2>Our Approach to Every WordPress Project</h2>

              <p>
                Every project you see on this page started the same way: with a
                conversation. Not a sales pitch, not a templated proposal, but a
                genuine discussion about what the business needed, what was not
                working with their current website, and what success would look like
                in measurable terms. Over 8 years and 400+ completed projects, we
                have learned that the best WordPress websites are built on a deep
                understanding of the business behind them. Our approach is to listen
                first, strategize second, and build third.
              </p>

              <p>
                We do not take on every project that comes our way. If a business
                needs something that WordPress is not the best solution for, we tell
                them honestly. If their budget does not align with what they actually
                need, we have that conversation upfront instead of cutting corners
                and delivering something that will not perform. This honesty is why
                we maintain a 99% client satisfaction rate and why the majority of
                our new clients come from referrals.
              </p>

              <h2>How We Measure Success</h2>

              <p>
                We are a metrics-driven agency because we believe that results should
                be provable, not anecdotal. Every project in our portfolio includes
                specific, measurable outcomes. We track page load times before and
                after our work. We monitor organic traffic growth over 90-day and
                180-day windows. We measure conversion rates, bounce rates, and
                Core Web Vitals scores. When we say we helped a business increase
                their leads by 200 percent, we have the analytics to back it up.
              </p>

              <p>
                This metrics-first approach shapes how we build websites from the
                very beginning. During the discovery phase, we establish baseline
                measurements for the client's current site performance. We set
                specific, time-bound goals for improvement. Then we design and
                develop with those targets in mind. After launch, we continue
                monitoring to ensure the site hits its performance targets and to
                identify opportunities for further optimization. A beautiful website
                that does not generate results is a failure by our standards.
              </p>

              <h2>Types of Projects We Handle</h2>

              <p>
                Our portfolio spans the full range of WordPress development. We
                build custom WordPress websites from blank starter themes for
                businesses that need a completely unique online presence. We
                redesign and rebuild existing WordPress sites that have become slow,
                outdated, or are no longer generating leads. We build{' '}
                <Link href="/services/wordpress-ecommerce">WooCommerce stores</Link>{' '}
                for retailers and product-based businesses. We perform{' '}
                <Link href="/services/wordpress-speed-optimization">speed optimization</Link>{' '}
                projects that transform sluggish sites into high-performance assets.
              </p>

              <p>
                We also handle WordPress migrations from other platforms. We have
                moved businesses from Wix, Squarespace, Shopify, Joomla, and custom
                HTML sites to WordPress with zero downtime and no loss of search
                rankings. Each migration includes full SEO preservation through
                proper 301 redirect mapping, metadata transfer, and content
                restructuring. We have completed over 60 platform migrations across
                New Mexico, and every single one maintained or improved the client's
                organic traffic within 60 days.
              </p>

              <h2>Our Project Methodology from Discovery to Launch</h2>

              <p>
                Our process follows six distinct phases, and we have refined each one
                over hundreds of projects. It starts with Discovery, where we conduct
                a thorough audit of your current online presence, analyze your
                competitors, and define measurable project goals. Next comes
                Strategy, where we map out the site architecture, plan the content
                structure, and define the technical requirements. This phase includes
                keyword research and SEO planning so that search visibility is built
                into the foundation, not bolted on later.
              </p>

              <p>
                The Design phase produces wireframes and visual mockups that you
                review and approve before any code is written. We do not design in
                isolation. You see every layout, every color choice, and every
                typographic decision. Development follows, where our team writes
                clean, standards-compliant WordPress code, builds custom
                functionality, integrates third-party services, and configures the
                server environment for optimal performance. Every site goes through
                our Testing phase, which includes cross-browser testing, mobile
                responsiveness validation, load time benchmarking, accessibility
                auditing, and security scanning. Only after everything passes our
                quality checklist do we move to Launch.
              </p>

              <h2>Why We Showcase Real Results, Not Just Pretty Screenshots</h2>

              <p>
                You will notice that our portfolio is structured differently than
                most agency websites. We do not just show you attractive homepage
                designs and call it a day. Every case study on this page includes
                the business challenge, our solution, and the measurable results.
                We do this because we know that what matters to you is not whether
                we can make a website that looks good. What matters is whether we
                can make a website that grows your business.
              </p>

              <p>
                A home services company in Albuquerque does not need a website
                that wins design awards. They need a website that ranks for terms
                like &quot;plumber near me&quot; and converts visitors into service
                calls. A boutique hotel in Santa Fe does not just need beautiful
                photography layouts. They need a booking system that works
                flawlessly on mobile, loads instantly on slow connections, and
                ranks higher than OTA sites for branded search terms. The visual
                design matters, absolutely, but it is in service of business
                outcomes, never the other way around.
              </p>

              <h2>Client Collaboration Process</h2>

              <p>
                We treat every project as a partnership, not a transaction. Our
                clients have access to a dedicated project manager throughout the
                engagement. They receive weekly progress updates with screenshots
                and working demos. They have direct communication channels with
                our development team for questions and feedback. We use a
                structured review process at each project phase, so nothing moves
                forward without your explicit approval.
              </p>

              <p>
                This collaborative approach means that the finished product reflects
                your business, your brand, and your vision, informed by our
                technical expertise and strategic recommendations. It also means
                there are no surprises at launch. By the time your site goes live,
                you have already seen and approved every page, tested every form,
                and reviewed every piece of functionality. The projects below are
                a testament to what happens when deep WordPress expertise meets
                genuine client partnership. We are proud of these results, and we
                are confident we can deliver the same for your business.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.slug} delay={i * 80}>
                <Card className="h-full flex flex-col" padding="lg">
                  {/* Industry & Location */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="primary">{project.industry}</Badge>
                    <span className="text-xs text-muted-foreground font-heading">
                      {project.location}
                    </span>
                  </div>

                  {/* Client & Title */}
                  <h2 className="text-xl font-heading font-bold text-foreground mb-1">
                    {project.client}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.title}
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service) => (
                      <Badge key={service} variant="outline">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  {/* Challenge snippet */}
                  <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-3">
                    {project.challenge}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-border">
                    {project.results.slice(0, 4).map((result) => (
                      <div key={result.metric}>
                        <p className="text-lg font-heading font-bold text-primary-600">
                          {result.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {result.metric}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Duration & Year */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground font-heading">
                      {project.duration} &middot; {project.year}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary-600 hover:gap-2.5 transition-all"
                    >
                      Start Similar Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
