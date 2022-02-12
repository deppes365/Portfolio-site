import React, {useEffect} from 'react';
import './contact.scss';
import ContactForm from '../../components/contactForm/ContactForm';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone,} from 'react-icons/fa';


function Contact() {

  useEffect(() => {
		setTimeout(()=> {
			document.querySelector('.contact .container').classList.add('show')
		}, 200)
	}, [])
  
  return (
  <div className='contact'>
      <div className="container">
      <h1 className='page-title'><span>C</span>ontact</h1>
          <div className="form">
            <ContactForm />
          </div>
          <div className="contact-links">
          <div className="link">
              <FaEnvelope className='icon'/><p>darren.eppes@gmail.com</p>
            </div>
            <div className="link">
              <FaPhone className='icon'/><p>+1(434)607-1136</p>
            </div>
            <div className="link">
              <FaGithub className='icon'/><p>github.com/deppes365</p>
            </div>
            <div className="link">
            <FaLinkedin className='icon'/><p>linkedin.com/in/darren-eppes-b71629230/</p>
            </div>
          </div>
      </div>
  </div>
  );
}

export default Contact;