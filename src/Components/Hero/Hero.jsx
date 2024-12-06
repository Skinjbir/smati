import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


import { MdOutlineAlternateEmail } from "react-icons/md";

function Header({ toggleWork }) { // Receive toggleWork as a prop
  return (
    <div className='leftContainer'>
      <div>
        <p>Salam, I am <span>Mohammed-Reda TARMIDI</span> !</p>
        <p>A <span>Cloud & DevOps</span> Engineering Student at ENSA-M.</p>
        <p>A part-time freelancer.Take a look at some<span> testemonials</span></p>
        <p>Take a look at my <span onClick={toggleWork} style={{ cursor: 'pointer'}}>work</span></p>
        <p>Get my <span>Resume</span></p>
        <p><span id='touch'>Get in touch</span></p>
        <div className="icons">
          <CiLinkedin className='icon'/>
          <FaGithub className='icon'/>
          <MdOutlineAlternateEmail className='icon'/>
        </div>
      </div>
    </div>
  );
}

export default Header;
