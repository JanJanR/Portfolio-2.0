import './styles/App.css'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Ruby from "./assets/ruby.svg";
import Rails from "./assets/rails.svg"
import React from "./assets/react.svg"
import Firebase from "./assets/firebase.svg"
import Html from "./assets/html.svg"
import Css from "./assets/css.svg"
import Javascript from "./assets/javascript.svg"
import Figma from "./assets/figma.svg"
import Vercel from "./assets/vercel.svg"

import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [Ruby, Rails, Vercel, Figma, Javascript]

function App() {

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next)
  }

  return (
    <>
      <Navbar />
      <Hero />
        <div className='slider-container'>
          <Marquee>
            <div className='stack-slider'>
              <div className='img-container'>
                <img src={Ruby} alt="ruby" />
              </div>
              <div className='img-container'>
                <img src={Rails} alt="rails" />
              </div>
              <div className='img-container'>
                <img src={React} alt="react" />
              </div>
              <div className='img-container'>
                <img src={Firebase} alt="firebase" />
              </div>
              <div className='img-container'>
                <img src={Html} alt="html" />
              </div>
              <div className='img-container'>
                <img src={Css} alt="css" />
              </div>
              <div className='img-container'>
                <img src={Javascript} alt="javascript" />
              </div>
              <div className='img-container'>
                <img src={Figma} alt="figma" />
              </div>
              <div className='img-container'>
                <img src={Vercel} alt="vercel" />
              </div>
            </div>
          </Marquee>
        </div>
      <div className='horizontal-line'></div>
      <div className='carousel-slider'>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className={index === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
      <h1>HelloWorld</h1>
    </>
  )
}

export default App
