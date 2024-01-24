import Navbar from "../components/Navbar";
import MyPageTransition from "../components/MyPageTransition";

function CindyKawak() {
  return (
    <MyPageTransition OgComponent={() => (
      <>
        <Navbar/>
        <div>CindyKawak</div>
      </>
    )}/>
  )
}

export default CindyKawak
