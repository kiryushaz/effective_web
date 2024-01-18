import styles from './ServiceCard.module.css'
import img from '../../assets/search.svg'

function ServiceCard() {
  return (
    <>
      <div className={styles.HCServiceCard}>
        <div className={styles.HCServiceCardContent}>
          <div className={styles.HCServiceCardImage}>
            <img src={img} alt="img" />
          </div>
          <h3 className={styles.HCServiceCardTitle}>Search Doctor</h3>
          <p className={styles.HCServiceCardSubTitle}>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
        </div>
      </div>
    </>
  )
}

export default ServiceCard
