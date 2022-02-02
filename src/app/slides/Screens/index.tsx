import React from 'react'
const Screens = () => <div>Screens</div>
export default Screens

// // #region Modules
// import React, {
//   useState,
//   useEffect,
//   useRef
// } from 'react'
// import FAIcon from 'react-fontawesome'
// // import Highlight from 'react-highlight-words'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// // #endregion

// // #region Components
// import Accordion from 'components/Accordion'
// import {
//   ActionButtons,
//   Circular,
//   DocIndex,
//   EditInline,
//   Explorer,
//   Layout
//   // SearchResource,
//   // ConfirmModal
// } from 'components'
// import { ActionModal } from 'components/Modal'
// // #endregion

// // #region Misc
// import random from 'util/random'
// import api from 'util/api'

// import {
//   addToast,
//   setVideoModal
// } from 'data/redux/session/actions'
// // import { ScreenMap } from './map'
// // TODO: put get-started content into 'config.js'
// import helpCreate from 'assets/img/slides/help/screens_create.gif'
// import helpClient from 'assets/img/slides/help/screens_client.png'
// import macMonitor from 'assets/img/slides/mac_monitor.png'
// import options from './config'
// import ScreenService from './service'
// const service = new ScreenService()
// // #endregion

// // #region Redux
// const mapStateToProps = state => ({
//   screens: state.session.screens,
//   screen: state.session.screen
// })

// const mapActionsToProps = dispatch => bindActionCreators({
//   addToast,
//   setVideoModal
// }, dispatch)
// // #endregion

// export type ScreensProps = {
//   addToast: Function
// }
// export const Screens = ({ addToast }: ScreensProps) => {
//   // #region STATE
//   const [isLoading, setIsLoading] = useState(true)
//   const [screens, setScreens] = useState([])
//   const [screen, setScreen] = useState([])
//   const [name, setName] = useState('')
//   const [newCollectionName, setNewCollectionName] = useState('')
//   const [screensCollections, setScreensCollections] = useState([])
//   const [isMapOpen, setIsMapOpen] = useState(false)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [isAddingCollection, setIsAddingCollection] = useState(null)
//   const [addToCollectionIndex, setAddToCollectionIndex] = useState(null)
//   const [addToCollectionId, setAddToCollectionId] = useState(null)
//   const [activeModal, setActiveModal] = useState(null)
//   // - Refs
//   const explorer = useRef(null)
//   // #endregion MODALS

//   // #region LIFECYCLE
//   useEffect(() => {
//     fetchResource()
//   }, [])
//   // #endregion MODALS

//   // #region MODALS
//   const toggleMap = () => setIsMapOpen(!isMapOpen)
//   const showModal = (activeModal) => () => {
//     setIsModalOpen(true)
//     setActiveModal(activeModal)
//   }
//   const hideModal = () => {
//     setIsModalOpen(false)
//     setActiveModal(null)
//   }
//   // #endregion MODALS

//   // #region MISC
//   const onChangeName = e => {
//     setName(e.target.value)
//   }

//   const handleSetNewCollectionName = e => {
//     setNewCollectionName(e.target.value)
//   }

//   const toggleAddToCollection = () => setIsAddingCollection(!isAddingCollection)

//   const collectionToAdd = (i, collection) => () => {
//     setAddToCollectionId(collection.id)
//     setAddToCollectionIndex(i)
//     console.log(addToCollectionId)
//   }
//   // #endregion

//   // #region RESOURCE
//   const selectResource = (resource) => {
//     setScreen(resource)
//     console.log(resource)
//   }

//   const cancelResource = () => {
//     setScreen(undefined)
//     explorer.current.deselect()
//   }

//   // RESOURCE - CRUD
//   const fetchResource = () => {
//     setIsLoading(true)
//     service.getAll()
//       .then((data: any) => {
//         setScreens(data)
//         setIsLoading(false)
//       })
//       .catch(api.handleError(addToast))
//   }

