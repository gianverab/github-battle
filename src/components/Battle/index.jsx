import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

import PlayerPreview from '../PlayerPreview'
import style from './battle.css'

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
    var location = this.props.location
    var playerOneName = this.state.playerOneName
    var playerTwoName = this.state.playerTwoName
    var playerOneImage = this.state.playerOneImage
    var playerTwoImage = this.state.playerTwoImage

    return (
      <div>
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
              avatar={playerOneImage}
              username={playerOneName}
            >
              <button
                className={style.reset}
                onClick={this.handleReset.bind(null, 'playerOne')}
              >
                Reset
              </button>
            </PlayerPreview>
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
              avatar={playerTwoImage}
              username={playerTwoName}
            >
              <button
                className={style.reset}
                onClick={this.handleReset.bind(null, 'playerTwo')}
              >
                Reset
              </button>
            </PlayerPreview>
          }
        </div>
        {playerOneImage && playerTwoImage &&
          <Link
            className={style.buttonCenter}
            to={{
              pathname: location.pathname + '/results',
              search: `?playerOneName=` + playerOneName + '&playerTwoName=' +
                playerTwoName
            }}
            >
            Battle
          </Link>
        }
      </div>
    )
  }
}

export default Battle
