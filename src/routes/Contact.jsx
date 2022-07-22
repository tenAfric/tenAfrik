import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = (props) => {
  return (
    <Fragment>
        <Header theme={props.theme} />
        <Footer />
    </Fragment>
  )
}

export default Contact