import { contact } from '../data/site'
import { whatsappUrl } from './links'

/** WhatsApp when there is a number, otherwise the contact form. */
export function bookingHref(message: string): string {
  return contact.phone ? whatsappUrl(contact.phone, message) : '#contact'
}
