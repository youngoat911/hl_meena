import { useState } from 'react'
import { Play } from 'lucide-react'
import { ui } from '../data/site'
import { useLanguage } from '../lib/language'

/** Thumbnail first; the iframe only loads on click. */
export default function LiteYouTube({ id, title }: { id: string; title: string }) {
  const { t } = useLanguage()
  const [playing, setPlaying] = useState(false)
  if (playing) {
    return (
      <iframe
        className="aspect-video w-full rounded-2xl"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    )
  }
  return (
    <button
      type="button"
      aria-label={`${t(ui.play)}: ${title}`}
      onClick={() => setPlaying(true)}
      className="relative block aspect-video w-full overflow-hidden rounded-2xl bg-navy"
    >
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" width={480} height={360} className="size-full object-cover" />
      <span className="absolute inset-0 grid place-items-center bg-navy/30">
        <span className="grid size-16 place-items-center rounded-full bg-gold text-navy-deep">
          <Play aria-hidden className="size-7" />
        </span>
      </span>
    </button>
  )
}
