import React, { Component } from 'react'
import { BrowserRouter as Router, Match, Miss } from 'react-router'
import normalize from 'normalize-css'

import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Error404 from '../Error404'

class App extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <Match exactly pattern='/' render={() => {
            return (
              <Main />
            )
          }} />
          <Match pattern='/profile' render={() => {
            return (
              <Profile />
            )
          }} />
          <Miss component={Error404} />
        </div>
      </Router>
    )
  }
}

export default App
