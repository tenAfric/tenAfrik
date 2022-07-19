import React, { Fragment } from 'react'
import BlogHome from '../components/BlogHome'
import Footer from '../components/Footer'
import Landing from "../components/Landing"
import Specialization from '../components/Specialization'

const Home = () => {
  return (
    <Fragment>
        <Landing />
        <Specialization />
        <BlogHome />
        <Footer />
    </Fragment>
  )
}

export default Home