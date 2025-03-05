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
      className="absolute w-16 opacity-80"
      style={{ left, top }} // Apply the left and top position dynamically
      initial={{ y: 1000, x: 0, rotate: 0, opacity: 0 }} // Start from below the screen
      animate={{
        y: [1000, 0, -200], // Moves from bottom to top and slightly higher
        x: [0, 30, -30, 0], // Slight swaying motion left to right (adjust for stronger sway)
        rotate: [-10, 10, -10], // Gentle rotation for a wiggling effect
        opacity: [0, 0.8, 1, 0], // Fade in at the middle of the animation and fade out at the end
      }}
      transition={{
        duration: 5 + Math.random() * 3, // Randomize speed for a more natural flow
        ease: "easeInOut",
        repeat: Infinity, // Repeat the animation forever
      }}
    />
  );
};

export default PetalComponent;
