import "../styles/Navbar.css";
import Logo from "../assets/logo.png"


function Navbar() {
  return (
    <div className="navbar-container">
      <img src={Logo} alt="logo" className="logo"/>
      <div className="navbar-item">
        <div className="navbar-projects" >
          <h3>Projects</h3>
        </div>
        <div className="navbar-about">
          <h3>About</h3>
        </div>
        <button className="navbar-contact">
          <h3>Contact Me</h3>
        </button>
      </div>
    </div>
  )
}

export default Navbar
