import styles from './ArticleCard.module.css'
import React from "react";

type HCArticleCard = {image: string, title: string, subtitle: string};

class ArticleCard extends React.Component<HCArticleCard> {
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
            <a href="#articles" className={styles.HCArticleCardLink}>Read more</a>
          </div>
        </div>
      </>
    )
  }
}

export default ArticleCard
