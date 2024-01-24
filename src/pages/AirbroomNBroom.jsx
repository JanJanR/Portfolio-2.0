import Navbar from "../components/Navbar";
import MyPageTransition from "../components/MyPageTransition";

function AirbroomNBroom() {
  return (
    <MyPageTransition OgComponent={() => (
      <>
        <Navbar/>
        <div>AirbroomNBroom</div>
      </>
    )}/>
  )
}

export default AirbroomNBroom
