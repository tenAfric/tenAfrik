import React, { useState, Fragment } from 'react'
import '../styles/css/header.css'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo-white.png'
import { ReactComponent as Bars } from '../assets/svg/bars.svg'
import { ReactComponent as Times } from '../assets/svg/x-mark.svg'

const Header = () => {
  const[mobi, setMobi] = useState(false)
  const handleMobiMenu = (e) => {
    (e==='open')? setMobi(true):setMobi(false)
  }
  return (
    <Fragment>
      <Helmet>
        <title>holla</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://tenafric.com" />
      </Helmet>
      <header className="header h-16">
        <div className="xl:container mx-auto header-container pt-4">
          <div className="grid grid-cols-2 gap-4 header-wrapper items-center">
            <div className="brand-logo">
              {/* <h1 className="logo-text font-bold text-4xl">tenAfric</h1> */}
              <img className="logo" src={Logo} alt="tenAfric" />
            </div>
            <div className="navigation pt-2 flex gap-6 justify-end">
              <nav className={(mobi)?"menu shwMobiMenu":"menu"}>
                <Times className="closeMobiMenu" onClick={()=>handleMobiMenu('close')}/>
                <ul className="flex gap-4">
                  <h2 className="mobiLogo font-bold text-4xl">tenAfric</h2>
                  <li><Link to="/" className="text-1xl nav-links">Home</Link></li>
                  <li><Link to="/about" className="text-1xl nav-links">About</Link></li>
                  <li><Link to="/services" className="text-1xl nav-links">Services</Link></li>
                  <li><Link to="/contact" className="text-1xl nav-links">Contact</Link></li>
                </ul>
              </nav>
              <div className="header-cta">
                <Link to="/contact" className="header-cta-btn px-4 py-2">Try Free</Link>
              </div>
              <Bars className="openMobiMenu" onClick={()=>handleMobiMenu('open')}/>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header