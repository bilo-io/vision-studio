import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import { Code, Markdown, Layout, JsonInput, Tabs } from 'components'
import data from 'demo/mock-data/1d'

export class SchoolsDashboard extends Component {
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
            <h1>Schools Dashboard</h1>
          </div> }
          leftDiv={
            <Tabs
              defaultTab='selection'
              keys={['selection']}
              selection={
                <div>
                  <div className='page-header padded'>
                    <FAIcon className='icon' name={ 'film' } />
                    <br />
                    <div className='title'>{ 'Schools Dashboard' }</div>
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

export default SchoolsDashboard
