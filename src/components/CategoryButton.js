import React, { Component } from 'react'
import { css } from 'emotion'

const buttonStyle = css`
  display: inline-block;
  background-color: black;
  border-radius: 5px;
  border: 2px solid grey;
  padding: 3px 12px;
  margin: 5px;
  font-family: 'PlayfairDisplay-Bold', Times, serif;
  color: white;
`

export default class CategoryButton extends Component {
  render() {
    return (
      <div
        className={buttonStyle}
        onClick={this.props.onClick.bind(this, this.props.id)}
      >
        {this.props.text}
      </div>
    )
  }
}
