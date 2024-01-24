import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

function Walkin() {
  return (
    <PageTransition OgComponent={() => (
      <>
        <Navbar/>
        <div>Walkin</div>
      </>
    )}/>
  )
}

export default Walkin
