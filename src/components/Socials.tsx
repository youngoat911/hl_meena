import { socials, ui } from '../data/site'
import { useLanguage } from '../lib/language'
import { cleanUrl } from '../lib/links'
import BrandIcon from './BrandIcon'

export default function Socials() {
  const { t } = useLanguage()
  return (
    <ul className="flex gap-3">
      {socials.map(({ id, label, url }) =>
        url && (
          <li key={id}>
            <a
              href={cleanUrl(url)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} ${t(ui.newTab)}`}
              className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-navy-deep"
            >
              <BrandIcon id={id} />
            </a>
          </li>
        ),
      )}
    </ul>
  )
}
