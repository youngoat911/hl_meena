/** Decorative line-and-shape drawings. All are hidden from screen readers. */
type Props = { className?: string }

/** About: a path leading up to a sunrise. */
export function SunrisePath({ className }: Props) {
  return (
    <svg viewBox="0 0 420 420" aria-hidden className={className}>
      <defs>
        <clipPath id="sunrise-clip"><rect width="420" height="420" rx="40" /></clipPath>
      </defs>
      <g clipPath="url(#sunrise-clip)">
        <rect width="420" height="420" className="fill-gold-soft" />
        <g className="fill-none stroke-gold" strokeWidth="2">
          <circle cx="210" cy="205" r="108" opacity=".6" />
          <circle cx="210" cy="205" r="142" opacity=".4" />
          <circle cx="210" cy="205" r="178" opacity=".25" />
        </g>
        <circle cx="210" cy="205" r="74" className="fill-gold" />
        <path d="M0 250 90 165l62 62 70-40 78 62 60-44 60 50v215H0Z" className="fill-navy" opacity=".35" />
        <path d="M0 290C70 240 130 250 200 280s150 20 220-25v165H0Z" className="fill-navy" opacity=".75" />
        <path d="M0 335c90-40 160-35 230-12s130 12 190-18v115H0Z" className="fill-navy-deep" />
        <path d="M150 420c-5-40 95-48 92-82-2-24-58-22-52-44 3-11 14-14 22-16-4 6-10 10-8 17 6 17 78 14 80 48 2 36-72 40-60 77Z" className="fill-cream" />
        <g className="fill-none stroke-navy" strokeWidth="3" strokeLinecap="round">
          <path d="m82 96 10 8 10-8M112 74l8 6 8-6M306 88l10 8 10-8" />
        </g>
      </g>
    </svg>
  )
}

/** My Story: a road with three milestones. */
export function Milestones({ className }: Props) {
  const flag = 'M0 0v-62h44l-10 14 10 14H0'
  return (
    <svg viewBox="0 0 420 420" aria-hidden className={className}>
      <path d="M70 380c150 0 260-25 260-85s-220-45-220-115S230 80 340 70" className="fill-none stroke-navy" strokeWidth="44" strokeLinecap="round" />
      <path d="M70 380c150 0 260-25 260-85s-220-45-220-115S230 80 340 70" className="fill-none stroke-gold" strokeWidth="3" strokeDasharray="12 14" strokeLinecap="round" />
      {[[140, 372], [116, 205], [330, 72]].map(([x, y]) => (
        <g key={y} transform={`translate(${x} ${y})`}>
          <circle r="13" className="fill-cream stroke-gold" strokeWidth="5" />
          <path d={flag} className="fill-gold stroke-gold" strokeWidth="4" strokeLinejoin="round" />
        </g>
      ))}
      <g className="fill-gold-soft">
        <circle cx="360" cy="190" r="30" /><circle cx="250" cy="215" r="11" /><circle cx="40" cy="300" r="20" /><circle cx="215" cy="28" r="14" />
      </g>
      <g className="fill-none stroke-navy" strokeWidth="3" strokeLinecap="round">
        <path d="M360 215v-42m0 22 14-14m-14 24-14-14M40 322v-34m0 18 11-11m-11 18-11-11" />
      </g>
    </svg>
  )
}

