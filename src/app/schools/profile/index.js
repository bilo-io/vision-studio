import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import { Code, Markdown, Layout, JsonInput, Tabs } from 'components'

export class Profile extends Component {
    state = {
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
      return <div className='page'>
        <Layout
          rightDiv={ <div>
            <h1>Profile</h1>
          </div> }
          leftDiv={
            <Tabs
              defaultTab='config'
              keys={['selection']}
              slides={
                <div>
                  <div className='page-header padded'>
                    <FAIcon className='icon' name={ 'film' } />
                    <br />
                    <div className='title'>{ 'Stats Dashboard' }</div>
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

export default Profile
