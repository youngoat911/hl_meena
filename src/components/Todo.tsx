import { ui, type Text } from '../data/site'
import { useLanguage } from '../lib/language'

/** Clearly marked placeholder for content that is still missing. */
export default function Todo({ text }: { text: Text }) {
  const { t } = useLanguage()
  return (
    <p className="rounded-xl border-2 border-dashed border-gold bg-gold-soft/50 px-4 py-3 text-sm text-navy">
      <strong className="mr-2 rounded bg-navy px-1.5 py-0.5 text-xs tracking-wide text-white">{t(ui.todo)}</strong>
      {t(text)}
    </p>
  )
}
