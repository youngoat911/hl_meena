import { LazyMotion, MotionConfig } from 'framer-motion'
import About from './components/About'
import Approach from './components/Approach'
import Certification from './components/Certification'
import Contact from './components/Contact'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Story from './components/Story'
import Videos from './components/Videos'
import WhatsAppButton from './components/WhatsAppButton'
import WhoIHelp from './components/WhoIHelp'
import { ui } from './data/site'
import { LanguageProvider, useLanguage } from './lib/language'

const loadFeatures = () => import('./lib/motion-features').then((mod) => mod.default)

function Page() {
  const { t } = useLanguage()
  return (
    <>
      <a href="#main" className="sr-only z-50 rounded bg-white px-4 py-2 text-navy focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        {t(ui.skip)}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Story />
        <Approach />
        <WhoIHelp />
        <Services />
        <Certification />
        <Videos />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <LazyMotion features={loadFeatures} strict>
        <MotionConfig reducedMotion="user">
          <Page />
        </MotionConfig>
      </LazyMotion>
    </LanguageProvider>
  )
}
