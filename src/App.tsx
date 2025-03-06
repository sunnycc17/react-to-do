import CardComponent from "./components/CardComponent";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import PetalComponent from "./components/PetalComponent";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="relative w-full h-full">
        {/* Generate 5 PetalComponent instances with random positions */}
        {[...Array(7)].map((_, i) => (
          <PetalComponent
            key={i}
            left={`${Math.random() * 100}%`} // Random X-position (between 0% and 100%)
            top={`${Math.random() * 100}%`} // Random Y-position (between 0% and 100%)
          />
        ))}
      </div>
      <div data-aos="fade-up">
        <CardComponent />
      </div>
    </div>
  );
};

export default App;
