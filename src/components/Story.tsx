import { story } from '../data/site'
import { useLanguage } from '../lib/language'
import Picture from './Picture'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

export default function Story() {
  const { t } = useLanguage()
  return (
    <Section id="story">
      <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <SectionHeading id="story-title">{t(story.title)}</SectionHeading>
          <ol className="space-y-6">
            {story.parts.map((p) => (
              <li key={p.title.en}>
                <h3 className="mb-2 text-xl font-semibold">{t(p.title)}</h3>
                {p.body ? <p>{t(p.body)}</p> : <Todo text={p.todo} />}
              </li>
            ))}
          </ol>
          <div className="mt-8">
            {story.quote ? (
              <blockquote className="border-l-4 border-gold pl-5 font-display text-2xl text-navy">{t(story.quote)}</blockquote>
            ) : (
              <Todo text={story.quoteTodo} />
            )}
          </div>
        </Reveal>
        <Reveal className="order-first mx-auto w-full max-w-md lg:order-none">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Picture photo={story.image} className="size-full" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
