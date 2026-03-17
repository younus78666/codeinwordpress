import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site-config'
import { Container } from '@/components/ui/Shared'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { ContactForm } from '@/components/sections/ContactForm'
import { GoogleMap } from '@/components/sections/GoogleMap'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us',
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
    </>
  )
}
