import React from 'react'

function Main (props) {
  return (
    <div>
      <h2>Hello, I'm {props.user.name}</h2>
      <h3>{props.user.email}</h3>
    </div>
  )
}

export default Main
