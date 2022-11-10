import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-color d-flex justify-content-between py-4">
            <div className="container ">
                <Link className="navbar-brand fw-bold fs-3" to={"home"}>START REACT</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" className="w-25">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
                        <li className="nav-item">
                            <Link className="nav-link active fw-bold" aria-current="page" to={"portfolio"}>PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to={"about"}>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to={"contact"}>CONTACT</Link>
                        </li>
                        
                        
                    </ul>
                   
                </div>
            </div>
        </nav>
    )
}
