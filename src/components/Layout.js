import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div>My template</div>
        <div>{this.props.children}</div>
        <div>Footer</div>
      </div>
    )
  }
}