'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/content/navigation'
import { siteConfig } from '@/content/site-config'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Shared'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(null)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-border'
            : 'bg-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${siteConfig.name} - Home`}>
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">&lt;/&gt;</span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground hidden sm:block">
                Code In WordPress
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navigation.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'px-3 py-2 text-sm font-medium font-heading rounded-lg transition-colors duration-200',
                      pathname === item.href
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-secondary-600 hover:text-primary-700 hover:bg-primary-50/50'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <svg className="inline-block w-4 h-4 ml-1 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && dropdownOpen === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-64 z-50">
                      <div className="bg-white rounded-2xl shadow-xl border border-border py-2 animate-scale-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2.5 text-sm font-heading transition-colors',
                              pathname === child.href
                                ? 'text-primary-700 bg-primary-50'
                                : 'text-secondary-600 hover:text-primary-700 hover:bg-primary-50'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Search trigger */}
              <button
                onClick={() => {
                  const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true })
                  document.dispatchEvent(event)
                }}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground border border-border rounded-lg hover:border-primary-300 hover:text-primary-600 transition-colors"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">⌘K</span>
              </button>

              <Button href="/contact" size="sm" className="hidden md:inline-flex">
                {siteConfig.ctaPrimary}
              </Button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
