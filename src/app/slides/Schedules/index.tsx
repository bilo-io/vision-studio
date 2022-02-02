// #region Modules
import React, {
  useState,
  useEffect,
  useRef
} from 'react'
import { Link } from 'react-router-dom'
import FAIcon from 'react-fontawesome'
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
// import Highlight from 'react-highlight-words'
// import BigCalendar from 'react-big-calendar'
// #endregion

// #region Components
// import Calendar from 'components/calendar'
import moment from 'moment'
// import { ActionModal } from 'components/modal'
import {
  Accordion,
  ActionButtons,
  ConfirmModal,
  DocIndex,
  EditInline,
  Explorer,
  Layout,
  SearchResource
} from 'components'
// #endregion

// #region Misc
import {
  addToast,
  setVideoModal
} from 'store/slices/app/app-actions'
// images
import options from './config'
import helpCreate from 'assets/img/slides/help/schedules_create.gif'
import helpEventCreate from 'assets/img/slides/help/schedules_event_create.gif'
import helpActions from 'assets/img/slides/help/schedules_actions.gif'
// import './control-slot'
import api from 'utils/api'
import ScheduleService from './service'
const service = new ScheduleService()
// const localizer = BigCalendar.momentLocalizer(moment)
// #endregion

// #region Redux
// const mapStateToProps = state => ({
//   schedules: state.session.schedules,
//   schedule: state.session.schedule
// })

