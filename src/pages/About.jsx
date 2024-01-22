import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

function About() {
  return (
    <>
      <Navbar />
      <div>About</div>
    </>
  )
}

export default About
export const AboutWithTransition = PageTransition(About);
