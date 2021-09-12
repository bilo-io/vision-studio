import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components'
import sampleData from './data'

export class WidgetVimeo extends Component {
  static propTypes = {
    data: PropTypes.shape({
      url: PropTypes.string.isRequired
    }),
    isAutoplay: PropTypes.bool,
    isLooping: PropTypes.bool,
    duration: PropTypes.number,
    sampleData: PropTypes.array,
    onDataChange: PropTypes.func,
    onNext: PropTypes.func,
    url: PropTypes.string
  };

  static defaultProps = {
    onDataChange: (data) =>
      console.log('define WidgetMediaImage.onDataChange()'),
    isAutoplay: true,
    isLooping: false,
    duration: 4,
    data: {
      url: sampleData[Math.floor(Math.random() * sampleData.length)]
    },
    sampleData
  };

  state = {
    url: '',
    embedUrl: ''
  };

  componentDidMount () {
    const { duration, onNext } = this.props

    this.generateEmbedUrl()
    setTimeout(onNext, duration * 1000)
  }

  generateEmbedUrl = () => {
    const { isAutoplay, isLooping, data } = this.props
    const videoId = data.url.split('/').pop()
    this.setState(
      {
        url: data.url,
        embedUrl: `https://player.vimeo.com/video/${videoId}?byline=0&portrait=0&autoplay=${Number(
          !!isAutoplay
        )}&loop=${!!isLooping}&autopause=0`
      },
      () =>
        this.props.onDataChange({
          url: this.state.url,
          embedUrl: this.state.embedUrl
        })
    )
  };

  render () {
    const { embedUrl, isEditable, query } = this.state
    return (
      <div className="flex-col">
        {isEditable && (
          <Input
            label="URL"
            type="text"
            value={query}
            onChange={this.getEmbedUrl}
          />
        )}
        <br />
        {embedUrl && (
          <div className="iframe-container">
            <iframe
              src={embedUrl}
              frameBorder="0"
              width={960}
              height={960}
              allowFullScreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            />
          </div>
        )}
      </div>
    )
  }
}

WidgetVimeo.config = {
  name: 'Vimeo',
  type: 'widget:vimeo',
  icon: 'image',
  props: [{
    name: 'url',
    type: 'text',
    defaultValue: ''
  }]
}

export default WidgetVimeo
