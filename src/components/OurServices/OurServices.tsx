import ServiceCard from "../ServiceCard/ServiceCard"
import styles from './OurServices.module.css'
import img1 from '../../assets/search.svg'
import img2 from '../../assets/pharmacy.svg'
import img3 from '../../assets/consultation.svg'
import img4 from '../../assets/details.svg'
import img5 from '../../assets/emergency.svg'
import img6 from '../../assets/tracking.svg'
import {useRef} from "react"

function OurServices() {
  const buttonRef = useRef(null);

  function handleClick() {
    buttonRef.current.blur();
  }

  return (
    <>
      <h2>Our services</h2>
      <div className={styles.divider}></div>
      <p className={styles.HCServicesDesc}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      <div className={styles.HCServicesCards}>
        <ServiceCard image={img1} title="Search doctor" subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
        <ServiceCard image={img2} title="Online pharmacy" subtitle="Buy your medicines with our mobile application with a simple delivery system"/>
        <ServiceCard image={img3} title="Consultation" subtitle="Free consultation with our trusted doctors and get the best recomendations"/>
        <ServiceCard image={img4} title="Details info" subtitle="Free consultation with our trusted doctors and get the best recomendations"/>
        <ServiceCard image={img5} title="Emergency care" subtitle="You can get 24/7 urgent care for yourself or your children and your lovely family"/>
        <ServiceCard image={img6} title="Tracking" subtitle="Track and save your medical history and health data"/>
      </div>
      <button className={styles.HCServicesButton} onClick={handleClick} ref={buttonRef}>
        Learn more
      </button>
    </>
  )
}

export default OurServices
