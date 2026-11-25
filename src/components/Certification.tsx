import { useRef } from 'react'
import { BadgeCheck, Maximize2 } from 'lucide-react'
import { certification as c } from '../data/site'
import { useLanguage } from '../lib/language'
import Lightbox from './Lightbox'
import Picture from './Picture'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

export default function Certification() {
  const { t } = useLanguage()
  const lightbox = useRef<HTMLDialogElement>(null)
  return (
    <Section id="certification">
      <SectionHeading id="certification-title">{t(c.title)}</SectionHeading>
      <Reveal className="grid items-center gap-10 rounded-[2rem] bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[1.3fr_1fr]">
        <button type="button" onClick={() => lightbox.current?.showModal()} className="block w-full text-left">
          <span className="block overflow-hidden rounded-2xl border-4 border-gold">
            <Picture photo={c.image} width={1600} height={1195} className="h-auto w-full" />
          </span>
          <span className="mt-3 flex items-center gap-2 text-sm text-navy">
            <Maximize2 aria-hidden className="size-4" /> {t(c.viewLabel)}
          </span>
        </button>
        <div>
          <BadgeCheck aria-hidden className="mb-4 size-14 text-gold" />
          <h3 className="text-3xl font-semibold">{t(c.titleConferred)}</h3>
          <p className="mt-2">{t(c.name)}</p>
          <dl className="mt-6 space-y-3">
            {c.details.map((d) => (
              <div key={d.label.en} className="border-t border-line pt-3">
                <dt className="text-sm">{t(d.label)}</dt>
                <dd className="font-semibold text-navy">{t(d.value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
      <div className="mt-10">
        <h3 className="mb-3 text-xl font-semibold">{t(c.othersTitle)}</h3>
        {c.others.length > 0 ? (
          <ul className="list-disc space-y-1 pl-5">{c.others.map((o) => <li key={o.en}>{t(o)}</li>)}</ul>
        ) : (
          <Todo text={c.othersTodo} />
        )}
      </div>
      <Lightbox ref={lightbox} src={c.fullImage} alt={t(c.image.alt)} />
    </Section>
  )
}
