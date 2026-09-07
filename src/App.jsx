import { Route, Routes } from 'react-router-dom'
import RouteEffects from './components/RouteEffects.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import HomePage from './pages/HomePage.jsx'
import CollagePage from './pages/CollagePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <RouteEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collage" element={<CollagePage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </>
  )
}
