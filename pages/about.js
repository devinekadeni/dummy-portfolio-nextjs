import React, { Component } from 'react'

import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

export default class about extends Component {
  render() {
    return (
      <BaseLayout>
        <BasePage className="abou-page">
          <div>about</div>
        </BasePage>
      </BaseLayout>
    )
  }
}
