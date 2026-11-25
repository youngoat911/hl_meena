import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { hindiEnabled, type Text } from '../data/site'

export type Lang = 'en' | 'hi'

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'en', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return <LanguageContext value={{ lang: hindiEnabled ? lang : 'en', setLang }}>{children}</LanguageContext>
}

export function useLanguage() {
  const { lang, setLang } = useContext(LanguageContext)
  const t = (text: Text) => text[lang] ?? text.en
  return { lang, setLang, t }
}
