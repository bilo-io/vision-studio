/* eslint-disable no-unused-vars */
// https://www.html5rocks.com/en/tutorials/file/dndfiles/
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'components'
import convert from 'utils/convert'
import { bytesToString } from './util'

export const WidgetUpload = ({ onChange, options }: any) => {
  // #region STATE
  const [state, setState] = useState<any>(
    {
      progress: {},
      files: [],
      errors: []
    })
  // #endregion

  // #region FUNCTIONS
  const onChangeData = () => {
    const { progress } = state
    const data = { files: progress.items }
    onChange(data)
  }

  const updateFileProgress = (index: any) => (e: any) => {
    const file = state?.files?.[index]
    if (e.lengthComputable) {
      const ratio = e.loaded / e.total
      setState({
        progress: {
          ...state.progress,
          items: [
            ...state.progress.items.slice(0, index),
            { name: file.name, ratio },
            ...state.progress.items.slice(index + 1)
          ]
        }
      })
    }
  }

  const errorHandler = (e: any) => {
    switch (e.target.error.code) {
    case e.target.error.NOT_FOUND_ERR:
      alert('File Not Found!')
      break
    case e.target.error.NOT_READABLE_ERR:
      alert('File is not readable')
      break
    case e.target.error.ABORT_ERR:
      break // noop
    default:
      alert('An error occurred reading this file.')
    }
  }

  const validationErrors = (files: any[]) => {
    // eslint-disable-next-line no-unused-vars
    const { limitFileSize, limitFileCount, limitFileFormats } = options
    const errors = []

    if (limitFileCount > 0 && limitFileCount < files.length) {
      errors.push({
        name: 'FileUpload',
        message: `ERROR:file_count_limit_exceeded\n   => ${files.length} files is too many ... limit is ${limitFileCount}`
      })
    }
    files.forEach((file, i) => {
      if (limitFileSize > 0 && file.size > limitFileSize) {
        errors.push({
          name: file.name,
          message: `ERROR:file_size_limit_exceeded
                \n=> Your file is ${bytesToString(
    file.size
  )}! The limit is ${bytesToString(limitFileSize)}!
                \n=> Your file is ${bytesToString(
    file.size - limitFileSize
  )} too big!`,
          index: i
        })
      }
    })

    // TODO: check file formats

    return errors
  }

  const handleFiles = (files: any[]) => {
    const progress = {
      ratio: 0,
      items: files.map((file) => ({ name: file.name, ratio: 0 }))
    }

    const errors = this.validationErrors(files)
    if (errors.length > 0) {
      setState({
        errors
      })
      return
    }

    setState(
      {
        files,
        progress
      }
      // TODO: useStateWithCallback
      // () => {
      //   files.forEach((file, i) => {
      //     const reader = new FileReader()
      //     reader.onerror = this.errorHandler
      //     reader.onprogress = this.updateFileProgress(i)
      //     reader.onabort = (e) => {
      //       alert('File read cancelled')
      //       reader.abort()
      //     }

      //     reader.onloadstart = (e) => {}

      //     reader.onload = (e) => {
      //       const { name, type } = file
      //       const { progress } = this.state
      //       const { result } = e.target
      //       const extension = name.split('.').pop()

      //       let data = result
      //       try {
      //         data =
      //           extension === 'json'
      //             ? JSON.parse(result)
      //             : extension === 'csv'
      //               ? convert.csvToJson(result)
      //               : e.target.result
      //       } catch (e) {
      //         console.log(
      //           `ERROR: widget:upload => couldn't parse file\n   -> type: ${type}\n   -> name: ${name}`
      //         )
      //       }

      //       // this.setState(
      //       //   {
      //       //     progress: {
      //       //       ...progress,
      //       //       items: [
      //       //         ...progress.items.slice(0, i),
      //       //         {
      //       //           name,
      //       //           type,
      //       //           data,
      //       //           extension,
      //       //           ratio: 1
      //       //         },
      //       //         ...progress.items.slice(i + 1)
      //       //       ]
      //       //     }
      //       //   },
      //       //   onChangeData
      //       // )
      //     }

      //     reader.readAsText(files[i])
      //     // reader.readAsBinaryString(files[i])
      //     // reader.readAsDataUrl(files[i])
      //     // reader.readAsArrayBuffer(files[i])
      //   })
      // }
    )
  }

  const handleInputFiles = (e: any) => {
    handleFiles(Array.from(e.target.files))
  }

  const handleDndFiles = (e: any) => {
    handleFiles(Array.from(e.dataTransfer.files))
  }
  // #endregion

  // const { width, height } = options
  const { files, progress, errors } = state
  return (
    <div
      className="auto-scroll-y"
      style={{
        width: '100%',
        height: '100%',
        background: '#efeff3',
        color: '#aaa'
      }}
    >
      <br />
      <div
        id="dropzone"
        ref={(ref: any) => {
          // TODO: useRef
          // dropzoneRef = ref
        }}
        onDragOver={() => console.log('onDragOver')}
        onDrop={handleDndFiles}
        style={{
          width: 'calc(100% - 2rem)',
          height: 'calc(100% - 3rem)',
          margin: '1rem',
          marginBottom: '2.5rem',
          border: '1px dashed #aaa',
          alignItems: 'middle'
        }}
      >
        <input
          multiple
          type="file"
          onChange={handleInputFiles}
          style={{ margin: 'auto', background: 'inherit', border: 'none' }}
        />
      </div>
      <br />
      {errors.length > 0
        ? (
          <div style={{ background: 'pink', color: 'red' }}>
            <ul>
              {errors.map((error: any, i: number) => (
                <li key={i}>
                  <b style={{ fontSize: '0.8rem' }}>{error.name}</b>
                  <br />
                  <span style={{ fontSize: '0.7rem' }}>{error.message}</span>
                  <br />
                </li>
              ))}
            </ul>
          </div>
        )
        : (
          <Progress
            ratio={progress.ratio}
            items={progress.items}
            style={{
              marginLeft: '1rem',
              marginRight: '1rem',
              width: 'calc(100% - 2rem)'
            }}
            color="#00adee"
          />
        )}
      <br />
    </div>
  )
}

WidgetUpload.formats = [
  {
    name: 'JSON',
    format: '.json'
  },
  {
    name: 'CSV',
    format: '.csv'
  }
]

WidgetUpload.options = {
  name: 'Upload App',
  type: 'widget:upload',
  icon: 'file-upload',
  props: [{
    name: 'limitFileSize',
    type: 'number',
    defaultValue: -1
  }, {
    name: 'limitFileCount',
    type: 'number',
    defaultValue: -1
  }, {
    name: 'limitFileFormat',
    type: 'multiple',
    defaultValue: []
  }]
}

export default WidgetUpload
