import Navbar from "../components/Navbar";
import MyPageTransition from "../components/MyPageTransition";

function CartePub() {
  return (
    <MyPageTransition OgComponent={() => (
      <>
        <Navbar/>
        <div>CartePub</div>
      </>
    )}/>
  )
}

export default CartePub
