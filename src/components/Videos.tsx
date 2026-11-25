import { socials, videos } from '../data/site'
import { useLanguage } from '../lib/language'
import { cleanUrl, youtubeId } from '../lib/links'
import BrandIcon from './BrandIcon'
import Button from './Button'
import LiteYouTube from './LiteYouTube'
import Reveal from './Reveal'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function Videos() {
  const { t } = useLanguage()
  const youtube = socials.find((s) => s.id === 'youtube')?.url
  const items = videos.items.flatMap((v) => {
    const id = youtubeId(v.url)
    return id ? [{ id, title: t(v.title) }] : []
  })
  return (
    <Section id="videos" className="bg-white">
      <SectionHeading id="videos-title">{t(videos.title)}</SectionHeading>
      <p className="-mt-4 mb-8 text-lg">{t(videos.line)}</p>
      {items.length > 0 && (
        <ul className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((v) => (
            <li key={v.id}>
              <Reveal>
                <LiteYouTube id={v.id} title={v.title} />
                <h3 className="mt-3 font-semibold">{v.title}</h3>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
      {youtube && (
        <Button href={cleanUrl(youtube)} variant="outline">
          <BrandIcon id="youtube" /> {t(videos.cta)}
        </Button>
      )}
    </Section>
  )
}
