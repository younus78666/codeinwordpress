'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { contentImages } from '@/content/images'

/* ═══════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════ */
type SubSection = { heading: string; body: string }
type ContentSection = { heading: string; intro: string; subs: SubSection[]; listItems: string[] }

/* ═══════════════════════════════════════════════════════
   Parser — splits HTML into structured sections
   ═══════════════════════════════════════════════════════ */
function parseContent(html: string): ContentSection[] {
  const sections: ContentSection[] = []
  const h2Parts = html.split(/<h2>/i)

  for (let i = 0; i < h2Parts.length; i++) {
    const raw = h2Parts[i].trim()
    if (!raw) continue

    // Intro content before first h2
    if (i === 0 && !html.trimStart().toLowerCase().startsWith('<h2>')) {
      sections.push({ heading: '', intro: raw, subs: [], listItems: [] })
      continue
    }

    const closeIdx = raw.indexOf('</h2>')
    if (closeIdx === -1) continue
    const heading = raw.slice(0, closeIdx).replace(/<[^>]*>/g, '')
    const body = raw.slice(closeIdx + 5).trim()

    // Extract list items
    const listItems: string[] = []
    const listMatch = body.match(/<ul>([\s\S]*?)<\/ul>/i)
    if (listMatch) {
      const liRegex = /<li>([\s\S]*?)<\/li>/gi
      let m
      while ((m = liRegex.exec(listMatch[1])) !== null) listItems.push(m[1].trim())
    }
    const bodyNoList = body.replace(/<ul>[\s\S]*?<\/ul>/gi, '').trim()

    // Split by h3 subsections
    const subs: SubSection[] = []
    const h3Parts = bodyNoList.split(/<h3>/i)
    let intro = ''

    for (let j = 0; j < h3Parts.length; j++) {
      const part = h3Parts[j].trim()
      if (!part) continue
      if (j === 0) {
        intro = part
      } else {
        const h3Close = part.indexOf('</h3>')
        if (h3Close === -1) continue
        const subHeading = part.slice(0, h3Close).replace(/<[^>]*>/g, '')
        const subBody = part.slice(h3Close + 5).trim()
        subs.push({ heading: subHeading, body: subBody })
      }
    }

    sections.push({ heading, intro, subs, listItems })
  }
  return sections
}

/* ═══════════════════════════════════════════════════════
   Image & style constants
   ═══════════════════════════════════════════════════════ */
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

const bgStyles = [
  'bg-white',
  'bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20',
  'bg-muted/40',
  'bg-gradient-to-bl from-accent-50/20 via-white to-primary-50/30',
]

const prose = `text-secondary-600 leading-relaxed [&_a]:text-primary-600 [&_a]:underline [&_a]:decoration-primary-300 [&_a]:underline-offset-2 hover:[&_a]:decoration-primary-600 [&_strong]:text-foreground [&_p]:mb-4 last:[&_p]:mb-0`

/* ═══════════════════════════════════════════════════════
   ContentRenderer — Premium layout engine
   ═══════════════════════════════════════════════════════ */
