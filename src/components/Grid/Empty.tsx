import React from 'react'
import FAIcon from 'react-fontawesome'

export const Empty = ({ onClick, style, icon }: any) => {
  return <div style={{
    position: 'relative',
    width: 'calc(100% - 2px)',
    height: style?.height || 'calc(100% - 2px)',
    cursor: 'grab',
    backgroundColor: style !== undefined
      ? (style.background || style.backgroundColor)
      : '#eeeef3',
    border: '1px dotted rgba(200,200,200,0.5)'
  }}>
    <div
      onClick={ onClick }
      className='round'
      style={{
        borderRadius: '2rem',
        border: 'none',
        // boxShadow: '0px 5px 5px 1px lightgrey',
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
        backgroundColor: 'rgba(white, 0.8)'
      }}>
      <img src={ icon } style={{ position: 'relative', height: '100%', width: 'auto', opacity: 0.6 }} />
      {/* <FAIcon name='pen' /> */}
    </div>
    <div style={{
      position: 'absolute',
      bottom: '0.5rem',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: 'grey',
      fontSize: '0.8rem'
    }}>
      <div className='flex-row' style={{ marginLeft: '0.5rem' }}>
        {/* @ts-ignore */}
        <FAIcon name='arrows-alt' rotation={ 60 } />
        {/* <div>&nbsp;<b>move</b>&nbsp;me...</div> */}
      </div>
      <br />
      <div className='flex-row' style={{ marginRight: '0.5rem' }}>
        <b>resize</b>&nbsp;
        {/* <FAIcon name='share' rotation={ 90 } /> */}
      </div>
    </div>
  </div>
}

Empty.type = 'grid:empty'

export default Empty
