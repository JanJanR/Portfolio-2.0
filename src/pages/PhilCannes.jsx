import "../styles/PhilCannes.css"

import Navbar from "../components/Navbar";

import PhilCannesHero from "../assets/philcannes/philcannes-bg-shadow.png";
import PhilCannesLandingPage from "../assets/philcannes/LandingPage.png";
import PhilCannesBoatServices from "../assets/philcannes/BoatServices.png";
import PhilCannesDetails from "../assets/philcannes/DetailPackages.png";
import PhilCannesContact from "../assets/philcannes/ContactForm.png";
import CartePub from "../assets/cartepub/cartepub-bg.png";

import Lottie from "react-lottie";
import animationData from "../assets/lottie/scrolldown.json";

import Contact from "../components/Contact";


function PhilCannes() {
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
      <div className="philcannes-container">
        <div className="philcannes-hero">
          <img src={PhilCannesHero} alt="PhilCannesHero" className="philcannes-bg-shadow"/>
          <Navbar/>
          <div className="philcannes-hero-content">
            <div></div>
            <div></div>
            <div className="philcannes-hero-right">
              <h1>PhilCannes<br/>Detailing</h1>
              <h3>
                Collaboratively, we designed a user-friendly website for a boat detailing company,
                simplifying the quote request process.
                Users effortlessly input their boat details to receive instant,
                personalized quotes, enhancing overall accessibility and efficiency in accessing premium detailing services.
              </h3>
              <div className="philcannes-description">
                <h4>Date</h4>
                <p>Apr 2023</p>
              </div>
              <div className="philcannes-description">
                <h4>Role</h4>
                <p>Designer, Dev</p>
              </div>
              <div className="philcannes-description">
                <h4>Techs</h4>
                <p>Figma, NextJS, Javascript</p>
              </div>
            </div>
          </div>
          <Lottie
            options={defaultOptions}
            height={65}
            width={65}
          />
        </div>
        <div className="philcannes-expo">
          <img src={PhilCannesLandingPage} alt="landing page philcannes" />
          <img src={PhilCannesBoatServices} alt="boat services philcannes" />
          <img src={PhilCannesDetails} alt="details philcannes" />
          <img src={PhilCannesContact} alt="contact philcannes" />
        </div>
        <Contact/>
        <img src={CartePub} alt="cartepub" className="cartepub-bg"/>
      </div>
    </>
  )
}

export default PhilCannes
