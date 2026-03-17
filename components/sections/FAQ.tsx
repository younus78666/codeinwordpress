'use client'

import { useState } from 'react'
import { SectionWrapper } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { cn } from '@/lib/utils'
import type { FAQ } from '@/content/faqs'

type Props = {
  faqs: FAQ[]
  heading?: string
  subheading?: string
  background?: 'default' | 'alt' | 'primary' | 'dark'
  showCategories?: boolean
}

export function FAQSection({
  faqs,
  heading = 'Frequently Asked Questions',
  subheading = 'Quick answers to the questions we hear most. Can\'t find what you need? Contact us directly.',
  background = 'default',
  showCategories = false,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = showCategories
    ? ['all', ...Array.from(new Set(faqs.map(f => f.category)))]
    : []

  const filtered = activeCategory === 'all' ? faqs : faqs.filter(f => f.category === activeCategory)

  return (
    <SectionWrapper heading={heading} subheading={subheading} background={background} id="faq">
      {/* Category tabs */}
      {showCategories && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-heading font-medium transition-colors',
                activeCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-muted text-muted-foreground hover:bg-primary-50 hover:text-primary-700'
              )}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      )}

      <div className="mx-auto max-w-3xl space-y-3">
        {filtered.map((faq, i) => (
          <AnimateOnScroll key={i} delay={i * 50}>
            <div className="bg-white rounded-2xl border border-border overflow-hidden transition-shadow hover:shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-heading font-semibold text-foreground">
                  {faq.question}
                </span>
                <svg
                  className={cn(
                    'w-5 h-5 shrink-0 text-primary-500 transition-transform duration-200',
                    openIndex === i && 'rotate-180'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300',
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
