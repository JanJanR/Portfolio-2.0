import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AirbroomNBroom from "./pages/AirbroomNBroom";
import CartePub from "./pages/CartePub";
import CindyKawak from "./pages/CindyKawak";
import PhilCannes from "./pages/PhilCannes";
import Walkin from "./pages/Walkin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AirbroomNBroom" element={<AirbroomNBroom />} />
        <Route path="/CartePub" element={<CartePub />} />
        <Route path="/CindyKawak" element={<CindyKawak />} />
        <Route path="/PhilCannes" element={<PhilCannes />} />
        <Route path="/Walkin" element={<Walkin />} />
      </Routes>
    </Router>
  );
};

export default App;
