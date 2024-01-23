// import ContactMe from "../components/Contact";
// import Navbar from "../components/Navbar";
// import PageTransition from "../components/PageTransition";
// import gsap from "gsap";

// function Contact() {
//   const contact = gsap.timeline();
//   return (
//     <>
//       <PageTransition timeline={contact}/>
//         <Navbar />
//         <ContactMe />
//     </>
//   )
// }

// export default Contact

import { useEffect, useRef } from "react";
import gsap from "gsap";
import PageTransition from "../components/PageTransition";
import ContactMe from "../components/Contact";
import Navbar from "../components/Navbar";

function Contact() {
  const contact = gsap.timeline();
  const contentRef = useRef(null);

  useEffect(() => {
    // Content animation (coming down from the top)
    gsap.from(contentRef.current, {
      duration: 1,
      y: "-100%",
      ease: "power4.out",
      delay: 1, // Delay to wait for PageTransition to finish
    });
  }, []);

  return (
    <>
      <PageTransition timeline={contact} />
      <Navbar ref={contentRef} />
      <ContactMe ref={contentRef} />
    </>
  );
}

export default Contact;
