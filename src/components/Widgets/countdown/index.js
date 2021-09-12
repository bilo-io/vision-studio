import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class WidgetCountdown extends Component {
    static propTypes = {
      data: PropTypes.shape({
        name: PropTypes.string,
        date: PropTypes.string
      }),
      isEditable: PropTypes.bool,
      duration: PropTypes.number,
      next: PropTypes.func
    }

    static defaultProps = {
      duration: 2,
      next: () => { console.log('<WidgetCountdown />.next() is UNDEFINED') }
    }

    state = {

    }

    componentDidMount () {
      const { duration, next } = this.props
      setTimeout(next, duration * 1000)
    }

    render () {
      return <div>
        <h1>Appountdown</h1>
      </div>
    }
}

WidgetCountdown.options = {
  name: 'Countdown',
  type: 'widget:countdown',
  icon: 'clock',
  props: [{
    name: 'Date',
    type: 'datetime',
    defaultValue: new Date('2021/10/10')
  }]
}
export default WidgetCountdown
