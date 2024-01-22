import '../styles/PageTransition.css'
import PropTypes from "prop-types"
import { useRef, useEffect } from "react";
import {Power4, gsap} from "gsap";

function PageTransition({timeline}) {
  const trans = useRef(null);
  useEffect(() => {

    // gsap.set(trans.current, {
    //   y: -window.innerHeight,
    //   display: "block",
    // });

    timeline.to(trans.current, {
      duration: 10,
      y: 2600,
      ease: Power4.easeOut,
      onComplete: () => {
        gsap.set(trans.current, { display: "none" });
      },
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          gsap.set(trans.current, { display: "none" });
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(trans.current);
  });
  return (
    <div>
      <div className='transition-effect' ref={trans}></div>
    </div>
  )
}
PageTransition.propTypes = {
  timeline: PropTypes.object,
};

export default PageTransition
