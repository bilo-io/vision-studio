import React from 'react'
import { withCommas } from 'utils/format-number'

const PriceChange = (
  { percentage, value, symbol, size, isStacked }
    :
    { percentage: number, value?: number, symbol?: string; size: 'sm' | 'md' | 'lg', isStacked?: boolean; }
) => {
  const backgroundColor = percentage > 0
    ? 'rgba(34, 255, 100, 0.3)'
    : percentage === 0
      ? 'rgba(255,255,255,0.2)'
      : 'rgba(200, 0, 0, 0.3)'

  const textColor = percentage > 0
    ? '#22FF11'
    : percentage === 0
      ? '#fff'
      : '#FF0000'
  return (
    <div style={{
      backgroundColor,
      borderRadius: '0.25rem',
      padding: '0.25rem',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      lineHeight: '1rem',
      display: 'flex',
      textAlign: isStacked ? 'center' : 'left',
      flexDirection: isStacked ? 'column' : 'row',
      fontSize: size === 'lg' ? '1.5rem' : size === 'md' ? '1rem' : '0.75rem'
    }}>
      <div style={{
        color: textColor
      }}>{percentage >= 0 ? '+' : ''}{percentage.toFixed(2)}%</div>

      {
        symbol && value && (
          <div style={{
            color: textColor,
            margin: '-0.1rem',
            marginLeft: isStacked ? 0 : '1rem',
            marginTop: isStacked ? '0.5rem' : 0,
            marginBottom: isStacked ? '0.5rem' : 0,
            padding: '0.5rem',
            borderRadius: '0.25rem',
            backgroundColor: 'rgba(0,0,0,0.4)'
            // margin: 'auto',
          }}>
            {symbol}{value && withCommas(Number(value.toFixed(2)))}
          </div>
        )}
    </div>
  )
}

PriceChange.defaultProps = {
  value: null,
  size: 'md',
  percentage: 0,
  symbol: '$',
  isStacked: false
}

export default PriceChange
