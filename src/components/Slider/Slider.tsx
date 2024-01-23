import styles from './Slider.module.css'
import arrow_left from '../../assets/arrow_left1.svg'
import arrow_left_inactive from '../../assets/arrow_left0.svg'
import arrow_right from '../../assets/arrow_right1.svg'
import arrow_right_inactive from '../../assets/arrow_right0.svg'
import slider from '../../assets/slider.svg'
import inactive_slider from '../../assets/slider0.svg'
import avatar from '../../assets/avatar.png'
import React from 'react'

const sliders = [
  {
    "avatar": avatar,
    "name": "Edward Newgate",
    "description": "Founder Circle",
    "text": "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
  },
  {
    "avatar": avatar,
    "name": "Hyppocrate",
    "description": "Father of Medicine",
    "text": "“Your food should be medicine, and your medicine should be food”",
  },
  {
    "avatar": avatar,
    "name": "Samuel Reinberg",
    "description": "Doctor of Medical Sciences",
    "text": "“The diagnosis can be economical: only the diagnosis that gets the most information with a minimum of research is good”",
  },
  {
    "avatar": avatar,
    "name": "Ivan Pavlov",
    "description": "Soviet scientist",
    "text": "“Man is the most complex and subtle system. But in order to enjoy the treasures of nature, a person must be healthy, strong and smart”",
  },
]

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 0};
  }

  render () {
    return (
      <>
        <div className={styles.HCSlider}>
          <h2 className={styles.HCSliderTitle}>What our customer are saying</h2>
          <div className={styles.divider}></div>
          <div className={styles.HCSliderCustomer}>
            <div className={styles.HCSliderCustomerBox}>
              <img src={sliders[this.state.page]['avatar']} alt="customer"/>
              <div className={styles.HCSliderCustomerName}>
                <p className={styles.name}>{sliders[this.state.page]['name']}</p>
                <p className={styles.description}>{sliders[this.state.page]['description']}</p>
              </div>
            </div>
            <div className={styles.HCSliderCustomerText}>
              <p>{sliders[this.state.page]['text']}</p>
            </div>
          </div>
        </div>
        <div className={styles.HCSliderPaginate}>
          {this.state.page == 0 ? <img className={styles.arrowLeft} src={arrow_left_inactive} alt="" /> : 
          <button onClick={() => {this.setState({page: this.state.page - 1})}} className={`${styles.btnArrow} ${styles.arrowLeft}`}>
            <img src={arrow_left} alt="" />
          </button>
          }
          <div className={styles.pages}>
            {sliders.map((item, i) => {
              if (i == this.state.page) return (<img src={slider} alt="" />);
              else return (
              <button onClick={() => {this.setState({page: i})}} className={styles.btnArrow}>
                <img src={inactive_slider} alt="" />
              </button>
              );
            })}
          </div>
          {this.state.page == sliders.length - 1 ? <img className={styles.arrowRight} src={arrow_right_inactive} alt="" /> : 
          <button onClick={() => {this.setState({page: this.state.page + 1})}} className={`${styles.btnArrow} ${styles.arrowRight}`}>
            <img src={arrow_right} alt="" />
          </button>
          }
        </div>
      </>
    )
  }
}

export default Slider
