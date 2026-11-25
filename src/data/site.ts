/**
 * ALL website copy, links and media live in this file.
 * Source: data/content.md
 *
 *  - Text is { en: '...', hi: '...' }. `hi` is optional and falls back to English.
 *  - `null` means "still TODO". Replace null with the real value and the
 *    placeholder disappears (or the hidden item appears) by itself.
 */

export type Text = { en: string; hi?: string }
export type Maybe<T> = T | null
export type Photo = { name: string; alt: Text; position: string; sizes: string; zoom?: number }
export type Stat = { value: Maybe<Text>; label: Text }
export type Service = {
  title: Text
  body: Maybe<Text>
  details: { label: Text; value: Maybe<Text> }[]
  /** Shown as a marked placeholder; set to null once confirmed. */
  todo: Maybe<Text>
  showCta: boolean
}
export type Testimonial = { name: string; city: string; quote: Text }
export type Video = { url: string; title: Text }
export type SocialId = 'youtube' | 'facebook' | 'instagram' | 'linkedin'

/* ------------------------------------------------------------- Language */

/** TODO: confirm English only or Hindi + English. `true` shows the EN/हिंदी toggle. */
export const hindiEnabled: boolean = false

/* ------------------------------------------------------------- 0. Meta */

export const person = { name: 'Heeralal Meena', shortName: 'H.L. Meena' }

export const meta = {
  title: { en: 'Heeralal Meena | Certified Master Life Coach' } as Text,
  // TODO: add city
  description: {
    en: 'Heeralal Meena (H.L. Meena) is a certified Master Life Coach helping people gain clarity, build confidence and move forward with purpose. Book a 1-on-1 coaching session.',
  } as Text,
  // TODO: add city to "life coach", and "master life coach Rajasthan" once the state is confirmed
  keywords: [
    'life coach',
    'H.L. Meena',
    'Heeralal Meena life coach',
    'master life coach',
    'personal growth coaching',
    'Hindi life coach',
  ],
  ogImage: '/images/og.jpg',
  /** Custom domain, e.g. 'https://example.com'. null = use the Vercel URL. */
  siteUrl: null as Maybe<string>,
}

/** To be picked with him (three options in content.md). Shown in the footer when set. */
export const brandLine: Maybe<Text> = null

/* ------------------------------------------------------- 1. Navigation */

/** `sections` are the page sections during which the link is highlighted. */
export const nav: { label: Text; href: string; sections: string[] }[] = [
  { label: { en: 'Home' }, href: '#home', sections: ['home'] },
  { label: { en: 'About' }, href: '#about', sections: ['about', 'story'] },
  { label: { en: 'Coaching' }, href: '#coaching', sections: ['approach', 'who-i-help', 'coaching'] },
  { label: { en: 'Certification' }, href: '#certification', sections: ['certification'] },
  { label: { en: 'Videos' }, href: '#videos', sections: ['videos'] },
  { label: { en: 'Contact' }, href: '#contact', sections: ['contact'] },
]

/* ------------------------------------------------------------- 2. Hero */

export const hero = {
  eyebrow: { en: 'Certified Master Life Coach' } as Text,
  title: { en: 'Find Clarity. Build Confidence. Live With Purpose.' } as Text,
  subtitle: {
    en: 'I help people get unstuck, overcome self-doubt and take confident action toward the life they want, one conversation at a time.',
  } as Text,
  primaryCta: { en: 'Book a 1-on-1 Session' } as Text,
  secondaryCta: { en: 'Watch on YouTube' } as Text,
  image: {
    name: 'portrait-seated-smile',
    alt: { en: 'Heeralal Meena seated at his office desk, smiling gently' },
    position: '20% 0%',
    zoom: 1.2,
    sizes: '(min-width: 1024px) 480px, (min-width: 768px) 42vw, (min-width: 480px) 448px, 92vw',
  } as Photo,
}

/** Stats with a null value are not shown. Use real numbers only. */
export const stats: Stat[] = [
  { value: null, label: { en: 'of experience guiding people' } }, // TODO e.g. { en: '5 years' }
  { value: null, label: { en: 'people coached' } }, // TODO e.g. { en: '100+' }
  { value: { en: 'Certified' }, label: { en: 'Master Life Coach, Sneh Academy (2025)' } },
  { value: null, label: { en: 'YouTube subscribers' } }, // TODO
]

/* ------------------------------------------------------------ 3. About */

export const about = {
  title: { en: "Namaste, I'm Heeralal Meena." } as Text,
  intro: {
    en: "I'm a certified Master Life Coach, trained through the Life Coach Certification program at Sneh Academy under Sneh Desai, Life & Business Coach.",
  } as Text,
  background: null as Maybe<Text>,
  backgroundTodo: {
    en: "Where he's from and where he's based, his background and profession, and why he became a coach.",
  } as Text,
  belief: {
    en: 'I believe everyone already has the strength to change their life. Sometimes they just need the right questions, the right guidance and someone who believes in them.',
  } as Text,
}

