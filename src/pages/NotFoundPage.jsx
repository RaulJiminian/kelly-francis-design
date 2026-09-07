import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage({ projectMissing = false }) {
  useEffect(() => {
    document.title = `${projectMissing ? 'Project unavailable' : 'Page not found'} | Snowbird Landscape`
  }, [projectMissing])

  return (
    <main id="main-content" className={styles.main}>
      <p className="eyebrow">{projectMissing ? 'Project unavailable' : '404'}</p>
      <h1 data-route-heading tabIndex="-1">This path has not been planted yet.</h1>
      <p>{projectMissing ? 'This project may still be in preparation.' : 'The page you were looking for could not be found.'}</p>
      <Link to="/#work">Explore selected work <span aria-hidden="true">→</span></Link>
    </main>
  )
}
