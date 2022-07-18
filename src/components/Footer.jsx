import React, { Fragment } from 'react'
import '../styles/css/footer.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Facebook } from '../assets/svg/facebook.svg'
import { ReactComponent as Twitter } from '../assets/svg/twitter.svg'
import { ReactComponent as LinkedIn } from '../assets/svg/linkedin.svg'
import { ReactComponent as Instagram } from '../assets/svg/instagram.svg'
import { ReactComponent as FiGithub } from '../assets/svg/github.svg'

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
            <h2 className="fResources text-2xl mb-2">Resources</h2>
            <ul>
              <li className="mb-2">
                <Link to="/privacy" className="resLinks">Privacy</Link>
              </li>
              <li className="mb-2">
                <Link to="/tos" className="resLinks">Terms of Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/cookies" className="resLinks">Cookies</Link>
              </li>
            </ul>
          </div>
          <div className="fSections">
            <h2 className="fResources text-2xl mb-2">Our Services</h2>
            <ul>
              <li className="mb-2">
                <Link to="/privacy" className="resLinks">Graphic Design</Link>
              </li>
              <li className="mb-2">
                <Link to="/tos" className="resLinks">Database design</Link>
              </li>
              <li className="mb-2">
                <Link to="/cookies" className="resLinks">Software development</Link>
              </li>
              <li className="mb-2">
                <Link to="/cookies" className="resLinks">Artificial Intelligence</Link>
              </li>
            </ul>
          </div>
          <div className="fSections">
            <h2 className="fResources text-2xl mb-2">Useful Links</h2>
            <ul>
              <li className="mb-2">
                <Link to="/" className="resLinks">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="resLinks">About us</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="resLinks">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="resLinks">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerCopyright">
          <p>
            copyright &copy; {(new Date().getFullYear())} | tenAfric <span><a href="https://github.com/tenAfric/"><FiGithub className="githubIcon" title="Github"/></a></span>
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer