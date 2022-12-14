import React from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'
import CtaButton from '../components/CtaButton'
import mint from '../assets/mint.gif'

function Mint() {
  const ctaStyle = {
    fontSize: "1.5rem",
  }

  return (
    <div id="mint" className='vh-100'>
        <div className="row m-0 justify-content-center align-items-center h-100">
          <div className="container-sm">
          <h1 className="text-title my-5">Mint</h1>
            <div className="row">
              <div className="col-sm-6">
                <img src={mint} alt="" className='p-4 mint-image img-fluid'/>
              </div>
              <div className="col-sm-6 order-lg-1 d-flex justify-content-center align-items-center flex-column">
                <div className="mint-count d-flex mb-4  justify-content-center align-items-center">
                  <button className="mint-btn btn-plus"><FaPlus/></button>
                  <div className="count-screen">1</div>
                  <button className="mint-btn btn-minus"><FaMinus/></button>
                </div>
                <CtaButton><div style={ctaStyle}>Mint Now</div></CtaButton>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Mint