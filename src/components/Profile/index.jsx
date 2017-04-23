import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })
}

function Profile (props) {
  return (
    <div>
      <img src={props.user.img} alt={`${props.user.name} photo`} />
      <h2>{`Name: ${props.user.name}`}</h2>
      <p>{`username: ${props.user.username}`}</p>
      <Link to='/'>Go home!</Link>
    </div>
  )
}

Profile.propTypes = propTypes

export default Profile
