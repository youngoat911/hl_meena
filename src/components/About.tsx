import { about } from '../data/site'
import { useLanguage } from '../lib/language'
import { SunrisePath } from './Illustrations'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

export default function About() {
  const { t } = useLanguage()
  return (
    <Section id="about" className="bg-white">
      <div className="grid items-center gap-10 md:grid-cols-[1.5fr_1fr] lg:gap-20">
        <Reveal>
          <SectionHeading id="about-title">{t(about.title)}</SectionHeading>
          <div className="space-y-5 text-lg">
            <p>{t(about.intro)}</p>
            {about.background ? <p>{t(about.background)}</p> : <Todo text={about.backgroundTodo} />}
            <p className="border-l-4 border-gold pl-5 text-navy">{t(about.belief)}</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <SunrisePath className="mx-auto w-full max-w-64 md:max-w-sm" />
        </Reveal>
      </div>
    </Section>
  )
}
