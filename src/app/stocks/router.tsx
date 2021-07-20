import React from 'react'
import { Route } from 'react-router-dom'

import Products from './Products'
import Explore from './Explore'
import ExploreDetails from './ExploreDetails'
import News from './News'
import Stats from './Stats'

const scopeRoot = '/app/stocks'

function StocksRouter () {
  return (
    <>
      <Route path={`${scopeRoot}/products`} component={Products} />
      <Route path={`${scopeRoot}/explore`} component={Explore} />
      <Route path={`${scopeRoot}/explore/:id`} component={ExploreDetails} />
      <Route path={`${scopeRoot}/stats`} component={Stats} />
      <Route path={`${scopeRoot}/news`} component={News} />
    </>
  )
}

export const createNav = ({ onToggle, goTo }: { onToggle: Function, goTo: Function }) => ({
  mobile: [
    {
      name: 'Menu',
      path: `${scopeRoot}/menu`,
      icon: 'bars',
      onClick: () => onToggle()
    },
    {
      name: 'Explore',
      path: `${scopeRoot}/explore`,
      icon: 'search',
      onClick: () => goTo(`${scopeRoot}/explore`)
    },
    {
      main: true,
      name: 'Vision',
      path: `${scopeRoot}/vision`,
      icon: '',
      onClick: () => goTo(`${scopeRoot}/vision`)
    },
    {
      name: 'Stats',
      path: `${scopeRoot}/stats`,
      icon: 'chart-pie',
      onClick: () => goTo(`${scopeRoot}/stats`)
    },
    {
      name: 'Products',
      path: `${scopeRoot}/products`,
      icon: 'coins',
      onClick: () => goTo(`${scopeRoot}/products`)
    }
  ],
  all: [
    {
      main: true,
      name: 'Vision',
      path: `${scopeRoot}/vision`,
      icon: '',
      onClick: () => goTo(`${scopeRoot}/vision`)
    },
    {
      name: 'Profile',
      path: `${scopeRoot}/profile`,
      icon: 'user',
      onClick: () => onToggle()
    },
    {
      name: 'Explore',
      path: `${scopeRoot}/explore`,
      icon: 'search',
      onClick: () => goTo(`${scopeRoot}/explore`)
    },
    {
      name: 'Stats',
      path: `${scopeRoot}/stats`,
      icon: 'chart-pie',
      onClick: () => goTo(`${scopeRoot}/stats`)
    },
    {
      name: 'Products',
      path: `${scopeRoot}/products`,
      icon: 'coins',
      onClick: () => goTo(`${scopeRoot}/products`)
    }
  ]
})

export default StocksRouter
