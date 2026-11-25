import { ArrowRight } from 'lucide-react'
import { contact, ctaBanner } from '../data/site'
import { bookingHref } from '../lib/booking'
import { useLanguage } from '../lib/language'
import Button from './Button'
import { Conversation } from './Illustrations'
import Reveal from './Reveal'

export default function CtaBanner() {
  const { t } = useLanguage()
  return (
    <section aria-labelledby="cta-title" className="on-navy bg-navy-deep">
      <div className="mx-auto grid items-center gap-10 md:grid-cols-[1.4fr_1fr] max-w-6xl 2xl:max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <h2 id="cta-title" className="text-3xl font-semibold text-white sm:text-4xl">
            {t(ctaBanner.title)}
          </h2>
          <p className="mt-4 mb-8 text-lg text-white/85">{t(ctaBanner.body)}</p>
          <Button href={bookingHref(t(contact.bookingMessage))}>
            {t(ctaBanner.cta)} <ArrowRight aria-hidden className="size-5 shrink-0" />
          </Button>
        </Reveal>
        <Reveal delay={0.15}>
          <Conversation className="mx-auto w-full max-w-72 md:max-w-md" />
        </Reveal>
      </div>
    </section>
  )
}
