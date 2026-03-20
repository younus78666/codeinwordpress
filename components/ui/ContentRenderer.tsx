'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { contentImages } from '@/content/images'

type ContentSection = {
  heading: string
  body: string
}

function splitByH2(html: string): ContentSection[] {
  const sections: ContentSection[] = []
  const parts = html.split(/<h2>/i)
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim()
    if (!part) continue
    if (i === 0 && !html.trimStart().toLowerCase().startsWith('<h2>')) {
      sections.push({ heading: '', body: part })
    } else {
      const closeIdx = part.indexOf('</h2>')
      if (closeIdx === -1) {
        sections.push({ heading: '', body: part })
      } else {
        const heading = part.slice(0, closeIdx).replace(/<[^>]*>/g, '')
        const body = part.slice(closeIdx + 5).trim()
        sections.push({ heading, body })
      }
    }
  }
  return sections
}

/** Check if body contains a <ul> list — we'll render those as card grids */
function hasListItems(html: string): boolean {
  return /<li>/i.test(html)
}

/** Extract list items from HTML and return them + remaining prose */
function extractList(html: string): { items: string[]; prose: string } {
  const items: string[] = []
  const listMatch = html.match(/<ul>([\s\S]*?)<\/ul>/i)
  if (listMatch) {
    const listHtml = listMatch[1]
    const liRegex = /<li>([\s\S]*?)<\/li>/gi
    let m
    while ((m = liRegex.exec(listHtml)) !== null) {
      items.push(m[1].trim())
    }
  }
  const prose = html.replace(/<ul>[\s\S]*?<\/ul>/gi, '').trim()
  return { items, prose }
}

const bgPatterns = [
  'bg-white',
  'bg-gradient-to-br from-primary-50/40 via-white to-accent-50/30',
  'bg-muted/50',
  'bg-gradient-to-bl from-accent-50/30 via-white to-primary-50/40',
  'bg-white',
  'bg-gradient-to-tr from-primary-50/50 via-muted/30 to-white',
  'bg-muted/40',
  'bg-gradient-to-r from-white via-primary-50/20 to-white',
]

const imageAlts = [
  'Analytics dashboard showing website performance metrics',
  'Developer coding on a laptop in a modern workspace',
  'Team collaborating on a web development project',
  'Business meeting discussing website strategy',
  'Performance dashboard with speed optimization results',
  'Strategy planning session with whiteboard notes',
  'Website design displayed on a monitor screen',
  'Close-up of clean code on a developer screen',
  'Website mockup and design prototype review',
  'Server technology and hosting infrastructure',
  'E-commerce product catalog and online store',
  'Search engine optimization and keyword research',
]

const proseClasses = `prose prose-lg max-w-none
  prose-headings:font-heading prose-headings:text-foreground prose-headings:tracking-tight
  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
  prose-p:text-secondary-600 prose-p:leading-relaxed
  prose-a:text-primary-600 prose-a:underline prose-a:decoration-primary-300 prose-a:underline-offset-2 hover:prose-a:decoration-primary-600
  prose-strong:text-foreground
  prose-li:text-secondary-600
  prose-ul:my-4 prose-li:my-1`

/* ─────────────────────────────────────────────────
   ContentRenderer — Alternating left/right image+text
   ───────────────────────────────────────────────── */
export function ContentRenderer({ html }: { html: string }) {
  const sections = splitByH2(html)

  return (
    <div>
      {sections.map((section, i) => {
        const bg = bgPatterns[i % bgPatterns.length]
        const imageLeft = i % 2 === 0
        const imgSrc = contentImages[i % contentImages.length]
        const imgAlt = imageAlts[i % imageAlts.length]
        const hasList = hasListItems(section.body)

        // First section (intro, no heading) — full width
        if (!section.heading) {
          return (
            <section key={i} className={`py-12 md:py-16 ${bg} relative overflow-hidden`}>
              {bg.includes('gradient') && <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />}
              <Container className="relative z-10">
                <AnimateOnScroll>
                  <div className="max-w-3xl mx-auto">
                    <div className={proseClasses} dangerouslySetInnerHTML={{ __html: section.body }} />
                  </div>
                </AnimateOnScroll>
              </Container>
            </section>
          )
        }

        // Sections with lists → heading + prose + card grid
        if (hasList) {
          const { items, prose } = extractList(section.body)
          return (
            <section key={i} className={`py-14 md:py-20 ${bg} relative overflow-hidden`}>
              {bg.includes('gradient') && <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />}
              <Container className="relative z-10">
                <AnimateOnScroll>
                  <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight mb-4">
                      {section.heading}
                    </h2>
                    {prose && (
                      <div className={proseClasses} dangerouslySetInnerHTML={{ __html: prose }} />
                    )}
                  </div>
                </AnimateOnScroll>
                {/* Card grid for list items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item, j) => (
                    <AnimateOnScroll key={j} delay={j * 60}>
                      <div className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-300">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-sm text-secondary-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </Container>
            </section>
          )
        }

        // Normal sections → alternating left/right image+text
        return (
          <section key={i} className={`py-14 md:py-20 ${bg} relative overflow-hidden`}>
            {bg.includes('gradient') && <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />}
            <Container className="relative z-10">
              <AnimateOnScroll>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${imageLeft ? '' : 'direction-rtl'}`}>
                  {/* Image side */}
                  <div className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                      <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Text side */}
                  <div className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                        <span className="text-xs font-display font-bold text-white">
                          {String(i).padStart(2, '0')}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
                        {section.heading}
                      </h2>
                    </div>
                    <div className={proseClasses} dangerouslySetInnerHTML={{ __html: section.body }} />
                  </div>
                </div>
              </AnimateOnScroll>
            </Container>
          </section>
        )
      })}
    </div>
  )
}

/* ─────────────────────────────────────────────────
   StyledProseSection — Left/right layout for JSX content
   ───────────────────────────────────────────────── */
export function StyledProseSection({
  children,
  background = 'white',
  showImage = false,
  imageIndex = 0,
  imagePosition = 'left',
  className = '',
}: {
  children: React.ReactNode
  background?: 'white' | 'gradient-1' | 'muted' | 'gradient-2' | 'gradient-3'
  showImage?: boolean
  imageIndex?: number
  imagePosition?: 'left' | 'right'
  className?: string
}) {
  const bgMap = {
    white: 'bg-white',
    'gradient-1': 'bg-gradient-to-br from-primary-50/40 via-white to-accent-50/30',
    muted: 'bg-muted/50',
    'gradient-2': 'bg-gradient-to-bl from-accent-50/30 via-white to-primary-50/40',
    'gradient-3': 'bg-gradient-to-tr from-primary-50/50 via-muted/30 to-white',
  }

  const imgSrc = contentImages[imageIndex % contentImages.length]
  const imgAlt = imageAlts[imageIndex % imageAlts.length]

  return (
    <section className={`py-14 md:py-20 ${bgMap[background]} relative overflow-hidden ${className}`}>
      {background.includes('gradient') && (
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />
      )}
      <Container className="relative z-10">
        <AnimateOnScroll>
          {showImage ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Image */}
              <div className={imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 via-transparent to-transparent" />
                </div>
              </div>
              {/* Text */}
              <div className={imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}>
                <div className={proseClasses}>
                  {children}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className={proseClasses}>
                {children}
              </div>
            </div>
          )}
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
