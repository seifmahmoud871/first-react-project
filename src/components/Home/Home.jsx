import React from 'react'
import homeStyle from './home.module.css'
export default function Home() {
    return (
        <div className={`home main_bgcolor d-flex justify-content-center `}>
            <div className={` home_content text-center ${homeStyle.h_80vh} d-flex flex-column justify-content-center align-item-center`}>
                <img src={require('../img/avataaars.svg').default} className={`${homeStyle.w_250px} align-self-center`}/>
                <h1 className={`text-white ${homeStyle.px_64} pt-5`}>START REACT</h1>
                <div className="homedesign d-flex justify-content-center align-items-center py-4">
                    <div className={`${homeStyle.line}`}></div>
                    <i className="fa-solid fa-star px-3 text-white fa-2xl"></i>
                    <div className={`${homeStyle.line}`}></div>
                </div>
                <h3 className='text-white '>Graphic Artist - Web Designer - Illustrator</h3>
            </div>
        </div>
    )
}
