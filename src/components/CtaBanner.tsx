import { ArrowRight } from 'lucide-react'
import { contact, ctaBanner } from '../data/site'
import { bookingHref } from '../lib/booking'
import { useLanguage } from '../lib/language'
import Button from './Button'
import Picture from './Picture'
import Reveal from './Reveal'

export default function CtaBanner() {
  const { t } = useLanguage()
  return (
    <section aria-labelledby="cta-title" className="on-navy relative overflow-hidden bg-navy-deep">
      <div className="absolute inset-y-0 right-0 hidden w-[45%] md:block">
        <Picture photo={ctaBanner.image} className="size-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/20 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="md:max-w-[52%]">
          <h2 id="cta-title" className="text-3xl font-semibold text-white sm:text-4xl">{t(ctaBanner.title)}</h2>
          <p className="mt-4 mb-8 text-lg text-white/85">{t(ctaBanner.body)}</p>
          <Button href={bookingHref(t(contact.bookingMessage))}>
            {t(ctaBanner.cta)} <ArrowRight aria-hidden className="size-5 shrink-0" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
