// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import FAIcon from 'react-fontawesome'

export const ActionButtons = ({
  onSave,
  onClose,
  onRemove
}: {
  onSave: Function,
  onClose: Function,
  onRemove: Function
}) => {
  const buttonStyle = {
    marginRight: '0.25em',
    width: '3em',
    height: '3em',
    borderColor: 'transparent'
  }

  return <div className='flex-row'>
    {
      onSave && <button
        className='success hollow round flex-row action-button'
        style={ buttonStyle }
        onClick={ () => onSave() }
        title='Save'
      >
        <div className='icon'><FAIcon name='check-circle' /></div>
      </button>
    }
    {
      onClose && <button
        className='warning hollow round flex-row action-button'
        style={ buttonStyle }
        onClick={ () => onClose() }
        title='Close'
      >
        <div className='icon'><FAIcon name='minus-circle' /></div>
      </button>
    }
    {
      onRemove && <button
        className='error hollow round flex-row action-button'
        onClick={ () => onRemove() }
        title='Delete'
      >
        <div className='icon'><FAIcon name='times-circle' /></div>
      </button>
    }
  </div>
}

export default ActionButtons
