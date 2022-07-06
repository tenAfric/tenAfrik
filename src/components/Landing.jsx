import React, { Fragment } from 'react'
import Header from './Header'
import '../styles/css/landing.css'
import { ReactComponent as LandingImg } from '../assets/svg/landing.svg'

const Landing = () => {
  return (
    <Fragment>
      <div className="h-screen landing">
        <Header/>
        <div className="landing-section">
          <div className="landing-wrapper flex">
            <div className="landing-texts">
              <h1 className="landing-txt-header">Enlarge your market to greater horizons</h1>
              <p className="landing-txt-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolores ex, qui fugit amet cum.</p>
            </div>
            <div className="landing-image">
              <LandingImg />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing