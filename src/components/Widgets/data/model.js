import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class WidgetDataModel extends Component {
  static propTypes = {
    options: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    }),
    data: PropTypes.shape({
      key: PropTypes.string,
      keys: PropTypes.array,
      model: PropTypes.func
    }),
    onChange: PropTypes.func
  }

    static defaultProps = {
      options: {
        width: 320,
        height: 240
      },
      data: {
        key: 'modelKey',
        keys: ['modelKey', 'testKey'],
        model: (data) => data
      }
    }

    render () {
      const { data, options } = this.props
      const { width, height } = options
      const { keys } = data

      return (
        <div style={{ width: `${width}px`, height: `${height}px` }}>
          <div>DataModel</div>
          {keys.map((key, i) => (
            <div key={key}>
              <label>
                {key}
                <input type="checkbox" />
              </label>
            </div>
          ))}
        </div>
      )
    }
}

WidgetDataModel.options = {
  name: 'DataModel',
  type: 'widget:data:model',
  icon: 'cube',
  props: [{
  }]
}

export default WidgetDataModel
