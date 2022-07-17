import React, { Fragment } from 'react'
import '../styles/css/footer.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Facebook } from '../assets/svg/facebook.svg'
import { ReactComponent as Twitter } from '../assets/svg/twitter.svg'
import { ReactComponent as LinkedIn } from '../assets/svg/linkedin.svg'
import { ReactComponent as Instagram } from '../assets/svg/instagram.svg'

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="footerWrapper flex justify-center items-center">
          <div className="fSections">
            <h1 className="text-4xl mb-2">tenAfric</h1>
            <p className="text-[12px] mb-2">
              explore your market to greater horizons
            </p>
            <p className="em text-[15px] mb-2">contact@tenafric.com</p>
            <div className="socialIcons flex justify-start">
              <a className="socLinks" href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="facebookLogo"/>
              </a>
              <a className="socLinks" href="https://twitter.com" target="_blank" rel="noreferrer" >
                <Twitter className="twitterLogo"/>
              </a>
              <a className="socLinks" href="https://linkedin.com" target="_blank" rel="noreferrer">
                <LinkedIn className="linkedInLogo"/>
              </a>
              <a className="socLinks" href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="instagramLogo"/>
              </a>
            </div>
          </div>
          <div className="fSections">
            <h2 className="fResources">Resources</h2>
            <ul>
              <li>
                <Link to="/privacy" className="resLinks">Privacy</Link>
              </li>
              <li>
                <Link to="/tos" className="resLinks">Terms of Services</Link>
              </li>
              <li>
                <Link to="/cookies" className="resLinks">Cookies</Link>
              </li>
            </ul>
          </div>
          <div className="fSections"></div>
          <div className="fSections"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer