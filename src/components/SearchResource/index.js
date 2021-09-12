import React from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'

export const SearchResource = ({ onChange, forwardRef }) => <div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute', left: '0.8rem', top: '0.6rem', color: '#ccc', fontSize: '0.8rem' }}>
    <FAIcon name='search' />
  </div>
  <div className='flex-row'>
    <input
      ref={ forwardRef }
      type='text'
      id='search-resource'
      className='explorer-input'
      autoFocus
      placeholder='search...'
      // value={value}
      onChange={ e => onChange(e.target.value)}
    />
  </div>
</div>

SearchResource.propTypes = {
  onChange: PropTypes.func,
  forwardRef: PropTypes.any
}

export default SearchResource
