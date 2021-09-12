import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from '.'

export class TextConfirmModal extends Component {
  static propTypes = {
    submitText: PropTypes.string,
    secondaryText: PropTypes.string,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    contentText: PropTypes.string,
    resourceName: PropTypes.string,
    color: PropTypes.string,
    isOpen: PropTypes.bool
  };

  static defaultProps = {
    submitText: 'Ok',
    secondaryText: 'Cancel'
  };

  state = {
    userinput: ''
  };

  submit = (userinput) => () => {
    // const { resourceName } = this.props

    this.props.onSubmit(userinput)
    this.props.onClose()
  };

  updateinput = (e) => {
    this.setState({ userinput: e.target.value })
  };

  render () {
    const { userinput } = this.state
    const {
      color,
      isOpen,
      onClose,
      resourceName,
      contentText,
      submitText,
      secondaryText
    } = this.props

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        header={`Duplicate ${resourceName}`}
        content={
          <div className="auto-scroll">
            {contentText}
            <br />
            <br />
            <input
              className="full-width"
              onChange={this.updateinput}
              value={userinput}
            />
          </div>
        }
        footer={
          <div>
            <button
              // className='secondary'
              onClick={onClose}
            >
              {secondaryText}
            </button>
            <button
              className={color || 'primary'}
              onClick={this.submit(userinput)}
              style={{ minWidth: '6em' }}
            >
              {submitText}
            </button>
          </div>
        }
      />
    )
  }
}

export default TextConfirmModal
