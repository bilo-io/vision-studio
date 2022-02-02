import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import FAIcon from 'react-fontawesome'
import { Accordion } from 'components'
import service from '../service'
import { CourseOutline } from './viewer'
import { CourseCard } from './explorer'

export const CoursePreview = () => {
  // #region STATE
  const [isLoading, setIsLoading] = useState(true)
  const [courses, setCourses] = useState([])
  // #endregion

  // #region FUNCTIONS
  const setChartType = e => {
    this.setState({
      chartType: e.target.value
    })
  }

  const onChange = e => {
  }

  const startCourse = () => {
    this.props.history.push(`${this.props.history.location}/view`)
  }

  const enrollInCourse = () => {
    const { location, history } = this.props

    console.log({
      location,
      history
    })
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    service.getCourses()
      .then(response => {
        console.log(response.data)
        setIsLoading(false)
        setCourses(response.data)
      })
  }, [])
  // #endregion

  const id = window.location.pathname.split('/').pop()
  const course = courses[id] || {}

  return (
    <div className='page course-preview'>
      {
        isLoading
          ? <div className='loader' />
          : <div>
            <div className='header' style={{ backgroundImage: `url(${course.thumbnail})` }}>
              <div className='flex-row space-between'>
                <div>
                  <div className='title'>{ course.name }</div>
                  <br />
                  <div className='description'>{ course.description }</div>
                </div>
                {/* <img src={ course.thumbnail } /> */}
              </div>
            </div>
            <div className='divider horizontal' />
            <div className='actions'>
              <button
                className='success rounded hollow wide'
                onClick={ this.enrollInCourse }
                style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                <FAIcon name='plus' />&nbsp;&nbsp;Enroll</button>
              <button
                className='primary rounded hollow extra-wide'
                onClick={ this.startCourse }
                style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                            Start&nbsp;&nbsp;
                <FAIcon name='play' />
              </button>
            </div>
            <div>
              <div className='divider horizontal' />
              <Accordion title='Syllabus' isOpenDefault>
                <CourseOutline course={ course } />
              </Accordion>
              <div className='divider horizontal' />
              <Accordion title='Recommended' className='flex-row flex-wrap' isOpenDefault>
                { courses.slice(0, 5).map((course, i) => <CourseCard course={ course } key={ i } />) }
              </Accordion>
              <div className='divider horizontal' />
            </div>
          </div>
      }
    </div>
  )
}

export default withRouter(CoursePreview)
