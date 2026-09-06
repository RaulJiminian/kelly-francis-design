import brandMark from '../../assets/brand/kfd-mark.svg'
import styles from './PhotoPlaceholder.module.css'

export default function PhotoPlaceholder({
  aspectRatio = '4 / 3',
  className = '',
  decorative = false,
  index,
  label = 'Project photography',
  size = 'standard',
  status = 'To be added',
}) {
  return (
    <div
      className={`${styles.placeholder} ${styles[size]} ${className}`}
      style={{ '--photo-ratio': aspectRatio }}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : `${label}. ${status}.`}
      data-placeholder
    >
      <span className={styles.corner}>{index ?? 'KFD'}</span>
      <img className={styles.mark} src={brandMark} alt="" />
      <span className={styles.label}>{label}</span>
      <span className={styles.status}>{status}</span>
    </div>
  )
}
