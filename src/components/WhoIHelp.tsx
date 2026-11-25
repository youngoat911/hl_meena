import { Briefcase, Check, GraduationCap, Signpost } from 'lucide-react'
import { whoIHelp } from '../data/site'
import { useLanguage } from '../lib/language'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

const icons = { student: GraduationCap, professional: Briefcase, crossroads: Signpost }

export default function WhoIHelp() {
  const { t } = useLanguage()
  return (
    <Section id="who-i-help">
      <SectionHeading id="who-i-help-title">{t(whoIHelp.title)}</SectionHeading>
      <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
        <Reveal>
          <ul className="space-y-8">
            {whoIHelp.audiences.map((a) => {
              const Icon = icons[a.icon]
              return (
                <li key={a.title.en} className="flex gap-5">
                  <Icon aria-hidden className="mt-1 size-8 shrink-0 text-gold" />
                  <div>
                    <h3 className="text-xl font-semibold">{t(a.title)}</h3>
                    <p>{t(a.body)}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
        <Reveal className="on-navy rounded-[2rem] bg-navy p-6 text-white sm:p-8 lg:p-10">
          <h3 className="mb-5 text-xl font-semibold text-white">{t(whoIHelp.problemsTitle)}</h3>
          <ul className="space-y-3">
            {whoIHelp.problems.map((p) => (
              <li key={p.en} className="flex gap-3">
                <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-gold" /> {t(p)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      {whoIHelp.todo && <div className="mt-10"><Todo text={whoIHelp.todo} /></div>}
    </Section>
  )
}
