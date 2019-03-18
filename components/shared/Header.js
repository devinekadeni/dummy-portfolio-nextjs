import React, { Component } from "react"
import Link from "next/link"

import "../../styles/main.scss"

export default class Header extends Component {
  render() {
    return (
      <>
        <Link href="/">
          <a className="color">Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
      </>
    )
  }
}
