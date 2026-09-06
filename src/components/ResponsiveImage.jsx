import { useState } from 'react'
import imageManifest from '../generated/image-manifest.json'
import PhotoPlaceholder from './PhotoPlaceholder.jsx'
import styles from './ResponsiveImage.module.css'

const toSrcSet = (variants = []) =>
  variants.map((variant) => `${variant.url} ${variant.width}w`).join(', ')

export default function ResponsiveImage({
  imageId,
  family = 'natural',
  sizes = '100vw',
  aspectRatio = '4 / 3',
  priority = false,
  placeholderLabel,
  placeholderStatus,
  decorative = false,
  className = '',
}) {
  const [failed, setFailed] = useState(false)
  const record = imageManifest.images[imageId]
  const imageFamily = record?.families?.[family] ?? record?.families?.natural

  if (!record || !imageFamily || failed) {
    return (
      <PhotoPlaceholder
        aspectRatio={aspectRatio}
        className={className}
        decorative={decorative}
        label={failed ? 'Project photography' : placeholderLabel}
        status={failed ? 'Photo unavailable' : placeholderStatus}
      />
    )
  }

  const jpeg = imageFamily.variants.jpeg
  const fallback = jpeg.at(-1)

  return (
    <picture className={`${styles.picture} ${className}`} style={{ '--photo-ratio': aspectRatio }}>
      <source type="image/avif" srcSet={toSrcSet(imageFamily.variants.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={toSrcSet(imageFamily.variants.webp)} sizes={sizes} />
      <img
        src={fallback.url}
        srcSet={toSrcSet(jpeg)}
        sizes={sizes}
        width={fallback.width}
        height={fallback.height}
        alt={decorative ? '' : record.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setFailed(true)}
      />
    </picture>
  )
}
