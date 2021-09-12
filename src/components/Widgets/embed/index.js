import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components'

export class WidgetEmbed extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    isEditable: PropTypes.bool,
    duration: PropTypes.number,
    onNext: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number
  };

  static defaultProps = {
    data: {
      url: 'http://facebook.com'
    },
    duration: 10,
    width: 960,
    height: 960
  };

  render () {
    const { data, isEditable, width, height } = this.props

    return (
      <div className="flex-col">
        {isEditable && (
          <Input
            label="URL"
            type="text"
            value={data.url}
            onChange={this.onChange}
          />
        )}
        <br />
        <div className="iframe-container">
          <iframe
            src={data.url}
            frameBorder="0"
            width={width}
            height={height}
            allowFullScreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          >
            {data.url}
          </iframe>
        </div>
      </div>
    )
  }
}

WidgetEmbed.config = {
  name: 'Embed',
  type: 'widget:embed',
  icon: 'image',
  props: [{
    name: 'url',
    type: 'text',
    defaultValue: ''
  }]
}

export default WidgetEmbed
