import { Briefcase, Check, GraduationCap, Signpost } from 'lucide-react'
import { whoIHelp } from '../data/site'
import { useLanguage } from '../lib/language'
import { Dots } from './Illustrations'
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
          <ul className="space-y-5">
            {whoIHelp.audiences.map((a) => {
              const Icon = icons[a.icon]
              return (
                <li key={a.title.en} className="flex gap-5 rounded-3xl bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gold-soft text-navy">
                    <Icon aria-hidden className="size-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{t(a.title)}</h3>
                    <p>{t(a.body)}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
        <Reveal className="on-navy relative overflow-hidden rounded-[2rem] bg-navy p-6 text-white sm:p-8 lg:p-10">
          <Dots id="help-dots" className="absolute right-0 bottom-0 hidden h-28 lg:block w-36 text-gold opacity-30" />
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
