import type { ReactNode } from 'react'
import { ui } from '../data/site'
import { useLanguage } from '../lib/language'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-display font-semibold transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0'
const variants = {
  gold: 'bg-gold text-navy-deep hover:bg-[#dab43a]',
  outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
}

type Props = { children: ReactNode; variant?: keyof typeof variants; href?: string; className?: string }

/** A link when `href` is given, otherwise a submit button. */
export default function Button({ children, variant = 'gold', href, className = '' }: Props) {
  const { t } = useLanguage()
  const cls = `${base} ${variants[variant]} ${className}`
  if (!href) return <button type="submit" className={cls}>{children}</button>
  const external = href.startsWith('http')
  return (
    <a href={href} className={cls} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
      {children}
      {external && <span className="sr-only">{t(ui.newTab)}</span>}
    </a>
  )
}
