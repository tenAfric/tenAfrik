import React, { Fragment, useState } from 'react'
import '../styles/css/contact.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = (props) => {
  const[contact, setContact] = useState({
      name: '',
      email: '',
      message: ''
  })
  return (
    <Fragment>
        <Header theme={props.theme} />
        <div className="tenContact">
          <div className="tenCWrapper flex">
            <div className="tenCFlexAssets">
              
            </div>
            <div className="tenCFlexCont">
              <form method="POST" className="contactForm">
                <h2 className="contTitle">Contact Us</h2>
                <div className="contGroup">
                  <input type="text" name="name" className={(contact.name!=="")?"contInput contInHasCont":"contInput"} value={contact.name} onChange={(e)=>{setContact({ ...contact, [e.target.name]: e.target.value })}} />
                  <span className={(contact.name!=="")?"contPlacePush":"contPlaceH"}>Full Name <span>*</span></span>
                </div>
                <div className="contGroup">
                  <input type="email" name="email" className={(contact.email!=="")?"contInput contInHasCont":"contInput"} value={contact.email} onChange={(e)=>{setContact({ ...contact, [e.target.name]: e.target.value })}} />
                  <span className={(contact.email!=="")?"contPlacePush":"contPlaceH"}>Email <span>*</span></span>
                </div>
                <div className="contGroup">
                  <textarea type="text" name="message" className={(contact.message!=="")?"contInput contInHasCont":"contInput"} value={contact.message} onChange={(e)=>{setContact({ ...contact, [e.target.name]: e.target.value })}} ></textarea>
                  <span className={(contact.message!=="")?"contPlacePush":"contPlaceH"}>Message <span>*</span></span>
                </div>
                <div className="contGroup mt-10">
                  <button className="contSubBtn">send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
    </Fragment>
  )
}

export default Contact