/** Certification: certificate sheet with a seal. */
export function SealedSheet({ className }: Props) {
  const points = Array.from({ length: 40 }, (_, i) => {
    const r = i % 2 ? 58 : 66
    const a = (i / 40) * Math.PI * 2
    return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`
  }).join(' ')
  return (
    <svg viewBox="0 0 360 360" aria-hidden className={className}>
      <circle cx="180" cy="180" r="172" className="fill-gold-soft" opacity=".6" />
      <rect x="62" y="62" width="216" height="212" rx="16" transform="rotate(-6 170 168)" className="fill-navy" />
      <rect x="62" y="62" width="216" height="212" rx="16" className="fill-white stroke-line" strokeWidth="2" />
      <rect x="76" y="76" width="188" height="184" rx="8" className="fill-none stroke-gold" strokeWidth="2" />
      <g className="stroke-navy" strokeLinecap="round">
        <path d="M112 112h116" strokeWidth="10" /><path d="M130 140h80" strokeWidth="5" opacity=".35" />
        <path d="M104 172h84M104 192h66M104 212h50" strokeWidth="5" opacity=".2" />
      </g>
      <g transform="translate(252 240)">
        <path d="m-34 40-14 72 34-20 14 30 14-30 34 20-14-72Z" className="fill-navy" />
        <polygon points={points} className="fill-gold" />
        <circle r="42" className="fill-navy" />
        <path d="m-18 1 12 13 24-27" className="fill-none stroke-gold" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

/** Videos: a screen with a play mark. */
export function VideoScreen({ className }: Props) {
  return (
    <svg viewBox="0 0 440 300" aria-hidden className={className}>
      <circle cx="352" cy="84" r="78" className="fill-gold-soft" /><circle cx="70" cy="236" r="52" className="fill-gold-soft" />
      <rect x="52" y="42" width="336" height="206" rx="22" className="fill-navy" />
      <path d="M52 214c60-60 110-50 160-20s110 20 176-40v72a22 22 0 0 1-22 22H74a22 22 0 0 1-22-22Z" className="fill-navy-deep" />
      <circle cx="220" cy="132" r="46" className="fill-gold" /><path d="m206 108 40 24-40 24Z" className="fill-navy-deep" />
      <path d="M78 224h284" className="stroke-white" strokeWidth="5" strokeLinecap="round" opacity=".3" />
      <path d="M78 224h110" className="stroke-gold" strokeWidth="5" strokeLinecap="round" /><circle cx="188" cy="224" r="8" className="fill-gold" />
      <path d="M170 274h100" className="stroke-navy" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

/** CTA banner: two speech bubbles, one conversation. */
export function Conversation({ className }: Props) {
  return (
    <svg viewBox="0 0 400 300" aria-hidden className={className}>
      <g className="fill-none stroke-gold" strokeWidth="2" opacity=".35">
        <circle cx="210" cy="150" r="90" /><circle cx="210" cy="150" r="120" /><circle cx="210" cy="150" r="147" />
      </g>
      <path d="M62 44h190a24 24 0 0 1 24 24v78a24 24 0 0 1-24 24H128l-44 38v-38H62a24 24 0 0 1-24-24V68a24 24 0 0 1 24-24Z" className="fill-white" />
      <path d="M76 88h160M76 112h160M76 136h96" className="stroke-navy" strokeWidth="8" strokeLinecap="round" opacity=".25" />
      <path d="M204 132h136a24 24 0 0 1 24 24v62a24 24 0 0 1-24 24h-12v36l-42-36h-82a24 24 0 0 1-24-24v-62a24 24 0 0 1 24-24Z" className="fill-gold" />
      <path d="M272 218c-40-24-34-58-12-58 8 0 12 6 12 10 0-4 4-10 12-10 22 0 28 34-12 58Z" className="fill-navy" />
    </svg>
  )
}

/** Contact: a paper plane and its trail. */
export function PaperPlane({ className }: Props) {
  return (
    <svg viewBox="0 0 360 190" aria-hidden className={className}>
      <circle cx="282" cy="70" r="60" className="fill-gold-soft" />
      <path d="M12 168c60 12 120 2 124-40s-54-40-48-4 90 34 138-18" className="fill-none stroke-gold" strokeWidth="3" strokeDasharray="3 11" strokeLinecap="round" />
      <path d="m216 66 122-46-44 116-30-40Z" className="fill-navy" /><path d="m338 20-74 76-4 40-18-52Z" className="fill-gold" /><path d="m260 136 4-40 16 21Z" className="fill-navy-deep" />
    </svg>
  )
}

/** Hero background: compass rings and dots. */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg viewBox="0 0 500 500" className="absolute -top-40 -left-48 size-[30rem] fill-none stroke-gold opacity-40">
        <circle cx="250" cy="250" r="120" strokeWidth="2" /><circle cx="250" cy="250" r="175" strokeWidth="2" />
        <circle cx="250" cy="250" r="235" strokeWidth="2" strokeDasharray="2 14" strokeLinecap="round" />
      </svg>
      <Dots id="hero-dots" className="absolute bottom-24 left-[42%] hidden h-32 w-40 text-gold opacity-60 md:block" />
      <svg viewBox="0 0 400 400" className="absolute -right-32 -bottom-40 size-96 fill-gold-soft opacity-70">
        <circle cx="200" cy="200" r="200" />
      </svg>
    </div>
  )
}

export function Dots({ id, className }: { id: string; className?: string }) {
  return (
    <svg aria-hidden className={className}>
      <defs>
        <pattern id={id} width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="2" fill="currentColor" /></pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/** Hills along the top of the footer. */
export function Hills({ className }: Props) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden className={className}>
      <path d="M0 70C240 10 420 20 640 66s460 40 800-36v90H0Z" className="fill-gold" opacity=".45" />
      <path d="M0 92c220-50 460-40 700-8s480 24 740-34v70H0Z" className="fill-navy-deep" />
    </svg>
  )
}
