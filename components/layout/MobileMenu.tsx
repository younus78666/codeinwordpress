'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/content/navigation'
import { siteConfig } from '@/content/site-config'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: Props) {
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [openSub, setOpenSub] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="menu-overlay animate-fade-in" onClick={onClose} aria-hidden="true" />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl animate-slide-in-right overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <span className="font-heading font-bold text-lg text-foreground">Menu</span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-4 py-4" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navigation.map((item, i) => (
                <li key={item.href} style={{ animationDelay: `${(i + 1) * 50}ms` }} className="animate-slide-up">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                        className={cn(
                          'w-full flex items-center justify-between px-4 py-3 text-base font-heading font-medium rounded-xl transition-colors',
                          pathname.startsWith(item.href) ? 'text-primary-700 bg-primary-50' : 'text-secondary-700 hover:bg-muted'
                        )}
                      >
                        {item.label}
                        <svg className={cn('w-5 h-5 transition-transform', openSub === item.label && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openSub === item.label && (
                        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-primary-100 pl-4">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className={cn(
                                  'block px-3 py-2 text-sm font-heading rounded-lg transition-colors',
                                  pathname === child.href ? 'text-primary-700 bg-primary-50' : 'text-secondary-600 hover:text-primary-700 hover:bg-primary-50'
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        'block px-4 py-3 text-base font-heading font-medium rounded-xl transition-colors',
                        pathname === item.href ? 'text-primary-700 bg-primary-50' : 'text-secondary-700 hover:bg-muted'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 py-6 border-t border-border space-y-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-600 transition-colors font-heading"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phoneDisplay}
            </a>
            <Button href="/contact" size="lg" className="w-full">
              {siteConfig.ctaPrimary}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
