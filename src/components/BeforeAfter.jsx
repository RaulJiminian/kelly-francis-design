import ResponsiveImage from './ResponsiveImage.jsx'
import styles from './BeforeAfter.module.css'

export default function BeforeAfter({ pair }) {
  return (
    <div className={styles.comparison}>
      <figure>
        <div className={styles.photoLabel}>Before</div>
        <ResponsiveImage
          imageId={pair.beforeImageId}
          aspectRatio="4 / 3"
          sizes="(min-width: 768px) 46vw, calc(100vw - 40px)"
          placeholderLabel="Before photograph"
          placeholderStatus="To be selected"
        />
        <figcaption>{pair.caption.before}</figcaption>
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
