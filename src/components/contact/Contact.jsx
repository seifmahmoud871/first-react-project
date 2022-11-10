import React from 'react'
import portfolioStyle from '../portfolio/portfolio.module.css'
export default function Contact() {
  return (
    <div className='contact  py-5'>
      <div className="container py-5">
        <h1 className='text-center col2C3E50 fs-1 fw-bold'>CONTACT ME</h1>
        <div className="d-flex justify-content-center align-items-center py-4">
          <div className={`${portfolioStyle.line} `}></div>
          <i className={`fa-solid fa-star px-3 fa-2xl col2C3E50`}></i>
          <div className={`${portfolioStyle.line} `}></div>
        </div>

        <div className="row pt-5">
                    <div className="col-lg-8 mx-auto">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">

                                    <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            
                                    <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                
                                    <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div className="form-group"><button className="btn btn-success py-3 px-4" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
      </div>
    </div>
  )
}
