import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../src/lib/store'

class About extends Component {
  add = () => {
    this.props.addCount()
  }

  render() {
    return (
      <div>
          <h1> About </h1>
          <h4>COUNTER: {this.props.count}</h4>
          <button onClick={this.add}>Increase Number</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ count: state.count })

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
