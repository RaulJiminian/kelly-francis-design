import { Link } from 'react-router-dom'
import ResponsiveImage from './ResponsiveImage.jsx'
import styles from './ProjectLink.module.css'

export default function ProjectLink({ project, index }) {
  const isPortrait = index % 3 === 1
  return (
    <article className={`${styles.item} ${styles[`item${index + 1}`] ?? ''}`}>
      <Link to={`/work/${project.slug}`} className={styles.link}>
        <ResponsiveImage
          imageId={project.coverImageId}
          aspectRatio={isPortrait ? '4 / 5' : '4 / 3'}
          sizes="(min-width: 1024px) 48vw, (min-width: 640px) 50vw, calc(100vw - 40px)"
          placeholderLabel="After photograph"
          placeholderStatus="Photography in progress"
          decorative
        />
        <div className={styles.caption}>
          <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <p className="draft-label">Draft project</p>
            <h3>{project.title}</h3>
            <span className={styles.action}>View project <span aria-hidden="true">↗</span></span>
          </div>
        </div>
      </Link>
    </article>
  )
}
