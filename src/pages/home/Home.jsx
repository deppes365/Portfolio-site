import React from 'react';
import './home.scss';
import { Link } from "react-router-dom";
import HomeImg from '../../assets/images/home-img.jpg';


function Home() {
  return (
  <div className='home'>
      <div className="container">
          <div className="home-info">
            <div className="home-info-content">
              <h1><span>Hello</span>, my name is Darren.</h1>
              <p>I am an aspiring Front End Web Developer. I love making user friendly web pages.</p>
              <Link to='/portfolio' className='cta'>Check Out My Portfolio</Link>
            </div>
          </div>
          <div className="home-img">
            <img src={HomeImg} alt="" />
          </div>
      </div>
  </div>
  );
}

export default Home;
