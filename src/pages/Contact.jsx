import ContactMe from "../components/Contact";
import Navbar from "../components/Navbar";
// import PageTransition from "../components/PageTransition";
// import gsap from "gsap";

function Contact() {
  // const contact = gsap.timeline();
  return (
    <>
      {/* <PageTransition timeline={contact}/> */}
        <Navbar />
        <ContactMe />
    </>
  )
}

export default Contact
