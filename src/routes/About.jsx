import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = (props) => {
  return (
    <Fragment>
        <Header theme={props.theme} />
          <div className="aboutPage">
            
          </div>
        <Footer />
    </Fragment>
  )
}

export default About