import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'


function Social() {
  return (
    <ul className="social d-flex">
      <li><a href="https://opeasean.com" target="_blank" className='nav-link' rel="noreferrer"> <FaFacebook /> </a></li>
      <li><a href="https://instagram.com" target="_blank" className='nav-link' rel="noreferrer"> <FaInstagram  /></a></li>
      <li><a href="https://twitter.com" target="_blank" className='nav-link' rel="noreferrer"> <FaTwitter /> </a></li>
      <li><a href="https://discord.com" target="_blank" className='nav-link' rel="noreferrer"> <FaDiscord /> </a></li>
    </ul>
  )
}

export default Social