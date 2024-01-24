import '../styles/Home.css'

import Contact from '../components/Contact'
import VantaBackground from "../components/VantaBackground";

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
import CartePub from "../assets/slider/Carte Pub.png";
import CindyKawak from "../assets/slider/Cindy Kawak.png";
import PhilCannes from "../assets/slider/PhilCannes Detailing.png";
import Walkin from "../assets/slider/Walkin.png";

import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PageTransition from "../components/PageTransition";


const images = [
  { src: PhilCannes, title: 'PhilCannes Detailing', description: 'website for a boat detailing services' },
  { src: CartePub, title: 'CartePub', description: 'an app for digital advertisement' },
  { src: Walkin, title: 'WalkIn', description: 'mobile app that helps people to find a table for tonight to make a reservation' },
  { src: AirBroomNBroom, title: 'AirBroom N Broom', description: '(AirBnB clone) is a market place for broomstick rental' },
  { src: CindyKawak, title: 'Cindy Kawak', description: 'website to download an E-Book' },
]

function Home() {

  const [imageIndex, setImageIndex] = useState(0)

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
    <PageTransition OgComponent={() => (
      <>
        <VantaBackground />
          <div className='slider-container'>
            <Marquee>
              <div className='stack-slider'>
                <div className='img-container'>
                  <img src={Ruby} alt="ruby" loading="lazy" />
                </div>
                <div className='img-container'>
                  <img src={Rails} alt="rails" loading="lazy"/>
                </div>
                <div className='img-container'>
                  <img src={React} alt="react" loading="lazy"/>
                </div>
                <div className='img-container'>
                  <img src={Firebase} alt="firebase" loading="lazy"/>
                </div>
                <div className='img-container'>
                  <img src={Html} alt="html"loading="lazy" />
                </div>
                <div className='img-container'>
                  <img src={Css} alt="css" loading="lazy"/>
                </div>
                <div className='img-container'>
                  <img src={Javascript} alt="javascript"loading="lazy" />
                </div>
                <div className='img-container'>
                  <img src={Figma} alt="figma" loading="lazy"/>
                </div>
                <div className='img-container'>
                  <img src={Vercel} alt="vercel"loading="lazy" />
                </div>
              </div>
            </Marquee>
          </div>
        <div className='carousel-slider'>
          <div className="work-title">
            <h1>Works</h1>
          </div>
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
        <Contact />
      </>
    )}/>
  )
}

export default Home
