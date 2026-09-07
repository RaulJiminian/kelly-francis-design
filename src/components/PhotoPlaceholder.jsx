import styles from './PhotoPlaceholder.module.css'

export default function PhotoPlaceholder({
  aspectRatio = '4 / 3',
  className = '',
  decorative = false,
  index,
  label = 'Project photography',
  size = 'standard',
  status = 'To be added',
  blank = false,
}) {
  return (
    <div
      className={`${styles.placeholder} ${styles[size]} ${blank ? styles.blank : ''} ${className}`}
      style={{ '--photo-ratio': aspectRatio }}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : `${label}. ${status}.`}
      data-placeholder
    >
      {!blank && (
        <>
          <span className={styles.corner}>{index ?? 'Snowbird'}</span>
          <span className={styles.label}>{label}</span>
          <span className={styles.status}>{status}</span>
        </>
      )}
    </div>
  )
}
