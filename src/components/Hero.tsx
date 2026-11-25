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
    <section id="home" aria-labelledby="home-title" className="pt-24 pb-14 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="mb-5 inline-block rounded-full bg-gold-soft px-4 py-1.5 text-sm font-semibold text-navy">
            {t(hero.eyebrow)}
          </p>
          <h1 id="home-title" className="text-4xl leading-tight font-bold sm:text-5xl xl:text-6xl">
            {/* one sentence per line */}
            {t(hero.title).split(/(?<=[.।])\s/).map((s) => (
              <span key={s} className="block">{s} </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg">{t(hero.subtitle)}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="absolute -right-3 -bottom-4 h-4/5 w-4/5 rounded-[3rem] bg-gold/35 sm:-right-6 sm:-bottom-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Picture photo={hero.image} eager className="size-full" />
          </div>
        </div>
      </div>
      <StatStrip />
    </section>
  )
}
