import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

const Header = () => {
  return (
    <Fragment>
      <Helmet>
        <title>holla</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://tenafric.com" />
      </Helmet>
      <header className="header h-16">
        <div className="container mx-auto">

        </div>
      </header>
    </Fragment>
  )
}

export default Header