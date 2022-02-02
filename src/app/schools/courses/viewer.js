import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import { Code, Markdown, Layout, JsonInput, Tabs } from 'components'

export const CourseOutline = ({ course }) => (
  (course.lessons || []).map((lesson, i) => (
    <div key={ i } className='course-lesson flex-row space-between'>
      <div className='flex-row'>
        <div className='flex-col'>
          <div style={{ marginLeft: '1rem', marginRight: '1rem', width: '1px', height: '1.75rem', backgroundColor: '#00adee' }} />
          <div className={`circle ${lesson.isComplete ? 'filled' : ''}`} />
          <div style={{ marginLeft: '1rem', marginRight: '1rem', width: '1px', height: '1.75rem', backgroundColor: '#00adee' }} />
        </div>
        <div className='title'>{ lesson.name }</div>
      </div>
      <div className={'duration'}>{ lesson.duration }</div>
    </div>
  ))
)

export class CourseViewer extends Component {
    state = {
      course: {
        lessons: [
          {
            duration: 120,
            name: 'Intro to Web Dev',
            type: 'markdown',
            data: '#The beginning'
          },
          {
            duration: 120,
            name: 'Intro to Web Dev - Quiz',
            type: 'testing:quiz',
            data: [
              // array of questions, with possible answers
            ]
          },
          {
            duration: 300,
            name: 'Overview',
            type: 'video',
            data: 'http://youtube.com'
          },
          {
            duration: 120,
            name: 'Overview - Quiz',
            type: 'testing:quiz',
            data: [
              // array of questions, with possible answers
            ]
          },
          {
            duration: 120,
            name: 'Frontend development 101',
            type: 'video',
            data: [
              // array of questions, with possible answers
            ]
          },
          {
            duration: 300,
            name: 'Frontend development 101 - Test',
            type: 'testing:test',
            data: [
              // array of questions, with possible answers
            ]
          },
          {
            duration: 600,
            name: 'Backend development 101',
            type: 'video',
            data: [
              // array of questions, with possible answers
            ]
          },
          {
            duration: 300,
            name: 'Backend development 101 - Test',
            type: 'testing:test',
            data: [
              // array of questions, with possible answers
            ]
          },
          {
            duration: 240,
            name: 'Conclusion',
            type: 'markdown',
            data: '#The end'
          }
        ]
      }
    }

    setChartType = e => {
      this.setState({
        chartType: e.target.value
      })
    }

    componentDidMount () {
    }

    onChange = e => {
    }

    render () {
      const { course } = this.state
      return <div className='page'>
        <Layout
          rightDiv={ <div>
            <h1>Course Viewer</h1>
            <br />
            <p>
                        TODO: This is where the course content will be displayed
              <ul>
                <li>Videos</li>
                <li>Interactive (CodeAcademy style)</li>
                <li>Markdown</li>
                <li>...etc.</li>
              </ul>
            </p>
          </div> }
          leftDiv={
            <div>
              <div className='divider horizontal'/>
              <CourseOutline course={ course } />
            </div>
          }
        />
      </div>
    }
}

export default CourseViewer
