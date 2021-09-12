import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Input, SoundCloud } from 'components'
// import getTrackId from './utils'
import sampleData from './data'

let timeout:any
export const WidgetSoundcloud = ({ duration, onNext, data, isEditable }: { duration: number, data: any, onNext?: Function, isEditable?: boolean}) => {
  const [state, setState] =
    useState<any>({
      url: '',
      trackId: undefined
    })

  // #region FUNCTIONS
  const getTrackId = (url: string) => {
    getTrackId(url)
      .then((trackId: any) => {
        console.log('SUCCESS => Soundcloud TrackID: ', trackId)
        setState({
          url,
          trackId
        })
      })
      .catch((error: any) => {
        console.log(`ERROR => Soundcloud TrackID: ${error}`)
      })
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    getTrackId(data.url)
    timeout = setTimeout(() => onNext?.(), duration * 1000)

    return () => {
      // @ts-ignore
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    getTrackId(state.url)
  }, [state.url])
  // #endregion

  const { url, trackId } = state

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden'
      }}
    >
      {isEditable && (
        <Input
          label="URL"
          type="text"
          value={url}
          style={{
            width: '100%'
          }}
          onChange={(e) => this.getTrackId(e.target.value)}
        />
      )}
      <br />
      {url && (
        <div className="">
          <SoundCloud url={data.url} trackId={trackId} />
        </div>
      )}
    </div>
  )
}

WidgetSoundcloud.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  onDataChange: PropTypes.func,
  isAutoplay: PropTypes.bool,
  isLooping: PropTypes.bool,
  duration: PropTypes.number,
  sampleData: PropTypes.array
}

WidgetSoundcloud.defaultProps = {
  isAutoplay: true,
  isLooping: false,
  onDataChange: (data: any) => console.log('define WidgetYoutube.onDataChange()'),
  duration: 4,
  data: {
    url: sampleData[Math.floor(Math.random() * sampleData.length)],
    trackId: 55106914
  }
}

WidgetSoundcloud.config = {
  name: 'Soundcloud',
  type: 'widget:soundcloud',
  icon: 'image',
  props: [{
    name: 'url',
    type: 'text',
    defaultValue: ''
  }]
}
export default WidgetSoundcloud
