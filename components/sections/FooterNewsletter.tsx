'use client'

export function FooterNewsletter() {
  return (
    <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        required
        className="flex-1 md:w-64 rounded-xl border border-primary-800 bg-primary-900/50 px-4 py-3 text-sm text-white placeholder:text-primary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-400 text-white text-sm font-heading font-semibold transition-colors shrink-0"
      >
        Subscribe
      </button>
    </form>
  )
}
