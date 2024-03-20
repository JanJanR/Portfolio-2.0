import "../styles/AirBroomNBroom.css"

import Navbar from "../components/Navbar";

import AirBroomNBroomHero from "../assets/airbroomnbroom/AirBroomNBroom-bg-shadow.png";

function AirbroomNBroom() {
  return (
    <>
      <div className="airbroomnbroom-container">
        <div className="airbroomnbroom-hero">
          <img src={AirBroomNBroomHero} alt="airbroomnbroomHero" className="airbroomnbroom-bg-shadow" />
          <Navbar/>
          <div className="airbroomnbroom-hero-content">
            <div></div>
            <div></div>
            <div className="airbroomnbroom-hero-right">
              <h1>AirBroomNBroom</h1>
              <h3>
                In our debut project, our team of four crafted a magical twist on Airbnb:
                a platform offering broomstick rentals for travel.
                Through collaborative effort and creativity,
                we overcame challenges to deliver a unique and enchanting experience.
              </h3>
              <div className="airbroomnbroom-description">
                <h4>Date</h4>
                <p>Nov 2022</p>
              </div>
              <div className="airbroomnbroom-description">
                <h4>Role</h4>
                <p>Designer, Dev</p>
              </div>
              <div className="airbroomnbroom-description">
                <h4>Techs</h4>
                <p>Figma, Ruby on Rails, Javascript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AirbroomNBroom
