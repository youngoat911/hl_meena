import { useState, type FormEvent, type ReactNode } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contact, socials, type Text } from '../data/site'
import { useLanguage } from '../lib/language'
import { cleanUrl, mailtoUrl, whatsappUrl } from '../lib/links'
import BrandIcon from './BrandIcon'
import Button from './Button'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'
import Todo from './Todo'

const f = contact.form
const fields = ['name', 'phone', 'city', 'help', 'mode'] as const
type Field = (typeof fields)[number]
type Errors = Partial<Record<Field, Text>>

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {}
  for (const key of fields) if (!values[key]) errors[key] = key === 'mode' ? f.errorMode : f.errorRequired
  const digits = values.phone.replace(/\D/g, '').length
  if (values.phone && (!/^[+\d\s()-]+$/.test(values.phone) || digits < 10 || digits > 15)) errors.phone = f.errorPhone
  return errors
}

const inputClass =
  'mt-1 w-full rounded-xl border border-[#8a8f9b] bg-white px-4 py-3 text-navy aria-[invalid=true]:border-red-700'

function ContactForm() {
  const { t } = useLanguage()
  const [errors, setErrors] = useState<Errors>({})
  const [notice, setNotice] = useState<Text | null>(null)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const values = Object.fromEntries(
      fields.map((k) => [k, String(data.get(k) ?? '').trim()]),
    ) as Record<Field, string>
    const found = validate(values)
    setErrors(found)
    setNotice(null)
    const first = fields.find((k) => found[k])
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    const message = fields.map((k) => `${t(f[k])}: ${values[k]}`).join('\n')
    if (contact.phone) {
      window.open(whatsappUrl(contact.phone, message), '_blank', 'noopener')
      setNotice(f.opened)
    } else if (contact.email) {
      window.location.href = mailtoUrl(contact.email, t(contact.emailSubject), message)
      setNotice(f.opened)
    } else {
      setNotice(f.comingSoon)
    }
  }

  const attrs = (k: Field) => ({
    id: `field-${k}`,
    name: k,
    required: true,
    'aria-invalid': Boolean(errors[k]),
    'aria-describedby': errors[k] ? `error-${k}` : undefined,
    className: inputClass,
  })
  const error = (k: Field) => {
    const text = errors[k]
    return text && <p id={`error-${k}`} className="mt-1 text-sm text-red-700">{t(text)}</p>
  }
  const label = (k: Field) => (
    <label htmlFor={`field-${k}`} className="font-medium text-navy">{t(f[k])}</label>
  )

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5 rounded-[2rem] bg-cream p-6 sm:p-9">
      <h3 className="text-2xl font-semibold">{t(f.title)}</h3>
      <div>{label('name')}<input {...attrs('name')} autoComplete="name" />{error('name')}</div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>{label('phone')}<input {...attrs('phone')} type="tel" autoComplete="tel" />{error('phone')}</div>
        <div>{label('city')}<input {...attrs('city')} autoComplete="address-level2" />{error('city')}</div>
      </div>
      <div>{label('help')}<textarea {...attrs('help')} rows={4} />{error('help')}</div>
      <fieldset aria-describedby={errors.mode ? 'error-mode' : undefined}>
        <legend className="font-medium text-navy">{t(f.mode)}</legend>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
          {f.modes.map((m) => (
            <label key={m.en} className="flex min-h-11 items-center gap-2 text-navy">
              <input type="radio" name="mode" value={t(m)} className="size-5 accent-navy" /> {t(m)}
            </label>
          ))}
        </div>
        {error('mode')}
      </fieldset>
      <Button className="w-full sm:w-auto">
        {t(contact.phone ? f.submitWhatsapp : contact.email ? f.submitEmail : f.submitPending)}
      </Button>
      <div role="status">
        {notice && <p className="rounded-xl bg-gold-soft px-4 py-3 text-navy">{t(notice)}</p>}
      </div>
    </form>
  )
}

function Row({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="mt-1 text-gold">{icon}</span>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 font-semibold">{label}</h3>
        {children}
      </div>
    </div>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const youtube = socials.find((s) => s.id === 'youtube')?.url
  const todo = <Todo text={contact.pendingTodo} />
  const link = 'text-navy underline decoration-gold decoration-2 underline-offset-4'
  return (
    <Section id="contact" className="bg-white">
      <SectionHeading id="contact-title">{t(contact.title)}</SectionHeading>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal className="space-y-7">
          <Row icon={<MapPin aria-hidden />} label={t(contact.labels.address)}>
            {contact.address ? <address className="not-italic">{t(contact.address)}</address> : todo}
          </Row>
          <Row icon={<Phone aria-hidden />} label={t(contact.labels.phone)}>
            {contact.phone ? <a className={link} href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>{contact.phone}</a> : todo}
          </Row>
          <Row icon={<Mail aria-hidden />} label={t(contact.labels.email)}>
            {contact.email ? <a className={`${link} break-all`} href={`mailto:${contact.email}`}>{contact.email}</a> : todo}
          </Row>
          {youtube && (
            <Row icon={<BrandIcon id="youtube" className="size-6" />} label={t(contact.labels.youtube)}>
              <a className={link} href={cleanUrl(youtube)} target="_blank" rel="noopener noreferrer">{contact.youtubeHandle}</a>
            </Row>
          )}
        </Reveal>
        <Reveal><ContactForm /></Reveal>
      </div>
    </Section>
  )
}
