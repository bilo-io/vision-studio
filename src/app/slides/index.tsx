import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import Slideshows from './Slideshows'
import Screens from './Screens'
import Schedules from './Schedules'
import Settings from './Settings'

const scopeRoot = '/slides'

function SlidesRouter () {
  return (
    <>
      <Route
        exact
        path={'/'}
        render={() => <Redirect to={`${scopeRoot}/slideshows`} />}
      />
      <Route path={`${scopeRoot}/slideshows`} component={Slideshows} />
      <Route path={`${scopeRoot}/screens`} component={Screens} />
      <Route path={`${scopeRoot}/schedules`} component={Schedules} />
      <Route path={`${scopeRoot}/settings`} component={Settings} />
    </>
  )
}

export default SlidesRouter

export const createNav = ({ onToggle, goTo }: { onToggle: Function, goTo: Function }) => ({
  mobile: [
    {
      name: 'Slides',
      path: `${scopeRoot}/slides`,
      icon: 'layer-group',
      onClick: () => goTo(`${scopeRoot}/slides`)
    },
    {
      name: 'Schedules',
      path: `${scopeRoot}/schedules`,
      icon: 'calendar',
      onClick: () => goTo(`${scopeRoot}/schedules`)
    },
    {
      main: true,
      name: 'Vision',
      path: `${scopeRoot}/vision`,
      icon: '',
      onClick: () => onToggle()
    },
    {
      name: 'Screens',
      path: `${scopeRoot}/screens`,
      icon: 'desktop',
      onClick: () => goTo(`${scopeRoot}/screens`)
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
      name: 'Slides',
      path: `${scopeRoot}/slides`,
      icon: 'layer-group',
      onClick: () => onToggle()
    },
    {
      name: 'Schedules',
      path: `${scopeRoot}/schedules`,
      icon: 'calendar',
      onClick: () => goTo(`${scopeRoot}/schedules`)
    },
    {
      name: 'Screens',
      path: `${scopeRoot}/screens`,
      icon: 'desktop',
      onClick: () => goTo(`${scopeRoot}/screens`)
    },
    {
      name: 'Settings',
      path: `${scopeRoot}/settings`,
      icon: 'cog',
      onClick: () => goTo(`${scopeRoot}/settings`)
    }
  ]
})
