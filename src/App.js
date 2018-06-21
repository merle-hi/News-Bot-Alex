import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import NewsFeed from './components/NewsFeed'
import Button from './components/Button'
import Headlines from './components/Headlines'
import Categories from './components/Categories'

import {
  getNewsItems,
  addToChat,
  updateIndexCount,
  updateButtonLink
} from './Actions/Actions'

import '../src/css/App.css'
import '../src/css/button.css'

class App extends Component {
  componentDidMount = () => {
    this.props.getNewsItems()
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight)
  }

  addToChat = buttonText => {
    let newMessage = { title: 'Alex', description: buttonText }
    this.props.addToChat(newMessage)
    let myArticle = this.props.newsItems[this.props.index]
    myArticle.sender = 'alex'
    this.props.addToChat(myArticle)
    this.props.updateIndexCount()
    this.props.updateButtonLink(myArticle.url)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-topline">Hey! You talk to Alex.</h1>
          <h1 className="App-title">
            Alex' <i>Daily</i> Journal
          </h1>
          <span className="App-date">{moment().format('MMMM Do YYYY')}</span>
          <hr className="s1" />
          <Headlines />
        </header>

        <div className="newsfeed">
          {<NewsFeed myNewsChat={this.props.myNewsChat} />}
          <footer>
            <div>
              {this.props.status === 'start' && <Categories />}

              {this.props.buttonLink && (
                <a href={this.props.buttonLink}>
                  <button className="button_style">Tell me more</button>
                </a>
              )}
            </div>
            <Button
              buttonText={this.props.buttonText}
              status={this.props.status}
              onClick={this.addToChat}
            />
          </footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newsItems: state.newsItems,
  myNewsChat: state.myNewsChat,
  index: state.index,
  status: state.status,
  buttonText: state.buttonText,
  buttonLink: state.buttonLink
})

export default connect(
  mapStateToProps,
  { getNewsItems, addToChat, updateIndexCount, updateButtonLink }
)(App)
