import React from 'react'
import { FaTimes } from 'react-icons/fa'
import coinbase from '../assets/coinbase.png'
import metamask from '../assets/metamask.png'
import walletconnect from '../assets/walletconnect.png'

function Modal() {
  return (
    <div id='modal'className='fixed-top vh-100'>
      <div className="h-100 dialog">
        <div className="container-sm m-auto d-flex justify-content-center align-items-center h-100">
          <div className="modal-container">
            <div className="modal-heading d-flex justify-content-between align-items-center flex-wrap">
              <h3>Connect Wallet</h3>
              <button className='text-danger'><FaTimes /></button>
            </div>
            <div className="modal-body p-0">
              <a href='' className="d-flex align-items-center flex-wrap p-4 px-2">
                <img src={coinbase} alt=""  className='mr-3'/>
                <div>
                  <h5>Metamask</h5>
                  <p>Connect using browser wallet</p>
                </div>
              </a>

              <a href='' className="d-flex align-items-center flex-wrap p-4 px-2">
                <img src={metamask} alt=""  className='mr-3'/>
                <div>
                  <h5>Coinbase</h5>
                  <p>Connect using coinbase</p>
                </div>
              </a>

              <a href='' className="d-flex align-items-center flex-wrap p-4 px-2">
                <img src={walletconnect} alt=""  className='mr-3'/>
                <div>
                  <h5>Wallet Connect</h5>
                  <p>Connect using mobile wallet</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal