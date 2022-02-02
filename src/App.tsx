import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.scss'
import Error from './pages/Error'
import AppInfo from 'components/App/AppInfo'
import AppMenu from 'components/App/AppMenu'
import { Navbar } from 'components'
import { NavbarContainer } from 'components/App/Navbar/container'
// #region Routers
// import Login from './pages/Login/Login'
import StocksRouter from 'app/stocks'
import SlidesRouter from 'app/slides'
import SessionsRouter from 'app/sessions'
import StartupsRouter from 'app/startups'
// import Profile from 'pages/Profile'
// #endregion

import { store } from './store'
// import logo from './assets/vision-logo.svg'

const App = () => {
  // #region STATE
  const [isAppMenuOpen, setAppMenuOpen] = useState<boolean>(false)
  // const [isAuthenticated, setAuthenticated] = useState<boolean>(false)
  // #endregion

  // #region FUNCTIONS
  const toggleAppMenu = () => {
    setAppMenuOpen(!isAppMenuOpen)
  }
  // #endregion

  return (
    <Provider store={store}>
      <Router>
        <div className="app-body flex-row">

          <AppInfo setAuthenticated={() => { }} />
          {/* <NavbarContainer onToggle={toggleAppMenu} /> */}

          <Navbar type='desktop' onToggle={toggleAppMenu} />
          <Navbar type='mobile' onToggle={toggleAppMenu} />

          <AppMenu isDark isOpen={isAppMenuOpen} onToggle={toggleAppMenu} />

          <div className="page">
            <Switch>
              {/* DEFAULT ROUTE */}
              <Route
                exact
                path={'/'}
                render={() => <Redirect to={'/stocks/stats'} />}
              />

              {/* APPS */}
              <Route path="/stocks" render={() => <StocksRouter />} />
              <Route path="/startups" render={() => <StartupsRouter />} />
              <Route path="/sessions" render={() => <SessionsRouter />} />
              <Route path="/slides" render={() => <SlidesRouter />} />

              {/* AUTH */}
              {/* <Route path="/auth/login" render={() => <Login />} /> */}

              {/* MISC */}
              <Route path="*" component={Error} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App