//   const addResource = () => {
//     const newScreen = {
//       name,
//       code: random.alphaNumeric(6),
//       status: {
//         health: 'UNASSIGNED'
//       }
//     }

//     if (addToCollectionId) {
//       newScreen.collectionId = addToCollectionId
//     }

//     service.create(newScreen)
//       .then((data: any) => {
//         fetchResource()
//         addToast({
//           type: 'success',
//           content: <div>Screen was successfully created</div>
//         })
//       })
//       .catch(api.handleError(addToast))
//   }

//   const saveResource = () => {
//     addToast({
//       type: 'warning',
//       content: <h1>Need to replace API with Firebase for PUT and DELETE</h1>
//     })
//     ScreenService.updateSchedule(screen.id)
//       .then((response: any) => {
//         fetchResource()
//         addToast({
//           type: 'success',
//           content: <div>Screen was successfully saved</div>
//         })
//       })
//       .catch(api.handleError(addToast))
//   }

//   const deleteResource = () => {
//     addToast({
//       type: 'warning',
//       content: <h1>Need to replace API with Firebase for PUT and DELETE</h1>
//     })
//     ScreenService.deleteScreen(screen.id)
//       .then((response: any) => {
//         cancelResource()
//         fetchResource()
//         addToast({
//           type: 'success',
//           content: <div>Schedule was successfully saved</div>
//         })
//       })
//       .catch(api.handleError(addToast))
//   }
//   // #endregion

//   // #region RENDER
//   const renderStatus = (status: any) => {
//     let color

//     switch (status) {
//     case 'on': color = 'success'
//       break
//     case 'off': color = 'warning'
//       break
//     default: color = '#aaa'
//     }

//     return <span
//       className={ color }
//       style={{
//         padding: '0 0.5rem 0 0.5rem',
//         height: '2rem',
//         lineHeight: '2rem',
//         backgroundColor: color,
//         borderRadius: '1rem',
//         color: 'white'
//       }}
//     >
//       { status.toUpperCase() }
//     </span>
//   }

//   const renderStorage = (storage) => {
//     return storage && <div className='flex-row' style={{ margin: 'auto', width: '12rem' }}>
//       <Circular
//         diameter={ 24 }
//         progress={ storage && storage.ratio }
//         color={ '#00adee' }
//         style={{ marginRight: '0.5rem' }}
//       />
//       <div>{ storage.current } / { storage.total }</div>
//     </div>
//   }

