import styles from './ServiceCard.module.css'
import React from 'react'

class ServiceCard extends React.Component {
  render () {
    return (
      <>
        <div className={styles.HCServiceCard}>
          <div className={styles.HCServiceCardContent}>
            <div className={styles.HCServiceCardImage}>
              <img src={this.props.image} alt="img" />
            </div>
            <h3 className={styles.HCServiceCardTitle}>{this.props.title}</h3>
            <p className={styles.HCServiceCardSubTitle}>{this.props.subtitle}</p>
          </div>
        </div>
      </>
    )
  }
}

export default ServiceCard
