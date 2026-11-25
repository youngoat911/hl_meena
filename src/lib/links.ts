export const IMAGE_WIDTHS = [480, 640, 800, 1087] as const

export const imageSrc = (name: string, width: number = 800) => `/images/${name}-${width}.webp`

export const imageSrcSet = (name: string) =>
  IMAGE_WIDTHS.map((w) => `${imageSrc(name, w)} ${w}w`).join(', ')

/** Removes tracking parameters such as ?si= from a shared link. */
export function cleanUrl(url: string): string {
  const u = new URL(url)
  for (const key of [...u.searchParams.keys()]) {
    if (/^(si|fbclid|gclid|igsh|igshid|mibextid|feature|utm_.*)$/i.test(key)) u.searchParams.delete(key)
  }
  return u.toString()
}

export function whatsappUrl(phone: string, message: string): string {
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}

export function mailtoUrl(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/** Accepts watch, youtu.be, shorts and embed links. */
export function youtubeId(url: string): string | null {
  return url.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/|\/live\/)([\w-]{11})/)?.[1] ?? null
}
