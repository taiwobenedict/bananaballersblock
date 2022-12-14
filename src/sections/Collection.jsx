import React from 'react'
import BANANA1 from '../assets/BANANA1.png'
import BANANA2 from '../assets/BANANA2.png'
import BANANA3 from '../assets/BANANA3.png'
import BANANA4 from '../assets/BANANA4.png'

function Collection() {
  return (
    <div id='collection' className='vh-100 p-0 pt-5'>
      <div className="row justify-content-center align-items-center m-0 h-100">
        <div className="container-fluid d-flex flex-column h-100 justify-content-center align-items-center">
          <div data-aos="fade-up">
            <h1 className="text-title mb-2">The collection</h1>
            <h2 className="text-subtitle">4 Legendary Ballers</h2>
          </div>
          <div className="row  mt-5 justify-content-center align-items-center flex-wrap m-0">
            <div className="col-sm-6 col-lg-5  align-self-end pb-5 pb-sm-0">
              <div className="row justify-content-around ">
                <div className="col-4 d-flex col-sm-5">
                  <img src={BANANA1} alt="" className='banana pt-2 d-block' data-aos="zoom-in"/>
                </div>
                <div className="col-4 d-flex col-sm-5">
                  <img src={BANANA4} alt="" className='banana' data-aos="zoom-in"/>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-5  align-self-end">
              <div className="row  justify-content-around ">
                <div className="col-4 d-flex col-sm-5">
                  <img src={BANANA3} alt="" className='banana' data-aos="zoom-in"/>
                </div>
                <div className="col-4  col-sm-5">
                  <img src={BANANA2} alt="" className='banana' data-aos="zoom-in"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection