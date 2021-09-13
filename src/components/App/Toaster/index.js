import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'
import { getStatusIcon } from 'utils/statusIcon'

export class Toaster extends Component {
    static propTypes = {

      minDisplayDuration: PropTypes.number,
      toast: PropTypes.shape({
        duration: PropTypes.number,
        content: PropTypes.any,
        type: PropTypes.oneOf([
          'primary',
          'secondary',
          'success',
          'warning',
          'error'
        ])
      }),
      toasts: PropTypes.arrayOf(PropTypes.shape({
        duration: PropTypes.number,
        content: PropTypes.any,
        type: PropTypes.oneOf([
          'primary',
          'secondary',
          'success',
          'warning',
          'error'
        ])
      }))
    }

    static defaultProps = {
      minDisplayDuration: 5
    }

    state = {
      toasts: {}
    }

    deleteToast = (id) => () => {
      const { toasts } = this.state
      delete toasts[id]
      this.setState({
        toasts
      })
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillReceiveProps (nextProps, nextState) {
      if (nextProps.toast !== this.props.toast) {
        const { toast, minDisplayDuration } = nextProps
        const toastId = `toast_${Math.random().toString().split('.')[1]}`

        setTimeout(() => {
          this.setState({
            toasts: {
              ...this.state.toasts,
              [toastId]: {
                ...this.state.toasts[toastId],
                deleting: true
              }
            }
          })
          setTimeout(this.deleteToast(toastId), 1000)
        }, (toast.duration || minDisplayDuration) * 1000)

        this.setState({
          toasts: {
            ...this.state.toasts,
            [toastId]: nextProps.toast
          }
        }, () => console.log(this.state.toasts))
      }
    }

    render () {
      const { toasts } = this.state
      const marginStyle = { marginLeft: '1rem', marginRight: '1rem' }
      return <div className='vision-toaster'>
        {
          Object.keys(toasts).map((key, i) => <div key={ i } className={`toast ${toasts[key].type ? toasts[key].type : 'secondary'} ${toasts[key].deleting ? 'deleting' : ''}`}>
            <div style={ marginStyle }>{ getStatusIcon(toasts[key].type) }</div>
            <div>{ toasts[key].content }</div>
            <div style={ marginStyle } onClick={ this.deleteToast(key)}><FAIcon name='times' /></div>
          </div>)
        }
      </div>
    }
}

export const toast = ({
  hideIcon,
  type
}) => {

}
