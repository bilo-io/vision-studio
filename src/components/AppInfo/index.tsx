import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import pkg from '../../../package.json'

const AppInfo = ({ setAuthenticated }: { setAuthenticated: Function}) => {
  const auth = useSelector((state: RootState) => state.auth)

  // #region LIFECYCLE
  useEffect(() => {
    console.log(`App: ${pkg.name}`)
    console.log('- version: ', pkg.version)
  }, [])

  useEffect(() => {
    console.log('- auth: ', auth)
    setAuthenticated(auth.isLoggedIn)
  }, [auth.isLoggedIn])
  // #endregion

  return (
    <div id="app-info" />
  )
}

export default AppInfo
