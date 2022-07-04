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
      <header className="header container mx-auto">
        holla
        <p class="text-sky-400">The quick brown fox...</p>
      </header>
    </Fragment>
  )
}

export default Header