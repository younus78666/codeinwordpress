import Link from 'next/link'
import { locations } from '@/content/locations'
import { SectionWrapper } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

export function CitiesServed() {
  return (
    <SectionWrapper
      heading="Serving Businesses Across New Mexico"
      subheading="From the Rio Grande Valley to the Four Corners, we build WordPress websites for businesses in every major New Mexico market."
    >
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className="prose prose-lg max-w-none prose-p:text-secondary-600 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline mb-10">
            <p>
              New Mexico is a big state with very different local markets. A law firm
              in Santa Fe has different needs than a construction company in Farmington
              or a medical practice in Las Cruces. We get that. Every city page and every
              project we take on is tailored to the local market, with city-specific content,
              local keywords, and Google Business Profile optimization strategies that
              actually move the needle in your area. Our WordPress agency serves all seven
              major New Mexico metros, and we are expanding.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((location, i) => (
            <AnimateOnScroll key={location.slug} delay={i * 60}>
              <Link
                href={`/locations/${location.slug}`}
                className="group block bg-white rounded-2xl border border-border p-5 text-center hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-heading font-bold text-foreground group-hover:text-primary-600 transition-colors">
                  {location.city}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {location.population} population
                </p>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
