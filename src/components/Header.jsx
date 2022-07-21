import React, { useState, Fragment } from 'react'
import '../styles/css/header.css'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import LogoW from '../assets/images/logo-white.png'
import LogoB from '../assets/images/logo-black.png'
import { ReactComponent as Bars } from '../assets/svg/bars.svg'
import { ReactComponent as Times } from '../assets/svg/x-mark.svg'

const Header = (props) => {
  const[mobi, setMobi] = useState(false)
  const handleMobiMenu = (e) => {
    if (e==='open'){
      setMobi(true);
    } else {
      setMobi(false)
    }
  }
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://tenafric.com" />
      </Helmet>
      <header className="header h-16">
        <div className="xl:container mx-auto header-container pt-4 pb-4">
          <div className="flex header-wrapper items-center">
            <div className="brand-logo">
              <div className="logoWrapper">
                {/* <h1 className="logo-text font-bold text-4xl">tenAfric</h1> */}
                {(props.theme==='dark')?
                 <img className="logo" src={LogoW} alt="tenAfric" />
                :
                <img className="logo" src={LogoB} alt="tenAfric" />}
              </div>
            </div>
            <div className={(mobi)?"posUnset navigation pt-2 flex gap-6 justify-end":"navigation pt-2 flex gap-6 justify-end"}>
              <nav className={(mobi)?"menuMbi shwMobiMenu":"menuMbi"}>
                <Times className="closeMobiMenu" onClick={()=>handleMobiMenu('close')}/>
                <ul className="flex gap-4">
                  <h2 className="mobiLogo font-bold text-4xl">tenAfric</h2>
                  <li><Link to="/" className="text-1xl nav-links">Home</Link></li>
                  <li><Link to="/about" className="text-1xl nav-links">About</Link></li>
                  <li><Link to="/blog" className="text-1xl nav-links">Blog</Link></li>
                  <li><Link to="/contact" className="text-1xl nav-links">Contact</Link></li>
                </ul>
              </nav>
              <div className="header-cta">
                <Link to="/contact" className="header-cta-btn px-4 py-2">Get a Quote</Link>
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