import React from 'react'
import CtaButton from '../components/CtaButton'
import AboutImage from "../assets/AboutImage.png"

function About() {

  const imageStyle = {
    height: "100vh",
    position: "absolute",
    right: "10px",
    bottom: 0,
    width: "40vh"
  }
  return (
    <div id='about' className='position-relative h-100 vh-100 p-0 pt-5'>
      <img src={AboutImage} alt="" className='breathing position-absolute' style={imageStyle} />
      <div className="row align-items-center m-0 justify-content-center h-100">
        <div className="col-sm-9 d-flex align-items-center justify-content-center flex-column h-100">
          <h1 className='text-title mb-4 mt-5' data-aos="fade-up">About Banana Ballers</h1>
          <div data-aos="fade-up" className='text-center'>
            <p className='about-text'>The coolest 🍌 on the planet 🌏, that feeds the Apes 🦧 in the Metaverse ✨</p>
            <p className='about-text '>Banana Ballers are the coolest bananas in the metaverse. Ruling over a vast Meta Banana Beach, these cool guys work hard and play harder. 5,007 unique hand drawn 3D 1 of 1 NFTS on the Ethereum blockchain. There are 10 super rare traits and 6 Legendary Banana Ballers. </p>
            <p className="about-text">Banana Ballers will be fighting child hunger with the Eat. Learn. Play. Foundation! A % of all ETH generated will go to the foundation to help feed starving children. Be part of an epic community! Join parties, live events, and games on our Metaverse Island.</p>
          </div>
          <div data-aos="zoom-in">
            <a href='https://discord.com' target="_blank" rel="noreferrer">
              <CtaButton>
                <div style={{ fontSize: '1.5rem' }}> Join Us On Discord</div>
              </CtaButton>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About