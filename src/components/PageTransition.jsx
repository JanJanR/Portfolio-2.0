// import '../styles/PageTransition.css';
// import { useRef, useEffect } from "react";
// import { Power4, gsap } from "gsap";

// function PageTransition() {
//   const trans = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.fromTo(
//       trans.current,
//       {
//         y: "100%",
//       },
//       {
//         duration: 1,
//         y: 0,
//         ease: Power4.easeOut,
//       }
//     );

//     tl.to(
//       trans.current,
//       {
//         duration: 0.5,
//         opacity: 0,
//         ease: Power4.easeOut,
//       },
//     );

//     tl.set(trans.current, { display: "none" });

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) {
//           tl.set(trans.current, { display: "none" });
//           observer.disconnect();
//         }
//       },
//       { threshold: 0 }
//     );

//     observer.observe(trans.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <div className='transition-effect' ref={trans}></div>
//     </div>
//   );
// }

// export default PageTransition;

import { motion } from "framer-motion";


function PageTransition(OgComponent) {
  return (
    <>
      <OgComponent/>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ durantion: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ durantion: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}

export default PageTransition;
