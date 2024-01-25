// import { useRef, useEffect } from "react";
import '../styles/Hero.css'
import Lottie from "react-lottie";
import animationData from "../assets/lottie/scrolldown.json";
// import gsap from "gsap";

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
      <div className="hero-name">
        <h1>John Romero</h1>
      </div>
      <div className='hero-description'>
        <h2>a full stack developer</h2>
      </div>
      <div className='scroll-lottie'>
        <Lottie
          options={defaultOptions}
          height={80}
          width={80}
        />
      </div>
    </div>
  )
}

export default Hero
