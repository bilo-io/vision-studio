import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'

export class Modal extends Component {
    static propTypes = {
      type: PropTypes.string,
      header: PropTypes.string.isRequired,
      content: PropTypes.element,
      footer: PropTypes.element,
      children: PropTypes.element,
      isOpen: PropTypes.bool.isRequired,
      onClose: PropTypes.func.isRequired
    }

    onClickBackground = () => {
      this.props.onClose()
    }

    onClickModal = (e) => {
      e.stopPropagation()
    }

    render () {
      const {
        type,
        header,
        content,
        footer,
        children,
        isOpen,
        onClose
      } = this.props

      return <div className={`modal-container ${!isOpen ? 'closed' : ''}`}
        onClick={ this.onClickBackground }>
        <div className='modal' onClick={ this.onClickModal }>
          <div className={`modal-header ${type}`}>
            <span>{header}</span>
            <span className='close-button' onClick={onClose}><FAIcon name='times'/></span>
          </div>
          <div className='modal-body'>{content || children}</div>
          {
            footer && <div className='modal-footer flex-row-rev'>
              { footer }
            </div>
          }
        </div>
      </div>
    }
}

export default Modal
