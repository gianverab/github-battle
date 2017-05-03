import React, { Component } from 'react'
import { Link } from 'react-router'

import api from '../../utils/api'

class Results extends Component {
  constructor (props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }
  componentDidMount () {
    var players = this.props.location.query

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function (results) {
      if (results === null) {
        return this.setState(function () {
          return {
            error: 'Looks like there was an error. Check that both users exist on Github',
            loading: false
          }
        })
      }
      this.setState(function () {
        return {
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false
        }
      })
    }.bind(this))
  }
  render () {
    var error = this.state.error
    var winner = this.state.winner
    var loser = this.state.loser
    var loading = this.state.loading

    if (loading === true) {
      return <p>Loading</p>
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      )
    }
    return (
      <div>
        {JSON.stringify(this.state, null, 2)}
      </div>
    )
  }
}

export default Results
