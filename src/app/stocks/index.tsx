import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import Products from './Products'
import ProductDetails from './Products/ProductDetails'
import News from './News'
import Stats from './Stats'
import Explore from './Explore'

const scopeRoot = '/stocks'

function StocksRouter () {
  return (
    <>
      <Route
        exact
        path={'/'}
        render={() => <Redirect to={`${scopeRoot}/stats`} />}
      />
      <Route exact path={`${scopeRoot}/explore`} component={Explore} />
      <Route exact path={`${scopeRoot}/products`} component={Products} />
      <Route path={`${scopeRoot}/products/:id`} component={ProductDetails} />
      <Route path={`${scopeRoot}/stats`} component={Stats} />
      <Route path={`${scopeRoot}/news`} component={News} />
    </>
  )
}

export const createNav = ({ onToggle, goTo }: { onToggle: Function, goTo: Function }) => ({
  mobile: [
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
      main: true,
      name: 'Vision',
      path: `${scopeRoot}/vision`,
      icon: '',
      onClick: () => onToggle()
    },
    {
      name: 'Coins',
      path: `${scopeRoot}/products`,
      icon: 'coins',
      onClick: () => goTo(`${scopeRoot}/products`)
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
      name: 'Explore',
      path: `${scopeRoot}/explore`,
      icon: 'search',
      onClick: () => goTo(`${scopeRoot}/explore`)
    },
    {
      name: 'Coins',
      path: `${scopeRoot}/products`,
      icon: 'coins',
      onClick: () => goTo(`${scopeRoot}/products`)
    },
    {
      name: 'Stats',
      path: `${scopeRoot}/stats`,
      icon: 'chart-pie',
      onClick: () => goTo(`${scopeRoot}/stats`)
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
