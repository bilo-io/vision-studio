import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'
import {
  Input
} from 'components'

export class QueryBuilder extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    onChange: PropTypes.func
  };

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render () {
    const { className, children } = this.props

    const { isOpen } = this.state

    return (
      <div style={{ width: '30rem', margin: 'auto', position: 'relative' }}>
        <div className="flex-row">
          <FAIcon
            name="search"
            style={{
              position: 'absolute',
              marginLeft: '1rem',
              marginTop: '1rem'
            }}
          />
          <Input
            className="full-width padded"
            type="text"
            placeholder="Search..."
            onChange={this.props.onChange}
            style={{
              textIndent: '2rem',
              height: '12px',
              fontSize: '16px',
              fontWeight: 'thin',
              borderRadius: '2rem'
            }}
          />
          <FAIcon
            name="filter"
            onClick={this.toggle}
            style={{ cursor: 'pointer', marginTop: '1rem', marginLeft: '1rem' }}
          />
        </div>
        <br />
        <div
          className={`accordion ${isOpen ? 'accordion-open' : ''}`}
          style={{ marginTop: '1.2rem', boxShadow: 'none' }}
        >
          {isOpen && (
            <div className={`content ${className}`}>
              {children}
              <h2 style={{ textAlign: 'center' }}>
                ...more filters coming soon...
              </h2>
            </div>
          )}
        </div>
      </div>
    )
  }
}
