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
  const heroNameRef = useRef(null);
  const heroDescriptionRef = useRef(null);
  const heroLottieRef = useRef(null);

  useGSAP (() => {
    tl.fromTo(heroNameRef.current,{
      y: -2000,
    },
    {
      y: 0,
      ease: "none"
    })

    tl.fromTo(heroDescriptionRef.current,{
      x: 2000,
    },
    {
      x: 0,
      ease: "none"
    })

    tl.fromTo(heroLottieRef.current,{
      y: 2000,
    },
    {
      y: 0,
      ease: "none"
    })
  })

  return (
    <div className="hero-container">
      <div className="hero-name" ref={heroNameRef}>
        <h1>John Romero</h1>
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
