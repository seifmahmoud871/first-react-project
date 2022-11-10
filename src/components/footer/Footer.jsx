import React from 'react'

export default function Footer() {
  return (
    <div className='footer bgcol2C3E50 text-white text-center pt-5'>
      <div className="w_70 m-auto py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="footer_item">
              <h4 className='fw-bold pb-4'>LOCATION</h4>
              <h5>2215 John Daniel DriveClark, MO 65243</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer_item">
              <h4 className='fw-bold pb-4'>AROUND THE WEB</h4>
              <div className="links d-flex justify-content-around ">
                <div className="icon_container position-relative  d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-facebook-f position-absolute "></i>
                </div>
                <div className="icon_container position-relative  d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-twitter position-absolute"></i>
                </div>
                <div className="icon_container position-relative  d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-linkedin-in position-absolute"></i>
                </div>
                <div className="icon_container position-relative d-flex justify-content-center align-items-center">
                  <i class="fa-solid fa-globe position-absolute"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer_item">
              <h4 className='fw-bold pb-4'>ABOUT FREELANCER</h4>
              <h5>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</h5>
            </div>
          </div>

        </div>
       
      </div>
      <div className="copy_r col1A252F fs-6 py-4">
          Copyright © Your Website 2021
        </div>
    </div>
  )
}