/* ------------------------------------------------------------ 4. Story */

export const story = {
  title: { en: 'My Story' } as Text,
  parts: [
    { title: { en: 'The turning point' }, body: null, todo: { en: 'A moment or struggle in his own life that made him value guidance.' } },
    { title: { en: 'The learning' }, body: null, todo: { en: 'What he studied and practised.' } },
    { title: { en: 'The calling' }, body: null, todo: { en: 'Why he now coaches others and what drives him.' } },
  ] as { title: Text; body: Maybe<Text>; todo: Text }[],
  quote: null as Maybe<Text>,
  quoteTodo: { en: 'One line he says often to clients.' } as Text,
}

/* ------------------------------------- 5. How I Coach (starter copy) */

export const approach = {
  title: { en: 'How I Coach' } as Text,
  steps: [
    {
      icon: 'listen',
      title: { en: 'Listen & Understand' },
      body: { en: "Every journey starts with clarity. We talk openly about where you are, what's holding you back and where you want to go." },
    },
    {
      icon: 'reflect',
      title: { en: 'Reframe & Reflect' },
      body: { en: 'Together we uncover the beliefs and thought patterns keeping you stuck, and replace them with ones that move you forward.' },
    },
    {
      icon: 'act',
      title: { en: 'Plan & Act' },
      body: { en: 'You leave every session with clear, practical next steps, and I hold you accountable to them.' },
    },
  ] as { icon: 'listen' | 'reflect' | 'act'; title: Text; body: Text }[],
  methods: null as Maybe<Text>,
  methodsTodo: { en: 'Specific coaching methods he uses, if any.' } as Text,
}

/* -------------------------------------- 6. Who I Help (starter copy) */

export const whoIHelp = {
  title: { en: 'Who I Help' } as Text,
  audiences: [
    { icon: 'student', title: { en: 'Students & Young Adults' }, body: { en: 'Confused about career and direction, lacking focus or confidence.' } },
    { icon: 'professional', title: { en: 'Working Professionals' }, body: { en: 'Stuck, stressed, or wanting growth in career and life.' } },
    { icon: 'crossroads', title: { en: 'Anyone at a Crossroads' }, body: { en: 'Facing a big decision or a fresh start.' } },
  ] as { icon: 'student' | 'professional' | 'crossroads'; title: Text; body: Text }[],
  problemsTitle: { en: "I can help if you're dealing with:" } as Text,
  problems: [
    { en: 'Lack of clarity or direction' },
    { en: 'Low confidence and self-doubt' },
    { en: 'Procrastination and lack of discipline' },
    { en: 'Setting goals but not achieving them' },
    { en: 'Negative thinking and stress' },
  ] as Text[],
  /** Set to null once confirmed. */
  todo: { en: 'Confirm his real target audience.' } as Maybe<Text>,
}

/* --------------------------------------------------------- 7. Services */

export const services = {
  title: { en: 'Coaching Services' } as Text,
  cta: { en: 'Book a session' } as Text,
  items: [
    {
      title: { en: '1-on-1 Life Coaching' },
      body: { en: 'Personal sessions tailored to your goals and challenges.' },
      details: [
        { label: { en: 'Mode' }, value: null },
        { label: { en: 'Duration & fee' }, value: null },
      ],
      todo: null,
      showCta: true,
    },
    {
      title: { en: 'Free Discovery Call' },
      body: { en: 'A short call to understand your situation and see if coaching is right for you.' },
      details: [],
      todo: { en: 'Confirm if he wants to offer this.' },
      showCta: false,
    },
    {
      title: { en: 'Workshops / Group Sessions' },
      body: null,
      details: [],
      todo: { en: 'Confirm whether he runs seminars, school/college sessions or group programs.' },
      showCta: false,
    },
  ] as Service[],
}

/* ---------------------------------------------------- 8. Certification */

export const certification = {
  title: { en: 'Certification & Credentials' } as Text,
  name: { en: 'Certificate of Achievement: Life Coach Certification' } as Text,
  titleConferred: { en: 'Master Life Coach' } as Text,
  issuer: { en: 'Sneh Academy' } as Text,
  dateIso: '2025-09-30',
  details: [
    { label: { en: 'Awarded to' }, value: { en: 'Heeralal Meena' } },
    { label: { en: 'Issued by' }, value: { en: 'Sneh Academy' } },
    { label: { en: 'Signed by' }, value: { en: 'Sneh Desai, Life & Business Coach' } },
    { label: { en: 'Date' }, value: { en: '30 September 2025' } },
  ] as { label: Text; value: Text }[],
  /** Add other credentials here, e.g. [{ en: 'M.A. Psychology, ...' }] */
  others: [] as Text[],
  othersTitle: { en: 'Other credentials' } as Text,
  othersTodo: { en: 'Education / degrees, other certifications and awards.' } as Text,
}

