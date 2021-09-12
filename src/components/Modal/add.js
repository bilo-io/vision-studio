import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from '.'
export class AddModal extends Component {
    static propTypes = {
      submitText: PropTypes.string,
      isOpen: PropTypes.bool,
      title: PropTypes.string,
      //   type: PropTypes.oneOf([
      //     'success',
      //     'warning',
      //     'error',
      //     'default'
      //   ]),
      children: PropTypes.any,
      onCancel: PropTypes.func,
      onSubmit: PropTypes.func,
      cancelText: PropTypes.string
    }

    static defaultProps = {
      title: 'Confirmation',
      submitText: 'Ok',
      cancelText: 'Cancel',
      onCancel: () => { console.log('NOT_DEFINED:\n<AddResourceModal /> props.onCancel') },
      onSubmit: () => { console.log('NOT_DEFINED:\n<AddResourceModal /> props.onSubmit') }
    }

    render () {
      const {
        // type,
        isOpen,
        onCancel,
        onSubmit,
        cancelText,
        submitText,
        title,
        children
      } = this.props
      return <Modal
        isOpen={ isOpen }
        onClose={ onCancel }
        header={ title }
        content={
          <div className='auto-scroll'>
            { children }
          </div>
        }
        footer={
          <div style={{ position: 'relative', marginLeft: '1rem', right: '1rem' }}>
            <button
              className='secondary'
              onClick={ onCancel }>
              { cancelText }
            </button>
            <button
              className='primary'
              onClick={
                () => {
                  onCancel()
                  onSubmit()
                }
              }
              style={{ minWidth: '6em' }}>
              { submitText }
            </button>
          </div>
        }
      />
    }
}

export default AddModal
