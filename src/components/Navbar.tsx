import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { hindiEnabled, nav, person, ui } from '../data/site'
import { useLanguage } from '../lib/language'

const sectionIds = nav.flatMap((n) => n.sections)

function useScrollState() {
  const [state, setState] = useState({ scrolled: false, active: nav[0].href })
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.35
      let current = sectionIds[0]
      let top = -Infinity
      for (const id of sectionIds) {
        const y = document.getElementById(id)?.getBoundingClientRect().top
        if (y !== undefined && y <= line && y > top) {
          current = id
          top = y
        }
      }
      const active = nav.find((n) => n.sections.includes(current))!.href
      const scrolled = window.scrollY > 16
      setState((s) => (s.active === active && s.scrolled === scrolled ? s : { active, scrolled }))
    }
    const onScroll = () => {
      frame ||= requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return state
}

function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()
  if (!hindiEnabled) return null
  return (
    <div role="group" aria-label={t(ui.language)} className="flex rounded-full border border-navy text-sm">
      {(['en', 'hi'] as const).map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1.5 ${lang === l ? 'bg-navy text-white' : 'text-navy'}`}
        >
          {l === 'en' ? 'EN' : 'हिंदी'}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { t } = useLanguage()
  const { scrolled, active } = useScrollState()
  const drawer = useRef<HTMLDialogElement>(null)
  const close = () => drawer.current?.close()

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onChange = () => desktop.matches && drawer.current?.close()
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl 2xl:max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-xl font-bold text-navy">{person.shortName}</a>
        <div className="flex items-center gap-4">
          <nav aria-label={t(ui.mainNav)} className="hidden lg:block">
            <ul className="flex gap-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    aria-current={active === n.href ? 'true' : undefined}
                    className="block border-b-2 border-transparent px-3 py-2 text-navy transition-colors hover:border-line aria-[current]:border-gold aria-[current]:font-semibold"
                  >
                    {t(n.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageToggle />
          <button
            type="button"
            aria-label={t(ui.openMenu)}
            onClick={() => drawer.current?.showModal()}
            className="grid size-11 place-items-center text-navy lg:hidden"
          >
            <Menu aria-hidden />
          </button>
        </div>
      </div>

      <dialog
        ref={drawer}
        aria-label={t(ui.mainNav)}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="drawer m-0 ml-auto overflow-y-auto overscroll-contain h-dvh max-h-none w-72 max-w-[85vw] bg-white"
      >
        <div className="flex h-full flex-col p-5">
          <button
            type="button"
            aria-label={t(ui.closeMenu)}
            onClick={close}
            className="grid size-11 place-items-center self-end text-navy"
          >
            <X aria-hidden />
          </button>
          <nav aria-label={t(ui.mainNav)}>
            <ul className="mt-4">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={close}
                    aria-current={active === n.href ? 'true' : undefined}
                    className="block border-l-4 border-transparent px-4 py-3 font-display text-lg text-navy aria-[current]:border-gold aria-[current]:font-semibold"
                  >
                    {t(n.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </dialog>
    </header>
  )
}
