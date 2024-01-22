import '../styles/PageTransition.css'
import PropTypes from "prop-types"
import { useRef, useEffect } from "react";
import {Power4} from "gsap";

function PageTransition({timeline}) {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: 10,
      y: -2600,
      ease: Power4.easeOut
    })
  })
  return (
    <div>
      <div className='transition-effect' ref={trans}></div>
    </div>
  )
}
PageTransition.propTypes = {
  timeline: PropTypes.any,
};

export default PageTransition
