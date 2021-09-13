import React from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'

export const SearchResource = ({ onChange, forwardRef }) => (
  <div style={{ position: 'relative' }}>
    <div
      style={{
        position: 'absolute',
        left: '1.4rem',
        top: '1rem',
        color: '#ccc',
        fontSize: '0.8rem'
      }}
    >
      <FAIcon name='search' />
    </div>
    <div className='flex-row'>
      <input
        ref={forwardRef}
        type='text'
        id='search-resource'
        className='explorer-input full-width'
        autoFocus
        placeholder='search...'
        style={{ textIndent: '2.3rem' }}
        // value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
)

SearchResource.propTypes = {
  onChange: PropTypes.func,
  forwardRef: PropTypes.any
}

export default SearchResource
