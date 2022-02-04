import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../contactForm/contactform.scss';

function ContactForm() {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'gmail',
				'portfolio_contact_form',
				form.current,
				'user_qAVsO3DQFZcVSoU4dMMbE'
			)
			.then(
				result => {
					console.log(result.text);
          document.querySelector('.send-status.sent').style.display = 'block';
				},
				error => {
					console.log(error.text);
          document.querySelector('.send-status.sent').style.display = 'block';
				}
			);
      e.target.reset()
	};

	return (
		<div className="contact-form">
			<h1>Let's Talk!</h1>
			<form ref={form} onSubmit={sendEmail}>
        		<div className="send-status sent"><p>Message Sent!</p></div>
        		<div className="send-status not-sent"><p>Sorry, something went wrong...</p></div>
				<input type="text" placeholder="Your Name" name="user_name" required />
				<input type="email" placeholder="Your Email" name="user_email" required />
				<input
					type="company"
					name="user_company"
					placeholder="Your Company (optional)"
				/>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					placeholder="Your message..."
					required
				></textarea>
				<button>Send</button>
			</form>
		</div>
	);
}

export default ContactForm;
