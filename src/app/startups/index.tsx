import React from 'react'
import { Route } from 'react-router-dom'

import Team from './Team'
import Docs from './Docs'
import Overview from './Overview'
import Settings from './Settings'

const scopeRoot = '/stocks'

function StocksRouter () {
  return (
    <>
      <Route path={`${scopeRoot}/overview`} component={Overview} />
      <Route path={`${scopeRoot}/team`} component={Team} />
      <Route path={`${scopeRoot}/docs`} component={Docs} />
      <Route path={`${scopeRoot}/settings`} component={Settings} />
    </>
  )
}

export const createNav = ({ onToggle, goTo }: { onToggle: Function, goTo: Function }) => ({
  mobile: [
    {
      name: 'Overview',
      path: `${scopeRoot}/overview`,
      icon: 'info-circle',
      onClick: () => goTo(`${scopeRoot}/overview`)
    },
    {
      name: 'Team',
      path: `${scopeRoot}/team`,
      icon: 'users',
      onClick: () => goTo(`${scopeRoot}/team`)
    },
    {
      main: true,
      name: 'Vision',
      path: `${scopeRoot}/vision`,
      icon: '',
      onClick: () => onToggle()
    },
    {
      name: 'Docs',
      path: `${scopeRoot}/docs`,
      icon: 'document',
      onClick: () => goTo(`${scopeRoot}/docs`)
    },
    {
      name: 'Settings',
      path: `${scopeRoot}/settings`,
      icon: 'cog',
      onClick: () => goTo(`${scopeRoot}/settings`)
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
      name: 'Overview',
      path: `${scopeRoot}/overview`,
      icon: 'info-circle',
      onClick: () => goTo(`${scopeRoot}/overview`)
    },
    {
      name: 'Team',
      path: `${scopeRoot}/team`,
      icon: 'users',
      onClick: () => goTo(`${scopeRoot}/team`)
    },
    {
      name: 'Docs',
      path: `${scopeRoot}/docs`,
      icon: 'book',
      onClick: () => goTo(`${scopeRoot}/docs`)
    },
    {
      name: 'Settings',
      path: `${scopeRoot}/settings`,
      icon: 'cog',
      onClick: () => goTo(`${scopeRoot}/settings`)
    }
  ]
})

export default StocksRouter
