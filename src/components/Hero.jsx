import '../styles/Hero.css'
import Lottie from "react-lottie";
import animationData from "../assets/lottie/scrolldown.json";
import { motion } from "framer-motion";

function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="hero-container">
      <motion.div
        className="hero-name"
        variants={{
          hidden: {opacity: 0, y: -100},
          visible: {opacity: 1, y: 0}
        }}
        initial='hidden'
        animate='visible'
        transition={{duration: 1}}
      >
        <h1>John Romero</h1>
      </motion.div>
      <motion.div
        className='hero-description'
        variants={{
          hidden: {opacity: 0, x: 100},
          visible: {opacity: 1, x: 0}
        }}
        initial='hidden'
        animate='visible'
        transition={{duration: 1}}
      >
        <h2>a full stack developer</h2>
      </motion.div>
      <motion.div
        className='scroll-lottie'
        variants={{
          hidden: {opacity: 0, y: 100},
          visible: {opacity: 1, y: 0}
        }}
        initial='hidden'
        animate='visible'
        transition={{duration: 1}}
      >
        <Lottie
          options={defaultOptions}
          height={80}
          width={80}
        />
      </motion.div>
    </div>
  )
}

export default Hero
