import * as m from 'framer-motion/m'

const viewport = { once: true, amount: 0.5 }

export default function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <m.span
        aria-hidden
        className="mb-4 block h-1 w-14 origin-left rounded-full bg-gold"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <m.h2
        id={id}
        className="text-[1.75rem] leading-tight font-semibold sm:text-4xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </m.h2>
    </div>
  )
}
