import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from './pages/Login'

import './App.scss'
import Error from './pages/Error'
import NavbarContainer from 'components/Navbar/container'
import AppMenu from 'components/AppMenu'
// #region Routers
import StocksRouter from 'app/stocks'
import SlidesRouter from 'app/slides'
import SessionsRouter from 'app/sessions'
import StartupsRouter from 'app/startups'
import Profile from 'pages/Profile'
// #endregion

import { store } from './store'
// import logo from './assets/vision-logo.svg'

const App = () => {
  // #region STATE
  const [isAppMenuOpen, setAppMenuOpen] = useState<boolean>(false)
  // #endregion

  // #region FUNCTIONS
  const toggleAppMenu = () => {
    setAppMenuOpen(!isAppMenuOpen)
  }
  // #endregion

  return (
    <Provider store={store}>
      <Router>
        <div className="flex-row">

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
              <Route path="/auth/login" render={() => <Login />} />
              <Route path="/app/profile" render={() => <Profile /> } />

              <Route path="*" component={Error} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App
