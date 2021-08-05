import { useState } from 'react'
import './Article.css'

function Article(props) {
  const [showArticleDetails, setShowArticleDetails] = useState(false)
  return (
    <div className="articleContentContainer">
      <button className="articleContent" onClick={(e) => setShowArticleDetails(!showArticleDetails)}>
        <div className="articleImage">
          <img src={props.imageUrl} alt={props.title} />
        </div>
        <div className="articleSummary">
          <div className="line-clamp articleTitle">{props.title}</div>
          <div className="articleSummaryFooter">
            <div className="articleAuthors">{props.authors}</div>
            <span className="articleDate">{props.date}</span>
          </div>
        </div>
        {
          showArticleDetails ?
          <div class="chevron fa fa-chevron-down"></div> :
          <div className="chevron fa fa-chevron-right"></div>
        }
      </button>
      {showArticleDetails && <div className="articleContent">{props.children}</div>}
    </div>
  )
}

export default Article
