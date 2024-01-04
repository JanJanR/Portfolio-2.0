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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
        <div className='slider-container'>
          <Marquee>
            <div className='stack-slider'>
              <div>
                <img src={Ruby} alt="ruby" />
              </div>
              <div>
                <img src={Rails} alt="rails" />
              </div>
              <div>
                <img src={React} alt="react" />
              </div>
              <div>
                <img src={Firebase} alt="firebase" />
              </div>
              <div>
                <img src={Html} alt="html" />
              </div>
              <div>
                <img src={Css} alt="css" />
              </div>
              <div>
                <img src={Javascript} alt="javascript" />
              </div>
              <div>
                <img src={Figma} alt="figma" />
              </div>
              <div>
                <img src={Vercel} alt="vercel" />
              </div>
            </div>
          </Marquee>
        </div>
      <div className='horizontal-line'></div>
    </>
  )
}

export default App
