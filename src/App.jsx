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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'


// import Airbroomnbroom from './assets/AirBroomNBroom.png'

function App() {
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
      <div className='carousel-container'>
        <Swiper
          // effect={'coverflow'}
          // grabCursor={true}
          // centeredSlides={true}
          // loop={true}
          // slidesPerView={'auto'}
          // spaceBetween={1}
        //   coverflowEffect={{
        //     rotate: 50,
        // stretch: 0,
        // depth: 100,
        // modifier: 1,
        // slideShadows: true,
        //   }}
          effect= {"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className='swiper-container'
        >
          <div>
            <SwiperSlide><img src={Ruby} alt="ruby" /></SwiperSlide>
            <SwiperSlide><img src={Figma} alt="ruby" /></SwiperSlide>
            <SwiperSlide><img src={Html} alt="ruby" /></SwiperSlide>
            <SwiperSlide><img src={Ruby} alt="ruby" /></SwiperSlide>
            <SwiperSlide><img src={Ruby} alt="ruby" /></SwiperSlide>
          </div>
        </Swiper>
      </div>
      <h1>HelloWorld</h1>
    </>
  )
}

export default App
