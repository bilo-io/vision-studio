import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components'
import data from './data'
import './style.scss'

export class WidgetGoogle extends Component {
    static propTypes = {
      data: PropTypes.object.isRequired,
      isEditable: PropTypes.bool,
      duration: PropTypes.number,
      onNext: PropTypes.func,
      onDataChange: PropTypes.func,
      type: PropTypes.oneOf([
        'docs',
        'sheets',
        'slides'
      ])
    }

    static defaultProps = {
      onDataChange: (data) => console.log('define <AppGoogle />.onDataChange()'),
      duration: 2
    }

    state = {
      url: data[this.props.type][Math.floor(Math.random() * data[this.props.type].length)]
    }

    getEmbedUrl = (url, type) => {
      if (!url) {
        return ''
      }
      switch (type) {
      case 'slides':
        return url.split('pub').join('embed')
      case 'docs':
      case 'sheets':
      default:
        return url
      }
    }

    componentDidMount () {
      const {
        data,
        type,
        duration,
        onNext
      } = this.props

      const { url } = data

      setTimeout(onNext, duration * 1000)

      this.setState({
        url: this.getEmbedUrl(url, type)
      })
    }

    onChange = (url) => {
      this.props.onDataChange({ url: this.getEmbedUrl(url, this.props.type) })
    }

    render () {
      const { data, isEditable, type } = this.props
      const { url } = this.state
      return <div className='flex-col'>
        {
          isEditable && <Input
            label='URL'
            type='text'
            value={url}
            onChange={this.onChange}
          />
        }
        <br />
        <div className='iframe-container'>
          <iframe
            src={this.getEmbedUrl(data.url, type)}
            frameBorder='0'
            width={960}
            height={960}
            allowFullScreen='true'
            mozallowfullscreen='true'
            webkitallowfullscreen='true'
          >{data.url}
          </iframe>
        </div>
      </div>
    }
}

WidgetGoogle.config = {
  name: 'Google',
  type: 'widget:google',
  icon: 'image',
  props: [{
    name: 'url',
    type: 'text',
    defaultValue: ''
  }]
}
export default WidgetGoogle
