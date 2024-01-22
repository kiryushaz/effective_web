import React from "react";
import styles from './Banner.module.css';
import Button from "../Button/Button";

class Banner extends React.Component {
  render() {
    return (
      <>
        <div className={this.props.reversed ? styles.HCBannerReversed : styles.HCBanner}>
          <div className={styles.HCBannerImage}>
            <img src={this.props.image} alt="img" />
          </div>
          <div className={this.props.reversed ? styles.HCBannerTextReversed : styles.HCBannerText}>
            <h2>{this.props.title}</h2>
            <div className={styles.divider}></div>
            <p className={styles.HCBannerDesc}>{this.props.description}</p>
            <Button btnText={this.props.btnText} btnIcon={this.props.btnIcon} />
          </div>
        </div>
      </>
    )
  }
}

export default Banner