//   return <div className='page'>
//     <Layout
//       isRightDark={ screen === undefined }
//       leftDiv={
//         <div>
//           <div className='page-header padded flex-row space-between'>
//             <div className='flex-row auto-scroll-x'>
//               <FAIcon className='icon' name={ options.icon } />
//               <br />
//               <div className='title'>{ options.name }</div>
//             </div>
//             <div>
//               <button
//                 className='primary hollow action-button'
//                 onClick={ toggleMap }
//               >
//                 <div className='icon'>
//                   <FAIcon name='map' />
//                 </div>
//               </button>
//               <button
//                 className='primary hollow action-button'
//                 onClick={ () => {
//                   setIsAddingCollection(false)
//                   showModal('create')()
//                 }}>
//                 <div className='icon'>
//                   <FAIcon name='plus-circle' />
//                 </div>
//               </button>
//             </div>
//           </div>
//           <div className='divider horizontal'/>
//           <Explorer
//             ref={ explorer }
//             showPath
//             rootPath={'screens/'}
//             name={'Screens'}
//             resources={ screens }
//             collections={ screensCollections }
//             resourceIcon={ options.icon }
//             onClickItem={ selectResource }
//             isLoading={ isLoading }
//           />
//         </div>
//       }
//       rightDiv={
//         <div>
//           <div className='page-header padded'>
//             {
//               screen
//                 ? <div className='full-width flex-row space-between'>
//                   <EditInline
//                     value={ screen.name }
//                     onChange={ () => {}}
//                   />
//                   <div>
//                     <ActionButtons
//                       onSave={ showModal('save') }
//                       onRemove={ showModal('remove') }
//                       onClose={ showModal('close') }
//                     />
//                   </div>
//                 </div>
//                 : <div>Get Started</div>
//             }
//           </div>
//           <div className='divider horizontal' />
//           {
//             isMapOpen
//               // ? <ScreenMap theme={ screen === undefined ? 'dark' : 'light' } />
//               ? <div><h1>Map</h1></div>
//               : screen
//                 ? <div className='auto-scroll-y' style={{ position: 'relative', height: 'calc(100vh - 3rem)' }}>
//                   <Accordion isOpenDefault title={'Details'}>
//                     <div className='padded align-center'>
//                       <img src={ macMonitor } style={{ position: 'relative', width: '28rem', margin: 'auto' }} />
//                       <div className='align-center' style={{ position: 'absolute', top: '6rem', width: 'calc(100% - 2rem)' }}>
//                         <br />
//                         <div>{ screen?.status && renderStatus((screen.health?.status) || '')}</div>
//                         <br />
//                         <div><strong>{ screen.code }</strong></div>
//                         <br />
//                         <div>{ screen?.status && renderStorage(screen.status.storage) }</div>
//                         <br />
//                         <div>{ `${screen?.display?.width} x ${screen?.display?.height}` }</div>
//                       </div>
//                       <div>
//                         <br />
//                         {
//                           screen.platform && <div className='flex-row space-between'>
//                             <div>
//                               <div><b>{ screen.platform }</b></div>
//                               <br />
//                               <div className='divider horizontal' style={{ width: '200px', margin: 'auto' }} />
//                               <br />
//                               <div>{ screen.cores } cores</div>
//                               <div>{ screen.ram }GB RAM</div>
//                             </div>
//                             <div>
//                               <br />
//                               <button className='primary hollow round'>
//                                                                 &nbsp;&nbsp;ping&nbsp;&nbsp;
//                               </button>
//                             </div>
//                             <div>
//                               <div><b>Connection</b></div>
//                               <br />
//                               <div className='divider horizontal' style={{ width: '200px', margin: 'auto' }}/>
//                               <br />
//                               <div>{ screen.connectionType } | { screen.connectionSpeed } Mbps</div>
//                             </div>
//                           </div>
//                         }
//                       </div>
//                     </div>
//                   </Accordion>
//                   <div className='divider horizontal' />
//                   <Accordion isOpenDefault title={'Schedule'}>
//                     <div className='padded'>
//                       <div
//                         style={{
//                           width: '10rem',
//                           height: '6rem',
//                           marginRight: '0.5rem',
//                           border: '1px solid lightgrey',
//                           padding: '1rem',
//                           cursor: 'pointer'
//                         }}
//                       >
//                         { screen.scheduleId }
//                         <div>SVG Preview of Calendar Week Schedule</div>
//                       </div>
//                     </div>
//                   </Accordion>
//                   <div className='divider horizontal' />
//                   <Accordion isOpenDefault title={'Slideshows'}>
//                     <div className='flex-row flex-wrap padded'>
//                       {
//                         (screen.slideIds || []).map((slideId, s) => (
//                           <div
//                             key={ `${slideId}${s}` }
//                             className='card'
//                             style={{
//                               width: '10rem',
//                               height: '6rem',
//                               marginRight: '0.5rem',
//                               border: '1px solid lightgrey',
//                               padding: '1rem',
//                               cursor: 'pointer'
//                             }}>
//                             { slideId }
//                           </div>
//                         ))
//                       }
//                     </div>
//                   </Accordion>
//                   <div className='divider horizontal' />
//                   <Accordion isOpenDefault title={'Screensaver'}>
//                     <div className='padded'>
//                       <div>
//                                                     This is the content displayed when no slideshow is currently playing
//                       </div>
//                       <ul>
//                         <li>Time</li>
//                         <li>Time & Screen Name</li>
//                         <li>Screen Name</li>
//                         <li>Splash Image (Paying customers)</li>
//                       </ul>
//                     </div>
//                   </Accordion>
//                 </div>
//                 : <div className='padded flex-row' style={{ position: 'relative', height: 'calc(100vh - 6rem)' }}>
//                   <div id={'guide'}>
//                     <div className='section'>1. Add a Screen</div>
//                     <div>
//                                                 To show your information on display devices, start with creating a Virtual Screen.
//                     </div>
//                     <img
//                       src={ helpCreate }
//                       className='help-gif'
//                     />
//                     <div className='section-end' />
//                     <div className='section'>2. Link to Device</div>
//                     <div>
//                                                 After you've created a virtual screen, time to link it up to a real one.
//                       <br />
//                                                 Go on the desired device, visit <a href={ window.location.toString() }>Vision Viz Client Site</a>.
//                       <br />
//                                                 There you can enter the code of your Virtual Screen, to complete the handshake.
//                     </div>
//                     <div className='section-end' />
//                     <img
//                       src={ helpClient }
//                       className='help-gif'
//                     />
//                     <div className='section'>3. Play Content on a Screen</div>
//                     <div>
//                                             You can either assign a Slideshow to a screen, which will be repeated indefinitely.
//                       <br />
//                                             Or you can create a Schedule, with multiple Slideshows at different timeslots, and assign that to the Screen.
//                       <br />
//                                             The choice is yours!
//                     </div>
//                     <img
//                       src={ helpCreate }
//                       className='help-gif'
//                     />
//                     <div className='section-end' />
//                   </div>
//                   <DocIndex headerQuery={'#guide>.section'} footerQuery={'#guide>.section-end'}/>
//                 </div>
//           }
//         </div>
//       }
//     />
//     <ActionModal
//       isOpen={ isModalOpen }
//       activeModal={ activeModal }
//       resourceName='Screen'
//       onCancel={ hideModal }
//       onAction={{
//         save: saveResource,
//         remove: deleteResource,
//         create: addResource
//       }}
//       views={{
//         save: <div>
//           <div>Saving will override the existing Screen.</div>
//           <br />
//           <div>Are you sure?</div>
//         </div>,
//         close: <div>
//           <div>Leaving now will discard all unsaved changes!</div>
//           <br />
//           <div>Are you sure you want to leave the Screen?</div>
//         </div>,
//         remove: <div>
//           <div>Deleting this Screen cannot be undone!</div>
//           <br />
//           <div>Are you sure?</div>
//         </div>,
//         create: <div>
//           <div className='flex-column'>
//             <input
//               onChange={ onChangeName }
//               className='full-width-padded'
//               placeholder={ 'Screen\'s name...' }
//             />
//             <br />
//             <br />
//             <label>
//               <input
//                 type='checkbox'
//                 checked={ isAddingCollection }
//                 onChange={ toggleAddToCollection } />
//               <span>
//                                     Add to a <strong>&nbsp;<FAIcon name='folder' />&nbsp;&nbsp;Collection</strong>
//               </span>
//             </label>
//             {
//               isAddingCollection && <div style={{ marginTop: '1rem' }}>
//                 <input
//                   type='text'
//                   onChange={ handleSetNewCollectionName }
//                   className='full-width-padded'
//                   placeholder={ 'Collection\'s name...' }
//                 />
//                 <br />
//                 <br />
//                                     OR select a collection:
//                 <br />
//                 <br />
//                 {
//                   isAddingCollection && <div>
//                     {
//                       screensCollections.map((collection, i) => (
//                         <label key={ collection.id }
//                           className='sidebar-collection'
//                           style={{ color: `${addToCollectionId === collection.id ? '#00adee' : 'initial'}` }}
//                           onClick={ collectionToAdd(i, collection) }
//                         >
//                                                         &nbsp;&nbsp;
//                           <FAIcon name='folder' />
//                                                         &nbsp;&nbsp;{ collection.name }
//                         </label>
//                       ))
//                     }
//                   </div>
//                 }
//               </div>
//             }
//           </div>
//         </div>
//       }}
//     />
//   </div>
//   // #endregion
// }

// export default connect(mapStateToProps, mapActionsToProps)(Screens)
