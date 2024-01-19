import styles from './ArticleCard.module.css'
import React from "react";

class ArticleCard extends React.Component {

  render() {
    return (
      <>
        <div className={styles.HCArticleCard}>
          <div className={styles.HCArticleCardCover}>
            <img src={this.props.image} alt="cover" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.HCArticleCardTitle}>
              {this.props.title}
            </h3>
            <p className={styles.HCArticleCardDesc}>
              {this.props.subtitle}
            </p>
            <a href="#" className={styles.HCArticleCardLink}>Read more</a>
          </div>
        </div>
      </>
    )
  }
}

export default ArticleCard
