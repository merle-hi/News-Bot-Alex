import React, { Component } from 'react'

import '../css/button.css'

export default class Button extends Component {
  buttonText() {
    if (this.props.status === 'start') {
      return this.props.buttonText[0]
    } else if (this.props.status === 'news') {
      return this.props.buttonText[1]
    } else if (this.props.status === 'end') {
      return this.props.buttonText[2]
    }
  }

  render() {
    return (
      <span
        className="button_style"
        onClick={this.props.onClick.bind(this, this.buttonText())}
      >
        {this.buttonText()}
      </span>
    )
  }
}
