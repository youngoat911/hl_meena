import { about } from '../data/site'
import { useLanguage } from '../lib/language'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

export default function About() {
  const { t } = useLanguage()
  return (
    <Section id="about" className="bg-white">
      <Reveal className="max-w-3xl">
        <SectionHeading id="about-title">{t(about.title)}</SectionHeading>
        <div className="space-y-5 text-lg">
          <p>{t(about.intro)}</p>
          {about.background ? <p>{t(about.background)}</p> : <Todo text={about.backgroundTodo} />}
          <p className="border-l-4 border-gold pl-5 text-navy">{t(about.belief)}</p>
        </div>
      </Reveal>
    </Section>
  )
}
