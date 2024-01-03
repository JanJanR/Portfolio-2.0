import { useEffect } from "react";
import FOG from "vanta/src/vanta.fog";
import "../styles/VantaBackground.css";
import App from "../App";

function VantaBackground() {
  useEffect(() => {
    FOG ({
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
      speed: 2.10
    })
  }, [])
  return (
    <>
     <div id="vanta" className="bg">
      <App />
     </div>
    </>
  )
}

export default VantaBackground
