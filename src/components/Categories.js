import React, { Component } from 'react'
import CategoryButton from './CategoryButton'
import { connect } from 'react-redux'
import { css } from 'emotion'
import {
  getNewsByCategory,
  addToChat,
  setCategory,
  updateButtonLink,
  updateIndexCount
} from '../Actions/Actions'

const categories = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding 0 10%;
`

export class Categories extends Component {
  componentDidUpdate() {
    console.log('categories did update')
  }
  selectCategory = category => {
    this.props.setCategory(category)
    this.props.getNewsByCategory(category)
    let text = 'Here are some ' + category + ' news'
    let message = { title: 'User', description: text }
    this.props.addToChat(message)
    let myArticle = this.props.newsItems[this.props.newsMessageIndex]
    myArticle.sender = 'alex'
    this.props.addToChat(myArticle)
    this.props.updateIndexCount()
    this.props.updateButtonLink(myArticle.url)
  }

  render() {
    return (
      <div className={categories}>
        {this.props.categories.map(category => (
          <CategoryButton
            text={category.text}
            id={category.id}
            onClick={this.selectCategory}
            key={category.id}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newsItems: state.newsItems,
  newsMessageIndex: state.newsMessageIndex,
  categories: state.categories
})

export default connect(
  mapStateToProps,
  {
    getNewsByCategory,
    addToChat,
    setCategory,
    updateButtonLink,
    updateIndexCount
  }
)(Categories)
