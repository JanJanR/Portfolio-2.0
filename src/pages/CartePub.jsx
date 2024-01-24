import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

function CartePub() {
  return (
    <PageTransition OgComponent={() => (
      <>
        <Navbar/>
        <div>CartePub</div>
      </>
    )}/>
  )
}

export default CartePub
