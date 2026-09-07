import { site } from '../data/site.js'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  const canEmail = site.contact.email && site.contact.emailVerified
  const canCall = site.contact.phone && site.contact.phoneHref

  return (
    <section id="contact" className={styles.contact} tabIndex="-1" aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{site.contact.eyebrow}</p>
        <div className={styles.layout}>
          <h2 id="contact-heading">{site.contact.heading}</h2>
          <div className={styles.details}>
            <p>{site.contact.description}</p>
            {canEmail ? (
              <>
                <a className={styles.action} href={`mailto:${site.contact.email}`}>Email Snowbird <span aria-hidden="true">↗</span></a>
                <a className={styles.email} href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </>
            ) : canCall ? (
              <div className={styles.actions}>
                <a className={styles.action} href={site.contact.phoneHref}>Call Snowbird <span aria-hidden="true">↗</span></a>
                <a className={styles.phone} href={site.contact.phoneHref}>{site.contact.phone}</a>
                <a className={styles.social} href={site.contact.instagramUrl} target="_blank" rel="noreferrer">Follow on Instagram <span aria-hidden="true">↗</span></a>
                <p className={styles.location}>{site.contact.location}</p>
              </div>
            ) : (
              <p className={styles.unavailable}>Contact details will be added soon.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
