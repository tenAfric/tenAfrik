import React, { Fragment } from 'react'
import '../styles/css/cookies.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const cookies = () => {
  return (
    <Fragment>
        <Header />
        <div className="cookiesContent">
          <h1 className="cookTitle text-6xl mt-6">Cookies Policy</h1>
          <p className="cookCont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste sint tempore ea eos error minus perferendis magni unde eligendi. Sapiente, soluta beatae mollitia ad accusamus voluptate! Aperiam ipsum cum, adipisci tempore nisi sed dolorem eius fugiat! Iure reprehenderit reiciendis cum eum libero ratione eos neque hic. Assumenda, eaque officiis.
          </p>
        </div>
        <Footer />
    </Fragment>
  )
}

export default cookies