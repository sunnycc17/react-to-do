import { motion } from "framer-motion";

interface PetalComponentProps {
  left: string;
  top: string;
}

const PetalComponent: React.FC<PetalComponentProps> = ({ left, top }) => {
  return (
    <motion.img
      src="/react-to-do/camellia.png"
      alt="camellia flower"
      className="absolute w-28 opacity-80"
      style={{ left, top }}
      initial={{ y: 1000, opacity: 0 }} // Start below screen
      animate={{
        y: [1000, -300], // Slow, smooth ascent
        x: [0, 30, -30, 20, -20, 10, -10, 0], // Continuous wiggle
        rotate: [-15, 10, -10, 5, -5, 0], // Smooth rotation
        opacity: [0, 0.6, 1, 1, 0.8, 0], // Fade in & out naturally
      }}
      transition={{
        duration: 8 + Math.random() * 5, // Slower, more natural rise
        ease: [0.42, 0, 0.58, 1], // Smooth cubic bezier easing
        repeat: Infinity,
        repeatType: "mirror", // Makes it reverse smoothly
      }}
    />
  );
};

export default PetalComponent;
