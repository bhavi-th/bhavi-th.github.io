import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BlackHole from "./components/BlackHole";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import "./App.css";

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Example: Expand when scroll > 100px
  useEffect(() => {
    const handleScroll = () => {
      setIsExpanded(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <BlackHole isExpanded={isExpanded} />
      <Hero />
      <Skills />
    </>
  );
};

export default App;
