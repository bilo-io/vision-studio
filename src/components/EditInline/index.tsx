import React from 'react'
import FAIcon from 'react-fontawesome'

export const EditInline = ({
  value,
  onChange
}: any) => {
  return <div className='edit-inline'>
    <div className='title' contentEditable
      suppressContentEditableWarning={true}
      onInput={ onChange }
      onBlur={ onChange }
      onChange={ onChange }
    >{ value }</div>
    <div className='icon'><FAIcon name='pen' /></div>
  </div>
}

export default EditInline
