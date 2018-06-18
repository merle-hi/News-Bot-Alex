import React, { Component } from 'react'
import moment from 'moment'

import NewsFeed from './components/NewsFeed'
import Button from './components/Button'

import './App.css'
import './button.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      index: 0,
      newsItems: [],
      myNewsItems: [],
      article: {},
    }
  }
  componentDidMount = () => {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=de&' +
      'apiKey=f2e9267756a64e498d902165b4957062'
    const req = new Request(url)
    fetch(req)
      .then(function(response) {
        return response.json()
      })
      .then(data => {
        this.setState({
          newsItems: data.articles.map(news => ({
            ...news,
          })),
        })
      })
  }

  getNewArticle = () => {
    const { index, newsItems, myNewsItems } = this.state
    if (index < 20) {
      let myNewsItemsList = myNewsItems
      let myArticle = newsItems[index]
      this.setState({
        myNewsItems: [...myNewsItemsList, myArticle],
        index: index + 1,
      })
    } else {
      this.setState({ index: 0 })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-topline">Hey! You talk to Alex.</h1>
          <h1 className="App-title">
            Alex' <i>Daily</i> Journal
          </h1>
          <span className="App-date">{moment().format('MMMM Do YYYY')}</span>
          <hr className="s1" />
        </header>
        <div className="newsfeed">
          <NewsFeed myNewsItems={this.state.myNewsItems} />
        </div>
        <footer>
          <section className="button_section">
            {/*  <span className="button_style">Tell me more</span> */}
            <Button
              text="Show me something else"
              onClick={this.getNewArticle}
            />
          </section>
        </footer>
      </div>
    )
  }
}

export default App
