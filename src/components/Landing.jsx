import React, { Fragment } from 'react'
import Header from './Header'
import '../styles/css/landing.css'
import { ReactComponent as LandingImg } from '../assets/svg/landing.svg'

const Landing = () => {
  return (
    <Fragment>
      <div className="h-screen landing">
        <Header/>
        <div className="landing-section mt-16">
          <div className="landing-wrapper flex">
            <div className="landing-texts mt-16">
              <h1 className="landing-txt-header mt-8 text-6xl text-bold">Enlarge your market to greater horizons</h1>
              <p className="landing-txt-paragraph mt-8 text-[1.3rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolores ex, qui fugit amet cum.</p>
            </div>
            <div className="landing-image mt-8">
              <LandingImg className="img-landing"/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing