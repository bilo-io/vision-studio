import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.scss'
import Error from './pages/Error'
import NavbarContainer from 'components/App/Navbar/container'
import AppMenu from 'components/App/AppMenu'
// #region Routers
// import Login from './pages/Login/Login'
import StocksRouter from 'app/stocks'
import SlidesRouter from 'app/slides'
import SessionsRouter from 'app/sessions'
import StartupsRouter from 'app/startups'
// import Profile from 'pages/Profile'
// #endregion

import { store } from './store'
import AppInfo from 'components/App/AppInfo'
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
          <NavbarContainer onToggle={toggleAppMenu} />

          <AppMenu isOpen={isAppMenuOpen} isDark onToggle={toggleAppMenu} />

          <div className="page">
            <Switch>
              <Route
                exact
                path={'/'}
                render={() => <Redirect to={'/stocks/stats'} />}
              />

              <Route path="/stocks" render={() => <StocksRouter />} />
              <Route path="/startups" render={() => <StartupsRouter />} />
              <Route path="/sessions" render={() => <SessionsRouter />} />
              <Route path="/slides" render={() => <SlidesRouter />} />

              {/* AUTH */}
              {/* <Route path="/auth/login" render={() => <Login />} /> */}
              <Route path="*" component={Error} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App
