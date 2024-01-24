import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

function PhilCannes() {
  return (
    <PageTransition OgComponent={() => (
      <>
        <Navbar/>
        <div>PhilCannes</div>
      </>
    )}/>
  )
}

export default PhilCannes
