import { Link } from 'react-router-dom'
import logoIvory from '../../assets/brand/kfd-logo-ivory.svg'
import styles from './SiteFooter.module.css'

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link aria-label="Kelly Francis Design, home" to="/">
          <img src={logoIvory} alt="" />
        </Link>
        <p>© {new Date().getFullYear()} Kelly Francis Design</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}
