import { ArrowRight, MessageCircle, PhoneCall, Users } from 'lucide-react'
import { contact, services, showTodos } from '../data/site'
import { bookingHref } from '../lib/booking'
import { useLanguage } from '../lib/language'
import Button from './Button'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

const icons = { session: MessageCircle, call: PhoneCall, group: Users }

// Services still waiting for confirmation, and empty details, stay hidden unless showTodos is on.
const items = services.items
  .filter((s) => showTodos || !s.todo)
  .map((s) => ({ ...s, details: s.details.filter((d) => showTodos || d.value) }))

export default function Services() {
  const { t } = useLanguage()
  return (
    <Section id="coaching" className="bg-white">
      <SectionHeading id="coaching-title">{t(services.title)}</SectionHeading>
      <div className={items.length > 1 ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' : 'max-w-xl'}>
        {items.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <Reveal
              key={s.title.en}
              delay={i * 0.1}
              className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-gold hover:shadow-lg sm:p-7"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-gold-soft text-navy">
                <Icon aria-hidden className="size-7" />
              </span>
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
          )
        })}
      </div>
    </Section>
  )
}
