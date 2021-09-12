import React from 'react'
import FAIcon from 'react-fontawesome'

export const AddTile = ({ onClick, style }: any) => {
  return <div style={{
    position: 'relative',
    width: 'calc(100% - 4px)',
    height: style?.height || 'calc(100% - 4px)',
    cursor: 'grab',
    // backgroundColor: '#eeeef3',
    backgroundColor: 'transparent',
    border: '2px dotted #ccc',
    color: '#00adee'
  }}>
    <button
      onClick={ onClick }
      className='round'
      style={{
        borderRadius: '2rem',
        border: 'none',
        boxShadow: '0px 5px 5px 1px lightgrey',
        display: 'block',
        width: '3rem',
        height: '3rem',
        margin: 'auto',
        position: 'relative',
        top: 'calc(50% - 1.5rem)',
        outline: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
        color: '#00adee',
        backgroundColor: 'lighten(#00adee, 20%)'
      }}>
      <FAIcon name='plus' />
    </button>
  </div>
}

AddTile.type = 'grid:add'

export default AddTile
