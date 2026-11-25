import { Award } from 'lucide-react'
import { stats } from '../data/site'
import { useLanguage } from '../lib/language'

export default function StatStrip() {
  const { t } = useLanguage()
  const real = stats.flatMap((s) => (s.value ? [{ value: s.value, label: s.label }] : []))
  if (real.length === 0) return null
  return (
    <div className="mx-auto mt-14 max-w-6xl px-5 sm:px-8">
      <ul className="flex flex-wrap justify-center gap-x-12 gap-y-6 rounded-3xl bg-white px-6 py-6 shadow-sm">
        {real.map((s) => (
          <li key={s.label.en} className="flex items-center gap-4">
            <Award aria-hidden className="size-9 shrink-0 text-gold" />
            <span>
              <strong className="block font-display text-xl text-navy">{t(s.value)}</strong>
              <span className="text-sm">{t(s.label)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
