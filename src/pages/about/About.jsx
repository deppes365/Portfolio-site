import React from 'react';
import './about.scss';
import {
	FaHtml5,
	FaCss3Alt,
	FaSass,
	FaBootstrap,
	FaGitAlt,
	FaGithub,
	FaNpm,
	FaReact,
} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { Link} from 'react-router-dom';

const aboutIcons = [
	<FaHtml5 className='about-icon'/>,
	<FaCss3Alt className='about-icon'/>,
	<SiJavascript className='about-icon'/>,
	<FaReact className='about-icon'/>,
	<FaSass className='about-icon'/>,
	<FaBootstrap className='about-icon'/>,
	<FaGitAlt className='about-icon'/>,
	<FaGithub className='about-icon'/>,
	<FaNpm className='about-icon'/>,
];

function About() {
	return (
		<div className="about">
			<div className="container">
				<div className="about-content-wrapper">
					<div className="about-info">
						<h1 className="page-title">
							<span>A</span>bout
						</h1>
						<p>
							Hello, my name is Darren. I am a self taught front end developer
							based in central Virginia. I have learned front end development
							from resources like Udemy.com, Youtube, and books.
						</p>
						<p>
							What I love about web development is that there is always
							something to learn. Another thing I love is that you can take just
							a simple idea and make it tangible... Or as tangible as program
							can be.
						</p>
						<p>
							Currently, I am a law enforcement officer in central Virginia.
							While I love my current profession, I feel like I need a career
							that truly challenges my mind. Since I started my coding journey,
							I have been absolutely obsessed with it. Nearly every free moment
							I have throughout the day, I am researching something related to
							web development. There's been quite a few times that I'd be on the
							treadmill watching a programming video. It's safe to say that this is what I was made to do.
						</p>
						<p>If you think I would be a good fit for your company, send me a message on the contact page!</p>
					</div>
					<div className="about-tech">
						<h2>Tech Stack</h2>
						{aboutIcons.map((icon, i) => <div key={i} className={`icon-div icon-div-${i}`} >{icon}</div>)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
