import { about } from '../data/site'
import { useLanguage } from '../lib/language'
import Picture from './Picture'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

export default function About() {
  const { t } = useLanguage()
  return (
    <Section id="about" className="bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-md">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Picture photo={about.image} className="size-full" />
          </div>
        </Reveal>
        <Reveal>
          <SectionHeading id="about-title">{t(about.title)}</SectionHeading>
          <div className="space-y-5 text-lg">
            <p>{t(about.intro)}</p>
            {about.background ? <p>{t(about.background)}</p> : <Todo text={about.backgroundTodo} />}
            <p className="border-l-4 border-gold pl-5 text-navy">{t(about.belief)}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
