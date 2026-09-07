import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import snowbirdLogo from '../../assets/brand/snowbird-logo.png'
import styles from './SiteHeader.module.css'

const navItems = [
  { label: 'Selected work', to: '/#work' },
  { label: 'Collage', to: '/collage' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!isOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header id="top" className={styles.siteHeader}>
      <div className={styles.headerRow}>
        <Link className={styles.brand} aria-label="Snowbird Landscape, home" to="/" onClick={closeMenu}>
          <img src={snowbirdLogo} alt="" />
        </Link>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </nav>
        <button
          ref={triggerRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span>{isOpen ? 'Close' : 'Menu'}</span>
          <span className={styles.menuGlyph} aria-hidden="true">
            {isOpen ? '×' : <><span /><span /></>}
          </span>
        </button>
      </div>
      {isOpen && (
        <nav id="mobile-navigation" className={styles.mobileNav} aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link key={item.to} to={item.to} onClick={closeMenu}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
