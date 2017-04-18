import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './popular.css'

function LanguageItem (props) {
  return (
    <li
      onClick={props.onSelect}
      style={props.activeLanguage === props.lang ? {color: '#d0021b'} : null}
      className={style.languageItem}
      >
      {props.lang}
    </li>
  )
}

LanguageItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  activeLanguage: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired
}

function SelectLanguage (props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <ul className={style.languages}>
      {languages.map(lang => {
        return (
          <LanguageItem
            activeLanguage={props.activeLanguage}
            lang={lang}
            key={lang}
            onSelect={props.onSelect.bind(null, lang)}
          />
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  activeLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

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
