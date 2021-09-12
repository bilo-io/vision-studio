import React from 'react'
import MasterChart from './master'
import RGL, { WidthProvider } from 'react-grid-layout'
const ReactGridLayout = WidthProvider(RGL)

export const ChartsGrid = ({ items, data, isExportable, onLayoutChange } : any) => {
  return (
    <ReactGridLayout
      cols={12}
      rowHeight={64}
      width={1200}
      verticalCompact={true}
      preventCollision={false}
      onLayoutChange={onLayoutChange}
    >
      {
        items.map((tile: any, i:number) => (
          <div className='grid-tile' key={i} data-grid={tile.layout}>
            <MasterChart
              isExportable={ isExportable }
              type={tile.type}
              data={data}
              options={ tile.options }
            />
          </div>
        ))}
    </ReactGridLayout>
  )
}

ChartsGrid.defaultProps = {
  items: []
}
export default ChartsGrid
