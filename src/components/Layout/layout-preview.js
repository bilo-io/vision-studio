import React from 'react'
import PropTypes from 'prop-types'

export const LayoutPreview = ({ template, fill, strokeColor, width, height }) => {
  const strokeWidth = 5
  const stroke = strokeColor || 'transparent'
  const defs = <defs>
    <filter id='drop-shadow' x='0' y='0' width='200%' height='200%'>
      <feColorMatrix
        type="matrix"
        in='SourceGraphic'
        result='colorOut'
        values="0.25 0 0 0 0
                            0 0.25 0 0 0
                            0 0 0.25 0 0
                            0 0 0 1 0"
      />
      {/*
                    https://vanseodesign.com/web-design/svg-filter-primitives-fecolormatrix/

                    R G B A M --> R
                    R G B A M --> G
                    R G B A M --> B
                    R G B A M --> A
                */}
      <feOffset in='colorOut' result='offOut' dx='0' dy='1' />
      <feGaussianBlur in='offOut' result='blurOut' stdDeviation='5' />
      <feBlend in='SourceGraphic' in2='blurOut' mode='normal' />
    </filter>
  </defs>
  return <svg width={ width } height={ height } style={{ marginTop: '0.5rem', marginLeft: '0.5rem' }}>
    { defs }
    {
      template.tiles.map((tile, i) => {
        const { layout } = tile
        const scaleFactor = 3
        const aspectRatio = 1.28
        // TODO: make this relative to width & height of parent svg
        const x = layout.x * scaleFactor * aspectRatio
        const y = layout.y * scaleFactor
        const width = layout.w * scaleFactor * aspectRatio - strokeWidth
        const height = layout.h * scaleFactor - strokeWidth

        return <rect key={ i }
          x={ x}
          y={ y }
          width={ width }
          height={ height }
          style={{ fill, strokeWidth, stroke }}
          filter={ 'url(#drop-shadow)'}
        />
      })
    }
  </svg>
}

LayoutPreview.propTypes = {
  template: PropTypes.element,
  fill: PropTypes.string,
  strokeColor: PropTypes.string,
  width: PropTypes.oneOfTypes([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfTypes([PropTypes.number, PropTypes.string])
}
export default LayoutPreview
