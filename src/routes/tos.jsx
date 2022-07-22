import React, { Fragment } from 'react'
import '../styles/css/cookies.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Terms = (props) => {
  return (
    <Fragment>
        <Header theme={props.theme} />
          <div className="cookiesContentPolicy">
            <div className="content">
              <div className="terms">
                  <h1 className="title">Terms of Service</h1>
                  <p>
                      This terms and conditions govern access to  tenAfric ("We", "Us" or "Our") website and services by individuals or entities who wish to sign up for our services<br/>
                      This website is operated by  tenAfric. Throughout the site, the terms "we", "us" and "our" refer to  tenAfric.  tenAfric offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                      <br/>
                      By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
                      <br/>
                      Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
                      <br/>
                      Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. I reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                      <br/>
                  </p>
                  <h1 className="title">SECTION 14 - INDEMNIFICATION</h1>
                  <p>
                      You agree to indemnify, defend and hold harmless  tenAfric and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
                  </p>
                  <h1 className="title">SECTION 15 - SEVERABILITY</h1>
                  <p>
                      In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
                  </p>
                  <h1 className="title">SECTION 16 - TERMINATION</h1>
                  <p>
                      The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.<br/>

                      These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying me that you no longer wish to use our Services, or when you cease using our site.<br/>

                      If in our sole judgment you fail, or I suspect that you have failed, to comply with any term or provision of these Terms of Service, I also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).<br/>
                  </p>
                  <h1 className="title">SECTION 17 - ENTIRE AGREEMENT</h1>
                  <p>
                      The failure of me to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.<br/>
                      These Terms of Service and any policies or operating rules posted by me on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and me (including, but not limited to, any prior versions of the Terms of Service).<br/>                
                      Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.<br/>         
                  </p>
                  <h1 className="title">SECTION 18 - GOVERNING LAW</h1>
                  <p>
                      These Terms of Service and any separate agreements whereby I provide you Services shall be governed by and construed in accordance with the laws of the Republic of Kenya.<br/>
                  </p>
                  <h1 className="title">SECTION 19 - CHANGES TO TERMS OF SERVICE</h1>
                  <p>
                      You can review the most current version of the Terms of Service at any time at this page.<br/>
                      I reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.<br/>
                  </p>
                  <h1 className="title">SECTION 20 - CONTACT INFORMATION</h1>
                  <p>
                      Questions about the Terms of Service should be sent to me at dennisrkibet@gmail.com.
                  </p>
              </div>
            </div>
          </div>
        <Footer />
    </Fragment>
  )
}

export default Terms