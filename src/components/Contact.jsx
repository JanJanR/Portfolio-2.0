import "../styles/Contact.css"

import { IconBrandGithub } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';

import emailjs from '@emailjs/browser';
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY,
      )
      .then((result) => {
          console.log(result.text);
          console.log("message send")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contact</h1>
        </div>
        <div className="contact-content">
          <div className="left-contact">
            <div className="contact-description">
              <h2>Got an opportunity, or just want to say Hello ? <br/>Feel free to reach me out.</h2>
            </div>
            <div className="contact-social-media">
              <IconBrandGithub size={70} stroke={0.5}/>
              <IconMail size={70} stroke={0.5}/>
              <IconBrandLinkedin size={70} stroke={0.5}/>
            </div>
          </div>
          <div className='vertical-line'></div>
          <div className="right-contact">
            <form ref={form} onSubmit={sendEmail}>
              <h1>send me an email</h1>
              <label><h2>Name</h2></label>
              <input type="text" name="user_name" />
              <label><h2>Email</h2></label>
              <input type="email" name="user_email" />
              <label><h2>Message</h2></label>
              <textarea name="message" rows="10" cols="50"/>
              <input type="submit" value="Send" className="submit-button" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
