import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login'

import './App.scss'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import AppMenu from 'components/AppMenu'
// #region Routers
import StocksRouter from 'app/stocks'
import SlidesRouter from 'app/slides'
import SessionsRouter from 'app/sessions'
import StartupsRouter from 'app/startups'
// #endregion

// import logo from './assets/vision-logo.svg'

const App = () => {
  const [isAppMenuOpen, setAppMenuOpen] = useState<boolean>(false)
  const toggleAppMenu = () => {
    setAppMenuOpen(!isAppMenuOpen)
  }
  return (
    <Router>
      <div className="flex-row">

        <Navbar type='desktop' onToggle={toggleAppMenu} />
        <Navbar type='mobile' onToggle={toggleAppMenu} />

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
            <Route path="/auth/login" render={() => <Login />} />

            <Route path="*" component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
