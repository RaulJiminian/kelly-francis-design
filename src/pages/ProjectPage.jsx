import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import BeforeAfter from '../components/BeforeAfter.jsx'
import ResponsiveImage from '../components/ResponsiveImage.jsx'
import { getProjectBySlug, getVisibleProjects } from '../data/projects.js'
import { site } from '../data/site.js'
import NotFoundPage from './NotFoundPage.jsx'
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug, site.contentMode)
  const visibleProjects = getVisibleProjects(site.contentMode)
  const currentIndex = visibleProjects.findIndex((item) => item.slug === slug)
  const nextProject = currentIndex >= 0 ? visibleProjects[(currentIndex + 1) % visibleProjects.length] : null

  useEffect(() => {
    if (!project) return
    document.title = `${project.title} | Kelly Francis Design`
    document.querySelector('meta[name="description"]')?.setAttribute('content', project.seoDescription)
  }, [project])

  if (!project) return <NotFoundPage projectMissing />

  return (
    <main id="main-content" className={styles.main}>
      <div className={styles.container}>
        <Link className={styles.backLink} to="/#work"><span aria-hidden="true">←</span> Back to selected work</Link>
        <header className={styles.projectHeader}>
          <div>
            <p className="eyebrow">Project story</p>
            <h1 data-route-heading tabIndex="-1">{project.title}</h1>
          </div>
          <div className={styles.intro}>
            <p className="draft-label">Draft project</p>
            <p>{project.intro}</p>
          </div>
        </header>
        <ResponsiveImage
          imageId={project.coverImageId}
          aspectRatio="16 / 9"
          sizes="(min-width: 1568px) 1440px, (min-width: 1440px) calc(100vw - 128px), (min-width: 1024px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
          priority
          placeholderLabel="Project hero photograph"
          placeholderStatus="Photography in progress"
        />
      </div>

      <section className={styles.story} aria-label="Project overview">
        <p className="section-index">01 <span /> Overview</p>
        <div className={styles.storyGrid}>
          <div>
            <p className="draft-label">Draft copy</p>
            <h2>The vision</h2>
            <p>{project.vision}</p>
          </div>
          <div>
            <p className="draft-label">Draft copy</p>
            <h2>The transformation</h2>
            <p>{project.transformation}</p>
          </div>
        </div>
      </section>

      {project.comparisonPairs.length > 0 && (
        <section className={styles.comparisonSection} aria-labelledby="comparison-heading">
          <div className={styles.comparisonHeading}>
            <p className="section-index">02 <span /> Transformation</p>
            <h2 id="comparison-heading">Before &amp; after</h2>
            <p>Choose among the supplied starting views below. Camera positions may differ, so each photograph remains separately labeled.</p>
          </div>
          {project.comparisonPairs.map((pair) => <BeforeAfter key={pair.id} pair={pair} />)}
        </section>
      )}

      <section className={styles.detailSection} aria-labelledby="detail-heading">
        <div className={styles.detailHeading}>
          <p className="section-index">03 <span /> Details</p>
          <h2 id="detail-heading">A closer look</h2>
        </div>
        {project.galleryImageIds.map((imageId, index) => (
          <figure key={imageId} className={styles.detailFigure}>
            <ResponsiveImage
              imageId={imageId}
              aspectRatio={index % 2 ? '4 / 5' : '3 / 2'}
              sizes="(min-width: 1024px) 70vw, calc(100vw - 40px)"
              placeholderLabel="Project detail photograph"
              placeholderStatus="To be selected"
            />
            <figcaption>{project.galleryCaptions?.[imageId]}</figcaption>
          </figure>
        ))}
      </section>

      <nav className={styles.next} aria-label="Project navigation">
        <div>
          <p className="eyebrow">Continue exploring</p>
          {nextProject && nextProject.id !== project.id && (
            <Link to={`/work/${nextProject.slug}`}>{nextProject.title} <span aria-hidden="true">→</span></Link>
          )}
        </div>
        <Link className={styles.inquiryLink} to="/#contact">Start an inquiry <span aria-hidden="true">↗</span></Link>
      </nav>
    </main>
  )
}
