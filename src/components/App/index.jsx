import React, { Component } from 'react'
import normalize from 'normalize-css'
import style from './app.css'

import Main from '../Main'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			user: {
					name: 'Jane Doe',
					email: 'janedoe@platzo.com'
			}
		}
  }
	render () {
		return (
			<div className={style.root}>
				<Main user={this.state.user}/>
			</div>
		)
	}
}

export default App
