import React, { Fragment } from 'react'
import Header from './Header'
import '../styles/css/landing.css'
import Helmet from 'react-helmet'
import { ReactComponent as LandingImg } from '../assets/svg/landing.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Fragment>
        <Helmet>
          <title>Home | tenAfric</title>
        </Helmet>
      <div className="h-screen landing">
        <Header/>
        <div className="landing-section mt-16">
          <div className="landing-wrapper flex">
            <div className="landing-texts mt-12">
              <h1 className="landing-txt-header mt-8 text-[3.2rem]">Expanding your market to greater horizons</h1>
              <p className="landing-txt-paragraph mb-6 mt-4 text-[1.3rem]">At tenAfric, we believe that technology is the future.</p>
              <Link to="/contact" className="lng-cta p-3">Contact Us</Link>
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