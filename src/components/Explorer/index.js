/* eslint-disable react/no-deprecated */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'
import Highlight from 'react-highlight-words'
import { SearchResource } from 'components'

export class Explorer extends Component {
  static propTypes = {
    resources: PropTypes.array.isRequired,
    showPath: PropTypes.bool,
    rootPath: PropTypes.string,
    collections: PropTypes.array,
    isLoading: PropTypes.bool,
    onClickItem: PropTypes.func,
    resourceIcon: PropTypes.oneOfTypes([PropTypes.string, PropTypes.number])
  };

  static defaultProps = {
    resources: [],
    collections: [],
    showPath: false,
    rootPath: '/'
  };

  state = {
    query: '',
    isToolbarOpen: false,
    filteredResources: [],
    resourcesByCollection: []
  };

  componentWillReceiveProps (nextProps, nextState) {
    this.setResourcesByCollection(nextProps.resources)
  }

  toggleToolbar = () =>
    this.setState({ isToolbarOpen: !this.state.isToolbarOpen });

  toggleCollection = (i) => () =>
    this.setState({
      resourcesByCollection: {
        ...this.state.resourcesByCollection,
        [i]: {
          ...this.state.resourcesByCollection[i],
          isOpen: !this.state.resourcesByCollection[i].isOpen
        }
      }
    });

  selectResource = (resource, i) => () => {
    this.setState(
      {
        activeResource: resource,
        activeResourceIndex: i
      },
      () => console.log(this.state)
    )
    this.props.onClickItem(resource)
  };

  deselect = () =>
    this.setState({ activeResource: undefined, activeResourceIndex: -1 });

  setResourcesByCollection = (resources) => {
    const { collections } = this.props
    const resourcesByCollection = {}
    // TODO: improve this, to only have 1 loop if possible
    collections.forEach((collection, i) => {
      const previousStateFolder = this.state.resourcesByCollection[
        collection.id
      ]
      resourcesByCollection[collection.id] = {
        resources: resources?.filter(
          (presentation, i) => presentation.collectionId === collection.id
        ),
        isOpen: (previousStateFolder && previousStateFolder.isOpen) || false
      }
    })

    const resourcesWithoutCollection = resources?.filter(
      (presentation) => !presentation.collectionId
    )

    this.setState({
      isLoading: false,
      resourcesByCollection,
      resourcesWithoutCollection
    })
  };

  filterResource = (query) => {
    const { resources } = this.props
    const filteredSources = resources.filter((resource) => {
      const isMatchingName = resource.name
        .toLowerCase()
        .includes(query.toLowerCase())
      return isMatchingName
    })
    this.setState({ filteredSources, query })
    this.setResourcesByCollection(filteredSources)
  };

