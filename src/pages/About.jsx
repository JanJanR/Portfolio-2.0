import Navbar from "../components/Navbar"
import '../styles/About.css'

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-title">
          <h1>About Me</h1>
        </div>
        <div className="about-separation-container">
          <div className="about-mini-separation"></div>
          <div className="about-big-separation"></div>
        </div>
        <div className="about-description">
          <div>
            <h3>info</h3>
          </div>
          <p>
            Hello, I&apos;m a Full Stack Developer and Front-End Developer passionate about crafting seamless applications and websites.
            With a focus on both design and functionality, I bring a unique blend of creativity and technical expertise to every project.
            My skills span various languages and technologies, and I&apos;m committed to staying updated with the latest industry trends.
            Let&apos;s build something amazing together!
          </p>
        </div>
        <div className="about-separation-container">
          <div className="about-mini-separation"></div>
          <div className="about-big-separation"></div>
        </div>
      </div>
    </>
  )
}

export default About
