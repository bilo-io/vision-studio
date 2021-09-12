import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class WidgetCrypto extends Component {
    static propTypes = {
      // data: PropTypes.object.isRequired,
      isEditable: PropTypes.bool,
      duration: PropTypes.number,
      onNext: PropTypes.func
    }

    static defaultProps = {

    }

    state = {
    }

    render () {
      return <div>
        <h1>Appxchanges</h1>
      </div>
    }
}

WidgetCrypto.config = {
  name: 'WidgetCrypto',
  type: 'widget:crypto',
  icon: 'dollar',
  props: [{
    name: 'currency',
    type: 'text',
    defaultValue: 'BTC'
  }]
}

export default WidgetCrypto
