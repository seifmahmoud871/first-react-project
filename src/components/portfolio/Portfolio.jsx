import React, { useEffect } from 'react'
import portfolioStyle from './portfolio.module.css'
import homeStyle from '../Home/home.module.css'
import { useState } from 'react';
import axios from 'axios';
export default function Portfolio() {

  let [moviesArr, setMoviesArr] = useState([]);
  // mounting phase
  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    let { data } = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=ad5b8a40f505d647529a35d8a53e24fd');
    // console.log(res.data.results);
    setMoviesArr(data.results);
    console.log(setMoviesArr);

  }

  return (
    <div className='portfolio text-center py-5 '>
      <div className="container pb-4">
        <h1>PORTFOLIO</h1>
        <div className="d-flex justify-content-center align-items-center py-4">
          <div className={`${portfolioStyle.line}`}></div>
          <i className={`fa-solid fa-star px-3 fa-2xl col2C3E50`}></i>
          <div className={`${portfolioStyle.line}`}></div>
        </div>

        <div className="row gy-5 pt-5">
          {
            moviesArr.map((movie, index) =>
              <div key={index} className="col-md-4">
                <div className="image position-relative overflow-hidden rounded-3 ">
                  <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="" className='w-100 ' />
                  <div className="outerlayer white position-absolute d-flex justify-content-between align-items-center">
                    <h3 className='text-white text-center m-auto fs-1'>{movie.original_name}{movie.original_title}</h3>
                  </div>
                </div>
              </div>)
          }

          {/* <div className="col-md-4">
            <div className="outerlayer">
              <img src={require('../img/1.png')} alt="" className='w_90 rounded' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="outerlayer">
              <img src={require('../img/2.png')} alt="" className='w_90 rounded' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="outerlayer">
              <img src={require('../img/3.png')} alt="" className='w_90 rounded' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="outerlayer">
              <img src={require('../img/4.png')} alt="" className='w_90 rounded' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="outerlayer">
              <img src={require('../img/5.png')} alt="" className='w_90 rounded' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="outerlayer">
              <img src={require('../img/6.png')} alt="" className='w_90 rounded' />
            </div>
          </div> */}
        </div>
      </div>


    </div>
  )
}
