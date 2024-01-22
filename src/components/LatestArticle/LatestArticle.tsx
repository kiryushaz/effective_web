import ArticleCard from '../ArticleCard/ArticleCard'
import styles from './LatestArticle.module.css'
import Button from '../Button/Button'

import cover1 from '../../assets/article_cover1.png'
import cover2 from '../../assets/article_cover2.png'
import cover3 from '../../assets/article_cover3.png'
import React from 'react'

const ARTICLES_LIMIT = 3;

const articles = [
  {"image": cover1, "title": "Disease detection, check up in the laboratory", "subtitle": "In this case, the role of the health laboratory is very important to do a disease detection..."},
  {"image": cover2, "title": "Herbal medicines that are safe for consumption", "subtitle": "Herbal medicine is very widely used at this time because of its very good for your health..."},
  {"image": cover3, "title": "Natural care for healthy facial skin", "subtitle": "A healthy lifestyle should start from now and also for your skin health. There are some..."},
  {"image": cover1, "title": "Disease detection, check up in the laboratory", "subtitle": "In this case, the role of the health laboratory is very important to do a disease detection..."},
  {"image": cover2, "title": "Herbal medicines that are safe for consumption", "subtitle": "Herbal medicine is very widely used at this time because of its very good for your health..."},
  {"image": cover3, "title": "Natural care for healthy facial skin", "subtitle": "A healthy lifestyle should start from now and also for your skin health. There are some..."},
]

class LatestArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {viewAll: false};
  }

  render() {
    return (
      <>
        <h2 id="articles">Check out our latest article</h2>
        <div className={styles.divider}></div>
        <div className={styles.HCArticleCards}>
          {articles.slice(0, !this.state.viewAll ? ARTICLES_LIMIT: undefined).map((article) => {
            return (<ArticleCard image={article["image"]} title={article["title"]} subtitle={article["subtitle"]}/>);
          })}
        </div>
        <Button onClick={() => {this.setState(() => ({viewAll: !this.state.viewAll}))}} btnText="View All"/>
      </>
    )
  }
}

export default LatestArticle
