import React, { Component } from 'react'
import uid from 'uid'
import '../css/news.css'
import AlexIcon from '../img/Alex_Logo.svg'

export default class NewsFeed extends Component {
  renderNewsList() {
    return this.props.myNewsChat.map(
      article =>
        article.sender === 'alex' ? (
          <div className="alex" key={uid(10)}>
            <div className="news_message">
              <div className="icon_alex">
                <img src={AlexIcon} alt="" />
              </div>

              {!article.description ? (
                <div>
                  <div className="news_container">
                    <div>
                      <h3>{article.title}</h3>
                      {article.author && <h4>— {article.author}</h4>}
                      {article.url && (
                        <div>
                          <a href={article.url}>
                            <button className="button_more">more</button>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="news_container">
                    <div>
                      <h3>{article.title}</h3>
                      {article.author && <h4>— {article.author}</h4>}
                    </div>
                  </div>
                  <div className="news_container">
                    {article.description}
                    {article.url && (
                      <div>
                        <a href={article.url}>
                          <button className="button_more">more</button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="user" key={uid(10)}>
            <div className="chat_message">
              <div className="news_container">
                {/*<h3>{article.title}</h3>*/}
                <p>{article.description}</p>
              </div>
            </div>
          </div>
        )
    )
  }

  render() {
    return <section>{this.renderNewsList()}</section>
  }
}
