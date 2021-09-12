import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class WidgetDataFilter extends Component {
    static propTypes = {
      options: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
      }),
      data: PropTypes.shape({
        keys: PropTypes.array
      })
    }

    static defaultProps = {
      options: {
        width: 320,
        height: 240
      },
      data: {
        keys: []
      }
    }

    render () {
      const { data, options } = this.props
      const { width, height } = options
      const { keys } = data

      return <div>
        <div style={{ width: `${width}px`, height: `${height}px` }}>DataFilter</div>
        { keys.map((key, i) => (
          <div key={key}><label>{key}<input type='checkbox' /></label></div>
        ))}
      </div>
    }
}

WidgetDataFilter.options = {
  name: 'DataFilter',
  type: 'widget:data:filter',
  icon: 'filter',
  props: [{
  }]
}

export default WidgetDataFilter
