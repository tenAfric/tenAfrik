import React, { Fragment } from 'react'
import Header from './Header'
import '../styles/css/landing.css'

const Landing = () => {
  return (
    <Fragment>
      <div className="h-screen landing">
        <Header/>
      </div>
    </Fragment>
  )
}

export default Landing