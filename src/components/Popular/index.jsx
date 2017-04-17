import React, { Component } from 'react'

import style from './popular.css'

class Popular extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  updateLanguage (lang) {
    this.setState({
      activeLanguage: lang
    })
  }
  render () {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <ul className={style.languages}>
        {languages.map(lang => {
          return (
            <li
              style={this.state.activeLanguage === lang ? {color: '#d0021b'} : null}
              className={style.language}
              key={lang}
              onClick={this.updateLanguage.bind(null, lang)}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Popular
