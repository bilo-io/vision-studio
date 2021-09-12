import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCountryDetails } from 'utils/api/countries'
import WidgetClock from '../clock'

export class WidgetWorldClock extends Component {
    static propTypes = {
      isEditable: PropTypes.bool,
      countries: PropTypes.array
    }

    static defaultProps = {
      countries: [
        {
          code: 'de'
        },
        {
          code: 'us'
        },
        {
          code: 'uk'
        },
        {
          code: 'za'
        }
      ]
    }

    state = {

    }

    componentDidMount () {
      getCountryDetails(this.props.countries)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render () {
      const { countries } = this.props

      return <div>
        <h1>App: WorldClock</h1>
        <div>
          {
            countries.map((country, i) => (
              <div key={ country.code }>
                { country.code }
                <WidgetClock
                  offSet={ country.timeOffset }
                />
              </div>
            ))
          }
        </div>
      </div>
    }
}

export default WidgetWorldClock
