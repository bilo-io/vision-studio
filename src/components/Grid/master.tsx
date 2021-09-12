/* eslint-disable no-unused-vars */
/* eslint-disable multiline-ternary */
import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'
import WidgetMaster from 'components/Widgets/master'
// import MasterChart from 'charts/master/index.js'
import saturate from 'utils/saturate'
import Empty from './Empty'
import AddTile from './AddTile'
import { getApp, getAppIcon } from 'components/Widgets/util'
import RGL, { WidthProvider } from 'react-grid-layout'
import tiles from 'components/Widgets/tiles'
const ReactGridLayout = WidthProvider(RGL)
const tileTypes = tiles.map(tile => tile.type)
export const MasterGrid = ({
  DEBUG,
  onChangeLayout,
  isExportable,
  isDroppable,
  items,
  data,
  activeTileIndex,
  onDropItem,
  onAddItem,
  onEditItem,
  onClickItem,
  onChangeItem,
  onDeleteItem,
  onClearItem
}: {
  DEBUG?: boolean,
  isExportable?: boolean,
  isDroppable?: boolean,
  items?: any[]
  data?: any
  activeTileIndex?: number
  onChangeLayout?: Function,
  onDropItem?: Function
  onAddItem?: Function
  onEditItem?: Function
  onClickItem?: Function
  onChangeItem?: Function
  onDeleteItem?: Function
  onClearItem?: Function
}) => {
  const [state, setState] = useState<any>({
    dataSources: [],
    allSourceData: [],
    allMappedData: []
  })

  const clearTile = (i: number) => () => onClearItem(i)
  const deleteTile = (i: number) => () => onDeleteItem(i)
  const editTile = (i: number) => () => {
    // const type = tileTypes[parseInt(Math.random() * tileTypes.length)]
    onEditItem(items[i])
  }

  const addTile = () => {
    onAddItem()
  }

  const onChangeTile = (i: number) => (data: any) => {
    const { dataSources } = state
    const tile = items[i]
    if (tile.type === 'widget:upload') {
      setState(
        {
          dataSources: {
            ...dataSources,
            [i]: data
          }
        }
        // TODO: useStateWithCallback
        // () => {
        //   const allSourceData = Object.keys(this.state.dataSources)
        //     .map((index) => this.state.dataSources[index].files)
        //     .flat()

        //   this.setState(
        //     {
        //       allSourceData,
        //       allMappedData: allSourceData.map((frame) => {
        //         return saturate.withAll(frame.data)
        //       })
        //     },
        //     () => console.log('MasterGrid: ', this.state.allMappedData)
        //   )
        // }
      )
    }

    onChangeItem(i, data)
  }

  const renderMasterTile = (type: string, i: number) => {
    const isActive = activeTileIndex === i

    switch (type) {
    case 'grid:empty':
      return (
        <Empty
          onClick={editTile(i)}
          style={
            isActive && items[i].type !== 'grid:add'
              ? { height: 'calc(100% - 2rem)' }
              : undefined
          }
        />
      )
    case 'grid:add':
      return (
        <AddTile
          onClick={addTile}
          style={
            isActive && items[i].type !== 'grid:add'
              ? { height: 'calc(100% - 2rem)' }
              : undefined
          }
        />
      )
    default:
      return null
    }
  }

  const { allSourceData, allMappedData, dataSources } = state
  const buttonStyle = {
    borderRadius: '2rem',
    border: 'none',
    display: 'block',
    width: '1.5rem',
    height: '2rem',
    lineHeight: '2rem',
    position: 'relative',
    outline: 'none',
    fontSize: '0.8rem',
    cursor: 'pointer',
    color: '#888',
    backgroundColor: 'transparent'
  }
  const activeTile =
      activeTileIndex >= 0 &&
      // Object.keys(this.props).length >= 0 &&
      items[activeTileIndex]
  const hasType = activeTile && activeTile.type

  const TileControls = ({ index }: any) => (
    <div
      className="flex-row space-between"
      style={{
        position: 'absolute',
        top: '0rem',
        left: '0rem',
        width: 'calc(100% - 0rem)',
        height: '2rem',
        lineHeight: '2rem',
        // @ts-ignore
        backgroundColor: (getApp(items[index].type) || {}).meta.banner,
        color: 'white'
      }}
    >
      <div className="flex-row">
        <img
          src={getAppIcon(items[index].type)}
          style={{ width: '1.5rem', height: '1.5rem', margin: '0.25rem' }}
        />
        <div style={{ display: 'block' }}>
          {/* @ts-ignore */}
          {getApp(items[index].type).name}
        </div>
      </div>
      <div className="flex-row">
        <button
          // @ts-ignore
          style={{ ...buttonStyle, color: 'inherit' }}
          onClick={editTile(index)}
        >
          <FAIcon name="pen" />
        </button>
        <button
          // @ts-ignore
          style={{ ...buttonStyle, color: 'inherit' }}
          onClick={deleteTile(index)}
        >
          <FAIcon name="times" />
        </button>
      </div>
    </div>
  )

  return (
    <ReactGridLayout
      cols={48}
      rowHeight={12}
      width={1200}
      // compactType={ 'vertical' }
      preventCollision={false}
      // @ts-ignore
      onLayoutChange={onChangeLayout}
      // @ts-ignore
      onDrop={onDropItem}
      isDroppable={isDroppable}
    >
      {items.map((tile, i) => {
        const isActive = activeTileIndex === i
        return (
          <div
            key={i}
            className={`grid-tile ${isActive ? 'active-tile' : ''}`}
            data-grid={tile.layout}
            onClick={onClickItem(i)}
          >
            {tile.type.includes('widget') ? (
              <WidgetMaster
                // @ts-ignore
                index={i}
                type={tile.type}
                // data={ tile.data }
                options={tile.options}
                gridDataAll={allSourceData}
                gridDataTile={dataSources[i]}
                isEditing={isActive}
                isExportable={isExportable && false}
                onChange={onChangeTile(i)}
                onEdit={editTile(i)}
                onClose={editTile(i)}
              />
            ) : tile.type.includes('chart') ? (
              <div>TODO: add MasterChart component</div>
            // TODO: add MasterChart

            // <MasterChart
            //   index={i}
            //   type={tile.type}
            //   // data={ tile.data }
            //   options={tile.options}
            //   gridDataAll={allSourceData}
            //   gridDataTile={dataSources[i]}
            //   isEditing={isActive}
            //   isExportable={isExportable && false}
            //   onChange={this.onChangeTile(i)}
            //   onEdit={this.editTile(i)}
            //   onClose={this.editTile(i)}
            // />
            ) : (
              <Empty
                icon={getAppIcon(items[i].type)}
                onClick={editTile(i)}
                style={
                  isActive
                    ? {
                      // @ts-ignore
                      background: (getApp(items[i].type) || {}).meta.banner,
                      height: 'calc(100% - 2rem)'
                    }
                    : undefined
                }
              />
            )}
            {isActive && items[i].type !== 'grid:add' && (
              <TileControls index={i} />
            )}
          </div>
        )
      })}
    </ReactGridLayout>
  )
}

MasterGrid.defaultProps = {
  items: [],
  isDroppable: true,
  onDropItem: (i: number) =>
    console.log('UNDEFINED: <MasterGrid/>.onDropItem = (elemParams) => {}'),
  onClickItem: (i: number) =>
    console.log('UNDEFINED: <MasterGrid/>.onClickItem = (i) => {}'),
  onClearItem: (i: number) =>
    console.log('UNDEFINED: <MasterGrid/>.onClearItem = (i) => {}'),
  onChangeLayout: (layout: any) =>
    console.log('UNDEFINED: <MasterGrid/>.onChangeLayout = () => {}')
}

// MasterGrid.types = [
//     ...MasterChart.types,
//     // ...WidgetMaster.types
// ]

// MasterGrid.options = [
//     ...MasterChart.options,
//     // ...WidgetMaster.options
// ]

export default MasterGrid
