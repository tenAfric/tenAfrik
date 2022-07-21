import React, { Fragment } from 'react'
import BlogHome from '../components/BlogHome'
import Footer from '../components/Footer'
import Landing from "../components/Landing"
import Specialization from '../components/Specialization'

const Home = (props) => {
  return (
    <Fragment>
        <Landing theme={props.theme} />
        <Specialization theme={props.theme} />
        <BlogHome theme={props.theme} />
        <Footer theme={props.theme} />
    </Fragment>
  )
}

export default Home