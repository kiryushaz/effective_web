import React from 'react';
import styles from './Button.module.css'

type HCButton = {mainBtn?: boolean, btnText: string, btnIcon?: string, onClick: any};

class Button extends React.Component<HCButton, object> {
  static defaultProps: { onClick: () => void; };
  buttonRef: React.RefObject<HTMLButtonElement>;
  handleClick: () => void;

  constructor(props: HCButton) {
    super(props);
    this.buttonRef = React.createRef();
    this.handleClick = () => {
      this.buttonRef.current!.blur();
      this.props.onClick();
      // alert(this.buttonRef.current.innerHTML);
    }
  }

  render() {
    return (
      <>
        <button className={this.props.mainBtn ? styles.HCMainButton : styles.HCButton} onClick={this.handleClick} ref={this.buttonRef}>
          <div className={styles.HCButtonInner}>
            {this.props.btnText}
            {this.props.btnIcon ? <img src={this.props.btnIcon} alt="icon"/> : null}
          </div>
        </button>
      </>
    )
  }
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button
