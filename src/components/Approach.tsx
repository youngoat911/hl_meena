import { Ear, Lightbulb, ListChecks } from 'lucide-react'
import { approach } from '../data/site'
import { useLanguage } from '../lib/language'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

const icons = { listen: Ear, reflect: Lightbulb, act: ListChecks }

export default function Approach() {
  const { t } = useLanguage()
  return (
    <Section id="approach" className="bg-white">
      <SectionHeading id="approach-title">{t(approach.title)}</SectionHeading>
      <ol className="mb-10 grid gap-10 md:grid-cols-3">
        {approach.steps.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <li key={s.title.en} className="relative">
              {i < approach.steps.length - 1 && (
                <svg aria-hidden className="absolute top-7 left-32 hidden h-1 w-[calc(100%-7rem)] md:block">
                  <line
                    x2="100%"
                    y1="2"
                    y2="2"
                    className="stroke-gold"
                    strokeWidth="3"
                    strokeDasharray="2 12"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              <Reveal delay={i * 0.1}>
                <div className="mb-5 flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-navy text-gold">
                    <Icon aria-hidden className="size-7" />
                  </span>
                  <span className="font-display text-3xl font-semibold text-navy">{i + 1}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t(s.title)}</h3>
                <p>{t(s.body)}</p>
              </Reveal>
            </li>
          )
        })}
      </ol>
      {approach.methods ? <p>{t(approach.methods)}</p> : <Todo text={approach.methodsTodo} />}
    </Section>
  )
}
