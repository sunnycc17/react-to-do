import CardComponent from "./components/CardComponent";
import DancingFlower from "./components/DancingFlower";
import { motion } from "motion/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 overflow-y-hidden">
      <motion.div
        initial={{ y: 100, x: 0, rotate: 0 }} // Start from bottom
        animate={{
          y: [200, 0], // Move up
          x: [0, -50, 50, 0], // Move left and right
          rotate: [-30, 30, -30], // Rotate back and forth
        }}
        transition={{
          duration: 5, // Total time for one loop
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="d-flex justify-content-start"
      >
        <DancingFlower />
      </motion.div>
      <div className="card">
        <CardComponent />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100, x: 0, rotate: 0 }} // Start hidden & from the bottom
        animate={{
          opacity: 1, // Fade in
          y: 0, // Move up
          x: [0, 50, -50, 0], // Move left and right
          rotate: [-30, 30, -30], // Rotate back and forth
        }}
        exit={{ opacity: 0, y: 100 }} // Fade out & move down on exit
        transition={{
          duration: 3, // Total animation duration
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="d-flex justify-content-start"
      >
        <DancingFlower />
      </motion.div>
    </div>
  );
};
export default App;
