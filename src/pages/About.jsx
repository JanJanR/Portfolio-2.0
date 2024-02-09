import '../styles/About.css'
import Navbar from "../components/Navbar"
import Contact from "../components/Contact";
import Iframe from "react-iframe";

import Typewriter from 'typewriter-effect';
import Lottie from "react-lottie";
import animationData from "../assets/lottie/scrolldown.json";

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
      <div className='about-description-container'>
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
      </div>
      {/* <Iframe url='https://gifer.com/embed/5SBk' className='img-gif'/> */}
      {/* <div className="about-separation-container-2">
          <div className="about-big-separation"></div>
      </div> */}
      <Contact/>
    </div>
    </>
  )
}

export default About
