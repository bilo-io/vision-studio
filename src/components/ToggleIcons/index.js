/* eslint-disable react/no-deprecated */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'

export class ToggleIcons extends Component {
  static propTypes = {
    isDefaultActive: PropTypes.bool,
    items: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    isDefaultActive: true
  };

  componentWillMount () {
    this.setState({
      items: this.props.items.map((item) => ({
        ...item,
        isActive: this.props.isDefaultActive
      }))
    })
  }

  toggleItem = (index) => () => {
    const { items } = this.state
    this.setState(
      {
        items: [
          ...items.slice(0, index),
          {
            ...items[index],
            isActive: !items[index].isActive
          },
          ...items.slice(index + 1)
        ]
      },
      () => this.props.onChange(this.state.items)
    )
  };

  render () {
    const { items } = this.state
    return (
      <div className={'flex-row'}>
        {items.map((item, i) => (
          <FAIcon
            key={i}
            style={{
              color: item.isActive ? '#00adee' : 'lightgrey',
              marginRight: '0.25rem',
              marginBottom: '0.25rem',
              cursor: 'pointer'
            }}
            name={item.icon}
            onClick={this.toggleItem(i)}
          />
        ))}
      </div>
    )
  }
}

export default ToggleIcons
