import React, { Component } from 'react'
import { connect } from 'react-redux'
import uid from 'uid'
import '../css/headlines.css'

export class Headlines extends Component {
  render() {
    return (
      <section className="headlines_container">
        {this.props.myHeadlines.map(headline => (
          <div className="headline" key={uid(10)}>
            <a href={headline.url}>{headline.title}</a>
          </div>
        ))}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  myHeadlines: state.myHeadlines
})

export default connect(
  mapStateToProps,
  null
)(Headlines)
