'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

type SearchItem = { title: string; description: string; href: string; category: string }

const searchData: SearchItem[] = [
  { title: 'Home', description: 'WordPress agency in New Mexico', href: '/', category: 'Pages' },
  { title: 'About Us', description: 'Our story, team, and expertise', href: '/about', category: 'Pages' },
  { title: 'Contact', description: 'Get a free quote today', href: '/contact', category: 'Pages' },
  { title: 'Pricing', description: 'Transparent pricing starting at $500', href: '/pricing', category: 'Pages' },
  { title: 'FAQ', description: 'Common questions answered', href: '/faq', category: 'Pages' },
  { title: 'Blog', description: 'WordPress tips, guides, and insights', href: '/blog', category: 'Pages' },
  { title: 'Portfolio', description: 'Case studies and project results', href: '/portfolio', category: 'Pages' },
  { title: 'All Locations', description: 'Service areas across New Mexico', href: '/locations', category: 'Pages' },
  { title: 'WordPress Development', description: 'Custom WordPress websites built from scratch', href: '/services/wordpress-development', category: 'Services' },
  { title: 'Speed Optimization', description: 'Make your WordPress site lightning fast', href: '/services/speed-optimization', category: 'Services' },
  { title: 'WordPress SEO', description: 'Rank higher on Google with technical SEO', href: '/services/wordpress-seo', category: 'Services' },
  { title: 'Website Maintenance', description: 'Ongoing care and updates for your site', href: '/services/website-maintenance', category: 'Services' },
  { title: 'Security Hardening', description: 'Protect your site from hackers', href: '/services/security-hardening', category: 'Services' },
  { title: 'WooCommerce', description: 'Build and optimize your online store', href: '/services/woocommerce-development', category: 'Services' },
  { title: 'Website Redesign', description: 'Modern redesign with better UX', href: '/services/website-redesign', category: 'Services' },
  { title: 'Albuquerque', description: 'WordPress agency in Albuquerque, NM', href: '/locations/albuquerque', category: 'Cities' },
  { title: 'Santa Fe', description: 'WordPress agency in Santa Fe, NM', href: '/locations/santa-fe', category: 'Cities' },
  { title: 'Las Cruces', description: 'WordPress agency in Las Cruces, NM', href: '/locations/las-cruces', category: 'Cities' },
  { title: 'Rio Rancho', description: 'WordPress agency in Rio Rancho, NM', href: '/locations/rio-rancho', category: 'Cities' },
  { title: 'Roswell', description: 'WordPress agency in Roswell, NM', href: '/locations/roswell', category: 'Cities' },
  { title: 'Farmington', description: 'WordPress agency in Farmington, NM', href: '/locations/farmington', category: 'Cities' },
  { title: 'Los Alamos', description: 'WordPress agency in Los Alamos, NM', href: '/locations/los-alamos', category: 'Cities' },
  { title: 'WordPress Speed Optimization Guide', description: 'Complete guide to making WordPress fast', href: '/blog/wordpress-speed-optimization-guide-2026', category: 'Blog' },
  { title: 'WordPress SEO Checklist for NM', description: 'Local SEO checklist for New Mexico businesses', href: '/blog/wordpress-seo-checklist-new-mexico-businesses', category: 'Blog' },
  { title: 'WordPress Website Cost Guide', description: 'How much does a WordPress site cost in 2026?', href: '/blog/how-much-does-wordpress-website-cost', category: 'Blog' },
  { title: 'WordPress Security Guide', description: '15 security measures for business sites', href: '/blog/wordpress-security-hardening-guide', category: 'Blog' },
  { title: 'Elementor vs Gutenberg', description: 'Which builder should you use?', href: '/blog/elementor-vs-gutenberg-2026', category: 'Blog' },
  { title: 'WooCommerce Speed Optimization', description: '10 proven speed techniques for stores', href: '/blog/woocommerce-speed-optimization', category: 'Blog' },
]

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const filtered = query.length > 0
    ? searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : searchData

  const grouped = filtered.reduce<Record<string, SearchItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  const flatFiltered = Object.values(grouped).flat()

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery('')
    setSelectedIndex(0)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.min(prev + 1, flatFiltered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && flatFiltered[selectedIndex]) {
      router.push(flatFiltered[selectedIndex].href)
      close()
    } else if (e.key === 'Escape') {
      close()
    }
  }

  if (!isOpen) return null

  let flatIndex = -1

  return (
    <div className="search-backdrop animate-fade-in" onClick={close}>
      <div className="flex items-start justify-center pt-[15vh] px-4" onClick={(e) => e.stopPropagation()}>
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-border overflow-hidden animate-scale-in">
          {/* Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
            <svg className="w-5 h-5 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0) }}
              onKeyDown={handleKeyDown}
              placeholder="Search pages, services, cities..."
              className="flex-1 text-base bg-transparent outline-none placeholder:text-muted-foreground text-foreground font-body"
              role="combobox"
              aria-expanded="true"
              aria-label="Search"
            />
            <kbd className="hidden sm:flex items-center px-2 py-1 text-xs font-mono text-muted-foreground bg-muted rounded-md">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto py-2">
            {flatFiltered.length === 0 ? (
              <div className="px-5 py-8 text-center text-muted-foreground">
                <p className="text-sm">No results found for &quot;{query}&quot;</p>
              </div>
            ) : (
              Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <div className="px-5 py-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-heading">
                      {category}
                    </span>
                  </div>
                  {items.map((item) => {
                    flatIndex++
                    const idx = flatIndex
                    return (
                      <button
                        key={item.href}
                        onClick={() => { router.push(item.href); close() }}
                        className={cn(
                          'w-full text-left px-5 py-3 flex items-center gap-3 transition-colors',
                          idx === selectedIndex ? 'bg-primary-50 text-primary-700' : 'hover:bg-muted text-foreground'
                        )}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium font-heading truncate">{item.title}</div>
                          <div className="text-xs text-muted-foreground truncate">{item.description}</div>
                        </div>
                        <svg className="w-4 h-4 shrink-0 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )
                  })}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-border flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><kbd className="font-mono bg-muted px-1.5 py-0.5 rounded">↑↓</kbd> Navigate</span>
            <span className="flex items-center gap-1"><kbd className="font-mono bg-muted px-1.5 py-0.5 rounded">↵</kbd> Open</span>
            <span className="flex items-center gap-1"><kbd className="font-mono bg-muted px-1.5 py-0.5 rounded">ESC</kbd> Close</span>
          </div>
        </div>
      </div>
    </div>
  )
}
