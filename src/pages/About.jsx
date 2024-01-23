import Navbar from "../components/Navbar"
import PageTransition from "../components/PageTransition";
import gsap from "gsap";


function About() {
  const about = gsap.timeline();
  return (
    <>
    <PageTransition timeline={about}/>
      <Navbar />
      <div>About</div>
    </>
  )
}

export default About