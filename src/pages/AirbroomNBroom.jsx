import "../styles/AirBroomNBroom.css"

import Navbar from "../components/Navbar";

import AirBroomNBroomHero from "../assets/airbroomnbroom/AirBroomNBroom-bg-shadow.png";

function AirbroomNBroom() {
  return (
    <>
      <div className="airbroomnbroom-container">
        <div className="airbroomnbroom-hero">
          <img src={AirBroomNBroomHero} alt="airbroomnbroomHero" />
          <Navbar/>
        </div>
        <div>AirbroomNBroom</div>
      </div>
    </>
  )
}

export default AirbroomNBroom
