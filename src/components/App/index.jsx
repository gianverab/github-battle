import React, { Component } from 'react'
import { BrowserRouter as Router, Match } from 'react-router'
import normalize from 'normalize-css'

import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'

function handleClick (user, event) {
  console.log('updated!')
  return this.setState({
    user: {
      name: 'Giancarlo Vera',
      email: 'gianverab@gmail.com',
      picture: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg',
      location: 'Buenos Aires',
      url: 'classpoint.com'
    }
  })
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        name: 'Damian Madray',
        email: 'themadray@labdesign.com',
        picture: 'https://pbs.twimg.com/profile_images/711367050174697473/qnkLKfgM_400x400.jpg',
        location: 'San Francisco',
        url: 'theglint.com'
      }
    }
    this.handleClick = handleClick.bind(this, this.state.user)
  }
  componentWillUpdate (nextProps, nextState) {
    if (nextState.user !== this.state.user) {
      this.handleClick = handleClick.bind(this, nextState.user)
    }
  }
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Match exactly pattern='/' render={() => {
            return (
              <Main user={this.state.user} handleClick={this.handleClick} />
            )
          }} />
          <Match pattern='/profile' render={() => {
            return (
              <Profile user={this.state.user} />
            )
          }} />
        </div>
      </Router>
    )
  }
}

export default App
