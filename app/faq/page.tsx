import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Shared'
import { StyledProseSection } from '@/components/ui/ContentRenderer'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema, FAQPageSchema } from '@/components/seo/JsonLd'
import { FAQSection } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/Features'
import { faqs } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'FAQ | WordPress Development Questions Answered',
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

      {/* FAQ Introduction Content */}
      <StyledProseSection background="white">
        <h2>What You Should Know Before Hiring a WordPress Agency</h2>
        <p>
          Choosing a WordPress agency is one of the most important business decisions
          you will make this year. Your website is your most visible asset, your
          hardest-working salesperson, and often the first impression potential
          customers have of your brand. We have worked with over 400 businesses
          across New Mexico over the past 8 years, and we know that most business
          owners have real questions and valid concerns before they commit to a web
          development project. This page is designed to answer those questions
          honestly, without the marketing fluff you will find on most agency websites.
        </p>
        <p>
          We built this FAQ section based on the actual questions our clients ask us
          during discovery calls, project kickoffs, and ongoing support conversations.
          These are not hypothetical questions. They come directly from business
          owners in Albuquerque, Santa Fe, Las Cruces, Rio Rancho, and every other
          city we serve. If your question is not covered here, we genuinely want to
          hear it. Reach out through our{' '}
          <Link href="/contact">contact page</Link> and we will respond within 24
          hours.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-1" showImage imageIndex={0} imagePosition="left">
        <h2>Common Concerns About Website Development</h2>
        <p>
          The most common concern we hear from New Mexico business owners is about
          cost. And we understand why. Many businesses have been burned before. They
          paid three or five thousand dollars for a website that looked decent on
          launch day but fell apart six months later. The theme stopped receiving
          updates. The plugins conflicted with each other. The site slowed down until
          it was barely usable on mobile. By the time they contact us, they are
          skeptical about spending money on another website.
        </p>
        <p>
          We address this concern directly. Our pricing is transparent, and we
          provide detailed proposals that break down exactly what you are paying for.
          There are no hidden fees, no surprise charges, and no vague line items
          like &quot;website development - $5,000.&quot; You see every component of
          the project: the discovery phase, the design work, the development hours,
          the SEO configuration, the testing, and the launch process. More
          importantly, we build sites that are designed to last. Clean code, properly
          licensed plugins, and a maintainable architecture mean your site will still
          be running smoothly three to five years from now.
        </p>
      </StyledProseSection>

      <StyledProseSection background="muted">
        <h2>How We Address Timeline Concerns</h2>
        <p>
          The second most common concern is about timelines. Business owners want to
          know how long a project will take, and they want a straight answer. We
          provide realistic timelines during the proposal phase and we stick to them.
          A standard WordPress website with five to ten pages typically takes four
          to six weeks from kickoff to launch. A larger project with custom
          functionality, such as e-commerce or membership features, runs six to ten
          weeks. We have never missed a deadline on a project where the client
          provided content and feedback on schedule, and we have built systems to
          make that process as easy as possible for you.
        </p>
        <p>
          We also hear concerns about the revision process. Some agencies give you
          one round of revisions and then charge extra for every change. Our
          approach is different. We include multiple revision rounds at each phase
          of the project because we know that feedback is how good websites become
          great websites. We would rather spend an extra few hours getting the design
          exactly right than launch something that almost works for your business.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-2">
        <h2>The Value of Professional WordPress Development</h2>
        <p>
          Why should you hire a professional WordPress agency instead of using a
          DIY website builder or hiring a freelancer from a marketplace? The answer
          comes down to the difference between a website that exists and a website
          that works. Anyone can put a WordPress site online in a few hours using
          a premade theme. Making that site load in under two seconds, rank on the
          first page of Google for local search terms, convert visitors into leads,
          and stay secure against the 90,000 cyberattacks that hit WordPress sites
          every minute requires experience, technical knowledge, and ongoing attention.
        </p>
        <p>
          Our team brings over 8 years of focused WordPress expertise. We have seen
          what works and what does not across 400+ projects in industries ranging
          from healthcare and legal services to restaurants, construction, and
          e-commerce. That experience means we can anticipate problems before they
          happen, make architectural decisions that save you money in the long run,
          and implement best practices that most freelancers and template shops
          simply do not know about. This includes technical SEO configuration,
          accessibility compliance, Core Web Vitals optimization, and security
          hardening, all built into every project from day one.
        </p>
      </StyledProseSection>

      <StyledProseSection background="white">
        <h2>What to Look for in a WordPress Agency</h2>
        <p>
          If you are evaluating WordPress agencies, here is what we recommend you
          look for, whether you choose us or not. First, ask for case studies with
          real results. Any agency can show you pretty screenshots. Look for
          agencies that can demonstrate measurable outcomes: faster load times,
          higher search rankings, increased traffic, and more leads. Our{' '}
          <Link href="/portfolio">portfolio page</Link> includes specific metrics
          for every project because we believe in accountability.
        </p>
        <p>
          Second, ask about their technical approach. Do they build on premade themes
          or start from scratch? How do they handle performance optimization? What
          is their security posture? Do they configure SEO properly, or do they
          install a plugin and call it done? Third, ask about ongoing support. A
          website is not a one-time project. It needs updates, security patches,
          performance monitoring, and content management. Make sure your agency
          offers a{' '}
          <Link href="/services/wordpress-maintenance">maintenance plan</Link>{' '}
          that keeps your site running smoothly after launch.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-3" showImage imageIndex={1} imagePosition="right">
        <h2>Our Approach to Client Education</h2>
        <p>
          We believe that informed clients make better decisions and get better
          results. That is why we invest heavily in client education throughout
          every project. During the discovery phase, we explain our technical
          recommendations in plain language. We do not hide behind jargon or use
          complexity as a sales tactic. If we recommend a specific hosting
          environment, we explain exactly why it matters for your business. If we
          suggest a particular plugin over an alternative, we tell you the tradeoffs.
        </p>
        <p>
          After launch, every client receives a comprehensive training session
          tailored to their site. We walk you through how to add and edit content,
          manage media, update plugins safely, and monitor your site&apos;s performance.
          We record these sessions so you can reference them anytime. Our goal is
          to give you confidence in managing your day-to-day content while knowing
          that our team is available for technical support and strategic guidance
          whenever you need it.
        </p>
      </StyledProseSection>

      <StyledProseSection background="muted">
        <h2>Resources for New Mexico Business Owners</h2>
        <p>
          Beyond the FAQ answers below, we have additional resources to help you
          make informed decisions about your online presence. Our{' '}
          <Link href="/services">services page</Link> breaks down each service we
          offer with detailed descriptions and transparent pricing. Our individual
          service pages, such as{' '}
          <Link href="/services/wordpress-seo">WordPress SEO</Link>,{' '}
          <Link href="/services/wordpress-speed-optimization">speed optimization</Link>,
          and{' '}
          <Link href="/services/wordpress-security">security hardening</Link>,
          explain our methodology and what results you can expect.
        </p>
        <p>
          If you are in a specific New Mexico city, visit our{' '}
          <Link href="/locations">locations pages</Link> to see how we tailor our
          approach for your local market. Each city page includes information about
          the local business landscape, common industry needs in that area, and how
          our WordPress development and SEO services help businesses compete
          effectively in their specific market. Whether you are in{' '}
          <Link href="/locations/albuquerque">Albuquerque</Link>,{' '}
          <Link href="/locations/santa-fe">Santa Fe</Link>,{' '}
          <Link href="/locations/las-cruces">Las Cruces</Link>, or any other
          New Mexico city, we have the local knowledge and technical expertise to
          help your business grow online.
        </p>
        <p>
          Browse the frequently asked questions below. If you do not find the answer
          you are looking for, do not hesitate to contact us. We respond to every
          inquiry within 24 hours and we are always happy to have a no-pressure
          conversation about your website goals.
        </p>
      </StyledProseSection>

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
