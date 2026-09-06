import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function RouteEffects() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const isInitialRender = useRef(true)

  useEffect(() => {
    const focusElement = (element) => {
      if (!element) return
      element.focus({ preventScroll: true })
    }

    if (location.hash) {
      const sectionId = decodeURIComponent(location.hash.slice(1))
      const frame = window.requestAnimationFrame(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ block: 'start' })
          focusElement(section)
        }
      })
      isInitialRender.current = false
      return () => window.cancelAnimationFrame(frame)
    }

    if (isInitialRender.current) {
      isInitialRender.current = false
      return undefined
    }

    if (navigationType !== 'POP') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      const frame = window.requestAnimationFrame(() => {
        focusElement(document.querySelector('[data-route-heading]'))
      })
      return () => window.cancelAnimationFrame(frame)
    }

    return undefined
  }, [location.hash, location.pathname, navigationType])

  return null
}
