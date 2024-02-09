import Navbar from "../components/Navbar"
import '../styles/About.css'

import Typewriter from 'typewriter-effect';
import Lottie from "react-lottie";
import animationData from "../assets/lottie/scrolldown.json";
import Marquee from "react-fast-marquee";
import Iframe from "react-iframe";

import Ruby from "../assets/marquee/ruby.svg";
import Rails from "../assets/marquee/rails.svg"
import React from "../assets/marquee/react.svg"
import Firebase from "../assets/marquee/firebase.svg"
import Html from "../assets/marquee/html.svg"
import Css from "../assets/marquee/css.svg"
import Javascript from "../assets/marquee/javascript.svg"
import Figma from "../assets/marquee/figma.svg"
import Vercel from "../assets/marquee/vercel.svg"


const imagesMarquee = [
  {src: Ruby, alt:"ruby"},
  {src: Rails, alt:"Rails"},
  {src: React, alt:"React"},
  {src: Firebase, alt:"Firebase"},
  {src: Html, alt:"Html"},
  {src: Css, alt:"Css"},
  {src: Javascript, alt:"Javascript"},
  {src: Figma, alt:"Figma"},
  {src: Vercel, alt:"Vercel"},
]

import Background from "../assets/background.jpg";

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
    <div className="about-container">
      <div className="about-hero">
        <img src={Background} alt=""  className="about-background"/>
        <div>
          <Navbar />
        </div>
        <div className="about-title">
        <Typewriter
          options={{
            strings: ['Hola', 'Salut',' Hi', 'Ciao'],
            autoStart: true,
            loop: true,
            delay: 200,
          }}
        />
        </div>
        <Lottie
          options={defaultOptions}
          height={65}
          width={65}
          />
      </div>
      <div className="about-separation-container">
          <div className="about-big-separation"></div>
      </div>
      <div className="about-description">
        <p>
          I&apos;m a Full Stack Developer more Front-End Developer passionate about crafting seamless applications and websites.
          With a focus on both design and functionality, I bring a unique blend of creativity and technical expertise to every project.
          My skills span various languages and technologies, and I&apos;m committed to staying updated with the latest industry trends.
          Let&apos;s build something amazing together!
        </p>
      </div>
      <div className="about-separation-container-2">
          <div className="about-big-separation"></div>
      </div>
      <div className='about-slider-container'>
        <Marquee>
          <div className='about-slider'>
            {/* {imagesMarquee.map((image, index) => ( */}
              <div className='img-container' >
                {/* <img src={image.src} alt={image.alt} loading="lazy" /> */}
                <Iframe url="https://giphy.com/embed/3o7ZeA6AbQsdXnx7eU" className="img-gif" allow="false"/>
                <h1>Basketball</h1>
                <Iframe url="https://giphy.com/embed/26BRJ3WNCtXoN4QJq" className="img-gif-airplane"/>
              </div>
            {/* ))} */}
          </div>
        </Marquee>
      </div>
    </div>
    </>
  )
}

export default About
