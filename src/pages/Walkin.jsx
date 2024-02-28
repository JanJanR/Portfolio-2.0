import Navbar from "../components/Navbar";
import WalkinHero from "../assets/walkin-bg.png";
import "../styles/Walkin.css";

function Walkin() {
  return (
    <>
    <div className="walkin-container">
      <div className="walkin-hero">
        <img src={WalkinHero} alt="walkin"/>
      </div>
      <Navbar/>
    </div>
      <div>Walkin</div>
    </>
  )
}

export default Walkin
