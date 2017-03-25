import React from 'react'
import style from './header.css'

function Header () {
  return (
    <header className={style.root}>
      <h1 className={style.logo}>BasicReact</h1>
    </header>
  )
}

export default Header
