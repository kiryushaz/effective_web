import styles from './ServiceCard.module.css'
import React from 'react'

type HCServiceCard = {image: string, title: string, subtitle: string, onClick: any};

class ServiceCard extends React.Component<HCServiceCard> {
  static defaultProps: { onClick: () => void; };
  buttonRef: React.RefObject<HTMLButtonElement>;
  handleClick: () => void;

  constructor(props: HCServiceCard) {
    super(props);
    this.buttonRef = React.createRef();
    this.handleClick = () => {
      this.buttonRef.current!.blur();
      this.props.onClick();
      // alert(this.buttonRef.current.innerHTML);
    }
  }

  render () {
    return (
      <>
        <button className={styles.HCServiceCard} onClick={this.handleClick} ref={this.buttonRef}>
          <div className={styles.HCServiceCardContent}>
            <div className={styles.HCServiceCardImage}>
              <img src={this.props.image} alt="img" />
            </div>
            <h3 className={styles.HCServiceCardTitle}>{this.props.title}</h3>
            <p className={styles.HCServiceCardSubTitle}>{this.props.subtitle}</p>
          </div>
        </button>
      </>
    )
  }
}

ServiceCard.defaultProps = {
  onClick: () => {}
}

export default ServiceCard
