import React from 'react'
import { Link } from 'react-router'

function Main ({ user, handleClick }) {
  return (
    <div>
      <h2>Hello, I'm {user.name}</h2>
      <h3>{user.email}</h3>
      <button onClick={handleClick}>Update!</button>
      <Link to='/profile'>View profile</Link>
    </div>
  )
}

export default Main
