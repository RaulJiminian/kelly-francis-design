import ResponsiveImage from './ResponsiveImage.jsx'
import { site } from '../data/site.js'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section id="about" className={styles.about} tabIndex="-1" aria-labelledby="about-heading">
      <div className={styles.copy}>
        <p className="section-index">02 <span /> About</p>
        <h2 id="about-heading">{site.about.heading}</h2>
        <p className="draft-label">Draft copy</p>
        {site.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <ResponsiveImage
        imageId={site.about.imageId}
        aspectRatio="4 / 5"
        sizes="(min-width: 1024px) 38vw, calc(100vw - 40px)"
        placeholderLabel="Portrait or garden detail"
        placeholderStatus="To be selected"
      />
    </section>
  )
}
