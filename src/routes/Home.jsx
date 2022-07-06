import React, { Fragment } from 'react'
import Landing from "../components/Landing"

const Home = () => {
  return (
    <Fragment>
        <Landing />
        <div className="landing-section">
          <div className="landing-wrapper flex">
            <div className="landing-left-texts"></div>
            <div className="landing-right-image">
              <img src="../assets/svg/lading.svg" alt="" />
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Home