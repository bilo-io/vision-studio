// import React from 'react'
// const Slideshows = () => <div>Slideshows</div>
// export default Slideshows

// #region Modules
import React, {
  useState,
  useEffect,
  useRef
} from 'react'
import FAIcon from 'react-fontawesome'
import { useHistory, withRouter } from 'react-router'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
// #endregion

// #region Components
// import { ActionModal } from 'components/Modal'
import Accordion from 'components/Accordion'
import {
  ActionButtons,
  DocIndex,
  EditInline,
  Explorer,
  Layout,
  SearchResource
} from 'components'

import { Guide } from './guide'
// #endregion

// #region Misc
import {
  addToast,
  setVideoModal
} from 'store/slices/app/app-actions'
// import { Speech } from 'utils/speech'
import { appendDateTime } from 'utils/date'
import { byField } from 'utils/sort'
import { getSlidesSpecs } from 'utils/slides'
import options from './config'
import api from 'utils/api'
import SlideshowService from './service'
import { RootState } from 'store'
const service = new SlideshowService()
// #endregion

// const speech = new Speech('en-US', 'Samantha')

export const Slideshows = (props: any) => {
  // #region HOOKS
  const history = useHistory()
  const dispatch = useDispatch()
  // #endregion

  // #region STORE
  //   const { slideshow: appSlideshow, slideshows: appSlideshows } = useSelector((state: RootState) => state.apps.slides.slideshows)
  // #endregion

  // #region STATE
  const [isLoading, setIsLoading] = useState(true)
  const [slideshow, setSlideshow] = useState<any>({})
  const [slideshows, setSlideshows] = useState<any[]>([])
  const [slideshowCollections] = useState([])
  const [isAddingCollection, setIsAddingCollection] = useState(true)
  const [, setAddToCollectionIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState(appendDateTime('New Slides'))
  const [, setNewCollectionName] = useState('')
  const [activeModal, setActiveModal] = useState(null)
  const [addToCollectionId, setAddToCollectionId] = useState(null)
  // - Refs
  const explorer = useRef(null)
  const isSelected = Object.keys(slideshow).length > 0
  // #endregion

  // #region MISC
  const onChangeName = (e: any) => {
    const name = e.target.value
    setName(name)
    setSlideshow({
      ...slideshow,
      name
    })
  }
  const exportSlidesTo = (format: any) => () => {
    alert(`format ${format} not supported`)
  }

  const handleSetNewCollectionName = (e: any) => {
    setNewCollectionName(e.target.value)
  }

  const toggleAddToCollection = () => setIsAddingCollection(!isAddingCollection)

  const collectionToAdd = (i: number, collection: any) => () => {
    setAddToCollectionId(collection.id)
    setAddToCollectionIndex(i)
  }

  const shareButtonClassName = 'primary hollow flex-row'
  const shareButtonStyle = { marginBottom: '0.5em' }
  const {
    slidesCount,
    tilesCount,
    duration
  } = getSlidesSpecs(slideshow.slides)
  // #endregion

  // #region RESOURCE
  // RESOURCE - CRUD
  const fetchResource = () => {
    setIsLoading(true)
    SlideshowService.GET_ALL()
      .then((data: any) => {
        setSlideshows(data)
        setIsLoading(false)
      })
      .catch(api.handleError(addToast))
  }

  const selectResource = (resource: any) => {
    setSlideshow(resource)
  }

  // const cancelResource = () => {
  //   setSlideshow({})
  //   explorer.current.deselect()
  // }

  // const addResource = () => {
  //   const slideshow = {
  //     name,
  //     pages: []
  //   }

  //   if (addToCollectionId) {
  //     slideshow.collectionId = addToCollectionId
  //   }

  //   service.create(slideshow)
  //     .then(response => {
  //       cancelResource()
  //       fetchResource()
  //       addToast({
  //         type: 'success',
  //         content: <div>Slideshow was successfully created</div>
  //       })
  //     })
  //     .catch(api.handleError(addToast))
  // }

  const openResource = (resource: any) => () => {
    history.push(`/app/slides/slideshows/edit/${resource.id}`)
  }

  // const saveResource = () => {
  //   addToast({
  //     type: 'warning',
  //     content: <h1>Need to replace API with Firebase for PUT and DELETE</h1>
  //   })
  //   SlideshowService.updateSlideshow(slideshow.id, {
  //     ...slideshow
  //   })
  //     .then((response: any) => {
  //       fetchResource()
  //       addToast({
  //         type: 'success',
  //         content: <div>Slideshow was successfully saved</div>
  //       })
  //     })
  //     .catch(api.handleError(addToast))
  // }

  // const deleteResource = () => {
  //   addToast({
  //     type: 'warning',
  //     content: <h1>Need to replace API with Firebase for PUT and DELETE</h1>
  //   })
  //   SlideshowService.deleteSlideshow(slideshow.id)
  //     .then((response: any) => {
  //       fetchResource()
  //       addToast({
  //         type: 'success',
  //         content: <div>Slideshow was successfully deleted</div>
  //       })
  //     })
  //     .catch(api.handleError(addToast))
  // }
  // #endregion

  // #region MODALS
  const showModal = (activeModal: any) => () => {
    setIsModalOpen(true)
    setActiveModal(activeModal)
  }
  const hideModal = () => {
    setIsModalOpen(false)
    setActiveModal(null)
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    fetchResource()
  }, [])
  // #endregion

  // #region RENDER
  return <div className='page'>
    <Layout
      isRightDark={ !isSelected }
      leftDiv={
        <div>
          <div className='page-header padded flex-row space-between'>
            <div className='flex-row auto-scroll-x'>
              <FAIcon className='icon' name={ options.icon } />
              <br />
              <div className='title'>{ options.name }</div>
            </div>
            <div>
              <button
                className='primary hollow action-button'
                onClick={ () => {
                  setIsAddingCollection(false)
                  showModal('create')()
                }}>
                <div className='icon'>
                  <FAIcon name='plus-circle' />
                </div>
              </button>
            </div>
          </div>
          <div className='divider horizontal'/>
          <Explorer
            ref={ explorer }
            showPath
            rootPath={'slideshows/'}
            name={'Slideshows'}
            resources={ slideshows }
            collections={ slideshowCollections }
            resourceIcon={ options.icon }
            onClickItem={ selectResource }
            isLoading={ isLoading }
          />
        </div>
      }
      rightDiv={ <div>
        <div className='page-header padded'>
          {
            slideshow && Object.keys(slideshow).length > 0
              ? <div className='full-width flex-row space-between'>
                <EditInline
                  value={ slideshow.name }
                  onChange={ onChangeName }
                />
                <div>
                  <ActionButtons
                    onSave={ showModal('save') }
                    onRemove={ showModal('remove') }
                    onClose={ showModal('close') }
                  />
                </div>
              </div>
              : <div>Get Started</div>
          }
        </div>
        <div className='divider horizontal' />
        <div>
          {
            isSelected
              ? <div className='auto-scroll-y' style={{ position: 'relative', height: 'calc(100vh - 3rem)' }}>
                <Accordion title='Summary'>
                  <div className='padded'>
                    <div>Slides: { slidesCount }</div>
                    <br />
                    <div>Tiles: { tilesCount } </div>
                    <br />
                    <div>Duration: { duration } </div>
                    <br />
                    <button className='primary hollow flex-row space-between'
                      onClick={ openResource(slideshow) }>
                      <div style={{ marginLeft: '0.6rem', marginRight: '0.6rem' }}><FAIcon name='pen'/></div>
                      <div style={{ paddingRight: '0.6rem' }}>Edit</div>
                    </button>
                  </div>
                </Accordion>
                <div className='divider horizontal' />
                <Accordion title='Share'>
                  <div className='padded flex-row'>
                    {
                      [
                        { name: 'Preview', type: 'preview', icon: 'play' },
                        { name: 'PDF Export', type: 'pdf', icon: 'file-pdf' },
                        { name: 'Online Link', type: 'online', icon: 'globe' }
                      ].map((exportFormat, i) => <div key={ `${i}-${exportFormat.type}` }>
                        <button
                          className={ shareButtonClassName }
                          style={ shareButtonStyle }
                          onClick={ exportSlidesTo(exportFormat.type) }>
                          <div>&nbsp;&nbsp;<FAIcon name={exportFormat.icon}/></div>
                          <div>&nbsp;&nbsp;{exportFormat.name}</div>
                        </button>
                      </div>)
                    }
                  </div>
                </Accordion>
              </div>
              : <Guide />
          }
        </div>
      </div> }
    />
    {/* <ActionModal
      isOpen={ isModalOpen }
      activeModal={ activeModal }
      resourceName='Schedule'
      onCancel={ hideModal }
      onAction={{
        save: saveResource,
        remove: deleteResource,
        create: addResource
      }}
      views={{
        save: <div>
          <div>Saving will override the existing Schedule.</div>
          <br />
          <div>Are you sure?</div>
        </div>,
        close: <div>
          <div>Leaving now will discard all unsaved changes!</div>
          <br />
          <div>Are you sure you want to leave the Schedule?</div>
        </div>,
        remove: <div>
          <div>Deleting this Schedule cannot be undone!</div>
          <br />
          <div>Are you sure?</div>
        </div>,
        create: <div className='flex-column'>
          <input
            type='text'
            defaultValue={ name }
            onChange={ onChangeName }
            className='full-width-padded'
            placeholder='Slideshows name...'
          />
          <br />
          <br />
          <label>
            <input
              type='checkbox'
              checked={ isAddingCollection }
              onChange={ toggleAddToCollection } />
            <span>
                            Add to a <strong>&nbsp;<FAIcon name='folder' />&nbsp;&nbsp;Collection</strong>
            </span>
          </label>
          {
            isAddingCollection && <div style={{ marginTop: '1rem' }}>
              <input
                type='text'
                onChange={ handleSetNewCollectionName }
                className='full-width-padded'
                placeholder='Collections name...'
              />
              <br />
              <br />
                            OR select a collection:
              <br />
              <br />
              {
                isAddingCollection && <div>
                  {
                    slideshowCollections.map((collection, i) => (
                      <label key={ collection.id }
                        className={ 'sidebar-collection' }
                        style={{ color: `${addToCollectionId === collection.id ? '#00adee' : 'initial'}` }}
                        onClick={ collectionToAdd(i, collection) }
                      >
                                                    &nbsp;&nbsp;
                        <FAIcon name='folder' />
                                                    &nbsp;&nbsp;{ collection.name }
                      </label>
                    ))
                  }
                </div>
              }
            </div>
          }
        </div>
      }}
    /> */}
  </div>
  // #endregion
}

// export default connect(mapStateToProps, mapActionsToProps)(withRouter(Slideshows))
export default Slideshows
