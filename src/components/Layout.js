import React, { Component } from 'react'
import Link from 'next/link'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div>My template</div>
        <ul>
          <li>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <div>{this.props.children}</div>
        <div>Footer</div>
      </div>
    )
  }
}