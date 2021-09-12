import React from 'react'
import PropTypes from 'prop-types'
import Circular from './circular'

export * from './circular'

export const Progress = ({
  ratio, color, items, ...rest
}: {
  ratio: number, color: string, items: any[]
}) => {
  // debugger
  const downloadRatio = items
    ? items.length === 0
      ? 0
      // eslint-disable-next-line no-return-assign
      : items.map(item => item.ratio).reduce((prev, curr) => curr += prev) / items.length
    : ratio

  const backgroundBarStyle = {
    width: '100%',
    minHeight: '0.5rem',
    height: '0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: '#ddd',
    border: '1px solid transparent',
    overflow: 'hidden'
  }

  return (
    // @ts-ignore
    <div style={{ ...rest?.style }}>
      <div style={backgroundBarStyle}>
        <div style={{ width: downloadRatio * 100 + '%', height: '100%', borderRadius: '0.25rem', backgroundColor: color }} />
      </div>
      <br />
      {/* //TODO This doesn't make fully sense */}
      {items?.length > 1 && (items || []).map((item, i) => <div
        key={i} style={{ marginLeft: '10%', fontSize: '0.7rem', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '0.25rem' }}
        className='flex-row'
      >
        <Circular
          diameter={32}
          progress={item.ratio}
          color='#00adee'
        />
        <div>
          {item.name}
        </div>
        {/*
      <div style={{ ...backgroundBarStyle, width: '90%', height: '4px' }}>
          <div style={{ width: item.ratio * 100 + `%`, height: '100%', borderRadius: '2px', backgroundColor: color, opacity: 0.8 }} />
      </div>
      */}
      </div>)}
    </div>
  )
}

Progress.propTypes = {
  color: PropTypes.string,
  ratio: 0,
  items: PropTypes.array,
  style: {
    width: '100%'
  }
}

Progress.defaultProps = {
  color: '#00adee',
  ratio: 0,
  style: {
    width: '100%'
  }
}
