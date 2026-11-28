import { story } from '../data/site'
import { useLanguage } from '../lib/language'
import { Milestones } from './Illustrations'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

export default function Story() {
  const { t } = useLanguage()
  return (
    <Section id="story">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] lg:gap-20">
        <div>
          <SectionHeading id="story-title">{t(story.title)}</SectionHeading>
          <p className="-mt-4 mb-10 font-display text-xl text-navy sm:text-2xl">{t(story.subtitle)}</p>
          <div className="space-y-12">
            {story.parts.map((part, i) => (
              <Reveal key={part.title?.en ?? i}>
                <article className="max-w-prose space-y-4 text-lg">
                  {part.title && <h3 className="text-2xl font-semibold">{t(part.title)}</h3>}
                  {part.paragraphs.map((p) =>
                    p.emphasis ? (
                      <p
                        key={p.en}
                        className="border-l-4 border-gold py-1 pl-5 font-display text-xl font-semibold text-navy sm:text-2xl"
                      >
                        {t(p)}
                      </p>
                    ) : (
                      <p key={p.en}>{t(p)}</p>
                    ),
                  )}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            {story.quote ? (
              <figure className="on-navy rounded-[2rem] bg-navy p-7 text-white sm:p-10">
                <blockquote className="font-display text-2xl leading-snug font-semibold sm:text-3xl">
                  {t(story.quote)}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/20 pt-6">
                  <span className="block font-display text-lg font-semibold text-gold">{t(story.signature)}</span>
                  <span className="mt-2 block text-white/85">{t(story.closing)}</span>
                </figcaption>
              </figure>
            ) : (
              <Todo text={story.quoteTodo} />
            )}
          </Reveal>
        </div>
        <div className="order-first md:order-none">
          <Reveal className="md:sticky md:top-28">
            <Milestones className="mx-auto w-full max-w-56 md:max-w-sm" />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
