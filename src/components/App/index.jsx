import React, { Component } from 'react'
import { BrowserRouter as Router, Match, Miss } from 'react-router'

import style from './app.css'
import normalize from 'normalize-css'

import Header from '../Header'
import Main from '../Main'
import Popular from '../Popular'
import Profile from '../Profile'
import Error404 from '../Error404'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: {
        name: 'Giancarlo Vera',
        username: 'gianverab',
        img: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg'
      }
    }
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <div className={style.container}>
            <Match exactly pattern='/' render={() => {
              return (
                <Main />
              )
            }} />
            <Match pattern='/popular' render={() => {
              return (
                <Popular />
              )
            }} />
            <Match pattern='/profile' render={() => {
              return (
                <Profile user={this.state.user} />
              )
            }} />
            <Miss component={Error404} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
