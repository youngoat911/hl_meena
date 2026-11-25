import { testimonials } from '../data/site'
import { useLanguage } from '../lib/language'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

export default function Testimonials() {
  const { t } = useLanguage()
  return (
    <Section id="testimonials">
      <SectionHeading id="testimonials-title">{t(testimonials.title)}</SectionHeading>
      {testimonials.items.length > 0 ? (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <li key={item.name + item.city}>
              <Reveal className="h-full rounded-3xl bg-white p-7">
                <figure>
                  <blockquote>{t(item.quote)}</blockquote>
                  <figcaption className="mt-4 font-semibold text-navy">{item.name}, {item.city}</figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      ) : (
        <Todo text={testimonials.todo} />
      )}
    </Section>
  )
}
