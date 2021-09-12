import React, { Component } from 'react'
import PropTypes from 'prop-types'
import calendarData from './data'

let timeUpdateId
export class WidgetCalendar extends Component {
  static propTypes = { duration: PropTypes.number, onNext: PropTypes.func };

  static defaultProps = {
    duration: 2
  };

  state = {
    date: new Date()
  };

  componentDidMount () {
    const { duration, onNext } = this.props
    setTimeout(onNext, duration * 1000)

    timeUpdateId = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 60000) // NOTE: updates date once a minute
  }

  componentWillUnmount () {
    clearInterval(timeUpdateId)
  }

  render () {
    const { date } = this.state
    const { months, daysOfWeek } = calendarData

    const getDayOfMonth = (date) => {
      return (
        <div className="day-card" depth="4">
          <div className="week-day">{daysOfWeek[date.getUTCDay()]}</div>
          <br />
          <div className="month-day">{date.getDate()}</div>
        </div>
      )
    }
    const getMonth = (date) => {
      return (
        <div className="month-card" depth="4">
          <div className="month-name">{months[date.getMonth()].name}</div>
          <div className="calendar">
            {[...new Array(months[date.getMonth()].days)].map((day, i) => (
              <div key={`month-day-${i + 1}`} className="day">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      )
    }
    return (
      <div className="calendar-container">
        {getDayOfMonth(date)}
        {getMonth(date)}
      </div>
    )
  }
}

WidgetCalendar.options = {
  name: 'Calendar',
  type: 'widget:calendar',
  icon: 'calendar',
  props: [{
  }]
}
export default WidgetCalendar