// #endregion
export const Schedules = (props: any) => {
  // #region STORE
  // const {
  //   schedule: apiSchedule,
  //   schedules: apiSchedules
  // } = useSelector((state: any) => state.apps.slides.schedules)
  // #endregion

  // #region STATE
  const [name, setName] = useState('')
  const [schedule, setSchedule] = useState<any>(null)
  const [schedules, setSchedules] = useState([])
  const [schedulesCollections, setSchedulesCollections] = useState([])
  const [schedulesByCollection, setSchedulesByCollection] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAddingCollection, setIsAddingCollection] = useState(true)
  const [addToCollectionId, setAddToCollectionId] = useState(true)
  const [addToCollectionIndex, setAddToCollectionIndex] = useState(0)
  const [newCollectionName, setNewCollectionName] = useState('')
  const [activeModal, setActiveModal] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [calendarView, setCalendarView] = useState('week')
  const [isEventModalOpen, setIsEventModalOpen] = useState(false)
  const [events, setEvents] = useState([])
  const [currentEvent, setCurrentEvent] = useState<any>(null)
  const [momentStart, setMomentStart] = useState(moment())
  const [momentEnd, setMomentEnd] = useState(moment())
  // - Refs
  const explorer = useRef(null)
  // #endregion

  // #region MISC
  const onChangeName = (e: any) => {
    setName(e.target.value)
  }
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

  // #region RESOURCE
  const selectResource = (resource: any) => {
    setSchedule(resource)
    console.log(resource)
  }

  // const cancelResource = () => {
  //   console.log('Modal: cancel warning ', schedule)
  //   setSchedule(undefined)

  //   explorer?.current?.deselect?.()
  // }

  // RESOURCE - CRUD
  const fetchResource = () => {
    setIsLoading(true)
    // service.create({
    //     events: [],
    //     name: 'Another',
    //     description: 'Testing from Postman Client in VSCode'
    // })
    ScheduleService.GET_ALL()
      .then((data: any) => {
        setSchedules(data)
        setIsLoading(false)
      })
      .catch(api.handleError(addToast))
  }

  // const addResource = () => {
  //   const schedule = {
  //     name,
  //     events: []
  //   }
  //   if (addToCollectionId) {
  //     schedule.collectionId = addToCollectionId
  //   }
  //   service.create(schedule)
  //     .then(data => {
  //       fetchResource()
  //       props.addToast({
  //         type: 'success',
  //         content: <div>Schedule was successfully created</div>
  //       })
  //     })
  //     .catch(api.handleError(props.addToast))
  // }

  // const saveResource = () => {
  //   ScheduleService.updateSchedule(schedule.id)
  //     .then(response => {
  //       fetchResource()
  //       props.addToast({
  //         type: 'success',
  //         content: <div>Schedule was successfully saved</div>
  //       })
  //     })
  //     .catch(api.handleError(props.addToast))
  // }

  // const deleteResource = () => {
  //   ScheduleService.deleteSchedule(schedule.id)
  //     .then(response => {
  //       cancelResource()
  //       fetchResource()
  //       props.addToast({
  //         type: 'success',
  //         content: <div>Schedule was successfully deleted</div>
  //       })
  //     })
  //     .catch(api.handleError(props.addToast))
  // }
  // #endregion

  // #region RESOURCE COLLECTION
  const handleSetNewCollectionName = (e: any) => {
    setNewCollectionName(e.target.value)
  }

  const toggleAddToCollection = () => setIsAddingCollection(!isAddingCollection)

  const collectionToAdd = (i: number, collection: any) => () => {
    setAddToCollectionId(collection?.id)
    setAddToCollectionIndex(i)
  }
  // #endregion

  // #region Calendar
  const showEventModal = (event: any) => {
    console.log('showEventModal: ', event)
    setIsEventModalOpen(true)
    setCurrentEvent(event)
  }

  const hideEventModal = () => setIsEventModalOpen(false)

  const handleSelectEvent = (event: any) => {
    console.log('handleSelectEvent: ', { event })
    const { start, end } = event
    showEventModal({
      title: 'New Event',
      start,
      end
    })
  }

  const updateEventTitle = (e: any) => {
    console.log(e.target.value)

    setCurrentEvent({
      ...currentEvent,
      title: e.target.value
    })
  }

  const saveEvent = () => {
    if (currentEvent.id) {
      // this.setState({
      //     events: rest.updateMember(events, currentEvent.id, {
      //         ...currentEvent,
      //         start: moment(currentEvent.start).format('YYYY-MM-ddTHH:mm'),
      //         end: moment(currentEvent.end).format('YYYY-MM-ddTHH:mm')
      //     })
      // })
    } else {
      // this.setState({
      //     events: [
      //         ...this.state.events,
      //         {
      //             ...this.state.currentEvent
      //         }
      //     ]
      // })
    }
    hideEventModal()
  }

  const addEvent = () => {
    saveEvent()
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
      // isRightDark={schedule === undefined}
      isRightDark
      leftDiv={
        <div>
          <div className='page-header padded flex-row space-between'>
            <div className='flex-row auto-scroll-x'>
              <FAIcon className='icon' name={options.icon} />
              <br />
              <div className='title'>{options.name}</div>
            </div>
            <div>
              <button
                className='primary hollow action-button'
                onClick={() => {
                  setIsAddingCollection(false)
                  showModal('create')()
                }}>
                <div className='icon'>
                  <FAIcon name='plus-circle' />
                </div>
              </button>
            </div>
          </div>
          <div className='divider horizontal' />
          <Explorer
            ref={explorer}
            showPath
            rootPath={'schedules/'}
            name={'Schedules'}
            resources={schedules}
            collections={schedulesCollections}
            resourceIcon={options.icon}
            onClickItem={selectResource}
            isLoading={isLoading}
          />
        </div>
      }
      rightDiv={
        <div>
          <div className='page-header padded'>
            {
              schedule
                ? <div className='full-width flex-row space-between'>
                  <EditInline
                    value={schedule?.name}
                    onChange={() => { }}
                  />
                  <div>
                    <ActionButtons
                      onSave={showModal('save')}
                      onRemove={showModal('remove')}
                      onClose={showModal('close')}
                    />
                  </div>
                </div>
                : <div>Get Started</div>
            }
          </div>
          <div className='divider horizontal' />
          {
            schedule
              ? <div className='react-calendar-container auto-scroll-y' style={{ position: 'relative', height: 'calc(100vh - 3rem)' }}>
                {/* <BigCalendar.ControlledComponent
                  selectable
                  localizer={localizer}
                  events={events}
                  startAccessor='start'
                  endAccessor='end'
                  timeslots={8}
                  view={calendarView}
                  defaultDate={new Date(2015, 3, 12)}
                  onView={setCalendarView}
                  onNavigate={(e) => console.log(e)}
                  onSelectEvent={showEventModal}
                  onSelectSlot={handleSelectEvent}
                /> */}
              </div>
              : <div className='padded  flex-row' style={{ position: 'relative', height: 'calc(100vh - 6rem)' }}>
                <div id={'guide'}>
                  <h4>1. Add a Schedule</h4>
                  <p>
                    Schedules allow you to play specific <Link to='/slides/slideshows/'>Slideshows</Link> at certain times
                    <br />
                    Create a new schedule to start the process.
                  </p>
                  <img
                    src={helpCreate}
                    className='help-gif'
                  />
                  <div className='section-end' />
                  <h4>2. Add an Event</h4>
                  <p>
                    Click on a Schedule in your Explorer to open its calendar.
                    <br />
                    Drag and drop on a timeslot to create an entry.
                    <br />
                    You can always go back to editing an event by clicking on it
                    <br />
                    {'Lastly, assign the desired Slideshow to the event and hit "OK".'}
                  </p>
                  <img
                    src={helpEventCreate}
                    className='help-gif'
                  />
                  <div className='section-end' />
                  <h4>3. Managing Schedules</h4>
                  <p>
                    {'After you\'ve made the desired changes, '}<span className='colors success' style={{ background: 'transparent' }}>Save <FAIcon name='check-circle' /></span> your Schedule.
                    <br />
                    You can also <span className='colors warning' style={{ background: 'transparent' }}>Cancel <FAIcon name='minus-circle' /></span> any changes, to close the current Schedule.
                    <br />
                    To irretrievably <span className='colors error' style={{ background: 'transparent' }}>Delete <FAIcon name='times-circle' /></span> the Schedule, you confirm by typing out the name.
                    <br />
                    After saving it, you can assign Schedules to <Link to='vision-viz/screens'>Screens</Link>.
                  </p>
                  <img
                    src={helpActions}
                    className='help-gif'
                  />
                  <div className='section-end' />
                </div>
                <DocIndex headerQuery={'#guide>h4'} footerQuery={'#guide>.section-end'} />
              </div>
          }
        </div>
      }
    />
    {/* <ActionModal
      isOpen={isModalOpen}
      activeModal={activeModal}
      resourceName='Schedule'
      onCancel={hideModal}
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
            onChange={onChangeName}
            className='full-width-padded'
            placeholder={'Schedule\'s name...'}
          />
          <br />
          <br />
          <label>
            <input
              type='checkbox'
              checked={isAddingCollection}
              onChange={toggleAddToCollection} />
            <span>
              Add to a <strong>&nbsp;<FAIcon name='folder' />&nbsp;&nbsp;Collection</strong>
            </span>
          </label>
          {
            isAddingCollection && <div style={{ marginTop: '1rem' }}>
              <input
                type='text'
                onChange={handleSetNewCollectionName}
                className='full-width-padded'
                placeholder={'Collection\'s name...'}
              />
              <br />
              <br />
              OR select a collection:
              <br />
              <br />
              {
                isAddingCollection && <div>
                  {
                    schedulesCollections.map((collection, i) => (
                      <label key={i}
                        className={'sidebar-collection'}
                        style={{ color: `${addToCollectionId === collection.id ? '#00adee' : 'initial'}` }}
                        onClick={collectionToAdd(i, collection)}
                      >
                        &nbsp;&nbsp;
                        <FAIcon name='folder' />
                        &nbsp;&nbsp;{collection.name}
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

    <ConfirmModal
      isOpen={isEventModalOpen}
      type='primary'
      title={'Edit Event'}
      onCancel={hideEventModal}
      onSubmit={addEvent}
      submitText='Update Event'
      cancelText='Cancel'
    >
      <div>
        <div>Event Name</div>
        <input type='text' />
        <br />
        <div>Start</div>
        <input type='number' />
        <div>End</div>
        <input type='number' />
      </div>
    </ConfirmModal>
  </div>
  // #endregion
}

export default Schedules
