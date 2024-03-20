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
            </div>
          </div>
        </div>
        <div>AirbroomNBroom</div>
      </div>
    </>
  )
}

export default AirbroomNBroom
