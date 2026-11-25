import { story } from '../data/site'
import { useLanguage } from '../lib/language'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

export default function Story() {
  const { t } = useLanguage()
  return (
    <Section id="story">
      <Reveal className="max-w-3xl">
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
    </Section>
  )
}
