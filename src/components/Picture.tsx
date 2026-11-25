import type { Photo } from '../data/site'
import { useLanguage } from '../lib/language'
import { imageSrc, imageSrcSet } from '../lib/links'

type Props = { photo: Photo; className?: string; eager?: boolean; width?: number; height?: number }

export default function Picture({ photo, className = '', eager = false, width = 1087, height = 1440 }: Props) {
  const { t } = useLanguage()
  return (
    <img
      src={imageSrc(photo.name)}
      srcSet={imageSrcSet(photo.name)}
      sizes={photo.sizes}
      alt={t(photo.alt)}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
      className={`object-cover ${className}`}
      style={{
        objectPosition: photo.position,
        ...(photo.zoom && { transform: `scale(${photo.zoom})`, transformOrigin: photo.position }),
      }}
    />
  )
}