export function ContentRenderer({ html }: { html: string }) {
  const sections = parseContent(html)
  let imgCounter = 0

  return (
    <div>
      {sections.map((section, i) => {
        const bg = bgStyles[i % bgStyles.length]

        // ── Intro (no heading) ──
        if (!section.heading) {
          return (
            <section key={i} className={`py-12 md:py-16 ${bg}`}>
              <Container>
                <AnimateOnScroll>
                  <div className={`max-w-3xl mx-auto text-lg ${prose}`} dangerouslySetInnerHTML={{ __html: section.intro }} />
                </AnimateOnScroll>
              </Container>
            </section>
          )
        }

        // ── Sections with list items → centered heading + card grid ──
        if (section.listItems.length > 0) {
          const cols = section.listItems.length === 4 ? 'sm:grid-cols-2' : section.listItems.length >= 6 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'
          return (
            <section key={i} className={`py-14 md:py-20 ${bg} relative overflow-hidden`}>
              {bg.includes('gradient') && <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />}
              <Container className="relative z-10">
                <AnimateOnScroll>
                  <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight mb-4">{section.heading}</h2>
                    {section.intro && <div className={`text-lg ${prose}`} dangerouslySetInnerHTML={{ __html: section.intro }} />}
                  </div>
                </AnimateOnScroll>
                <div className={`grid grid-cols-1 ${cols} gap-4 max-w-4xl mx-auto`}>
                  {section.listItems.map((item, j) => (
                    <AnimateOnScroll key={j} delay={j * 60}>
                      <div className="group relative bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 h-full">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className={`text-sm ${prose}`} dangerouslySetInnerHTML={{ __html: item }} />
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </Container>
            </section>
          )
        }

        // ── Sections with h3 subsections → each h3 gets left/right image ──
        if (section.subs.length > 0) {
          // If exactly 4 subs → 2x2 interactive box grid
          if (section.subs.length === 4) {
            return (
              <section key={i} className={`py-14 md:py-20 ${bg} relative overflow-hidden`}>
                {bg.includes('gradient') && <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />}
                <Container className="relative z-10">
                  <AnimateOnScroll>
                    <div className="max-w-3xl mx-auto text-center mb-10">
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight mb-4">{section.heading}</h2>
                      {section.intro && <div className={`text-lg ${prose}`} dangerouslySetInnerHTML={{ __html: section.intro }} />}
                    </div>
                  </AnimateOnScroll>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
                    {section.subs.map((sub, j) => {
                      const img = contentImages[(imgCounter + j) % contentImages.length]
                      const alt = imageAlts[(imgCounter + j) % imageAlts.length]
                      return (
                        <AnimateOnScroll key={j} delay={j * 80}>
                          <div className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300">
                            <div className="relative h-44 overflow-hidden">
                              <Image src={img} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 50vw" />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />
                              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-heading font-bold text-primary-700">
                                {String(j + 1).padStart(2, '0')}
                              </div>
                            </div>
                            <div className="p-6">
                              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{sub.heading}</h3>
                              <div className={`text-sm ${prose}`} dangerouslySetInnerHTML={{ __html: sub.body }} />
                            </div>
                          </div>
                        </AnimateOnScroll>
                      )
                    })}
                  </div>
                </Container>
              </section>
            )
          }

          // Default: each h3 gets alternating left/right image
          imgCounter += section.subs.length
          return (
            <section key={i} className={`py-14 md:py-20 ${bg} relative overflow-hidden`}>
              {bg.includes('gradient') && <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />}
              <Container className="relative z-10">
                <AnimateOnScroll>
                  <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight mb-4">{section.heading}</h2>
                    {section.intro && <div className={`text-lg ${prose}`} dangerouslySetInnerHTML={{ __html: section.intro }} />}
                  </div>
                </AnimateOnScroll>

                <div className="space-y-16">
                  {section.subs.map((sub, j) => {
                    const imgIdx = (imgCounter - section.subs.length + j) % contentImages.length
                    const img = contentImages[imgIdx]
                    const alt = imageAlts[imgIdx % imageAlts.length]
                    const imgLeft = j % 2 === 0

                    return (
                      <AnimateOnScroll key={j} delay={j * 80}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                          {/* Image */}
                          <div className={imgLeft ? 'lg:order-1' : 'lg:order-2'}>
                            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                              <Image src={img} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/15 via-transparent to-transparent" />
                            </div>
                          </div>
                          {/* Text */}
                          <div className={imgLeft ? 'lg:order-2' : 'lg:order-1'}>
                            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-heading font-bold mb-3">
                              {String(j + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">{sub.heading}</h3>
                            <div className={`text-base ${prose}`} dangerouslySetInnerHTML={{ __html: sub.body }} />
                          </div>
                        </div>
                      </AnimateOnScroll>
                    )
                  })}
                </div>
              </Container>
            </section>
          )
        }

        // ── Normal section → left/right image + text ──
        const img = contentImages[imgCounter % contentImages.length]
        const alt = imageAlts[imgCounter % imageAlts.length]
        const imgLeft = i % 2 === 0
        imgCounter++

        return (
          <section key={i} className={`py-14 md:py-20 ${bg} relative overflow-hidden`}>
            {bg.includes('gradient') && <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />}
            <Container className="relative z-10">
              <AnimateOnScroll>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  <div className={imgLeft ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                      <Image src={img} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/15 via-transparent to-transparent" />
                    </div>
                  </div>
                  <div className={imgLeft ? 'lg:order-2' : 'lg:order-1'}>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight mb-4">{section.heading}</h2>
                    <div className={`text-base ${prose}`} dangerouslySetInnerHTML={{ __html: section.intro }} />
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

/* ═══════════════════════════════════════════════════════
   StyledProseSection — For inline JSX content
   ═══════════════════════════════════════════════════════ */
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
    'gradient-1': 'bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20',
    muted: 'bg-muted/40',
    'gradient-2': 'bg-gradient-to-bl from-accent-50/20 via-white to-primary-50/30',
    'gradient-3': 'bg-gradient-to-tr from-primary-50/40 via-muted/20 to-white',
  }
  const imgSrc = contentImages[imageIndex % contentImages.length]
  const imgAlt = imageAlts[imageIndex % imageAlts.length]
  const proseJsx = `prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-headings:tracking-tight prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-secondary-600 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-secondary-600`

  return (
    <section className={`py-14 md:py-20 ${bgMap[background]} relative overflow-hidden ${className}`}>
      {background.includes('gradient') && <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />}
      <Container className="relative z-10">
        <AnimateOnScroll>
          {showImage ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className={imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <Image src={imgSrc} alt={imgAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/15 via-transparent to-transparent" />
                </div>
              </div>
              <div className={imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}>
                <div className={proseJsx}>{children}</div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto"><div className={proseJsx}>{children}</div></div>
          )}
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
