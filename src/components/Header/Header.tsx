import logo from '../../assets/logo.svg'
import styles from './Header.module.css'

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
            <li><a href="">Find a doctor</a></li>
            <li><a href="">Apps</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">About us</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
