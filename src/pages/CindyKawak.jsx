import "../styles/cindykawak.css"

import Navbar from "../components/Navbar";

import CindyKawakHero from "../assets/cindykawak/cindykawak-bg-shadow.png";
import CindyKawakLandingPage from "../assets/cindykawak/landing-page.png";
import CindyKawakForm from "../assets/cindykawak/second-page.png";

import Lottie from "react-lottie";
import animationData from "../assets/lottie/scrolldown.json";

import Contact from "../components/Contact";

function CindyKawak() {
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
      <div className="cindykawak-container">
        <div className="cindykawak-hero">
          <img src={CindyKawakHero} alt="cindykawak-hero" className="cindykawak-bg-shadow" />
          <Navbar/>
          <div className="cindykawak-hero-content">
            <div></div>
            <div></div>
            <div className="cindykawak-hero-right">
              <h1>Cindy Kawak</h1>
              <h3>
                I worked with a restaurant consultant to create a sleek website featuring an exclusive e-book download.
                The site offers valuable insights into restaurant management,
                showcasing the potential of digital platforms to share expertise widely.
              </h3>
              <div className="cindykawak-description">
                <h4>Date</h4>
                <p>Dec 2023</p>
              </div>
              <div className="cindykawak-description">
                <h4>Role</h4>
                <p>Designer, Dev</p>
              </div>
              <div className="cindykawak-description">
                <h4>Techs</h4>
                <p>ReactJS, Figma, Javascript</p>
              </div>
            </div>
          </div>
          <Lottie
            options={defaultOptions}
            height={65}
            width={65}
          />
        </div>
        <div className="cindykawak-expo">
          <img src={CindyKawakLandingPage} alt="landing page cindy kawak" />
          <img src={CindyKawakForm} alt="form cindy kawak" />
        </div>
        <Contact/>
      </div>
    </>
  )
}

export default CindyKawak
