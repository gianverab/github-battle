import React from 'react'
import PropTypes from 'prop-types'

import style from './player.css'

function PlayerPreview (props) {
  console.log(props.profile)
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
      {props.children}

    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default PlayerPreview
