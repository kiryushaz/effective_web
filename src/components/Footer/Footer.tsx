import styles from './Footer.module.css'
import logo from '../../assets/hc.svg'

function Footer() {
  return (
    <>
      <footer id="footer" className={styles.HCFooter}>
        <div className={styles.HCFooterCol}>
          <div className={styles.HCFooterLogo}>
            <img src={logo} alt="logo" />
            <span>HealthCare</span>
          </div>
          <p className={styles.description}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
          <p className={styles.copyright}>&copy;HealthCare PTY LTD 2023. All rights reserved</p>
        </div>
        <div className={styles.HCFooterCol}>
          <p className={styles.HCFooterSectionTitle}>Company</p>
          <p><a href="#footer">About</a></p>
          <p><a href="#footer">Testimonials</a></p>
          <p><a href="#footer">Find a doctor</a></p>
          <p><a href="#footer">Apps</a></p>
        </div>
        <div className={styles.HCFooterCol}>
          <p className={styles.HCFooterSectionTitle}>Region</p>
          <p><a href="#footer">Indonesia</a></p>
          <p><a href="#footer">Singapore</a></p>
          <p><a href="#footer">Hongkong</a></p>
          <p><a href="#footer">Canada</a></p>
        </div>
        <div className={styles.HCFooterCol}>
          <p className={styles.HCFooterSectionTitle}>Help</p>
          <p><a href="#footer">Help center</a></p>
          <p><a href="#footer">Contact support</a></p>
          <p><a href="#footer">Instructions</a></p>
          <p><a href="#footer">How it works</a></p>
        </div>
      </footer>
    </>
  )
}

export default Footer
