import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Navbar() {
	function openMenu() {
		document.querySelector('.hamburger').classList.toggle('open');
		document.querySelector('.nav-links').classList.toggle('open');
	}
	function closeMenu() {
		document.querySelector('.hamburger').classList.remove('open');
		document.querySelector('.nav-links').classList.remove('open');
	}

	return (
		<div className="nav-bar">
			<div className="container">
				<div className="logo">
					<h1>
						Darren <span>Eppes</span>
					</h1>
				</div>
				<div className="nav-links" onClick={closeMenu}>
					<NavLink to="/" className="nav-link">
						Home
					</NavLink>
					<NavLink to="/portfolio" className="nav-link">
						Portfolio
					</NavLink>
					<NavLink to="/about" className="nav-link">
						About
					</NavLink>
					<NavLink to="/contact" className="nav-link">
						Contact
					</NavLink>
					<div className="social-links">
						<a href="https://www.instagram.com/darren.codes/" target="_blank">
							<FaInstagram />
						</a>
						<a
							href="https://www.linkedin.com/in/darren-eppes-b71629230/"
							target="_blank"
						>
							<FaLinkedinIn />
						</a>
						<a href="https://github.com/deppes365/" target="_blank">
							<FaGithub />
						</a>
					</div>
				</div>
				<div className="hamburger" onClick={openMenu}>
					<div className="top-line"></div>
					<div className="middle-line"></div>
					<div className="bottom-line"></div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
