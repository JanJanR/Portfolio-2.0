import Navbar from "../components/Navbar";
import MyPageTransition from "../components/MyPageTransition";

function PhilCannes() {
  return (
    <MyPageTransition OgComponent={() => (
      <>
        <Navbar/>
        <div>PhilCannes</div>
      </>
    )}/>
  )
}

export default PhilCannes
