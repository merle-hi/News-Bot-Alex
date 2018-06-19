import React, { Component } from 'react'
import moment, { max } from 'moment'
import { connect } from 'react-redux'

import NewsFeed from './components/NewsFeed'
import Button from './components/Button'
import { getNewsItems, getNewArticle } from './Actions/Actions'

import './App.css'
import './button.css'

class App extends Component {
  componentDidMount = () => {
    this.props.getNewsItems()
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight)
  }

  getNewArticle = () => {
    let myArticle = this.props.newsItems[this.props.index]
    this.props.getNewArticle(myArticle)
  }

  render() {
    console.log(this.props.myNewsItems)
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
          {<NewsFeed myNewsItems={this.props.myNewsItems} />}
        </div>
        <footer>
          <section className="button_section">
            {/*  <span className="button_style">Tell me more</span> */}
            {
              <Button
                text="Show me something else"
                onClick={this.getNewArticle}
              />
            }
          </section>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newsItems: state.newsItems,
  myNewsItems: state.myNewsItems,
  index: state.index
})

export default connect(
  mapStateToProps,
  { getNewsItems, getNewArticle }
)(App)
