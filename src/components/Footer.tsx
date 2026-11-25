import { brandLine, footer, person } from '../data/site'
import { useLanguage } from '../lib/language'
import Socials from './Socials'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="on-navy bg-navy-deep text-white/80">
      <div className="mx-auto flex max-w-6xl 2xl:max-w-7xl flex-col gap-8 px-5 pt-12 pb-28 sm:px-8 md:flex-row md:items-start md:justify-between md:pr-28">
        <div>
          <p className="font-display text-xl font-bold text-white">{person.shortName}</p>
          {brandLine && <p className="mt-1">{t(brandLine)}</p>}
          <p className="mt-4 text-sm">{t(footer.copyright)}</p>
          <p className="mt-1 text-sm italic">{t(footer.disclaimer)}</p>
        </div>
        <Socials />
      </div>
    </footer>
  )
}
