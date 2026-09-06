import { site } from '../data/site.js'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  const canEmail = site.contact.email && site.contact.emailVerified

  return (
    <section id="contact" className={styles.contact} tabIndex="-1" aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{site.contact.eyebrow}</p>
        <div className={styles.layout}>
          <h2 id="contact-heading">{site.contact.heading}</h2>
          <div className={styles.details}>
            <p className="draft-label draft-label--dark">Draft copy</p>
            <p>{site.contact.description}</p>
            {canEmail ? (
              <>
                <a className={styles.action} href={`mailto:${site.contact.email}`}>Email Kelly <span aria-hidden="true">↗</span></a>
                <a className={styles.email} href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </>
            ) : (
              <p className={styles.unavailable}>Contact details will be added soon.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
