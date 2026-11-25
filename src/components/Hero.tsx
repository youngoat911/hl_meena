import { ArrowRight } from 'lucide-react'
import { contact, hero, socials } from '../data/site'
import { bookingHref } from '../lib/booking'
import { useLanguage } from '../lib/language'
import { cleanUrl } from '../lib/links'
import BrandIcon from './BrandIcon'
import Button from './Button'
import Picture from './Picture'
import StatStrip from './StatStrip'

export default function Hero() {
  const { t } = useLanguage()
  const youtube = socials.find((s) => s.id === 'youtube')?.url
  return (
    <section id="home" aria-labelledby="home-title" className="pt-24 pb-14 md:pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-6xl 2xl:max-w-7xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="rise mb-5 inline-block rounded-full bg-gold-soft px-4 py-1.5 text-sm font-semibold text-navy">
            {t(hero.eyebrow)}
          </p>
          <h1 id="home-title" className="rise text-[clamp(1.9rem,9vw,3rem)] leading-tight font-bold md:text-[clamp(2.1rem,4.6vw,3.75rem)]">
            {/* one sentence per line */}
            {t(hero.title).split(/(?<=[.।])\s/).map((s) => (
              <span key={s} className="block">{s} </span>
            ))}
          </h1>
          <p className="rise mt-6 max-w-xl text-lg [animation-delay:120ms]">{t(hero.subtitle)}</p>
          <div className="rise mt-8 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:flex-wrap">
            <Button href={bookingHref(t(contact.bookingMessage))}>
              {t(hero.primaryCta)} <ArrowRight aria-hidden className="size-5" />
            </Button>
            {youtube && (
              <Button href={cleanUrl(youtube)} variant="outline">
                <BrandIcon id="youtube" /> {t(hero.secondaryCta)}
              </Button>
            )}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div aria-hidden className="shape-in absolute -right-3 -bottom-4 h-4/5 w-4/5 rounded-[3rem] bg-gold/35 lg:-right-6 lg:-bottom-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Picture photo={hero.image} eager className="size-full" />
          </div>
        </div>
      </div>
      <StatStrip />
    </section>
  )
}
