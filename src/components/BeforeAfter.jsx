import { useState } from 'react'
import ResponsiveImage from './ResponsiveImage.jsx'
import styles from './BeforeAfter.module.css'

export default function BeforeAfter({ pair }) {
  const beforeImages = pair.beforeImageIds ?? [pair.beforeImageId]
  const [activeBeforeIndex, setActiveBeforeIndex] = useState(0)
  const activeBeforeId = beforeImages[activeBeforeIndex]
  const beforeCaptions = Array.isArray(pair.caption.before) ? pair.caption.before : [pair.caption.before]

  return (
    <div className={styles.comparison}>
      <figure>
        <div className={styles.photoLabel}>Before</div>
        <ResponsiveImage
          imageId={activeBeforeId}
          aspectRatio="4 / 3"
          sizes="(min-width: 768px) 46vw, calc(100vw - 40px)"
          placeholderLabel="Before photograph"
          placeholderStatus={beforeImages.length ? 'To be selected' : 'Not available'}
          blankPlaceholder={beforeImages.length === 0}
        />
        {beforeImages.length > 1 && (
          <div className={styles.thumbnailPanel}>
            <p>Choose a before view</p>
            <div className={styles.thumbnails} role="group" aria-label="Choose a before photograph">
              {beforeImages.map((imageId, index) => (
                <button
                  key={imageId}
                  type="button"
                  className={styles.thumbnailButton}
                  aria-label={`Show before view ${index + 1} of ${beforeImages.length}`}
                  aria-pressed={activeBeforeIndex === index}
                  onClick={() => setActiveBeforeIndex(index)}
                >
                  <ResponsiveImage
                    imageId={imageId}
                    aspectRatio="1 / 1"
                    sizes="80px"
                    decorative
                    className={styles.thumbnailImage}
                  />
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        <figcaption aria-live="polite">{beforeCaptions[activeBeforeIndex] ?? beforeCaptions[0]}</figcaption>
      </figure>
      <figure>
        <div className={styles.photoLabel}>After</div>
        <ResponsiveImage
          imageId={pair.afterImageId}
          aspectRatio="4 / 3"
          sizes="(min-width: 768px) 46vw, calc(100vw - 40px)"
          placeholderLabel="After photograph"
          placeholderStatus="To be selected"
        />
        <figcaption>{pair.caption.after}</figcaption>
      </figure>
    </div>
  )
}
