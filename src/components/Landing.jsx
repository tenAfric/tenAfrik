import React, { Fragment } from 'react'
import TypeIt from "typeit-react"
import Header from './Header'
import '../styles/css/landing.css'
import Helmet from 'react-helmet'
// import { ReactComponent as LandingImg } from '../assets/svg/landing.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  let playcode = ["/* Contact me let's talk */", "var", "object", "=", "{", "name", ":", "'Dennis'",",", "age", ":", "20,", "gender", ":", "'male',", "location", ":", "'Kenya',", "skills", ":", "[", "'Javascript',", "'HTML',", "'CSS',", "'Java',", "'C',", "'React.js',", "'php']", "};", "var", "happy", "=", "'Check", "out", "my", "works';", "Console",".","log","(","happy",")",";"];
                                                
  const randColor = () =>  {
      return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
  }

  const SuperStrong = () => {
      return (
          <div style={{ fontSize: "19px" }} className="playdivarea">
              <span style={{ color: randColor() }}>{playcode[0]}</span><br/>
              <span style={{ color: randColor() }}>{playcode[1]}</span>{" "}<span style={{ color: randColor() }}>{playcode[2]}</span>{" "}<span style={{ color: randColor() }}>{playcode[3]}</span>{" "}<span style={{ color: randColor() }}>{playcode[4]}</span><br/>
              <span style={{ marginLeft: '20px', color: randColor() }}>{playcode[5]}</span>{" "}<span style={{ color: randColor() }}>{playcode[6]}</span>{" "}<span style={{ color: randColor() }}>{playcode[7]}</span>{" "}<span style={{ color: randColor() }}>{playcode[8]}</span><br/>
              <span style={{ marginLeft: '20px', color: randColor() }}>{playcode[9]}</span>{" "}<span style={{ color: randColor() }}>{playcode[10]}</span>{" "}<span style={{ color: randColor() }}>{playcode[11]}</span><br/>
              <span style={{ marginLeft: '20px', color: randColor() }}>{playcode[12]}</span>{" "}<span style={{ color: randColor() }}>{playcode[13]}</span>{" "}<span style={{ color: randColor() }}>{playcode[14]}</span><br/>
              <span style={{ marginLeft: '20px', color: randColor() }}>{playcode[15]}</span>{" "}<span style={{ color: randColor() }}>{playcode[16]}</span>{" "}<span style={{ color: randColor() }}>{playcode[17]}</span><br/>
              <span style={{ marginLeft: '20px', color: randColor() }}>{playcode[18]}</span>{" "}<span style={{ color: randColor() }}>{playcode[19]}</span>{" "}<span style={{ color: randColor() }}>{playcode[20]}</span><br/>
              <span style={{ marginLeft: '50px', color: randColor() }}>{playcode[21]}</span>{" "}<span style={{ color: randColor() }}>{playcode[22]}</span><br/>
              <span style={{ marginLeft: '50px', color: randColor() }}>{playcode[23]}</span>{" "}<span style={{ color: randColor() }}>{playcode[24]}</span><br/>
              <span style={{ marginLeft: '50px', color: randColor() }}>{playcode[25]}</span>{" "}<span style={{ color: randColor() }}>{playcode[26]}</span>{" "}<span style={{ color: randColor() }}>{playcode[27]}</span><br/>
              <span style={{ color: randColor() }}>{playcode[28]}</span><br/><br/>
              <span style={{ color: randColor() }}>{playcode[29]}</span>{" "}<span style={{ color: randColor() }}>{playcode[30]}</span>{" "}<span style={{ color: randColor() }}>{playcode[31]}</span>{" "}<span style={{ color: randColor() }}>{playcode[32]}</span>{" "}<span style={{ color: randColor() }}>{playcode[33]}</span>{" "}<span style={{ color: randColor() }}>{playcode[34]}</span>{" "}<span style={{ color: randColor() }}>{playcode[35]}</span><br/><br/>
              <span style={{ color: randColor() }}>{playcode[36]}</span>{" "}<span style={{ color: randColor() }}>{playcode[37]}</span>{" "}<span style={{ color: randColor() }}>{playcode[38]}</span>{" "}<span style={{ color: randColor() }}>{playcode[39]}</span>{" "}<span style={{ color: randColor() }}>{playcode[40]}</span>{" "}<span style={{ color: randColor() }}>{playcode[41]}</span>{" "}<span style={{ color: randColor() }}>{playcode[42]}</span>
          </div>
      );
  };
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
              <div className="codeplay-area">
                  <TypeIt options={{ startDelay: 900,   afterComplete: function (instance) {instance.destroy();} }}>
                      <SuperStrong>Super strong text.</SuperStrong>
                  </TypeIt>
              </div>
              {/* <LandingImg className="img-landing"/> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing