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

import AirBroomNBroom from "./assets/AirBroomNBroom.png";
import CartePub from "./assets/Carte Pub.png";
import CindyKawak from "./assets/Cindy Kawak.png";
import PhilCannes from "./assets/PhilCannes Detailing.png";
import Walkin from "./assets/Walkin.png";

import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const images = [
  { src: PhilCannes, title: 'PhilCannes Detailing', description: 'website for a boat detailing services' },
  { src: CartePub, title: 'CartePub', description: 'an app for digital advertisement' },
  { src: Walkin, title: 'WalkIn', description: 'mobile app that helps people to find a table for tonight to make a reservation' },
  { src: AirBroomNBroom, title: 'AirBroom N Broom', description: '(AirBnB clone) is a market place for broomstick rental' },
  { src: CindyKawak, title: 'Cindy Kawak', description: 'website to download an E-Book' },
]

function App() {

  const [imageIndex, setImageIndex] = useState(0)
  // const [tiltAngle, setTiltAngle] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
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
          {images.map((image, index) => (
            <div key={index} className={index === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={image.src} alt={image.title} />
              {index === imageIndex && (
                <div className="slide-content">
                  <h1>{image.title}</h1>
                  <p>{image.description}</p>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
      <div className='horizontal-line'></div>
      <h1>Hello World</h1>
    </>
  )
}

export default App
