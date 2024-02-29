import "../styles/Walkin.css";
import Navbar from "../components/Navbar";

import WalkinHero from "../assets/walkin/walkin-bg.png";
import LandingPage from "../assets/walkin/LandingPage.mov";
import ShowRestaurant from "../assets/walkin/showrestaurant.mov";
import SearchRestaurant from "../assets/walkin/SearchRestaurant.mov";
import RestaurantDetails from "../assets/walkin/RestaurantDetails.mov";
import Reservation from "../assets/walkin/Reservation.mov";
import RestaurantDirection from "../assets/walkin/RestaurantDirection.mov";
import FavouritesRestaurant from "../assets/walkin/FavouritesRestaurant.mov";

import Lottie from "react-lottie";
import animationData from "../assets/lottie/scrolldown.json";

function Walkin() {
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
        <Lottie
          options={defaultOptions}
          height={65}
          width={65}
        />
      </div>
      <div className="walkin-expo">
        <video autoPlay loop muted>
          <source src={LandingPage}/>
        </video>
        <video autoPlay loop muted>
          <source src={ShowRestaurant}/>
        </video>
        <video autoPlay loop muted>
          <source src={SearchRestaurant}/>
        </video>
        <video autoPlay loop muted>
          <source src={RestaurantDetails}/>
        </video>
        <video autoPlay loop muted>
          <source src={Reservation}/>
        </video>
        <video autoPlay loop muted>
          <source src={RestaurantDirection}/>
        </video>
        <video autoPlay loop muted>
          <source src={FavouritesRestaurant}/>
        </video>
      </div>
    </div>
    </>
  )
}

export default Walkin
