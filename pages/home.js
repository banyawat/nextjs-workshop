import React, { Component } from 'react'
import { connect } from 'react-redux'
import env from '../src/lib/env'

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1> Hello World </h1>
        {env.NOT_SECRET}
        <h4>COUNTER: {this.props.count}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
})

export default connect(mapStateToProps)(Homepage)
