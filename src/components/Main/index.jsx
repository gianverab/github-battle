import React from 'react'
import { Link } from 'react-router'

function Main () {
  return (
    <div>
      <h2>Home</h2>
      <Link to='/profile'>View profile</Link>
    </div>
  )
}

export default Main
