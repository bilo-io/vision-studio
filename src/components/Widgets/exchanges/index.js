import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class WidgetExchanges extends Component {
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

WidgetExchanges.config = {
  name: 'WidgetExchanges',
  type: 'widget:exchanges',
  icon: 'dollar',
  props: [{
    name: 'currency',
    type: 'text',
    defaultValue: ''
  }]
}

export default WidgetExchanges
