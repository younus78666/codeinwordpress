import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site-config'
import { SectionWrapper, Container, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { StatsBar } from '@/components/sections/Services'
import { CTABanner } from '@/components/sections/Features'
import { Testimonials } from '@/components/sections/Testimonials'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Our WordPress Agency | Our Story & Values',
  description: `Learn about ${siteConfig.name} — a WordPress development agency with ${siteConfig.stats.experience} years of experience, ${siteConfig.stats.projects} completed projects, and a ${siteConfig.stats.satisfaction} client satisfaction rate.`,
  path: '/about',
})

const values = [
  { iconPath: 'M12 6V12m0 0V18m0-6h6m-6 0H6', title: 'Results Over Everything', description: 'A beautiful website means nothing if it does not generate leads, rank on Google, and load fast. We measure success in business outcomes, not design awards.' },
  { iconPath: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z', title: 'Transparency First', description: 'You will always know exactly what we are working on, how much it costs, and when it will be done. No black boxes, no vague timelines, no surprise invoices.' },
  { iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', title: 'Technical Excellence', description: 'We write clean, optimized code. We do not just drag-and-drop templates. Every site is built to perform at the highest level for speed, SEO, and security.' },
  { iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z', title: 'Long-Term Partnership', description: 'We are not interested in one-off transactions. Our 6-month free support period and maintenance plans reflect our commitment to your long-term success.' },
]

const timeline = [
  { year: '2017', event: 'Started freelancing on WordPress with a focus on speed optimization and clean code.' },
  { year: '2019', event: 'Reached 100+ completed projects across the US, UK, and Australia. Earned Top Rated badge on Upwork.' },
  { year: '2021', event: 'Expanded into technical SEO services, combining development expertise with advanced search optimization.' },
  { year: '2023', event: 'Surpassed 300+ projects and $100K+ in completed work. Launched codeinwordpress.com targeting New Mexico businesses.' },
  { year: '2025', event: '400+ projects completed with a 99% satisfaction rate. Serving 15+ WordPress sites on ongoing retainers across 12+ countries.' },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              WordPress Experts with{' '}
              <span className="text-primary-600">{siteConfig.stats.experience} Years</span> of Proof
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We are a WordPress-focused development and SEO agency that has completed {siteConfig.stats.projects} projects for businesses across New Mexico and 12+ countries worldwide. Every site we build is optimized for speed, security, and search visibility from day one.
            </p>
            <Button href="/contact" size="lg">Work With Us</Button>
          </div>
        </Container>
      </section>

      <StatsBar />

      {/* Our Story — Long-form UC 6.2 content */}
      <SectionWrapper heading="Our Story" subheading="How a passion for clean code and fast websites turned into New Mexico's go-to WordPress agency.">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-p:text-secondary-600 prose-p:leading-relaxed">
              <h2>It Started with a Slow Website and a Frustrated Business Owner</h2>
              <p>
                In 2017, I, Muhammad Younus, took on my very first freelance WordPress project. A small business owner in Albuquerque had paid a so-called agency over three thousand dollars for a website that took eleven seconds to load, had no SSL certificate, and ranked on exactly zero search terms. The owner was frustrated, embarrassed, and ready to give up on having an online presence altogether. I rebuilt that site from scratch in two weeks. Load time dropped to under two seconds. Within three months, the site was ranking for local keywords and generating real leads. That project changed the trajectory of my entire career.
              </p>
              <p>
                I realized something important that year: small and mid-sized businesses, especially here in New Mexico, were being dramatically underserved. They were paying real money and getting template-based websites slapped together with bloated page builders, zero optimization, and no strategy behind any of it. The agencies building those sites moved on to the next client the moment the check cleared. There was no follow-up, no performance tracking, no ongoing relationship. It was transactional, and it showed in the results.
              </p>

              <h2>The Problem We Set Out to Solve</h2>
              <p>
                New Mexico has a unique business landscape. We have a thriving mix of tourism-dependent businesses in Santa Fe and Taos, service companies across Albuquerque and Rio Rancho, agricultural operations in the southern part of the state, and a growing tech corridor around Los Alamos and Sandia. Each of these sectors has different needs, different audiences, and different competitive pressures online. A cookie-cutter WordPress template does not serve any of them well.
              </p>
              <p>
                We saw the same pattern repeated over and over. A restaurant owner in Santa Fe would pay for a beautiful-looking site that loaded so slowly on mobile that tourists searching for dinner would bounce before the menu even appeared. A plumbing company in Las Cruces would get a site with no schema markup, no local SEO foundation, and no Google Business Profile integration, making them essentially invisible in local search results. A boutique hotel in Taos would have a booking system so poorly implemented that guests would abandon the reservation process out of sheer frustration.
              </p>
              <p>
                These were not design problems. They were engineering problems. And they demanded an engineering-first approach to WordPress development. That conviction is what led to the founding of Code In WordPress.
              </p>

              <h2>Our Technical Philosophy: Speed, SEO, and Security from Day One</h2>
              <p>
                We do not treat performance, search optimization, and security as add-ons or afterthoughts. They are baked into our process from the very first line of code. Every project starts with a technical audit of your current situation, a competitive analysis of what your rivals are doing right and wrong online, and a clear strategy document that ties business goals to measurable web performance metrics.
              </p>
              <p>
                On the speed front, we are obsessive. We hand-optimize every image, implement lazy loading strategically, minimize render-blocking resources, leverage browser caching, and configure server-level optimizations that most agencies do not even know exist. Our average page load time across all client sites is under 1.8 seconds. We have worked with businesses like a flooring company in Rio Rancho whose old site took over eight seconds to load. After our rebuild, their Core Web Vitals all hit green, and their organic traffic increased by sixty-two percent in the first quarter alone.
              </p>
              <p>
                For SEO, we implement proper heading hierarchies, semantic HTML structure, structured data markup for local businesses, comprehensive meta tag strategies, XML sitemaps, and technical foundations that make it easy for search engines to crawl, index, and rank your pages. We have seen clients go from page three of Google to the local three-pack within four to six months simply because the technical SEO on their previous site was so poorly implemented.
              </p>
              <p>
                Security is non-negotiable. Every site we build includes hardened WordPress configurations, two-factor authentication for admin access, automated daily backups with off-site storage, Web Application Firewall setup, malware scanning, and ongoing security monitoring. In eight-plus years of building WordPress sites, we have never had a client site compromised under our care. That is a track record we take very seriously.
              </p>

              <h2>Code Quality Over Template Shortcuts</h2>
              <p>
                There is a fundamental difference between a WordPress site that is assembled and a WordPress site that is built. Assembled sites use heavy page builders like Elementor or Divi, loading hundreds of kilobytes of unnecessary CSS and JavaScript on every page. They look decent on the surface but crumble under performance audits. They are difficult to maintain, nearly impossible to migrate, and create vendor lock-in with specific plugin ecosystems.
              </p>
              <p>
                We take the opposite approach. We write clean, modular, well-documented code. We use lightweight themes or custom theme development. We rely on native WordPress functions and the block editor rather than third-party page builders wherever possible. When plugins are necessary, we vet each one for code quality, update frequency, security track record, and performance impact. The result is a site that loads fast, ranks well, is easy to update, and will not break when WordPress releases a major update.
              </p>
              <p>
                Our developers understand WordPress at the code level. We are not just clicking buttons in a visual editor. We are writing PHP, JavaScript, and CSS that follows WordPress coding standards. We build custom Gutenberg blocks when off-the-shelf solutions fall short. We create child themes that protect your customizations during updates. This level of technical rigor is what separates a professional WordPress build from a template installation.
              </p>

              <h2>The Team Behind the Code</h2>
              <p>
                Code In WordPress started as a one-person operation, and that scrappy, detail-oriented mentality still defines how we work. Our core team brings together expertise in WordPress development, front-end engineering, technical SEO, UI/UX design, and project management. Every team member has at least three years of professional experience working specifically with WordPress, and our senior developers have been in the ecosystem for over a decade.
              </p>
              <p>
                I personally review every project before it launches. Every line of custom code gets a peer review. Every site goes through a sixty-point pre-launch checklist that covers everything from mobile responsiveness to schema validation to WCAG accessibility compliance. We do not ship work we would not put our own name on, because our name is literally on it.
              </p>

              <h2>How We Work with Clients</h2>
              <p>
                We are a remote-first agency, which means we work efficiently with clients across all of New Mexico and beyond. But remote does not mean disconnected. Every client gets a dedicated project manager, a shared project dashboard where you can track progress in real time, and direct access to the developer working on your site. We do not hide behind support ticket systems or force you to explain your needs to a different person every time you reach out.
              </p>
              <p>
                Our process starts with a discovery call where we listen more than we talk. We want to understand your business, your customers, your competition, and your goals before we write a single line of code. From there, we deliver a detailed proposal with clear scope, timeline, and pricing. Once approved, we work in weekly sprints with regular check-ins and visual progress updates so you are never left wondering where things stand.
              </p>
              <p>
                For New Mexico businesses specifically, we offer in-person meetings in the Albuquerque metro area and are happy to travel to Santa Fe, Las Cruces, or anywhere in the state for larger projects. We understand the local market because we live and work here. We know that a tourism business in Ruidoso has different seasonal traffic patterns than a law firm in Albuquerque, and we build strategies accordingly.
              </p>

              <h2>Results That Speak for Themselves</h2>
              <p>
                Over eight-plus years and four hundred-plus completed projects, we have developed a results-driven approach that consistently delivers measurable outcomes. Our clients see an average of forty percent more organic traffic within six months of launch. E-commerce clients typically see conversion rate improvements of twenty to thirty-five percent after a site rebuild. Local service businesses regularly report a two to three times increase in qualified leads from their website.
              </p>
              <p>
                We maintain a ninety-nine percent client satisfaction rate, and the majority of our business comes from referrals and repeat clients. When a client comes back for a second, third, or fourth project, we take that as the highest possible compliment. It means we did not just deliver a website. We delivered a business asset that produced real returns.
              </p>

              <h2>Giving Back to the New Mexico Business Community</h2>
              <p>
                We believe in the New Mexico business community, and we are committed to helping it thrive online. We offer discounted rates for nonprofits and community organizations. We have provided free website audits and WordPress training sessions for small business groups in Albuquerque. We regularly publish educational content about WordPress best practices, SEO strategies, and web performance optimization that any business owner can benefit from.
              </p>
              <p>
                New Mexico businesses deserve the same quality of web development that companies in Austin, Denver, or Phoenix have access to. Our mission is to make sure they get it, without the inflated prices that come with big-city agencies, and with the personalized attention that only a locally invested team can provide.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      {/* Our Values */}
      <SectionWrapper heading="What We Stand For" subheading="The principles that guide every project, every decision, and every line of code.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((v, i) => (
            <AnimateOnScroll key={v.title} delay={i * 100}>
              <Card padding="lg" className="h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 text-primary-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={v.iconPath} />
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper background="alt" heading="Our Journey" subheading="From a solo freelancer to a full-service WordPress agency.">
        <div className="mx-auto max-w-2xl">
          <div className="relative border-l-2 border-primary-200 pl-8 space-y-10">
            {timeline.map((item, i) => (
              <AnimateOnScroll key={item.year} delay={i * 100}>
                <div className="relative">
                  <div className="absolute -left-[2.56rem] top-1 w-5 h-5 rounded-full bg-primary-600 border-4 border-white" />
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-heading font-bold mb-2">
                    {item.year}
                  </span>
                  <p className="text-sm text-secondary-700 leading-relaxed">{item.event}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Testimonials limit={3} />
      <CTABanner heading="Ready to Start Your Project?" subheading="Get a free consultation and quote. No pressure, no commitment." />
    </>
  )
}
