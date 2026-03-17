'use client'

import { Button } from '@/components/ui/Button'

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        required
        className="flex-1 rounded-xl border border-border bg-white px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none"
      />
      <Button type="submit" size="md">Subscribe</Button>
    </form>
  )
}
