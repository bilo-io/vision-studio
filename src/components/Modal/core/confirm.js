// #region Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from '.'
// #endregion
export class ConfirmModal extends Component {
    static propTypes = {
      isOpen: PropTypes.bool,
      title: PropTypes.string,
      type: PropTypes.oneOf([
        'success',
        'warning',
        'error',
        'primary'
      ]),
      children: PropTypes.any,
      onCancel: PropTypes.func,
      onSubmit: PropTypes.func,
      cancelText: PropTypes.string,
      submitText: PropTypes.string,
      requiredText: PropTypes.string
    }

    static defaultProps = {
      title: 'Confirmation',
      submitText: 'Ok',
      cancelText: 'Cancel',
      onCancel: () => { console.log('NOT_DEFINED:\n<AddResourceModal /> props.onCancel') },
      onSubmit: () => { console.log('NOT_DEFINED:\n<AddResourceModal /> props.onSubmit') }
    }

    state = {
      typedText: undefined
    }

    render () {
      const {
        typedText
      } = this.state
      const {
        type,
        isOpen,
        onCancel,
        onSubmit,
        cancelText,
        submitText,
        title,
        children,
        requiredText
      } = this.props
      const isDisabled = requiredText && typedText === requiredText
      return <Modal
        isOpen={ isOpen }
        onClose={ onCancel }
        header={ title }
        type={ type }
        content={
          <div className='auto-scroll'>
            { children }
            {
              requiredText && <div>
                <div>
                                Please type the name <strong>{`${requiredText}`}</strong> to confirm your choice.</div>
                <br />
                <input
                  type='text'
                  className='full-width-padded error'
                  value={ typedText }
                  onChange={ e => this.setState({
                    typedText: e.target.value
                  })}
                />
              </div>
            }
          </div>
        }
        footer={
          <div className='flex-row space-between'>
            <div />
            <div>
              <button
                className='secondary'
                onClick={ onCancel }
                style={{ paddingLeft: '1em', paddingRight: '1em' }}>
                { cancelText }
              </button>
              <button
                className={ type + ' hollow'}
                onClick={
                  () => {
                    if (!isDisabled) {
                      onCancel()
                      onSubmit()
                    }
                  }
                }
                style={{ paddingLeft: '1em', paddingRight: '1em', marginLeft: '0.5em' }}>
                { submitText }
              </button>
            </div>
          </div>
        }
      />
    }
}

export default ConfirmModal
