import "../styles/Navbar.css";
import Logo from "../assets/logo.png"
import Modal from 'react-modal';
import { useState, useEffect } from "react";
import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';



function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className="navbar-container">
      <img src={Logo} alt="logo" className="logo"/>
      <div className="navbar-item">
        <div className="navbar-projects" onClick={openModal}>
          <h3>Projects</h3>
        </div>
        <div className="navbar-about">
          <h3>About</h3>
        </div>
        <button className="navbar-contact">
          <h3>Contact Me</h3>
        </button>
      </div>
      {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Projects Modal"
            className={"modal"}
            animate={{
              opacity: isModalOpen ? 1 : 0,
              y: isModalOpen ? 0 : -50,
            }}
          >
            <div className="btn-close-modal">
              <IconX onClick={closeModal} size={80} stroke={0.4} className="icon-x" aria-label="Close Modal"/>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
