import React from 'react'
import Hero from '../assets/Hero.png'


function Home() {
  return (
    <div id='home' className="vh-100 position-relative" >
      <div className="row align-items-center justify-content-center  m-0 h-100">
        <div className="col-sm-8">
          <img src={Hero} alt=""  className='img-fluid'/>
          <h1 className='text-title' style={{fontSize: "2.5rem"}}> Welcome to Banana Jungle</h1>
          
        </div>
      </div>

    </div>
  )
}

export default Home