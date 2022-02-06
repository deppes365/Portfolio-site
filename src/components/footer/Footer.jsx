import React from 'react';
import './footer.scss';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';


function Footer() {
  return (
  <div className='footer'>
    <div className="container">
      <h1 className='logo'>Darren <span>Eppes</span></h1>
      <p>Copyright &copy; 2022 Darren Eppes. All Rights Reserved</p>
      <div className="social-links">
       <a href='https://www.instagram.com/darren.codes/' target='_blank' rel="noreferrer"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/darren-eppes-b71629230/" target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
        <a href="https://github.com/deppes365/" target='_blank' rel="noreferrer"><FaGithub/></a>
      </div>
    </div>
  </div>
  );
}

export default Footer;
