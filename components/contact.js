import styles from 'styles/contact.module.css'
import Social from './social'

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="32px" />
      <address>cube@web.mail.address</address>
    </div>
  )
}