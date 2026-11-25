import type { RefObject } from 'react'
import { X } from 'lucide-react'
import { ui } from '../data/site'
import { useLanguage } from '../lib/language'

type Props = { ref: RefObject<HTMLDialogElement | null>; src: string; alt: string }

export default function Lightbox({ ref, src, alt }: Props) {
  const { t } = useLanguage()
  return (
    <dialog
      ref={ref}
      aria-label={alt}
      onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
      className="m-auto max-h-[94dvh] max-w-[94vw] overflow-visible bg-transparent"
    >
      <img src={src} alt={alt} loading="lazy" width={1600} height={1195} className="max-h-[90dvh] w-auto max-w-full rounded-xl object-contain" />
      <form method="dialog">
        <button aria-label={t(ui.close)} className="absolute top-2 right-2 grid size-11 place-items-center rounded-full bg-navy text-white">
          <X aria-hidden />
        </button>
      </form>
    </dialog>
  )
}
