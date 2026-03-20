import Link from 'next/link'
import { locations } from '@/content/locations'
import { SectionWrapper } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Button } from '@/components/ui/Button'

export function CitiesServed() {
  return (
    <SectionWrapper
      heading="Serving Businesses Across New Mexico"
      subheading="From the Rio Grande Valley to the Four Corners, we build WordPress websites for businesses in every major New Mexico market."
    >
      <div className="max-w-5xl mx-auto">
        {/* Gradient map placeholder */}
        <AnimateOnScroll>
          <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-400 to-primary-600" />
            {/* Pattern overlay to suggest topography */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[length:16px_16px]" />
            {/* Wavy line decorations to suggest terrain */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
            {/* City dot markers */}
            <div className="absolute top-[30%] left-[40%] w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30" />
            <div className="absolute top-[45%] left-[55%] w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30" />
            <div className="absolute top-[60%] left-[35%] w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30" />
            <div className="absolute top-[25%] left-[65%] w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30" />
            <div className="absolute top-[70%] left-[50%] w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30" />
            <div className="absolute top-[40%] left-[25%] w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30" />
            <div className="absolute top-[55%] left-[70%] w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30" />
            {/* Label overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/90 font-heading font-bold text-lg md:text-2xl tracking-wide drop-shadow-lg">
                New Mexico Service Area
              </span>
            </div>
          </div>
        </AnimateOnScroll>

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
                className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary-200 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex h-full">
                  {/* Gradient accent strip */}
                  <div className="w-1 shrink-0 bg-gradient-to-b from-primary-500 to-accent-500" />
                  <div className="p-5 text-center flex-1">
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
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All Locations button */}
        <AnimateOnScroll delay={200}>
          <div className="mt-10 text-center">
            <Button href="/locations" size="lg">
              View All Locations
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  )
}
