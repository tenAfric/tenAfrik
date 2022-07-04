import React, { Fragment } from 'react'
import '../styles/css/header.css'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Fragment>
      <Helmet>
        <title>holla</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://tenafric.com" />
      </Helmet>
      <header className="header h-16">
        <div className="xl:container mx-auto header-container">
          <div className="grid grid-cols-2 gap-4">
            <div className="brand-logo">
              <h1 className="logo-text">tenAfric</h1>
            </div>
            <div className="navigation">
              <nav className="menu">
                <ul className="flex">
                  <li><Link to="#">Home</Link></li>
                  <li><Link to="#">About</Link></li>
                  <li><Link to="#">Services</Link></li>
                  <li><Link to="#">Contact</Link></li>
                </ul>
              </nav>
              <div className="header-cta">
                <Link to="">Try Free</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header