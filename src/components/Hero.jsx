import { useRef } from "react";
import '../styles/Hero.css'
import Lottie from "react-lottie";
import animationData from "../assets/lottie/scrolldown.json";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const tl = gsap.timeline();
  const heroDescriptionRef = useRef(null);
  const heroLottieRef = useRef(null);

  useGSAP (() => {
    tl.fromTo(heroDescriptionRef.current,{
      x: 600,
    },
    {
      x: 0,
      ease: "none"
    })

    tl.fromTo(heroLottieRef.current,{
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 3.5
    })
  })

  return (
    <div className="hero-container">
      <div className="hero-name">
        <div><h1>John</h1></div>
        {/* <div className="box"></div> */}
        <h1>Romero</h1>
      </div>
      <div className='hero-description' ref={heroDescriptionRef}>
        <h2>a full stack developer</h2>
      </div>
      <div className='scroll-lottie' ref={heroLottieRef}>
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
