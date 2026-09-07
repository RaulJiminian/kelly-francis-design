import { Link } from 'react-router-dom'
import snowbirdLogo from '../../assets/brand/snowbird-logo.png'
import { site } from '../data/site.js'
import styles from './SiteFooter.module.css'

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link className={styles.logo} aria-label="Snowbird Landscape, home" to="/">
          <img src={snowbirdLogo} alt="" />
        </Link>
        <p>© {new Date().getFullYear()} {site.name}</p>
        <a href={site.contact.instagramUrl} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}
