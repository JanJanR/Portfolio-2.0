import Navbar from "../components/Navbar"
import '../styles/About.css'

import Typewriter from 'typewriter-effect';
import Lottie from "react-lottie";
import animationData from "../assets/lottie/scrolldown.json";

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
    </>
  )
}

export default About
