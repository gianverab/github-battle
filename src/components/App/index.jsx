import React, { Component } from 'react'
import { BrowserRouter as Router, Match, Miss } from 'react-router'

import style from './app.css'
import normalize from 'normalize-css'

import Header from '../Header'
import Home from '../Home'
import Popular from '../Popular'
import Battle from '../Battle'
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
          <div className={style.container}>
            <Match exactly pattern='/' component={Home} />
            <Match pattern='/popular' component={Popular} />
            <Match exactly pattern='/battle' component={Battle} />
            <Miss component={Error404} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
