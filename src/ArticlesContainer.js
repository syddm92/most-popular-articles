import './ArticlesContainer.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Article from './Article'
import * as _ from 'lodash'

function ArticlesContainer() {
  const [mostPopularArticles, setMostPopularArticles] = useState([])
  useEffect(() => {
    axios
      .get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=hkYA1W0xLu5F6IUOg53vZGUcuUEkP0bR')
      .then((mostPopular) => {
        const mostPopularArticles = mostPopular.data.results
        setMostPopularArticles(mostPopularArticles)
      })
  }, [])
  return (
    <div className="appContainer">
      <div className="articleContainer">
        <div className="containerHeader">
            <h2>NY Times Most Popular</h2>
        </div>
        {
          mostPopularArticles.map((article, index) => {
            const articleImage = _.first(_.first(article.media)["media-metadata"]).url
            return (
            <Article key={index} imageUrl={articleImage} title={article.title} authors={article.byline} date={article.published_date}>
              <div className="space">
                {article.abstract}
              </div>
            </Article>
            )
          })
        }
      </div>
    </div>
  )
}

export default ArticlesContainer
