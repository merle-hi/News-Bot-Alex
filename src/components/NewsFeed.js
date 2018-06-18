import React, { Component } from 'react'
import './news.css'
import AlexIcon from '../img/Alex_Logo.svg'

export default class NewsFeed extends Component {
  render() {
    return (
      <section>
        {this.props.myNewsItems.map(article => (
          <div className="direction" key={article.publishedAt}>
            <div className="icon_alex">
              <img src={AlexIcon} />
            </div>
            <div>
              <div className="news_container">
                <div>
                  <h3>{article.title}</h3>
                  <h4>— {article.author}</h4>
                </div>
              </div>
              <div className="news_container">
                {article.description}
                <a href={article.url}>
                  <div className="button_more">more</div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    )
  }
}
