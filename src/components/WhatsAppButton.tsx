import { contact, ui } from '../data/site'
import { bookingHref } from '../lib/booking'
import { useLanguage } from '../lib/language'
import BrandIcon from './BrandIcon'

export default function WhatsAppButton() {
  const { t } = useLanguage()
  return (
    <aside aria-label="WhatsApp">
    <a
      href={bookingHref(t(contact.bookingMessage))}
      {...(contact.phone && { target: '_blank', rel: 'noopener noreferrer' })}
      aria-label={contact.phone ? `${t(ui.whatsapp)} ${t(ui.newTab)}` : t(ui.whatsappPending)}
      className="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-[#128C7E] text-white shadow-lg ring-2 ring-white transition-colors hover:bg-[#0e6f64] sm:right-6 sm:bottom-6"
    >
      <BrandIcon id="whatsapp" className="size-7" />
    </a>
    </aside>
  )
}
