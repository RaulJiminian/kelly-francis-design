import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AboutSection from '../components/AboutSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import ProjectLink from '../components/ProjectLink.jsx'
import ResponsiveImage from '../components/ResponsiveImage.jsx'
import { getVisibleProjects } from '../data/projects.js'
import { site } from '../data/site.js'
import styles from './HomePage.module.css'

export default function HomePage() {
  const visibleProjects = getVisibleProjects(site.contentMode)
  const featuredProject = visibleProjects.find((project) => project.id === site.featuredProjectId) ?? visibleProjects[0]

  useEffect(() => {
    document.title = 'Kelly Francis Design | Landscape Design'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'A photography-led landscape design portfolio for Kelly Francis Design.')
  }, [])

  return (
    <main id="main-content" className={styles.main}>
      <section className={styles.heroIntro} aria-labelledby="home-heading">
        <div className={styles.headingBlock}>
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1 id="home-heading" data-route-heading tabIndex="-1">Outdoor spaces,<br className={styles.editorialBreak} /> thoughtfully composed.</h1>
        </div>
        <div className={styles.heroSupport}>
          <p>{site.hero.description}</p>
          <Link to="/#work">Explore selected work <span aria-hidden="true">↓</span></Link>
        </div>
      </section>

      {featuredProject && (
        <section className={styles.featured} aria-label="Featured project">
          <Link to={`/work/${featuredProject.slug}`} className={styles.featuredLink}>
            <ResponsiveImage
              imageId={featuredProject.coverImageId}
              family="hero"
              aspectRatio="16 / 9"
              sizes="(min-width: 1568px) 1440px, (min-width: 1440px) calc(100vw - 128px), (min-width: 1024px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
              priority
              placeholderLabel="Featured project photography"
              placeholderStatus="Photography in progress"
              decorative
              className={styles.featuredPhoto}
            />
            <div className={styles.featuredCaption}>
              <div>
                <p className="draft-label">Featured project · Draft</p>
                <h2>{featuredProject.title}</h2>
              </div>
              <span>View transformation <span aria-hidden="true">↗</span></span>
            </div>
          </Link>
        </section>
      )}

      <section id="work" className={styles.work} tabIndex="-1" aria-labelledby="work-heading">
        <div className={styles.sectionHeading}>
          <p className="section-index">01 <span /> Selected work</p>
          <h2 id="work-heading">Selected work</h2>
          <p>{site.workIntro}</p>
        </div>
        <div className={styles.workGrid}>
          {visibleProjects.map((project, index) => (
            <ProjectLink key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <AboutSection />
      <ContactSection />
    </main>
  )
}