/* ----------------------------------------------------------- 9. Videos */

export const videos = {
  title: { en: 'Videos & Content' } as Text,
  line: { en: 'Watch my latest talks on mindset, motivation and personal growth.' } as Text,
  cta: { en: 'Watch on YouTube' } as Text,
  /** TODO: add 3–6, e.g. { url: 'https://youtu.be/XXXXXXXXXXX', title: { en: '...' } } */
  items: [] as Video[],
}

/* ----------------------------------------------------- 10. Testimonials */

export const testimonials = {
  title: { en: 'Testimonials' } as Text,
  /** TODO: 3–5 real ones only. */
  items: [] as Testimonial[],
  todo: { en: 'Real testimonials to be collected.' } as Text,
}

/* ------------------------------------------------------ 11. CTA banner */

export const ctaBanner = {
  title: { en: 'The change you want starts with one conversation.' } as Text,
  body: { en: "Let's find your clarity together." } as Text,
  cta: { en: 'Book Your Session on WhatsApp' } as Text,
}

/* ------------------------------------------------ 12. Contact & footer */

export const contact = {
  title: { en: 'Contact' } as Text,
  /** TODO: office address */
  address: null as Maybe<Text>,
  /** TODO: with country code, e.g. '+91 98765 43210'. Turns on every WhatsApp link. */
  phone: null as Maybe<string>,
  /** TODO */
  email: null as Maybe<string>,
  labels: {
    address: { en: 'Location / office address' } as Text,
    phone: { en: 'Phone / WhatsApp' } as Text,
    email: { en: 'Email' } as Text,
    youtube: { en: 'YouTube' } as Text,
  },
  pendingTodo: { en: 'Details to be added.' } as Text,
  youtubeHandle: '@h_l_meena',
  form: {
    title: { en: 'Book a session' } as Text,
    name: { en: 'Name' } as Text,
    phone: { en: 'Phone/WhatsApp' } as Text,
    city: { en: 'City' } as Text,
    help: { en: 'What would you like help with?' } as Text,
    mode: { en: 'Preferred mode' } as Text,
    modes: [{ en: 'In-person' }, { en: 'Phone' }, { en: 'Video' }] as Text[],
    submitWhatsapp: { en: 'Send on WhatsApp' } as Text,
    submitEmail: { en: 'Send by email' } as Text,
    submitPending: { en: 'Send message' } as Text,
    errorRequired: { en: 'Please fill this in.' } as Text,
    errorPhone: { en: 'Please enter a valid phone number.' } as Text,
    errorMode: { en: 'Please choose one.' } as Text,
    opened: { en: 'Your message is ready. Please press send in the app that opened.' } as Text,
    comingSoon: {
      en: 'Online booking is coming soon, so your message has not been sent. Until then, please reach out through YouTube.',
    } as Text,
  },
  /** Pre-filled text for the booking buttons */
  bookingMessage: { en: 'Namaste, I would like to book a 1-on-1 session.' } as Text,
  emailSubject: { en: 'Book a 1-on-1 session' } as Text,
}

/** Icons are hidden while the url is null. */
export const socials: { id: SocialId; label: string; url: Maybe<string> }[] = [
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@h_l_meena' },
  { id: 'facebook', label: 'Facebook', url: null }, // TODO: direct profile/page URL
  { id: 'instagram', label: 'Instagram', url: null }, // TODO
  { id: 'linkedin', label: 'LinkedIn', url: null }, // TODO
]

export const footer = {
  copyright: { en: '© 2026 Heeralal Meena. All rights reserved.' } as Text,
  disclaimer: { en: 'Life coaching is not a substitute for medical or psychological treatment.' } as Text,
}

/* ---------------------------------------- Interface / screen-reader text */

export const ui = {
  skip: { en: 'Skip to content' } as Text,
  mainNav: { en: 'Main' } as Text,
  openMenu: { en: 'Open menu' } as Text,
  closeMenu: { en: 'Close menu' } as Text,
  todo: { en: 'TODO' } as Text,
  newTab: { en: '(opens in a new tab)' } as Text,
  play: { en: 'Play video' } as Text,
  whatsapp: { en: 'Chat on WhatsApp' } as Text,
  whatsappPending: { en: 'WhatsApp coming soon: go to the contact form' } as Text,
  language: { en: 'Language' } as Text,
}
