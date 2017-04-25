import React from 'react'
import { Link } from 'react-router'

import style from './header.css'

function Header () {
  return (
    <header className={style.root}>
      <h1 className={style.logo}>Github Battle</h1>
      <nav>
        <ul className={style.menu}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/battle'>Battle</Link>
          </li>
          <li>
            <Link to='/popular'>Popular</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
