import "../styles/Contact.css"

import { IconBrandGithub } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';

import emailjs from '@emailjs/browser';
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const tl = gsap.timeline();
  const contactTitleRef = useRef(null);
  const contactDescriptionRef = useRef(null);
  const contactFormRef = useRef(null);
  const contactGithubRef = useRef(null);
  const contactMailRef = useRef(null);
  const contactLinkedinlRef = useRef(null);

  useGSAP (() => {
    tl.fromTo(contactTitleRef.current,{
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      ease: "none"
    })

    tl.fromTo(contactDescriptionRef.current,{
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      ease: "none"
    })

    tl.fromTo(contactFormRef.current,{
      opacity: 0
    },
    {
      opacity: 1,
      duration: 1,
      ease: "none"
    })

    tl.fromTo(contactGithubRef.current,{
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,

      ease: "none"
    })

    tl.fromTo(contactMailRef.current,{
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "none"
    })

    tl.fromTo(contactLinkedinlRef.current,{
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "none"
    })
  })

  return (
    <>
      <div className="contact-container">
        <div className="contact-title" ref={contactTitleRef}>
          <h1>Contact</h1>
        </div>
        <div className="contact-content">
          <div className="left-contact">
            <div className="contact-description" ref={contactDescriptionRef}>
              <h2>Whether you have a promising opportunity knocking at your door, or simply wish to extend a friendly greeting,
                  don&apos;t hesitate to get in touch with me; I&apos;m always open to engaging in conversations,exploring new possibilities,
                  and connecting with others in meaningful ways.
              </h2>
            </div>
            <div className="contact-social-media">
              <div className="github" ref={contactGithubRef}>
                <a href="https://github.com/JanJanR" target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub size={70} stroke={0.5} id="github"/>
                </a>
              </div>
              <div className="mail" ref={contactMailRef}>
                <a href="mailto:romerojohn1012@gmail.com">
                  <IconMail size={70} stroke={0.5} id="mail"/>
                </a>
              </div>
              <div className="linkedin" ref={contactLinkedinlRef}>
                <a href="https://www.linkedin.com/in/john-romero-272b22256/" target="_blank" rel="noopener noreferrer">
                  <IconBrandLinkedin size={70} stroke={0.5} id="linkedin"/>
                </a>
              </div>
            </div>
          </div>
          <div className="right-contact" ref={contactFormRef}>
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
