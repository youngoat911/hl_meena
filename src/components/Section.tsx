import { Suspense, type ReactNode } from 'react'

type Props = { id: string; children: ReactNode; className?: string }

/** Labelled by the heading with id `${id}-title`. */
export default function Section({ id, children, className = '' }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-14 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-5 sm:px-8">
        {/* the boundary lets each section hydrate separately */}
        <Suspense>{children}</Suspense>
      </div>
    </section>
  )
}
