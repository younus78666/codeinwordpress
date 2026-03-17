'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/content/site-config'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

/* ── Skip to Content ── */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-heading focus:font-semibold"
    >
      Skip to main content
    </a>
  )
}

/* ── Lead Popup ── */
export function LeadPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check if already dismissed this session
    if (typeof window !== 'undefined' && sessionStorage.getItem('lead-popup-dismissed')) {
      setDismissed(true)
      return
    }

    // Show after 15 seconds
    const timer = setTimeout(() => {
      if (!dismissed) setShow(true)
    }, 15000)

    // Show on exit intent (mouse leaving top of viewport)
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !dismissed) setShow(true)
    }
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [dismissed])

  const dismiss = () => {
    setShow(false)
    setDismissed(true)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('lead-popup-dismissed', 'true')
    }
  }

  if (!show || dismissed) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in" role="dialog" aria-modal="true" aria-label="Free website audit offer">
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-950/50 backdrop-blur-sm" onClick={dismiss} />

      {/* Popup */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-muted transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold font-heading text-foreground mb-2">
            Free Website Audit
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Get a detailed report on your website&apos;s speed, SEO, and security. No strings attached.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              dismiss()
              window.location.href = '/contact'
            }}
            className="space-y-3"
          >
            <input
              type="url"
              placeholder="Your website URL"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email address"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none"
            />
            <Button type="submit" size="lg" className="w-full">
              Get Free Audit
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">
            Typically delivered within 24 hours. {siteConfig.stats.projects} projects completed.
          </p>
        </div>
      </div>
    </div>
  )
}
