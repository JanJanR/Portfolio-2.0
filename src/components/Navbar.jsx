import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import Logo from "../assets/logo.png"
import { IconX } from '@tabler/icons-react';

import { motion } from 'framer-motion';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar({animate = true}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 700);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const tl = gsap.timeline();
  const logoRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useGSAP (() => {
    if (animate) {
      tl.fromTo(logoRef.current,{
        y: -105
      },
      {
        y: 0,
        ease: "none"
      })

      tl.fromTo(projectsRef.current,{
        y: -105
      },
      {
        y: 0,
        ease: "none"
      })

      tl.fromTo(aboutRef.current,{
        y: -105
      },
      {
        y: 0,
        ease: "none"
      })

      tl.fromTo(contactRef.current,{
        y: -105
      },
      {
        y: 0,
        ease: "none"
      })
    }
  })

  return (
    <div className="navbar-container">
      <Link to='/'><img src={Logo} alt="logo" className="logo" ref={logoRef} /></Link>
      <div className="navbar-item">
        <div className="navbar-projects" onClick={openModal} ref={projectsRef}>
          <h3>Projects</h3>
        </div>
        <div className="navbar-about" ref={aboutRef}>
          <Link to='/about'><h3>About</h3></Link>
        </div>
        <Link to='/contact'>
          <button className="navbar-contact" ref={contactRef}>
            <h3>Contact Me</h3>
          </button>
        </Link>
      </div>
      {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Projects Modal"
            className={`modal ${isClosing ? 'closing' : ''}`}
            style={{ overlay: { backgroundColor: 'transparent' } }}
          >
            <div className="btn-close-modal">
              <IconX
                onClick={closeModal}
                size={80} stroke={0.4}
                className="icon-x"
                aria-label="Close Modal"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div className="projects-tab">
                <Link to='/projects/PhilCannes'><h1>PhilCannes Detailing</h1></Link>
                <Link to='/projects/CartePub'><h1>CartePub</h1></Link>
                <Link to='/projects/CindyKawak'><h1>CindyKawak</h1></Link>
                <Link to='/projects/Walkin'><h1>WalkIn</h1></Link>
                <Link to='/projects/AirbroomNBroom'><h1>AirBroomNBroom</h1></Link>
              </div>
            </motion.div>
          </Modal>
        )}
    </div>
  )
}

Navbar.propTypes = {
  animate: PropTypes.bool.isRequired,
};

export default Navbar
