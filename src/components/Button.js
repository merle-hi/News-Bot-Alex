import React, { Component } from 'react'

import '../button.css'

export default class Button extends Component {
  render() {
    return (
      <span className="button_style" onClick={e => this.props.onClick()}>
        {this.props.text}
      </span>
    )
  }
}
