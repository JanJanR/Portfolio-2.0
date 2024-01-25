import { useEffect } from "react";
import FOG from "vanta/src/vanta.fog";
import "../styles/VantaBackground.css";
import Navbar from "./Navbar";
import Hero from "./Hero";

function VantaBackground() {
  useEffect(() => {
    const vantaEffect = FOG ({
      el:'#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x0,
      midtoneColor: 0x0,
      lowlightColor: 0xffffff,
      baseColor: 0x0,
      blurFactor: 0.75,
      speed: 4

    })
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [])
  return (
    <>
     <div id="vanta" className="bg">
      <Navbar animate={false}/>
      <Hero />
     </div>
    </>
  )
}

export default VantaBackground;
