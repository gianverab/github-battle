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

function Profile ({ user }) {
  return (
    <div>
      <img src={user.img} alt={`${user.name} photo`} />
      <h2>{`Name: ${user.name}`}</h2>
      <p>{`username: ${user.username}`}</p>
      <Link to='/'>Go home!</Link>
    </div>
  )
}

Profile.propTypes = propTypes

export default Profile
