import "../styles/Navbar.css";
import Logo from "../assets/logo.png"
import Modal from 'react-modal';
import { useState, useEffect } from "react";
import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function Navbar() {
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

  return (
    <div className="navbar-container">
      <Link to='/'><img src={Logo} alt="logo" className="logo"/></Link>
      <div className="navbar-item">
        <div className="navbar-projects" onClick={openModal}>
          <h3>Projects</h3>
        </div>
        <div className="navbar-about">
          <Link to='/about'><h3>About</h3></Link>
        </div>
        <Link to='/contact'>
          <button className="navbar-contact">
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
                <h1>PhilCannes Detailing</h1>
                <h1>CartePub</h1>
                <h1>CindyKawak</h1>
                <h1>WalkIn</h1>
                <h1>AirBroomNBroom</h1>
              </div>
            </motion.div>
          </Modal>
        )}
    </div>
  )
}

export default Navbar
