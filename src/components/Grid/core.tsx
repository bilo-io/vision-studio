import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'
const ReactGridLayout = WidthProvider(RGL)

export const Grid = ({
  items, data, isExportable, children,
  onLayoutChange,
  // ReactGridLayout props
  cols,
  rowHeight,
  width,
  verticalCompact,
  preventCollision
}: any) => {
  return (
    <div style={{ height: 'auto', maxHeight: '1024', overflowY: 'auto' }}>
      <ReactGridLayout
        cols={cols}
        rowHeight={rowHeight}
        width={width}
        verticalCompact={verticalCompact}
        preventCollision={preventCollision}
        onLayoutChange={onLayoutChange}
      >
        { children }
      </ReactGridLayout>
    </div>
  )
}

Grid.defaultProps = {
  items: [],
  cols: 12,
  rowHeight: 64,
  width: 1200,
  verticalCompact: true,
  preventCollision: false,
  onLayoutChange: (layout: any) => console.log('<Grid/>: onLayoutChange', layout)
}
export default Grid
