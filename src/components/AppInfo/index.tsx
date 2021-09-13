import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { RootState } from 'store'
import pkg from '../../../package.json'

export const AppInfo = ({ isVisible, setAuthenticated }: { isVisible?:boolean, setAuthenticated: Function }) => {
  const history = useHistory()
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  // #region LIFECYCLE
  useEffect(() => {
    console.log(`App: ${pkg.name}`)
    console.log(`%c- version: ${pkg.version}`, 'color: #00adee')

    //   history.listen(
  //     () => {
  //       if (!isAuthenticated && history.location.pathname !== '/auth/login') {
  //         history.push('/auth/login')
  //       }
  //     })
  }, [])

  useEffect(() => {
    console.log(`%c- authenticated: ${isAuthenticated}`, `color: ${isAuthenticated ? '#22FF99' : '#FF5533'} `)
    setAuthenticated(isAuthenticated)

    if (!isAuthenticated) {
      history.push('/auth/login')
    }

    // NOTE: check for double log-out issues
  }, [isAuthenticated])

  // useEffect(() => {
  //   history.listen(
  //     () => {
  //       if (!isAuthenticated && history.location.pathname !== '/auth/login') {
  //         history.push('/auth/login')
  //       }
  //     })
  // }, [history.location])
  // #endregion

  return (
    <div id="app-info">
      {isVisible && (
        <div>
          <div>App: {pkg.name}</div>
          <br/>
          <div style={{ color: '#00adee' }}>- version: {pkg.version}</div>
          <br/>
          <div style={{ color: isAuthenticated ? '#0f0' : '#f00' }}>- isAuthenticated: {isAuthenticated ? 'YES' : 'NO'}</div>
          <br/>
        </div>
      )}
    </div>
  )
}

export default AppInfo
