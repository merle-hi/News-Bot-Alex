import React, { Component } from 'react'
import CategoryButton from './CategoryButton'
import { connect } from 'react-redux'
import { getNewsItems, getNewsByCategory, addToChat } from '../Actions/Actions'

export class Categories extends Component {
  selectCategory = category => {
    this.props.getNewsByCategory(category)
    let text = 'Here are some ' + category + ' news'
    let message = { title: 'User', description: text }
    this.props.addToChat(message)
  }

  render() {
    return (
      <div>
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
  categories: state.categories
})

export default connect(
  mapStateToProps,
  { getNewsItems, getNewsByCategory, addToChat }
)(Categories)
