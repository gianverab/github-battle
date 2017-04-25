import React from 'react'
import { Link } from 'react-router'

import style from './home.css'

function Home () {
  return (
    <div className={style.root}>
      <h2 className={style.title}>Github Battle: Battle your friends... and stuff</h2>
      <Link className={style.button} to='/battle'>Battle</Link>
    </div>
  )
}

export default Home
