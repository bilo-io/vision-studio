import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'components'
import { WidgetYoutube } from 'widgets'
import config from './_config'

export class VideoModal extends Component {
    static propTypes = {
      submitText: PropTypes.string,
      isOpen: PropTypes.bool,
      type: PropTypes.oneOf([
        'success',
        'warning',
        'error',
        'default'
      ]),
      children: PropTypes.any,
      title: PropTypes.string,
      onClose: PropTypes.func
    }

    static defaultProps = {
      submitText: 'OK' // t('words.ok')
    }

    state = {
      url: 'https://www.youtube.com/watch?v=lCGlIjLT8OQ'
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillReceiveProps (nextProps, nextState) {
      this.detectVideo()
    }

    detectVideo = () => {
      const path = window.location.pathname.split('/').filter(item => item.length > 0)
      const feature = path[1]
      const hasId = !!path[2] && !Number.isNaN(path[2])
      const url = config.helpVideos[feature] && config.helpVideos[feature][`${hasId ? 'item' : 'index'}`]
      // console.log({ feature, path, url })
      if (url) {
        this.setState({
          url
        }, () => console.log(feature, path[2], this.state))
      }
    }

    render () {
      const {
        type,
        // title,
        isOpen,
        onClose
        // children,
        // contentText,
        // submitText
      } = this.props

      const { url } = this.state

      return <Modal
        isOpen={ isOpen }
        onClose={ () => this.setState({ url: '' }, onClose) }
        header={`Tutorial Video: ${type || ''}`}
        content={<div className='auto-scroll'>
          {/* <WidgetYoutube
                    data={{ url }}
                    onDataChange={ (data) => {}}
                /> */}
        </div>}
      />
    }
}

export default VideoModal
