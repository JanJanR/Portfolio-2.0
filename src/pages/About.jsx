import Navbar from "../components/Navbar"
import PageTransition from "../components/PageTransition";

function About() {
  return (
    <PageTransition OgComponent={() => (
      <>
        <Navbar />
        <div>About</div>
      </>
    )} />
  )
}

export default About
