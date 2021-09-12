import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WidgetMaster } from 'widgets'
import RGL, { WidthProvider } from 'react-grid-layout'
const ReactGridLayout = WidthProvider(RGL)

export class AppsGrid extends Component {
  static propTypes = {
    items: PropTypes.array,
    data: PropTypes.array,
    isExportable: PropTypes.bool
  };

  static defaultProps = {
    items: []
  };

  render () {
    const { items, data, isExportable } = this.props
    return (
      <ReactGridLayout
        cols={12}
        rowHeight={64}
        width={1200}
        verticalCompact={true}
        preventCollision={false}
        onLayoutChange={this.onLayoutChange}
      >
        {items.map((tile, i) => (
          <div className="grid-tile" key={i} data-grid={tile.layout}>
            <WidgetMaster
              isExportable={isExportable}
              type={tile.type}
              data={data}
              options={tile.options}
            />
          </div>
        ))}
      </ReactGridLayout>
    )
  }
}

export default AppsGrid
