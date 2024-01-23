import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import gsap from "gsap";


function CindyKawak() {
  const project3 = gsap.timeline();
  return (
    <>
      <PageTransition timeline={project3}/>
      <Navbar/>
      <div>CindyKawak</div>
    </>
  )
}

export default CindyKawak
