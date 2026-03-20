'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent')
    if (!accepted) {
      // Small delay so the banner slides up after page load
      const timer = setTimeout(() => setVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 bg-primary-950 text-white',
        'transform transition-transform duration-500 ease-out',
        visible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-primary-200 leading-relaxed">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <Link
              href="/privacy-policy"
              className="underline underline-offset-2 text-white hover:text-primary-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
          <button
            onClick={handleAccept}
            className="shrink-0 bg-primary-500 hover:bg-primary-400 text-white font-heading font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-primary-950"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
