import Navbar from "../components/Navbar";
import MyPageTransition from "../components/MyPageTransition";

function Walkin() {
  return (
    <MyPageTransition OgComponent={() => (
      <>
        <Navbar/>
        <div>Walkin</div>
      </>
    )}/>
  )
}

export default Walkin
