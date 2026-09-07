import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ResponsiveImage from '../components/ResponsiveImage.jsx'
import { getVisibleProjects } from '../data/projects.js'
import { site } from '../data/site.js'
import styles from './CollagePage.module.css'

export default function CollagePage() {
  const visibleProjects = getVisibleProjects(site.contentMode)

  useEffect(() => {
    document.title = 'Project Collage | Snowbird Landscape'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'A visual index of six Snowbird Landscape garden projects.')
  }, [])

  return (
    <main id="main-content" className={styles.main}>
      <header className={styles.header}>
        <p className="eyebrow">Project collage</p>
        <h1 data-route-heading tabIndex="-1">Six gardens,<br />one view.</h1>
        <p>{site.collageIntro}</p>
      </header>

      <section className={styles.wall} aria-label="Snowbird project collage">
        {visibleProjects.map((project, index) => (
          <article className={styles.item} key={project.id}>
            <Link to={`/work/${project.slug}`} aria-label={`View ${project.title}`}>
              <ResponsiveImage
                imageId={project.coverImageId}
                aspectRatio={index === 1 || index === 4 ? '4 / 5' : '4 / 3'}
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, calc(100vw - 40px)"
                decorative
              />
              <span className={styles.overlay}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{project.title}</strong>
                <span aria-hidden="true">↗</span>
              </span>
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
