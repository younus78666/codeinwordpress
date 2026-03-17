import { cn } from '@/lib/utils'

/* ── Container ── */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

/* ── SectionWrapper ── */
type SectionProps = {
  children: React.ReactNode
  heading?: string
  subheading?: string
  background?: 'default' | 'alt' | 'primary' | 'dark'
  id?: string
  className?: string
  headingClassName?: string
}

const bgMap = {
  default: 'bg-white',
  alt: 'bg-muted',
  primary: 'bg-primary-50',
  dark: 'bg-primary-950 text-white',
}

export function SectionWrapper({
  children,
  heading,
  subheading,
  background = 'default',
  id,
  className,
  headingClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24 lg:py-32', bgMap[background], className)}>
      <Container>
        {heading && (
          <div className={cn('mx-auto max-w-2xl text-center mb-12 md:mb-16', headingClassName)}>
            <h2 className={cn(
              'text-3xl md:text-4xl font-bold',
              background === 'dark' ? 'text-white' : 'text-foreground'
            )}>
              {heading}
            </h2>
            {subheading && (
              <p className={cn(
                'mt-4 text-lg',
                background === 'dark' ? 'text-primary-200' : 'text-muted-foreground'
              )}>
                {subheading}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}

/* ── Card ── */
type CardProps = {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const padMap = { sm: 'p-4', md: 'p-6', lg: 'p-8' }

export function Card({ children, className, hover = true, padding = 'md' }: CardProps) {
  return (
    <div
      className={cn(
        'bg-card rounded-2xl border border-border',
        padMap[padding],
        hover && 'transition-all duration-300 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}

/* ── Badge ── */
type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'success' | 'outline'
  className?: string
}

const badgeVariants = {
  default: 'bg-secondary-100 text-secondary-700',
  primary: 'bg-primary-100 text-primary-700',
  success: 'bg-green-100 text-green-700',
  outline: 'border border-border text-muted-foreground',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-heading', badgeVariants[variant], className)}>
      {children}
    </span>
  )
}

/* ── Input ── */
type InputProps = {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  error?: string
  className?: string
}

export function Input({ label, name, type = 'text', required, placeholder, error, className }: InputProps) {
  const isTextarea = type === 'textarea'
  const Tag = isTextarea ? 'textarea' : 'input'

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
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
        className={cn(
          'w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors duration-200',
          'focus:border-primary-500 focus:ring-2 focus:ring-primary-100 focus:outline-none',
          error && 'border-error focus:ring-red-100',
        )}
      />
      {error && (
        <p id={`${name}-error`} className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
