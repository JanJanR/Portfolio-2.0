import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

function AirbroomNBroom() {
  return (
    <PageTransition OgComponent={() => (
      <>
        <Navbar/>
        <div>AirbroomNBroom</div>
      </>
    )}/>
  )
}

export default AirbroomNBroom
