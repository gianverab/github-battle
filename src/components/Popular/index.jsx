import React, { Component } from 'react'
import PropTypes from 'prop-types'

import api from '../../utils/api'
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

function ReposGrid (props) {
  return (
    <ul className={style.repoGrid}>
      {props.repos.map((repo, index) => {
        return (
          <li className={style.repo} key={repo.name}>
            <div className={style.rank}>#{index + 1}</div>
            <ul className={style.repoItems}>
              <li>
                <img
                  className={style.avatar}
                  src={repo.owner.avatar_url}
                  alt={`Avatar for ${repo.owner.login}`}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

class Popular extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeLanguage: 'All',
      repos: null
    }
    this.handleLanguage = this.handleLanguage.bind(this)
  }

  componentDidMount () {
    this.handleLanguage(this.state.activeLanguage)
  }

  handleLanguage (lang) {
    this.setState({
      activeLanguage: lang,
      repos: null
    })

    api.fetchPopularRepos(lang)
      .then(function (repos) {
        this.setState({
          repos
        })
      }.bind(this))
  }

  render () {
    return (
      <div>
        <SelectLanguage
          activeLanguage={this.state.activeLanguage}
          onSelect={this.handleLanguage}
        />
        {!this.state.repos
          ? <p>LOADING..</p>
          : <ReposGrid repos={this.state.repos} />
        }
      </div>
    )
  }
}

export default Popular
