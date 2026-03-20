import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site-config'
import { Container } from '@/components/ui/Shared'
import { StyledProseSection } from '@/components/ui/ContentRenderer'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { ContactForm } from '@/components/sections/ContactForm'
import { GoogleMap } from '@/components/sections/GoogleMap'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us | Free WordPress Website Quote in 24h',
  description: `Get a free WordPress website quote from ${siteConfig.name}. We serve businesses in Albuquerque, Santa Fe, Las Cruces, and all of New Mexico.`,
  path: '/contact',
})

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Hours',
    value: siteConfig.hours,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Serving',
    value: 'Albuquerque, Santa Fe, Las Cruces & all of New Mexico',
  },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-4">
              Let&apos;s Build Something <span className="text-primary-600">Great</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your project and we will get back to you within 24 hours with a free quote. No pressure, no commitment.
            </p>
          </div>
        </Container>
      </section>

      {/* Pre-form guidance — UC 6.2 content */}
      <StyledProseSection background="white">
        <h2>What Happens After You Submit the Form</h2>
        <p>
          When you fill out the contact form on this page, your message goes directly to our project team, not to a generic inbox where it sits for days. We have built our intake process around one simple commitment: you will hear back from a real person within twenty-four hours, and usually much sooner. During business hours, most inquiries get a response within two to four hours.
        </p>
        <p>
          Your initial response will come from someone who actually understands WordPress development, not a sales representative reading from a script. We will acknowledge your project details, ask any clarifying questions, and propose a time for a free discovery call if the project seems like a good fit. If we are not the right agency for what you need, we will tell you that honestly and recommend someone who might be a better match. We would rather earn your trust through honesty than waste your time chasing a project that is not in our wheelhouse.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-1" showImage imageIndex={0} imagePosition="left">
        <h2>What to Include in Your Project Brief</h2>
        <p>
          You do not need a detailed specification document to reach out to us. A few sentences about what you need is perfectly fine, and we will ask the right questions from there. That said, if you want to give us a head start, here is what helps us provide the most accurate initial assessment: a brief description of your business and what it does, what you want your website to accomplish such as generating leads, selling products, or building brand awareness, whether you have an existing website that needs to be rebuilt or if this is a brand-new site, any specific features you know you need like online booking, e-commerce, or membership areas, your approximate budget range if you have one in mind, and your ideal timeline for launch.
        </p>
        <p>
          Do not worry about having all the answers. In eight-plus years of working with businesses across New Mexico and beyond, we have guided hundreds of clients through the process of defining their project scope. That is part of what we do, and we are genuinely good at it.
        </p>
      </StyledProseSection>

      <StyledProseSection background="muted">
        <h2>Our Consultation Process Step by Step</h2>
        <p>
          After the initial contact, we follow a structured process that gives you complete clarity before you spend a dollar. First, we schedule a free discovery call, typically thirty to forty-five minutes, where we listen to your goals, ask questions about your business, and discuss what success looks like for you. Second, we conduct a preliminary competitive analysis, looking at what your competitors are doing online and identifying opportunities for your site to outperform them. Third, we prepare a detailed proposal that includes scope of work, timeline, pricing, and the specific deliverables you will receive. Fourth, once you review and approve the proposal, we send a straightforward agreement and collect the initial deposit to begin work.
        </p>
        <p>
          There is no pressure at any stage. We have had clients take two months between the discovery call and project kickoff because they needed time to prepare content or align internal stakeholders. That is completely fine. We are here when you are ready.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-2">
        <h2>Common Project Types We Handle</h2>
        <p>
          Over four hundred completed projects have given us deep experience across a wide range of WordPress builds. The most common project types we handle include business websites for service companies like plumbers, electricians, law firms, dental practices, and consulting firms. We build e-commerce stores using WooCommerce for retail businesses, artisan shops, and specialty product companies. Restaurant and hospitality sites with online menus, reservation systems, and event calendars are a regular part of our workload. We create real estate websites with MLS integration and property search functionality. Portfolio and creative sites for photographers, artists, architects, and designers are projects we particularly enjoy. Nonprofit and organization websites with donation systems, volunteer management, and event registration are also well within our expertise.
        </p>
        <p>
          If your project type is not listed above, do not hesitate to reach out. WordPress is an incredibly flexible platform, and chances are we have built something similar before.
        </p>
      </StyledProseSection>

      <StyledProseSection background="white" showImage imageIndex={1} imagePosition="right">
        <h2>Our Response Time Commitments</h2>
        <p>
          We take response times seriously because we know your time is valuable. For initial contact form submissions, we respond within twenty-four hours, with most responses going out within two to four hours during business hours. For active project clients, we guarantee same-business-day responses to all communications. For clients on our maintenance plans, urgent issues like site downtime or security concerns get a response within one hour, with resolution typically within four hours.
        </p>
      </StyledProseSection>

      <section className="pb-16 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-foreground hover:text-primary-600 transition-colors font-medium">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <GoogleMap lat={siteConfig.geo.lat} lng={siteConfig.geo.lng} title="Code In WordPress - New Mexico" />
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-heading font-bold text-foreground mb-1">Send Us a Message</h2>
                <p className="text-sm text-muted-foreground mb-6">Fill in the form below and we will respond within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Post-form content — UC 6.2 content */}
      <StyledProseSection background="gradient-1">
        <h2>Our Communication Style and the Tools We Use</h2>
        <p>
          We believe that most project frustrations stem from poor communication, not poor development. That is why we have invested heavily in building a communication process that keeps you informed without overwhelming you. Every client gets access to a shared project dashboard where you can see task progress, review design mockups, leave feedback, and track milestones. We use tools like Slack or email for day-to-day communication, depending on your preference, and schedule regular video check-ins via Google Meet or Zoom to walk through progress visually.
        </p>
        <p>
          Our communication philosophy is simple: no jargon unless you want jargon. If you are technical and want to discuss caching strategies or database optimization, we are happy to go deep. If you just want to know when your site will be ready and what it will look like, we will keep things straightforward and visual. We adapt to your style, not the other way around.
        </p>
        <p>
          We also document everything. Every decision, every design revision, every scope change gets recorded in writing. This protects both of us and ensures that nothing falls through the cracks. At the end of your project, you receive a complete handover package that includes login credentials, a site user guide, documentation for any custom features, and a post-launch optimization checklist.
        </p>
      </StyledProseSection>

      <StyledProseSection background="muted" showImage imageIndex={2} imagePosition="left">
        <h2>Serving All of New Mexico and Beyond</h2>
        <p>
          While we work with clients worldwide, we have a special focus on serving businesses across New Mexico. We understand the unique economic landscape of this state, from the tourism-driven economies of Santa Fe, Taos, and Ruidoso to the service-based businesses that form the backbone of Albuquerque, Rio Rancho, and Las Cruces. We have worked with clients in Roswell, Carlsbad, Farmington, Silver City, Los Alamos, Gallup, Clovis, Hobbs, and Alamogordo. No matter where you are in the Land of Enchantment, we can build you a website that competes with anything coming out of larger markets.
        </p>
        <p>
          For businesses in the Albuquerque metro area, we are available for in-person meetings at your office or a local coffee shop. For clients elsewhere in the state, our remote-first workflow means you get the same level of attention and quality regardless of geography. We have built successful sites for a cattle ranch in eastern New Mexico, a ski rental shop in Angel Fire, a medical practice in Truth or Consequences, and a craft brewery in Silver City, all without needing to be physically present. The work speaks for itself.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-2">
        <h2>Emergency Support and Rush Projects</h2>
        <p>
          We understand that sometimes things cannot wait. If your existing website has been hacked, is experiencing critical downtime, or has a security vulnerability that needs immediate attention, we offer emergency support services with a one-hour response time and priority resolution. We have recovered compromised sites, restored lost data from backups, and patched critical vulnerabilities, often within the same business day the client reached out.
        </p>
        <p>
          For rush projects, we can often accommodate accelerated timelines with a rush fee. If you have a product launch, seasonal promotion, or event that requires a fast turnaround, tell us about your deadline and we will let you know honestly whether we can meet it. We have delivered complete business websites in as little as five business days when the situation demanded it, though we always recommend a standard timeline for the best results.
        </p>
      </StyledProseSection>

      <StyledProseSection background="white" showImage imageIndex={3} imagePosition="right">
        <h2>Why New Mexico Businesses Choose Us Over Competitors</h2>
        <p>
          When business owners in New Mexico start looking for a WordPress developer, they typically find three types of options: national agencies that charge premium rates and treat local businesses as small fish, local freelancers who may lack the technical depth for complex projects, and offshore developers who offer low prices but create communication challenges and quality inconsistencies. We occupy a deliberate sweet spot between all three.
        </p>
        <p>
          We offer agency-level technical expertise with the personalized attention of a boutique firm. Our pricing reflects the New Mexico market without cutting corners on quality. We are locally invested and understand the business culture here, but we bring a global perspective from having worked with clients in twelve-plus countries. Our four hundred-plus completed projects, ninety-nine percent satisfaction rate, and the fact that most of our business comes from referrals and repeat clients tell you everything you need to know about the quality of our work and the relationships we build.
        </p>
        <p>
          If you are ready to discuss your project, fill out the form above or give us a call. There is no obligation, no hard sell, and no pressure. Just a straightforward conversation about what you need and how we can help you get there.
        </p>
      </StyledProseSection>
    </>
  )
}
