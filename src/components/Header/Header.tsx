import logo from '../../assets/logo.svg'
import img from '../../assets/banner1.png'
import styles from './Header.module.css'
import Button from '../Button/Button'

function Header() {
  return (
    <>
      <header className={styles.HCHeader}>
        <div className="HCHeaderLogo">
          <img src={logo} alt="logo"/>
        </div>
        <nav className={styles.HCHeaderNav}>
          <ul>
            <li className={styles.HCSelectedLink}><a href="">Home</a></li>
            <li><a href="#">Find a doctor</a></li>
            <li><a href="#">Apps</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </nav>
      </header>
      <div className={styles.HCBanner}>
        <div className={styles.HCBannerText}>
          <h1 className={styles.HCBannerTextTitle}>Virtual healthcare for you</h1>
          <p className={styles.HCBannerTextDesc}>
            Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone
          </p>
          <Button btnText="Consult Today" mainBtn={true}/>
        </div>
        <div className={styles.HCBannerImage}>
          <img src={img} alt="img"/>
        </div>
      </div>
    </>
  )
}

export default Header
