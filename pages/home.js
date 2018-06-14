import React, { Component } from 'react'
import env from '../src/lib/env'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1> Hello World </h1>
        {env.NOT_SECRET}
      </div>
    )
  }
}
