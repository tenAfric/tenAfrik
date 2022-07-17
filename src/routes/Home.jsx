import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Landing from "../components/Landing"
import Specialization from '../components/Specialization'

const Home = () => {
  return (
    <Fragment>
        <Landing />
        <Specialization />
        <Footer />
    </Fragment>
  )
}

export default Home