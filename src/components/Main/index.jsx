import React, { Component } from 'react'

class Main extends Component {
  constructor (props) {
		super(props)
	}

	render () {
		return (
			<div>
        <h2>Hello, I'm {this.props.user.name}</h2>
        <h3>{this.props.user.email}</h3>
      </div>
		)
	}
}

export default Main
