import Navbar from "../components/Navbar"
import '../styles/About.css'

import Typewriter from 'typewriter-effect';
import Lottie from "react-lottie";
import animationData from "../assets/lottie/scrolldown.json";
import Marquee from "react-fast-marquee";
import Iframe from 'react-iframe'


import Ruby from "../assets/marquee/ruby.svg";
import Rails from "../assets/marquee/rails.svg"
import React from "../assets/marquee/react.svg"
import Firebase from "../assets/marquee/firebase.svg"
import Html from "../assets/marquee/html.svg"
import Css from "../assets/marquee/css.svg"
import Javascript from "../assets/marquee/javascript.svg"
import Figma from "../assets/marquee/figma.svg"
import Vercel from "../assets/marquee/vercel.svg"

import AirBroomNBroom from "../assets/slider/AirBroomNBroom.png";



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
        {/* <img src={AirBroomNBroom} alt=""  className="about-background"/> */}
        <Iframe
          url="https://giphy.com/embed/pVGsAWjzvXcZW4ZBTE"
          position="absolute"
          // width="100%"
          id="myId"
          className="about-background"
          // height="100%"
        />
        <div>
          <Navbar />
        </div>
        <div className="about-title">
        <Typewriter
          options={{
            strings: ['Hi', 'Salut',' Ciao', 'Hola'],
            autoStart: true,
            loop: true,
            delay: 200,
          }}
        />
        </div>
        <Lottie
          options={defaultOptions}
          height={80}
          width={80}
          />
      </div>
      <div className='slider-container'>
        <Marquee>
          <div className='stack-slider'>
            {imagesMarquee.map((image, index) => (
              <div className='img-container' key={index}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="about-description">
        <p>
          I&apos;m a Full Stack Developer more Front-End Developer passionate about crafting seamless applications and websites.
          With a focus on both design and functionality, I bring a unique blend of creativity and technical expertise to every project.
          My skills span various languages and technologies, and I&apos;m committed to staying updated with the latest industry trends.
          Let&apos;s build something amazing together!
        </p>
      </div>
    </div>
    </>
  )
}

export default About
