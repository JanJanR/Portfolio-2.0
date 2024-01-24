import ContactMe from "../components/Contact";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

function Contact() {
  return (
    <PageTransition OgComponent={() => (
      <>
        <Navbar />
        <motion.div
          variants={{
            hidden: {opacity: 0, y: 100},
            visible: {opacity: 1, y: 0}
          }}
          initial='hidden'
          animate='visible'
          transition={{duration: 1}}
        >
          <ContactMe />
        </motion.div>
      </>
    )} />
  );
}

export default Contact;
