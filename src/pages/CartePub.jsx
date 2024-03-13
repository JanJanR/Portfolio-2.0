import "../styles/CartePub.css"
import Navbar from "../components/Navbar";
import CartePubHero from "../assets/cartepub/cartepub-bg-shadow.png";

function CartePub() {
  return (
    <>
      <div className="cartepub-container">
        <div className="cartepub-hero">
          <img src={CartePubHero} alt="cartepub-hero" className="cartepub-bg-shadow"/>
          <Navbar/>
          <div className="cartepub-hero-content">
            <div></div>
            <div></div>
            <div className="cartepub-hero-right">
              <h1>Carte Pub</h1>
              <h3>
                Presenting Carte Pub,
                an innovative freelance project that reshapes advertising by prioritizing user interaction.
                Through clickable features and personalized campaigns,
                this app transforms passive ad viewing into an engaging experience for both advertisers and users.
              </h3>
              <div className="cartepub-description">
                <h4>Date</h4>
                <p>Avr 2024</p>
              </div>
              <div className="cartepub-description">
                <h4>Role</h4>
                <p>Designer, Dev</p>
              </div>
              <div className="cartepub-description">
                <h4>Techs</h4>
                <p>Figma, React Native, Javascript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartePub
