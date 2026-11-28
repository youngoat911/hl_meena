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
  icon: 'session' | 'call' | 'group'
  title: Text
  body: Maybe<Text>
  details: { label: Text; value: Maybe<Text> }[]
  /** Shown as a marked placeholder; set to null once confirmed. */
  todo: Maybe<Text>
  showCta: boolean
}
export type Video = { url: string; title: Text }
export type SocialId = 'youtube' | 'facebook' | 'instagram' | 'linkedin'

/* ------------------------------------------------------------- Display */

/**
 * false: anything still missing is hidden from the page.
 * true: missing items show as dashed TODO boxes (handy while collecting content).
 */
export const showTodos: boolean = false

/* ------------------------------------------------------------- Language */

/** TODO: confirm English only or Hindi + English. `true` shows the EN/हिंदी toggle. */
export const hindiEnabled: boolean = false

/* ------------------------------------------------------------- 0. Meta */

export const person = {
  name: 'Heeralal Meena',
  shortName: 'H.L. Meena',
  /** Where he lives; used for search engines. */
  city: 'Udaipur',
  region: 'Rajasthan',
  country: 'IN',
}

export const meta = {
  title: { en: 'Heeralal Meena | Certified Master Life Coach' } as Text,
  description: {
    en: 'Heeralal Meena (H.L. Meena) is a certified Master Life Coach in Udaipur, Rajasthan, helping people gain clarity, build confidence and move forward with purpose. Book a 1-on-1 coaching session.',
  } as Text,
  keywords: [
    'life coach Udaipur',
    'H.L. Meena',
    'Heeralal Meena life coach',
    'master life coach Rajasthan',
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
  background: {
    en: 'I was born in Kerpura, a small village in the Sarada Tehsil area of Salumbar district, Rajasthan, in a simple rural family. I currently live in Udaipur, Rajasthan.',
  } as Maybe<Text>,
  backgroundTodo: { en: "Where he's from and where he's based." } as Text,
  belief: {
    en: 'I believe everyone already has the strength to change their life. Sometimes they just need the right questions, the right guidance and someone who believes in them.',
  } as Text,
}

/* ------------------------------------------------------------ 4. Story */

export type StoryPart = { title: Maybe<Text>; paragraphs: Paragraph[] }
/** `emphasis` shows a line as a highlighted statement. */
export type Paragraph = Text & { emphasis?: boolean }

/** His own words (received 2026-11-28). */
export const story = {
  title: { en: 'My Story' } as Text,
  subtitle: { en: 'From Struggle to Success and Helping Others Transform Their Lives' } as Text,
  parts: [
    {
      title: null,
      paragraphs: [
        { en: 'I come from a rural and tribal background. My life was not easy from the beginning. I have not merely witnessed poverty and struggle from a distance—I have experienced them firsthand.' },
        { en: 'During my childhood, I worked as a laborer, herded goats, and worked day and night as a waiter in catering. I have done many different kinds of work that a person from a poor rural and tribal family may have to do to survive and move forward in life.' },
        { en: 'Despite these circumstances, I always had a dream within me—to do something meaningful in life and change my circumstances.' },
        { en: 'At around the age of 21, I appeared for competitive examinations for government service. In 2008, I appeared for the Gram Vikas Adhikari examination and secured the top position in Udaipur district from the ST/TSP area.' },
        { en: 'After that, I went on to qualify more than half a dozen competitive examinations for various government services.' },
        { en: 'For me, this was not simply a success story about getting a government job. It was proof that when a person has faith in their goal, the willingness to work hard, and a strong determination to move forward, even the most difficult circumstances can be changed.' },
      ],
    },
    {
      title: { en: 'This Is Where a New Thought Took Root in Me' },
      paragraphs: [
        { en: 'When I looked back at my own struggles, I realized that there are many young people like me who have dreams, the desire to achieve something, and the potential to move forward in life.' },
        { en: 'But they often do not receive the right information and proper guidance at the right time.' },
        { en: 'Many times, they do not know what they should do next. When they face failure, their confidence begins to break. They lose direction and gradually start believing:' },
        { en: '“Maybe I cannot do this.”', emphasis: true },
        { en: 'This kind of thinking can lead many young people toward hopelessness and emotional stress. Some even begin to lose hope in life itself.' },
        { en: 'I realized that if I could find a way to overcome my struggles and move forward, then I could also use my experiences to help others find their way.' },
      ],
    },
    {
      title: { en: 'Why I Chose Life Coaching' },
      paragraphs: [
        { en: 'I did not become a Life Coach simply to give people motivational talks.' },
        { en: 'I want the real experiences and lessons from my own life to become useful to someone else.' },
        { en: 'I want to help young people and individuals who want to build a better life but need direction, clarity, confidence, or the right guidance.' },
        { en: 'I want to help them understand one important truth:' },
        { en: 'Your present circumstances are not your final destination.', emphasis: true },
        { en: 'Where you were born, how many resources you have today, or how many difficulties you are facing—none of these things have to define your entire story.' },
        { en: 'Your thinking, decisions, hard work, and the right actions taken in the right direction can change your life.' },
      ],
    },
    {
      title: { en: 'My Purpose' },
      paragraphs: [
        { en: 'My purpose is not merely to motivate people. I want to help them understand themselves, recognize their strengths, set clear goals, and take practical steps toward achieving those goals.' },
        { en: "I want the lessons I have learned through my own struggles to become a source of hope and direction in someone else's life." },
        { en: 'My story is not just a story of struggle. It is a story of believing that circumstances can be changed.' },
        { en: 'And today, my purpose is:' },
      ],
    },
  ] as StoryPart[],
  quote: { en: '“I want to hold the hand of those who want to move forward but cannot see the path ahead.”' } as Maybe<Text>,
  quoteTodo: { en: 'One line he says often to clients.' } as Text,
  signature: { en: 'H. L. Meena – Life Coach' } as Text,
  closing: {
    en: 'I learned through struggle, understood through experience, and today I am committed to helping others move forward.',
  } as Text,
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
  todo: null as Maybe<Text>,
}

/* --------------------------------------------------------- 7. Services */

export const services = {
  title: { en: 'Coaching Services' } as Text,
  cta: { en: 'Book a session' } as Text,
  items: [
    {
      icon: 'session',
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
      icon: 'call',
      title: { en: 'Free Discovery Call' },
      body: { en: 'A short call to understand your situation and see if coaching is right for you.' },
      details: [],
      todo: { en: 'Confirm if he wants to offer this.' },
      showCta: false,
    },
    {
      icon: 'group',
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
  /** Other credentials and achievements */
  others: [
    { en: 'Gram Vikas Adhikari examination (2008): top position in Udaipur district from the ST/TSP area' },
    { en: 'Qualified more than half a dozen competitive examinations for various government services' },
  ] as Text[],
  othersTitle: { en: 'Achievements' } as Text,
  /** Set to null once education and any other certificates or awards are added. */
  othersTodo: { en: 'Education / degrees, other certifications and awards.' } as Maybe<Text>,
}

/* ----------------------------------------------------------- 9. Videos */

export const videos = {
  title: { en: 'Videos & Content' } as Text,
  line: { en: 'Watch my latest talks on mindset, motivation and personal growth.' } as Text,
  cta: { en: 'Watch on YouTube' } as Text,
  /** TODO: add 3–6, e.g. { url: 'https://youtu.be/XXXXXXXXXXX', title: { en: '...' } } */
  items: [] as Video[],
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
  /** Office address can replace the city when available. */
  address: { en: 'Udaipur, Rajasthan' } as Maybe<Text>,
  /** TODO: with country code, e.g. '+91 98765 43210'. Turns on every WhatsApp link. */
  phone: null as Maybe<string>,
  /** TODO */
  email: null as Maybe<string>,
  labels: {
    address: { en: 'Location' } as Text,
    facebook: { en: 'Facebook' } as Text,
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
  /** Shown instead of the form while there is no phone number or email. */
  reachOut: {
    title: { en: 'Get in touch' } as Text,
    body: { en: 'Send me a message on Facebook.' } as Text,
    cta: { en: 'Message on Facebook' } as Text,
  },
  bookingMessage: { en: 'Namaste, I would like to book a 1-on-1 session.' } as Text,
  emailSubject: { en: 'Book a 1-on-1 session' } as Text,
}

/** Icons are hidden while the url is null. */
export const socials: { id: SocialId; label: string; url: Maybe<string> }[] = [
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@h_l_meena' },
  // Share link sent by him; swap for the direct profile/page URL when available.
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/share/18mCypjDMN/' },
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
  footerNav: { en: 'Footer' } as Text,
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
