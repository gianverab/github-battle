import React, { Component } from 'react'
import normalize from 'normalize-css'
import style from './app.css'

import Main from '../Main'

function handleClick (user, event) {
  console.log('updated!')
  return this.setState({
    user: {
      name: 'Gian Vera',
      email: 'gianverab@gmail.com'
    }
  })
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        name: 'Jane Doe',
        email: 'janedoe@platzo.com'
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
      <div className={style.root}>
        <Main user={this.state.user} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App
