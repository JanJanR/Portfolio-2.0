import Navbar from "../components/Navbar"
import MyPageTransition from "../components/MyPageTransition";
// import PageTransition from "../components/PageTransition";
// import gsap from "gsap";


function About() {
  // const about = gsap.timeline();
  return (
    <MyPageTransition OgComponent={() => (
      <>
        <Navbar />
        <div>About</div>
      </>
    )} />
  )
}

export default About