  render () {
    const {
      query,
      activeResource,
      // activeResourceIndex,
      isToolbarOpen,
      // filteredResources,
      resourcesByCollection,
      resourcesWithoutCollection
    } = this.state
    const {
      // resources,
      collections,
      isLoading,
      resourceIcon,
      // showPath,
      rootPath
    } = this.props

    const icon = resourceIcon // NOTE: || item.icon ... in the .map

    const toolbarStyle = {
      flexShrink: 1,
      marginTop: '0rem',
      marginLeft: '0.5rem',
      width: '2rem',
      height: 'calc(2rem - 1px)',
      borderColor: 'transparent'
    }
    const paddedSlot = {
      padding: 'calc(0.5rem - 0.5px)',
      width: 'calc(100% - 1rem)'
    }
    return (
      <div className="vision-explorer">
        <div className="padded flex-row auto-scroll-x" style={paddedSlot}>
          <div style={{ flexGrow: 1 }}>
            <SearchResource onChange={this.filterResource} />
          </div>
          <button
            onClick={this.toggleToolbar}
            className="primary round hollow"
            style={toolbarStyle}
          >
            <FAIcon name="chevron-down" />
          </button>
        </div>
        <div className="divider horizontal" />
        {
          // activeResource && activeResource.id && <div>
          //     <div className='padded auto-scroll-x' style={{ paddingTop: 0, paddingBottom: 0, height: 'calc(3rem - 0px)', lineHeight: 'calc(3rem - 0px)' }}>
          //         { activeResource.id }
          //     </div>
          //     <div className='divider horizontal'/>
          // </div>
        }
        {
          // showPath && <div>
          false && (
            <div>
              <div className="auto-scroll-x" style={paddedSlot}>
                {rootPath}
              </div>
              <div className="divider horizontal" />
            </div>
          )
        }
        {isToolbarOpen && (
          <div>
            <div
              className="flex-row space-between auto-scroll-x"
              style={paddedSlot}
            >
              <div className="flex-row">
                <div>
                  <button className="primary round hollow" style={toolbarStyle}>
                    <FAIcon name="folder-minus" />
                  </button>
                </div>
                <div>
                  <button className="primary round hollow" style={toolbarStyle}>
                    <FAIcon name="folder-plus" />
                  </button>
                </div>
              </div>
              {/* <div className='divider vertical' style={{ flexShrink: '1' }}/> */}
              <div className="flex-row">
                <div>
                  <button className="primary round hollow" style={toolbarStyle}>
                    <FAIcon name="sort-alpha-up" />
                  </button>
                </div>
                <div>
                  <button className="primary round hollow" style={toolbarStyle}>
                    <FAIcon name="sort-amount-up" />
                  </button>
                </div>
                <div>
                  <button className="primary round hollow" style={toolbarStyle}>
                    <FAIcon name="sort-numeric-up" />
                  </button>
                </div>
              </div>
            </div>
            <div className="divider horizontal" />
          </div>
        )}
        {
          // filteredResources?.length === 0 && <div>
          //     No matches found for <b>"{query}"</b>
          // </div>
        }
        {isLoading
          ? (
            <div className="loader" />
          )
          : (
            <div>
              <div
                className="auto-scroll-y"
                style={{ ...paddedSlot, height: 'calc(100vh - 7rem)' }}
              >
                {Object.keys(resourcesByCollection).map((collection, i) => {
                  const isCollectionEmpty =
                  resourcesByCollection[collection].resources.length === 0
                  const showEmptyCollections = false
                  return (
                    (showEmptyCollections || !isCollectionEmpty) && (
                      <div key={i}>
                        <div
                          key={i}
                          className="sidebar-collection"
                          onClick={this.toggleCollection(collection)}
                        >
                          <FAIcon
                            name={
                              resourcesByCollection[collection].isOpen
                                ? 'folder-open'
                                : 'folder'
                            }
                          />
                        &nbsp;&nbsp;
                          <div>
                            <strong>
                              <Highlight
                                searchWords={[query]}
                                highlightClassName="react-highlight-words"
                                textToHighlight={
                                  collections
                                    .filter((c) => c.id === collection)
                                    .pop().name
                                }
                              />
                            </strong>
                          </div>
                        </div>
                        {resourcesByCollection[collection].isOpen &&
                        (resourcesByCollection[collection].resources || []).map(
                          (resource, s) => (
                            <div
                              key={s}
                              className={`sidebar-item ${
                                activeResource &&
                                resource.id === activeResource.id
                                  ? 'selected'
                                  : ''
                              }`}
                              onClick={this.selectResource(resource, s)}
                              style={{
                                width: 'calc(100% - 1.5rem)',
                                marginLeft: '1.5rem'
                              }}
                            >
                              <FAIcon name={icon} />
                              &nbsp;&nbsp;
                              <div>
                                <Highlight
                                  searchWords={[query]}
                                  highlightClassName="react-highlight-words"
                                  textToHighlight={resource.name}
                                />
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )
                  )
                })}
                {(resourcesWithoutCollection || []).map((resource, s) => (
                  <div
                    key={s}
                    className={`sidebar-item ${
                      activeResource && resource.id === activeResource.id
                        ? 'selected'
                        : ''
                    }`}
                    onClick={this.selectResource(resource, s)}
                  >
                    <FAIcon name={icon} />
                  &nbsp;&nbsp;
                    <div>
                      <Highlight
                        searchWords={[query]}
                        highlightClassName="react-highlight-words"
                        textToHighlight={resource.name}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default Explorer
