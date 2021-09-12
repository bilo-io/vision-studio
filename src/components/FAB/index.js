// #region Modules
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import FAIcon from 'react-fontawesome'
// #endregion Modules

// #region Components
// #endregion

// #region Assets & Data
// #endregion

export class FAB extends Component {
    render () {
        return (
            <div className='fab'>
                <div className='fab-blur' />
                <div className='fab-button'>
                    <FAIcon name='eye' />
                </div>
            </div>
        )
    }
}

export default FAB
