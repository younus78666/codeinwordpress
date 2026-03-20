import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { generatePageMetadata } from '@/lib/metadata'
import { projects } from '@/content/portfolio'
import { portfolioImages } from '@/content/images'
import { siteConfig } from '@/content/site-config'
import { Container, SectionWrapper, Card, Badge } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema, JsonLd } from '@/components/seo/JsonLd'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { CTABanner } from '@/components/sections/Features'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return generatePageMetadata({
    title: `${project.client} | ${project.title}`,
    description: project.challenge,
    path: `/portfolio/${project.slug}`,
  })
}

const slugToImage: Record<string, string> = {
  'desert-bloom-interiors': portfolioImages.interiorDesign,
  'ortega-law-group': portfolioImages.lawFirm,
  'southwest-medical-associates': portfolioImages.medical,
  'mountain-trail-adventures': portfolioImages.outdoor,
  'atomic-coffee-roasters': portfolioImages.coffee,
  'rio-grande-construction': portfolioImages.construction,
}

const serviceSlugMap: Record<string, string> = {
  'WordPress Development': 'wordpress-development',
  'WordPress SEO': 'wordpress-seo',
  'Website Redesign': 'website-redesign',
  'Speed Optimization': 'speed-optimization',
  'WooCommerce': 'woocommerce-development',
  'Security Hardening': 'security-hardening',
  'Maintenance': 'website-maintenance',
}

export default function PortfolioDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const heroImage = slugToImage[project.slug]

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Portfolio', href: '/portfolio' },
          { name: project.client, href: `/portfolio/${project.slug}` },
        ]}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.challenge,
          creator: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
          },
          about: { '@type': 'Thing', name: project.industry },
          dateCreated: String(project.year),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Portfolio', href: '/portfolio' },
              { name: project.client, href: `/portfolio/${project.slug}` },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Badge variant="primary" className="mb-4">
                {project.industry}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-3">
                {project.client}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                {project.title}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-heading">
                <span className="inline-flex items-center gap-1.5">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {project.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {project.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {project.year}
                </span>
              </div>
            </div>
            {heroImage && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
                <Image
                  src={heroImage}
                  alt={`${project.client} project`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Challenge */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" className="mb-4">
                The Challenge
              </Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-6">
                What They Were Facing
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Solution */}
      <SectionWrapper
        heading="Our Solution"
        subheading="How we turned the challenge into measurable results."
      >
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {project.solution}
            </p>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* Results */}
      <section className="py-16 md:py-24 lg:py-32 bg-primary-950 text-white">
        <Container>
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                The Results
              </h2>
              <p className="text-lg text-primary-200">
                Measurable outcomes that speak for themselves.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {project.results.map((result, i) => (
              <AnimateOnScroll key={result.metric} delay={i * 100}>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary-400 mb-2">
                    {result.value}
                  </p>
                  <p className="text-sm text-primary-200 font-heading">
                    {result.metric}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      {project.testimonialQuote && (
        <section className="py-16 md:py-24 bg-muted">
          <Container>
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-6 text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground leading-relaxed mb-6">
                  &ldquo;{project.testimonialQuote}&rdquo;
                </blockquote>
                <p className="text-sm font-heading font-semibold text-primary-600">
                  &mdash; {project.client}
                </p>
              </div>
            </AnimateOnScroll>
          </Container>
        </section>
      )}

      {/* Services Used */}
      <SectionWrapper
        heading="Services Used"
        subheading="The expertise we brought to this project."
      >
        <div className="flex flex-wrap justify-center gap-3">
          {project.services.map((service) => {
            const slug = serviceSlugMap[service]
            return slug ? (
              <Link key={service} href={`/services/${slug}`}>
                <Badge
                  variant="primary"
                  className="text-sm px-4 py-2 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  {service}
                </Badge>
              </Link>
            ) : (
              <Badge key={service} variant="outline" className="text-sm px-4 py-2">
                {service}
              </Badge>
            )
          })}
        </div>
      </SectionWrapper>

      <CTABanner
        heading={`Ready for Results Like ${project.client}?`}
        subheading="Get a free consultation and let us build something that grows your business."
      />
    </>
  )
}
