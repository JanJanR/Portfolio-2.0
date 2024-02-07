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

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import { Link } from "react-router-dom";

const images = [
  { src: Walkin, title: 'WalkIn', description: 'mobile app that helps people to find a table for tonight to make a reservation', link: "/projects/Walkin" },
  { src: CartePub, title: 'CartePub', description: 'an app for digital advertisement', link: "/projects/CartePub"},
  { src: PhilCannes, title: 'PhilCannes Detailing', description: 'website for a boat detailing services', link: "/projects/PhilCannes" },
  { src: CindyKawak, title: 'Cindy Kawak', description: 'website to download an E-Book', link: "/projects/CindyKawak" },
  { src: AirBroomNBroom, title: 'AirBroom N Broom', description: '(AirBnB clone) is a market place for broomstick rental', link: "/projects/AirbroomNBroom" },
]

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

function Home() {

  const settings = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 600,
      modifier: 1,
      slideShadows: false,
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
    initialSlide: 2,
    className: 'mySwiper',
  };

  return (
    <>
      <VantaBackground />
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
      <div className='carousel-swiper'>
        <div className="work-title">
          <h1>Works</h1>
        </div>
        <Swiper {...settings}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={`Slide ${index + 1}`} />
            <div className='swiper-content'>
              <h1>{image.title}</h1>
              <p>{image.description}</p>
              <button className='projects-btn'>View Project</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <Contact />
    </>
  )
}

export default Home
