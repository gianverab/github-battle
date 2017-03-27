import React from 'react'

function Main ({ user, handleClick }) {
  return (
    <div>
      <h2>Hello, I'm {user.name}</h2>
      <h3>{user.email}</h3>
      <button onClick={handleClick}>Update!</button>
    </div>
  )
}

export default Main
