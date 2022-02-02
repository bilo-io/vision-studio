import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import {
  ActionButtons,
  Code,
  EditInline,
  Markdown,
  Layout,
  JsonInput,
  Tabs
} from 'components'

import { appendDateTime } from 'utils/date'

import {
  addToast,
  setVideoModal
} from 'store/slices/app/app-actions'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.currentUser
  }
}

const mapActionsToProps = dispatch => bindActionCreators({
  addToast,
  // setUser,
  setVideoModal
}, dispatch)

export class CourseEditor extends Component {
    state = {
      course: {
        name: appendDateTime('New Course'),
        content: ''
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

    saveResource = () => {
    //   this.props.addToast({
    //     type: 'success',
    //     content: <div>
    //       <br />
    //       {this.state.course.content}
    //       <br />
    //     </div>
    //   })
    }

    render () {
      const { course } = this.state

      return <div className='page'>
        <Layout
          rightDiv={ <div>
            <div className='page-header padded'>
              {
                course
                  ? <div className='full-width flex-row space-between'>
                    <EditInline
                      value={ course.name }
                      onChange={ () => {} }
                    />
                    <div>
                      <ActionButtons
                        onSave={ this.saveResource }
                        onDelete={ this.showDeleteResourceModal }
                        onCancel={ this.showCancelResourceModal }
                      />
                    </div>
                  </div>
                  : <div>Get Started</div>
              }
            </div>
            <div className='divider horizontal' />
            <h1>Course Editor</h1>
            {/* <JsonInput
              value={ course.content }
              onChange={ (e) => this.setState({ course: { ...course, content: e.target.value } })}
            /> */}
          </div> }
          leftDiv={
            <Tabs
              defaultTab='courses'
              keys={['courses', 'lessons']}
              courses={
                <div>
                  <div className='page-header padded'>
                    <FAIcon className='icon' name={ 'film' } />
                    <br />
                    <div className='title'>{ 'Edit Courses' }</div>
                  </div>
                  <div className='divider horizontal'/>
                </div>
              }
              lessons={
                <div>
                  <div className='page-header padded'>
                    <FAIcon className='icon' name={ 'film' } />
                    <br />
                    <div className='title'>{ 'Edit Lessons' }</div>
                  </div>
                  <div className='divider horizontal'/>
                </div>
              }
            />
          }
        />
      </div>
    }
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(CourseEditor))
