'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/content/site-config'
import { cn } from '@/lib/utils'

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (formData: FormData) => {
    const errs: Record<string, string> = {}
    if (!formData.get('name')) errs.name = 'Name is required'
    if (!formData.get('email')) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email') as string)) errs.email = 'Please enter a valid email'
    if (!formData.get('message')) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const errs = validate(formData)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-2">Message Sent</h3>
        <p className="text-sm text-muted-foreground">We will get back to you within 24 hours. Thank you for reaching out.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 relative" noValidate>
      {/* Honeypot - hidden from humans, catches bots */}
      <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" autoComplete="off" tabIndex={-1} />
      </div>
      <div className={cn(compact ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-5')}>
        <FormField label="Full Name" name="name" required placeholder="John Smith" error={errors.name} />
        <FormField label="Email Address" name="email" type="email" required placeholder="john@company.com" error={errors.email} />
      </div>
      <div className={cn(!compact && 'grid grid-cols-1 sm:grid-cols-2 gap-5')}>
        <FormField label="Phone Number" name="phone" type="tel" placeholder="+1 (505) 000-0000" />
        {!compact && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="service" className="text-sm font-medium text-foreground font-heading">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none"
            >
              <option value="">Select a service</option>
              <option value="wordpress-development">WordPress Development</option>
              <option value="speed-optimization">Speed Optimization</option>
              <option value="wordpress-seo">WordPress SEO</option>
              <option value="website-maintenance">Website Maintenance</option>
              <option value="security-hardening">Security Hardening</option>
              <option value="woocommerce">WooCommerce Development</option>
              <option value="website-redesign">Website Redesign</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}
      </div>
      <FormField label="Your Message" name="message" type="textarea" required placeholder="Tell us about your project, goals, and timeline..." error={errors.message} />

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-error" role="alert">
          Something went wrong. Please try again or email us directly at {siteConfig.email}.
        </div>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </Button>
    </form>
  )
}

function FormField({
  label, name, type = 'text', required, placeholder, error,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; error?: string
}) {
  const isTextarea = type === 'textarea'
  const Tag = isTextarea ? 'textarea' : 'input'
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground font-heading">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <Tag
        id={name}
        name={name}
        type={isTextarea ? undefined : type}
        required={required}
        placeholder={placeholder}
        rows={isTextarea ? 5 : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={!!error}
        className={cn(
          'w-full rounded-xl border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors',
          'focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none',
          error ? 'border-error' : 'border-border'
        )}
      />
      {error && <p id={`${name}-error`} className="text-xs text-error" role="alert">{error}</p>}
    </div>
  )
}
