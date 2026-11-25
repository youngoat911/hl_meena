import { brandLine, footer, nav, person, ui } from '../data/site'
import { useLanguage } from '../lib/language'
import { Hills } from './Illustrations'
import Socials from './Socials'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <>
      <div className="bg-white">
        <Hills className="block h-16 w-full sm:h-28" />
      </div>
      <footer className="on-navy -mt-px bg-navy-deep text-white/80">
        <div className="mx-auto flex max-w-6xl 2xl:max-w-7xl flex-col gap-8 px-5 pt-12 pb-28 sm:px-8 md:flex-row md:items-start md:justify-between md:pr-28">
          <div>
            <p className="font-display text-xl font-bold text-white">{person.shortName}</p>
            {brandLine && <p className="mt-1">{t(brandLine)}</p>}
            <p className="mt-4 text-sm">{t(footer.copyright)}</p>
            <p className="mt-1 text-sm italic">{t(footer.disclaimer)}</p>
          </div>
          <nav aria-label={t(ui.footerNav)}>
            <ul className="grid grid-cols-2 gap-x-10">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="block py-2 transition-colors hover:text-gold">
                    {t(n.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Socials />
        </div>
      </footer>
    </>
  )
}
