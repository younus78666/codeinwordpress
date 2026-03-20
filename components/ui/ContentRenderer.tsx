'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { contentImages } from '@/content/images'

/**
 * ContentRenderer splits HTML content by <h2> tags and renders each section
 * with alternating background colors, real Unsplash images, and
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

function ContentImage({ index }: { index: number }) {
  const src = contentImages[index % contentImages.length]
  const alt = imageAlts[index % imageAlts.length]
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[2.2/1]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1200px"
      />
      {/* Gradient overlay for visual polish */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 via-transparent to-transparent" />
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
                    <ContentImage index={i} />
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
              <ContentImage index={imageIndex} />
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
