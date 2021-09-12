import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components'
import getVideoId from './utils'
import sampleData from './data'

export class WidgetYoutube extends Component {
  static propTypes = {
    data: PropTypes.shape({
      url: PropTypes.string.isRequired
    }),
    isAutoplay: PropTypes.bool,
    isLooping: PropTypes.bool,
    isEditable: PropTypes.bool,
    duration: PropTypes.number,
    sampleData: PropTypes.array,
    onDataChange: PropTypes.func,
    onNext: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    isAutoplay: true,
    isLooping: false,
    onDataChange: (data) => console.log('define WidgetYoutube.onDataChange()'),
    duration: 4,
    data: {
      url: sampleData[Math.floor(Math.random() * sampleData.length)]
    }
  };

  state = {
    url: '',
    videoId: undefined
  };

  componentDidMount () {
    console.log('data:', this.props.data)
    const { duration, onNext } = this.props
    setTimeout(onNext, duration * 1000)
    const videoId = getVideoId(this.props.data.url, this.setState, () => {})
    this.setState({
      url: this.props.data.url,
      videoId
    })
    this.props.onDataChange(videoId)
  }

  render () {
    const { data, isEditable } = this.props
    const { url, videoId } = this.state

    return (
      <div>
        {isEditable && (
          <Input
            label="URL"
            type="text"
            style={{
              width: '100%'
            }}
            value={url}
            onChange={(e) => this.getVideoId(e.target.value)}
          />
        )}
        <br />
        {url && (
          <div className="iframe-container">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              width={'100%'}
              height={'100%'}
              allowFullScreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            >
              {data.url}
            </iframe>
          </div>
        )}
      </div>
    )
  }
}

WidgetYoutube.config = {
  name: 'Youtube',
  type: 'widget:youtube',
  icon: 'image',
  props: [{
    name: 'url',
    type: 'text',
    defaultValue: ''
  }]
}

export default WidgetYoutube
