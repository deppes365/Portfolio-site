import React, { useEffect } from 'react';
import './home.scss';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import HomeImg from '../../assets/images/home-img.jpg';


function Home() {

  useEffect(() => {
		setTimeout(()=> {
			document.querySelector('.home .container').classList.add('show')
		}, 200)
	}, [])
  
  return (
  <div className='home'>
      <div className="container">
          <div className="home-info">
            <div className="home-info-content">
              <h1><span>Hello</span>, my name is Darren.</h1>
              <p>I'm a self taught Front End Web Developer. I love everything about programming and making user friendly applications.</p>
              <Link to='/portfolio' className='cta'><p>Check Out My Portfolio</p><FaChevronRight className='chevron' /></Link>
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
