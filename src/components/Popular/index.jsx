import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './popular.css'

const propTypes = {
  activeLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

function SelectLanguage (props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <ul className={style.languages}>
      {languages.map(lang => {
        return (
          <li
            style={props.activeLanguage === lang ? {color: '#d0021b'} : null}
            className={style.language}
            key={lang}
            onClick={props.onSelect.bind(null, lang)}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = propTypes

class Popular extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeLanguage: 'All'
    }
    this.handleLanguage = this.handleLanguage.bind(this)
  }
  handleLanguage (lang) {
    this.setState({
      activeLanguage: lang
    })
  }
  render () {
    return (
      <div>
        <SelectLanguage
          activeLanguage={this.state.activeLanguage}
          onSelect={this.handleLanguage}
        />
      </div>
    )
  }
}

export default Popular
