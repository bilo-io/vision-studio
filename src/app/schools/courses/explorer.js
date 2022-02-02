// #region Modules
import React, {
  useState,
  useEffect
} from 'react'
import { withRouter } from 'react-router'
import FAIcon from 'react-fontawesome'
import { scopeRoot } from '..'
import {
  Accordion,
  CardStack,
  Input,
  QueryBuilder
} from 'components'
// #endregion

// #region Misc
import mockData from 'mock/schools/explore'
import CourseService from './service'
const service = new CourseService()
// #endregion

// TODO: move to separate component file
export const CourseCard = ({ course, onClick }: any) => (
  <CardStack
    isAsync
    width={'12rem'}
    height={'18rem'}
    margin='0 0.75rem 0.75rem 0'
    items={ course.lessons }
    // isSeparate={ collection.items.length > 5}
    renderItem={(item, i) => <>
      <div style={{ position: 'relative', backgroundColor: 'white' }} onClick={() => onClick(item)}>
        <img src={item.url} style={{ width: '100%', height: '6rem', position: 'absolute' }}/>
        <div style={{ paddingTop: '6rem', height: '11rem' }}>
          <div style={{ padding: '0.25rem' }}><strong>{ item.name }</strong></div>
          <div style={{ padding: '0.25rem' }}>{ item.type }</div>
          <div style={{ padding: '0.25rem' }}>{ item.duration }</div>

        </div>
      </div>
    </>}
  >
    <img src={course.thumbnail} style={{ position: 'relative', width: '100%', height: '6rem' }}/>
    <div style={{ padding: '0.5rem', zIndex: 2 }}>
      <div ><b>{course.name}</b></div>
      <div style={{ fontSize: '0.8rem' }}>{course.text}</div>
    </div>
    <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
      <div className='divider horizontal' />
      <div className='flex-row space-between' style={{ padding: '0.5rem' }}>
        <div>{(course.lessons || []).length}</div>
        <div style={{ paddingRight: '0.25rem' }}><FAIcon name='ellipsis-v' /></div>
      </div>
    </div>
  </CardStack>
)

export const CoursesExplorer = (props) => {
  // #region STATE
  const [isLoading, setIsLoading] = useState(false)
  const [courses, setCourses] = useState(mockData)
  const [filteredCourses, setFilteredCourses] = useState([])
  const [query, setQuery] = useState('')
  // #endregion

  // #region HELPERS
  const filterCourses = query => {
    const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(query.toLowerCase()))
    setQuery(query)
    setFilteredCourses(filteredCourses)
  }
  // #endregion

  // #region HANDLERS
  const onChange = e => {
    console.log('Course Search ', e.target.value)
    filterCourses(e.target.value)
  }

  const openCourse = (course, index) => () => {
    console.log('<CoursesExplorer/>.openCourse: ', course)
    history.push(`${scopeRoot}/courses/${index}`)
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    // TODO: redux
    // service.GET_ALL()
    //   .then(data => {
    //     console.log({ data })
    //     setIsLoading(false)
    //     setCourses(data)
    //   })
    // filterCourses('')
  }, [])
  // #endregion

  // #region RENDER
  return <div className='page'>
    <div className='margined'>
      <br />
      {/* <QueryBuilder
        onChange={ onChange }
      /> */}
      <br />
      {
        !isLoading && <div className='category-picker'>
          {
            [
              { label: 'All' },
              { label: 'Science' },
              { label: 'Programming' },
              { label: 'Design' }
            ].map((category, i) => (
              <div key={ i } className='item'>{ category.label }</div>
            ))
          }
        </div>
      }
      {
        isLoading
          ? <div className='loader' />
          : <div className='flex-row flex-wrap'>
            {
              (query.length === 0
                ? courses
                : filteredCourses).map((course, i) => (
                <CourseCard
                  key={ i }
                  course={ course }
                  index={ i }
                  onClick={ openCourse(course, i) }
                />
              ))
            }
          </div>
      }
    </div>
  </div>
  // #endregion
}

export default withRouter(CoursesExplorer)
