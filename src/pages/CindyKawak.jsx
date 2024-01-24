import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

function CindyKawak() {
  return (
    <PageTransition OgComponent={() => (
      <>
        <Navbar/>
        <div>CindyKawak</div>
      </>
    )}/>
  )
}

export default CindyKawak
