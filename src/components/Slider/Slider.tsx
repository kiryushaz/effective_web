import styles from './Slider.module.css'
import arrow from '../../assets/arrow nav.svg'
import avatar from '../../assets/avatar.png'

function Slider() {
  return (
    <>
      <div className={styles.HCSlider}>
        <h2 className={styles.HCSliderTitle}>What our customer are saying</h2>
        <div className={styles.divider}></div>
        <div className={styles.HCSliderCustomer}>
          <div className={styles.HCSliderCustomerBox}>
            <img src={avatar} alt="customer"/>
            <div className={styles.HCSliderCustomerName}>
              <p className={styles.name}>Edward Newgate</p>
              <p className={styles.jobTitle}>Founder Circle</p>
            </div>
          </div>
          <div className={styles.HCSliderCustomerText}>
            <p>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
          </div>
        </div>
      </div>
      <div className={styles.HCSliderPaginate}>
        <img src={arrow} alt="paginator" />
      </div>
    </>
  )
}

export default Slider
