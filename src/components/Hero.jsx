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
  const heroBoxNameRef = useRef(null);
  const heroBoxLastNameRef = useRef(null);

  useGSAP (() => {
    tl.fromTo(heroBoxNameRef.current,{
      x: 0,
    },
    {
      x: 1000,
      ease: "none",
      duration: 1
    })

    tl.fromTo(heroBoxLastNameRef.current,{
      x: 0,
    },
    {
      x: -1500,
      ease: "none",
      duration: 1
    })

    tl.fromTo(heroDescriptionRef.current,{
      opacity: 0
    },
    {
      opacity: 1,
      duration: 1
    })

    tl.fromTo(heroLottieRef.current,{
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5
    })
  })

  return (
    <div className="hero-container">
      <div className="hero-name-container">
        <div className="hero-name">
          <div className="box-name" ref={heroBoxNameRef}></div>
          <h1>John</h1>
        </div>
        <div className="hero-lastname">
          <div className="box-lastname" ref={heroBoxLastNameRef}></div>
          <h1>Romero</h1>
        </div>
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
