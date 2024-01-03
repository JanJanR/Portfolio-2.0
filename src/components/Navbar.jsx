import "../styles/Navbar.css";
import Logo from "../assets/logo.png"

function Navbar() {
  return (
    <div className="navbar-container">
      <img src={Logo} alt="logo" className="logo"/>
      <div className="navbar-item">
        <h3>Projects</h3>
        <h3>About</h3>
        <button><h3>Contact Me</h3></button>
      </div>
    </div>
  )
}

export default Navbar
