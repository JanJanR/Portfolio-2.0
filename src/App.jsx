import { Routes, Route, useLocation} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import AirbroomNBroom from "./pages/AirbroomNBroom";
import CartePub from "./pages/CartePub";
import CindyKawak from "./pages/CindyKawak";
import PhilCannes from "./pages/PhilCannes";
import Walkin from "./pages/Walkin";

const App = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/projects/AirbroomNBroom" element={<AirbroomNBroom />} />
      <Route path="/projects/CartePub" element={<CartePub />} />
      <Route path="/projects/CindyKawak" element={<CindyKawak />} />
      <Route path="/projects/PhilCannes" element={<PhilCannes />} />
      <Route path="/projects/Walkin" element={<Walkin />} />
    </Routes>
  );
};

export default App;
