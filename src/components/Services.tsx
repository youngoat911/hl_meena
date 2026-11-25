import { ArrowRight } from 'lucide-react'
import { contact, services } from '../data/site'
import { bookingHref } from '../lib/booking'
import { useLanguage } from '../lib/language'
import Button from './Button'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

export default function Services() {
  const { t } = useLanguage()
  return (
    <Section id="coaching" className="bg-white">
      <SectionHeading id="coaching-title">{t(services.title)}</SectionHeading>
      <div className="grid gap-6 lg:grid-cols-3">
        {services.items.map((s, i) => (
          <Reveal key={s.title.en} delay={i * 0.1} className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-7">
            <h3 className="text-2xl font-semibold">{t(s.title)}</h3>
            {s.body && <p>{t(s.body)}</p>}
            {s.details.length > 0 && (
              <dl className="space-y-3">
                {s.details.map((d) => (
                  <div key={d.label.en}>
                    <dt className="font-semibold text-navy">{t(d.label)}</dt>
                    <dd>{d.value ? t(d.value) : <Todo text={contact.pendingTodo} />}</dd>
                  </div>
                ))}
              </dl>
            )}
            {s.todo && <Todo text={s.todo} />}
            {s.showCta && (
              <Button href={bookingHref(t(contact.bookingMessage))} className="mt-auto">
                {t(services.cta)} <ArrowRight aria-hidden className="size-5" />
              </Button>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
