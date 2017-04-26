import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './battle.css'

class PlayerInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: ''
    }
  }
  render () {
    return (
      <div>
        <form className={style.column} onSubmit={this.props.handleSubmit}>
          <label className={style.heading} htmlFor='username'>
            {this.props.label}
          </label>
          <input
            id={this.state.username}
            placeholder='github username'
            type='text'
            autoComplete='off'
            value={this.state.username}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

class Battle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      playerOneName: '',
      playerOneImage: null,
      playerTwoName: '',
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (id, username) {
    this.setState(function () {
      var newState = {}
      newState[id + 'Name'] = username
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState
    })
  }

  render () {
    var playerOneName = this.state.playerOneName
    var playerTwoName = this.state.playerTwoName

    return (
      <div className={style.row}>
        {!playerOneName &&
          <PlayerInput
            id='playerOne'
            label='Player One'
            onSubmit={this.handleSubmit}
          />}

        {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />}
      </div>
    )
  }
}

export default Battle
