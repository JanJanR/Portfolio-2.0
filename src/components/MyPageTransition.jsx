import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import '../styles/MyPageTransition.css';

function MyPageTransition({ OgComponent }) {
  const handleExitComplete = () => {
    console.log("Slide-out animation complete");
  };

  return (
    <>
      <OgComponent/>
      {/* <motion.div
        key={"slide-in"}
        className="slide-in"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1}}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={handleEntryComplete}
      /> */}
      <motion.div
        key={"slide-out"}
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={handleExitComplete}
      />
    </>
  );
}

MyPageTransition.propTypes = {
  OgComponent: PropTypes.func.isRequired,
};

export default MyPageTransition;
