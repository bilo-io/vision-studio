// #region Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// #endregion Modules

// #region Components
import {
  ConfirmModal
} from 'components'
// #endregion

export class ActionModal extends Component {
    static propTypes = {
      activeModal: PropTypes.string,
      onCancel: PropTypes.func,
      onAction: PropTypes.shape({
        create: PropTypes.func,
        save: PropTypes.func,
        close: PropTypes.func,
        remove: PropTypes.func
      }),
      views: PropTypes.shape({
        create: PropTypes.element,
        save: PropTypes.element,
        close: PropTypes.element,
        remove: PropTypes.element
      }),
      requiredText: PropTypes.string,
      title: PropTypes.any,
      isOpen: PropTypes.bool,
      submitText: PropTypes.func,
      cancelText: PropTypes.string
    }

    renderModalBody = () => {
      const {
        activeModal,
        views
      } = this.props

      return views[activeModal]
    }

    modalToStatus = (activeModal) => {
      switch (activeModal) {
      case 'create':
        return 'primary'
      case 'save':
        return 'success'
      case 'close':
        return 'warning'
      case 'remove':
        return 'error'
      default: return 'info'
      }
    }

    render () {
      const {
        activeModal,
        onAction,
        onCancel,
        requiredText,
        title,
        isOpen,
        submitText,
        cancelText
      } = this.props

      const rest = {
        isOpen,
        title,
        submitText,
        cancelText,
        requiredText
      }

      return (
        <div>
          <ConfirmModal
            { ...rest }
            type={ this.modalToStatus(activeModal) }
            onSubmit={ onAction[activeModal] }
            onCancel={ onCancel }
          >
            { this.renderModalBody() }
          </ConfirmModal>
        </div>
      )
    }
}

export default ActionModal
