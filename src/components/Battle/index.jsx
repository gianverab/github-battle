import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './battle.css'

function PlayerPreview (props) {
  return (
    <div>
      <div className={style.column}>
        <img
          src={props.avatar}
          alt={`Avatar for ${props.username}`}
          className={style.avatar}
        />
        <h2 className={style.username}>@{props.username}</h2>
      </div>
      <button
        className={style.reset}
        onClick={props.onReset.bind(null, props.id)}
      >
        Reset
      </button>

    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

class PlayerInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    var value = event.target.value

    this.setState({
      username: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render () {
    return (
      <div>
        <form className={style.column} onSubmit={this.handleSubmit}>
          <label className={style.heading} htmlFor='username'>
            {this.props.label}
          </label>
          <input
            id={this.props.id}
            placeholder='github username'
            type='text'
            autoComplete='off'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className={style.button}
            type='submit'
            disabled={!this.state.username}
          >
            Submit
          </button>
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
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit (id, username) {
    this.setState(function () {
      var newState = {}
      newState[id + 'Name'] = username
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState
    })
  }

  handleReset (id) {
    this.setState(function () {
      var newState = {}
      newState[id + 'Name'] = ''
      newState[id + 'Image'] = null
      return newState
    })
  }

  render () {
    var playerOneName = this.state.playerOneName
    var playerTwoName = this.state.playerTwoName
    var playerOneImage = this.state.playerOneImage
    var playerTwoImage = this.state.playerTwoImage

    return (
      <div className={style.row}>
        {!playerOneName &&
          <PlayerInput
            id='playerOne'
            label='Player One'
            onSubmit={this.handleSubmit}
          />
        }
        {playerOneImage !== null &&
          <PlayerPreview
            id='playerOne'
            avatar={playerOneImage}
            username={playerOneName}
            onReset={this.handleReset}
          />
        }
        {!playerTwoName &&
          <PlayerInput
            id='playerTwo'
            label='Player Two'
            onSubmit={this.handleSubmit}
          />
        }
        {playerTwoImage !== null &&
          <PlayerPreview
            id='playerTwo'
            avatar={playerTwoImage}
            username={playerTwoName}
            onReset={this.handleReset}
          />
        }

      </div>
    )
  }
}

export default Battle
