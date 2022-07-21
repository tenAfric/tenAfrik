import React, { Fragment } from 'react'
import Header from './Header'
import '../styles/css/landing.css'
import Helmet from 'react-helmet'
import { ReactComponent as LandingImg } from '../assets/svg/landing.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as Hex } from '../assets/svg/home-hex.svg'

const Landing = (props) => {                                             
  // const randColor = () =>  {
  //     return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
  // }
  return (
    <Fragment>
        <Helmet>
          <title>Home | tenAfric</title>
        </Helmet>
      <div className="h-screen landing">
        <Header className="lHeader" theme={props.theme} />
        <div className="landing-section mt-16">
          <div className="landingBgOne">
            <div className="bGOneUnskew">
              <Hex className="bgHex" />
            </div>
          </div>
          <div className="landingBgTwo">
            <div className="BgTwoHex"></div>
          </div>
          <div className="landingBgThree"></div>
          <div className="landing-wrapper flex">
            <div className="landing-texts mt-12">
              <h1 className="landing-txt-header mt-8 text-[3.2rem]">Expanding your market to greater horizons</h1>
              <p className="landing-txt-paragraph mb-6 mt-4 text-[1.3rem]">At tenAfric, we believe that technology is the future.</p>
              <Link to="/contact" className="lng-cta p-3">Contact Us</Link>
            </div>
            <div className="landing-image mt-8">
              {/* <div className="codeplayArea">
                  <TypeIt options={{ startDelay: 900,   afterComplete: function (instance) {instance.destroy();} }}>
                      <SuperStrong>Super strong text.</SuperStrong>
                  </TypeIt>
              </div> */}
              <LandingImg className="img-landing"/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing