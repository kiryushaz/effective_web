import ServiceCard from "../ServiceCard/ServiceCard"
import styles from './OurServices.module.css'

function OurServices() {
  return (
    <>
      <h2>Our services</h2>
      <div className={styles.divider}></div>
      <p className={styles.HCServicesDesc}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      <div className={styles.HCServicesCards}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </>
  )
}

export default OurServices
