import React, { Fragment, useState } from 'react'
import '../styles/css/contact.css'
import { api } from '../api/axios'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = (props) => {
  const [contact, setContact] = useState({
      fullname: '',
      email: '',
      message: ''
  })
  const [response, setResponse] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(contact.fullname === ''&&contact.email === ''&&contact.message === ''){
      setResponse('Please fill out the form')
    } else if(contact.fullname === '') {
      setResponse('Fullname is required')
    } else if(contact.email === '') {
      setResponse('Email is required')
    } else if(contact.message === '') {
      setResponse('Message is required')
    } else {
      let res = await api('POST', 'contact', contact)
      setResponse(res.message)
      setContact({
        fullname: '',
        email: '',
        message: ''
      })
    }
  }
  
  return (
    <Fragment>
        <Header theme={props.theme} />
        <div className="tenContact">
          <div className="tenCWrapper flex">
            <div className="tenCFlexAssets">
              
            </div>
            <div className="tenCFlexCont">
              <form method="POST" className="contactForm" onSubmit={(e)=>handleSubmit(e)}>
                <h2 className="contTitle">Contact Us</h2>
                <span className="formNotify">{response}</span>
                <div className="contGroup">
                  <input type="text" name="fullname" className={(contact.fullname!=="")?"contInput contInHasCont":"contInput"} value={contact.fullname} onChange={(e)=>{setContact({ ...contact, [e.target.name]: e.target.value })}} />
                  <span className={(contact.fullname!=="")?"contPlacePush":"contPlaceH"}>Full Name <span>*</span></span>
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