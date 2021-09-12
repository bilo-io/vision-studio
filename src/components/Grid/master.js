/* eslint-disable no-unused-vars */
/* eslint-disable multiline-ternary */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'
import WidgetMaster from 'widgets/master/index.js'
import MasterChart from 'charts/master/index.js'
import saturate from 'util/saturate'
import Empty from './empty'
import AddTile from './add-tile'
import { getApp, getAppIcon } from 'widgets/util'
import RGL, { WidthProvider } from 'react-grid-layout'
import tiles from 'widgets/tiles'
const ReactGridLayout = WidthProvider(RGL)
const tileTypes = tiles.map(tile => tile.type)
export class MasterGrid extends Component {
  static propTypes = {
    DEBUG: PropTypes.bool,
    onChangeLayout: PropTypes.func,
    isExportable: PropTypes.bool,
    isDroppable: PropTypes.bool,
    items: PropTypes.array,
    data: PropTypes.array,
    activeTileIndex: PropTypes.number,
    onDropItem: PropTypes.func,
    onAddItem: PropTypes.func,
    onEditItem: PropTypes.func,
    onClickItem: PropTypes.func,
    onChangeItem: PropTypes.func,
    onDeleteItem: PropTypes.func,
    onClearItem: PropTypes.func
  };

  static defaultProps = {
    items: [],
    isDroppable: true,
    onDropItem: (i) =>
      console.log('UNDEFINED: <MasterGrid/>.onDropItem = (elemParams) => {}'),
    onClickItem: (i) =>
      console.log('UNDEFINED: <MasterGrid/>.onClickItem = (i) => {}'),
    onClearItem: (i) =>
      console.log('UNDEFINED: <MasterGrid/>.onClearItem = (i) => {}'),
    onChangeLayout: (layout) =>
      console.log('UNDEFINED: <MasterGrid/>.onChangeLayout = () => {}')
  };

  state = {
    dataSources: [],
    allSourceData: [],
    allMappedData: []
  };

  clearTile = (i) => () => this.props.onClearItem(i);
  deleteTile = (i) => () => this.props.onDeleteItem(i);

  editTile = (i) => () => {
    // const type = tileTypes[parseInt(Math.random() * tileTypes.length)]
    this.props.onEditItem(this.props.items[i])
  };

  addTile = () => {
    this.props.onAddItem()
  };

  onChangeTile = (i) => (data) => {
    const { dataSources } = this.state
    const tile = this.props.items[i]
    if (tile.type === 'widget:upload') {
      this.setState(
        {
          dataSources: {
            ...dataSources,
            [i]: data
          }
        },
        () => {
          const allSourceData = Object.keys(this.state.dataSources)
            .map((index) => this.state.dataSources[index].files)
            .flat()

          this.setState(
            {
              allSourceData,
              allMappedData: allSourceData.map((frame) => {
                return saturate.withAll(frame.data)
              })
            },
            () => console.log('MasterGrid: ', this.state.allMappedData)
          )
        }
      )
    }

    this.props.onChangeItem(i, data)
  };

  onChangeLayout = (layout) => {
    this.props.onChangeLayout(layout)
  };

  renderMasterTile = (type, i) => {
    const { items } = this.props
    const isActive = this.props.activeTileIndex === i

    switch (type) {
    case 'grid:empty':
      return (
        <Empty
          onClick={this.editTile(i)}
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
          onClick={this.addTile}
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
  };

  render () {
    const {
      items,
      data,
      isExportable,
      activeTileIndex,
      onClickItem,
      onDropItem,
      isDroppable,
      DEBUG
    } = this.props
    const { allSourceData, allMappedData, dataSources } = this.state
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
      Object.keys(this.props).length >= 0 &&
      this.props.items[activeTileIndex]
    const hasType = activeTile && activeTile.type

    const TileControls = ({ index }) => (
      <div
        className="flex-row space-between"
        style={{
          position: 'absolute',
          top: '0rem',
          left: '0rem',
          width: 'calc(100% - 0rem)',
          height: '2rem',
          lineHeight: '2rem',
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
            {getApp(items[index].type).name}
          </div>
        </div>
        <div className="flex-row">
          <button
            style={{ ...buttonStyle, color: 'inherit' }}
            onClick={this.editTile(index)}
          >
            <FAIcon name="pen" />
          </button>
          <button
            style={{ ...buttonStyle, color: 'inherit' }}
            onClick={this.deleteTile(index)}
          >
            <FAIcon name="times" />
          </button>
        </div>
      </div>
    )

    DEBUG && console.log(items, this.props)

    return (
      <ReactGridLayout
        cols={48}
        rowHeight={12}
        width={1200}
        // compactType={ 'vertical' }
        preventCollision={false}
        onLayoutChange={this.onChangeLayout}
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
                  index={i}
                  type={tile.type}
                  // data={ tile.data }
                  options={tile.options}
                  gridDataAll={allSourceData}
                  gridDataTile={dataSources[i]}
                  isEditing={isActive}
                  isExportable={isExportable && false}
                  onChange={this.onChangeTile(i)}
                  onEdit={this.editTile(i)}
                  onClose={this.editTile(i)}
                />
              ) : tile.type.includes('chart') ? (
                <MasterChart
                  index={i}
                  type={tile.type}
                  // data={ tile.data }
                  options={tile.options}
                  gridDataAll={allSourceData}
                  gridDataTile={dataSources[i]}
                  isEditing={isActive}
                  isExportable={isExportable && false}
                  onChange={this.onChangeTile(i)}
                  onEdit={this.editTile(i)}
                  onClose={this.editTile(i)}
                />
              ) : (
                <Empty
                  icon={getAppIcon(items[i].type)}
                  onClick={this.editTile(i)}
                  style={
                    isActive
                      ? {
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
