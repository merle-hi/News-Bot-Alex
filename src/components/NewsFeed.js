import React, { Component } from 'react'
import './news.css'

export default class NewsFeed extends Component {
  render() {
    return (
      <section>
        {this.props.myNewsItems.map(article => (
          <div className="hans_wurst" key={article.publishedAt}>
            <div className="horst">A</div>
            <div>
              <div className="news_container">
                <div>
                  <h3>{article.title}</h3>
                  <h2>
                    {article.publishedAt} - {article.author}
                  </h2>
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
