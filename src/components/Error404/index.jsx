import React from 'react'
import { Link } from 'react-router'

function Error404 () {
  return (
    <div>
      <h2>Ops! Something wrong :(</h2>
      <Link to='/'>Go home!</Link>
    </div>
  )
}

export default Error404
