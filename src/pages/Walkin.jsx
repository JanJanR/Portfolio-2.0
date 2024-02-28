import Navbar from "../components/Navbar";
import WalkinHero from "../assets/walkin-bg.png";
import "../styles/Walkin.css";

function Walkin() {
  return (
    <>
    <div className="walkin-container">
      <div className="walkin-hero">
        <img src={WalkinHero} alt="walkin" className="walkin-background"/>
        <Navbar/>
        <div className="walkin-hero-content">
          <div></div>
          <div></div>
          <div className="walkin-hero-right">
            <h1>Walkin</h1>
            <h3>
              Our collaborative project, developed with three team members, introduces a user-friendly mobile app focused on simplifying dining reservations.
              This innovative application enables users to effortlessly find and secure a table for the evening, enhancing the overall dining experience.
              With streamlined reservation functionalities, our app bridges the gap between diners and restaurants,
              offering a convenient solution for those seeking a hassle-free way to plan their dining outings.
            </h3>
            <div className="walkin-description">
              <h4>Date</h4>
              <p>Dec 2022</p>
            </div>
            <div className="walkin-description">
              <h4>Role</h4>
              <p>Designer, Dev</p>
            </div>
            <div className="walkin-description">
              <h4>Techs</h4>
              <p>Figma, Ruby on Rails</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Walkin
