import React from 'react'
import homeStyle from '../Home/home.module.css'
import aboutStyle from './about.module.css'
export default function About() {
  return (
    <div className='about main_bgcolor py-5'>
      <div className="container py-5">
        <h1 className='text-center text-white fs-1 fw-bold'>ABOUT</h1>
        <div className="d-flex justify-content-center align-items-center py-4">
          <div className={`${homeStyle.line}`}></div>
          <i className={`fa-solid fa-star px-3 fa-2xl text-white`}></i>
          <div className={`${homeStyle.line}`}></div>
        </div>

        <div className="content w_60 d-flex justify-content-between m-auto pt-5 text-white">
          <p className='fs-5 pe-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='fs-5'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
      </div>
    </div>
  )
}
