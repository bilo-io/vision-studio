import React from 'react'
import { Route } from 'react-router-dom'

import Call from './Call'
import New from './New'

const scopeRoot = '/sessions'

function SessionsRouter () {
  return (
    <>
      <Route exact path={`${scopeRoot}/new`} component={New} />
      <Route path={`${scopeRoot}/:id`} component={Call} />
    </>
  )
}

export default SessionsRouter

export const createNav = ({ onToggle, goTo }: { onToggle: Function, goTo: Function }) => ({
  mobile: [
    {
      name: 'New',
      path: `${scopeRoot}/new`,
      icon: 'plus',
      onClick: () => onToggle()
    },
    {
      main: true,
      name: 'Vision',
      path: `${scopeRoot}/vision`,
      icon: '',
      onClick: () => onToggle()
    },
    {
      name: 'Current',
      path: `${scopeRoot}/current`,
      icon: 'phone',
      onClick: () => goTo(`${scopeRoot}/current`)
    }
  ],
  all: [
    {
      main: true,
      name: 'Vision',
      path: `${scopeRoot}/vision`,
      icon: '',
      onClick: () => onToggle()
    },
    {
      name: 'New',
      path: `${scopeRoot}/new`,
      icon: 'plus',
      onClick: () => goTo(`${scopeRoot}/new`)
    },
    {
      name: 'Current',
      path: `${scopeRoot}/current`,
      icon: 'phone',
      onClick: () => goTo(`${scopeRoot}/current`)
    }
  ]
})
