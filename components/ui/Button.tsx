import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
}

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-primary',
  secondary: 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200 active:bg-secondary-300',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  ghost: 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900',
  white: 'bg-white text-primary-700 hover:bg-primary-50 shadow-md',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  type = 'button',
  onClick,
  disabled = false,
  icon,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  )
}
