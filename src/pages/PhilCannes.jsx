import "../styles/PhilCannes.css"

import Navbar from "../components/Navbar";
import PhilCannesHero from "../assets/philcannes/philcannes-bg-shadow.png";

function PhilCannes() {
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
              <p>Dec 2022</p>
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
        </div>
        <div>PhilCannes</div>
      </div>
    </>
  )
}

export default PhilCannes
