import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { offsetDateTime } from 'utils/date'

let intervalTimer
export class WidgetClock extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    isEditable: PropTypes.bool,
    duration: PropTypes.number,
    onNext: PropTypes.func,
    timezoneOffset: PropTypes.oneOfTypes([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    duration: 3
  };

  state = {
    time: new Date().addHours
  };

  componentDidMount () {
    const { duration, onNext } = this.props
    setTimeout(onNext, duration * 1000)
    intervalTimer = setInterval(
      () =>
        this.setState({
          time: offsetDateTime(1)
        }),
      1000
    )
  }

  compononentWillUnmount () {
    clearInterval(intervalTimer)
  }

  padZeros = (value) => {
    return `${value < 10 ? '0' : ''}${value}`
  };

  render () {
    const { time } = this.state
    return (
      <div className="clock-container">
        <div className="digital">
          {this.padZeros(time.getHours())}:{this.padZeros(time.getMinutes())}:
          {this.padZeros(time.getSeconds())}
        </div>
      </div>
    )
  }
}

WidgetClock.options = {
  name: 'Clock',
  type: 'widget:clock',
  icon: 'clock',
  props: [{
  }]
}
export default WidgetClock
