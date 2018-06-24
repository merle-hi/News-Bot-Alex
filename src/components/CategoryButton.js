import React, { Component } from 'react'
import { css } from 'emotion'

const buttonStyle = css`
  display: inline-block;
  background-color: black;
  border-radius: 6px;
  padding: 4px 18px 6px;
  margin: 6px;
  font-family: 'PlayfairDisplay-Regular', Times, serif;
  color: rgb(246, 245, 239, 1);
  letter-spacing: 0.02rem;
  font-size: 18;
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
