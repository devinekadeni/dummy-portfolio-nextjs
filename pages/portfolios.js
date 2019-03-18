import React, { Component } from 'react'
import { Link } from '../routes'

import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'

export default class portfolios extends Component {
  static async getInitialProps() {
    let posts = {}

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = response.data
    } catch (error) {
      console.log(error)
    }

    return { posts: posts.splice(0, 10) }
  }

  renderPosts(posts) {
    return posts.map(post => (
      <li key={post.id}>
        <Link route={`/portfolio/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))
  }

  render() {
    const { posts } = this.props
    return (
      <BaseLayout>
        <div>portfolios</div>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    )
  }
}
