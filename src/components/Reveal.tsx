import type { ReactNode } from 'react'
import * as m from 'framer-motion/m'

type Props = { children: ReactNode; delay?: number; className?: string }

export default function Reveal({ children, delay = 0, className }: Props) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </m.div>
  )
}
