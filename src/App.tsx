import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login'

import './App.scss'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import AppMenu from 'components/AppMenu'
import StocksRouter from 'app/stocks/router'

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
              render={() => <Redirect to={'/app/stocks/stats'} />}
            />

            <Route path="/auth/login" component={Login} />
            <Route path="/app/stocks" render={() => <StocksRouter />} />
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
