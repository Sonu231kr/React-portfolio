import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Rightftr() {
  return (
    <div className='flex flex-row justify-between   px-20 '>
          <div className='text-sm font-semibold border-r-3 px-10'>
            <h1>Web Developer</h1>
            <h1>Front End Developer</h1>
        </div>

          <div className='flex flex-col gap-1 text-xs font-semibold border-r-3 px-10'>
            <a href="">Home</a>
            <a href="">My Project</a>
            <a href="">About me</a>
            <a href="">Contact me</a>
        </div>

          <div className='text-sm font-semibold flex gap-2 flex-col px-10'>
            <h1>Social Media Handles</h1>
            <div className='text-xl flex justify-between items-center'>
                  <a  className='text-blue-700' href=""><FontAwesomeIcon icon={faFacebook} /></a>
                  <a className='text-red-500' href=""><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                  <a className='text-blue-600' href=""><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>
    </div>
  )
}

export default Rightftr