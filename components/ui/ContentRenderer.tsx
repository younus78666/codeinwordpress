'use client'

import { Container } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

/**
 * ContentRenderer splits HTML content by <h2> tags and renders each section
 * with alternating background colors, gradient image placeholders, and
 * visual design elements. Turns wall-of-text into designed content sections.
 */

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
      // Content before first h2 (intro)
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

const gradientImages = [
  'from-primary-500 to-primary-700',
  'from-accent-500 to-primary-600',
  'from-primary-600 to-accent-500',
  'from-accent-600 to-primary-500',
  'from-primary-400 to-accent-600',
  'from-primary-700 to-accent-400',
]

const decorativeIcons = [
  'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
  'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
  'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
  'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
]

function GradientImagePlaceholder({ index }: { index: number }) {
  const gradient = gradientImages[index % gradientImages.length]
  const icon = decorativeIcons[index % decorativeIcons.length]

  return (
    <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} aspect-[16/9] md:aspect-[2/1] flex items-center justify-center`}>
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      {/* Center icon */}
      <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
    </div>
  )
}

export function ContentRenderer({ html }: { html: string }) {
  const sections = splitByH2(html)

  return (
    <div>
      {sections.map((section, i) => {
        const bg = bgPatterns[i % bgPatterns.length]
        const showImage = i > 0 && (i % 3 === 1) // Show image every 3rd section
        const isEven = i % 2 === 0

        return (
          <section key={i} className={`py-14 md:py-20 ${bg} relative overflow-hidden`}>
            {/* Subtle decorative element for gradient bg sections */}
            {bg.includes('gradient') && (
              <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />
            )}

            <Container className="relative z-10">
              <AnimateOnScroll>
                {showImage && (
                  <div className="mb-10">
                    <GradientImagePlaceholder index={i} />
                  </div>
                )}

                {section.heading && (
                  <div className={`flex items-start gap-4 mb-6 ${showImage ? '' : 'max-w-4xl mx-auto'}`}>
                    <div className="hidden md:flex w-12 h-12 rounded-xl bg-primary-100 items-center justify-center shrink-0 mt-1">
                      <span className="text-sm font-display font-bold text-primary-600">
                        {String(i).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
                      {section.heading}
                    </h2>
                  </div>
                )}

                <div className={`max-w-4xl ${section.heading ? 'md:ml-16' : 'mx-auto'}`}>
                  <div
                    className="prose prose-lg max-w-none
                      prose-headings:font-heading prose-headings:text-foreground prose-headings:tracking-tight
                      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                      prose-p:text-secondary-600 prose-p:leading-relaxed
                      prose-a:text-primary-600 prose-a:underline prose-a:decoration-primary-300 prose-a:underline-offset-2 hover:prose-a:decoration-primary-600
                      prose-strong:text-foreground
                      prose-li:text-secondary-600
                      prose-ul:my-4 prose-li:my-1"
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                </div>
              </AnimateOnScroll>
            </Container>
          </section>
        )
      })}
    </div>
  )
}

/**
 * StyledProseSection: For inline JSX prose content with visual design.
 * Wraps children in a designed section with optional image.
 */
export function StyledProseSection({
  children,
  background = 'white',
  showImage = false,
  imageIndex = 0,
  className = '',
}: {
  children: React.ReactNode
  background?: 'white' | 'gradient-1' | 'muted' | 'gradient-2' | 'gradient-3'
  showImage?: boolean
  imageIndex?: number
  className?: string
}) {
  const bgMap = {
    white: 'bg-white',
    'gradient-1': 'bg-gradient-to-br from-primary-50/40 via-white to-accent-50/30',
    muted: 'bg-muted/50',
    'gradient-2': 'bg-gradient-to-bl from-accent-50/30 via-white to-primary-50/40',
    'gradient-3': 'bg-gradient-to-tr from-primary-50/50 via-muted/30 to-white',
  }

  return (
    <section className={`py-14 md:py-20 ${bgMap[background]} relative overflow-hidden ${className}`}>
      {background.includes('gradient') && (
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />
      )}
      <Container className="relative z-10">
        {showImage && (
          <AnimateOnScroll>
            <div className="mb-10">
              <GradientImagePlaceholder index={imageIndex} />
            </div>
          </AnimateOnScroll>
        )}
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-foreground prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-secondary-600 prose-p:leading-relaxed
              prose-a:text-primary-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-li:text-secondary-600">
              {children}
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
