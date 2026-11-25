import { BadgeCheck } from 'lucide-react'
import { certification as c } from '../data/site'
import { useLanguage } from '../lib/language'
import { SealedSheet } from './Illustrations'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

export default function Certification() {
  const { t } = useLanguage()
  return (
    <Section id="certification">
      <SectionHeading id="certification-title">{t(c.title)}</SectionHeading>
      <div className="grid items-center gap-10 md:grid-cols-[1.5fr_1fr] lg:gap-20">
        <Reveal className=" rounded-[2rem] bg-white p-6 shadow-sm sm:p-10">
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
        <Reveal delay={0.15}>
          <SealedSheet className="mx-auto w-full max-w-64 md:max-w-sm" />
        </Reveal>
      </div>
      <div className="mt-10">
        <h3 className="mb-3 text-xl font-semibold">{t(c.othersTitle)}</h3>
        {c.others.length > 0 ? (
          <ul className="list-disc space-y-1 pl-5">
            {c.others.map((o) => (
              <li key={o.en}>{t(o)}</li>
            ))}
          </ul>
        ) : (
          <Todo text={c.othersTodo} />
        )}
      </div>
    </Section>
  )
}
