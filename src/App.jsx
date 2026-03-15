import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BlackHole from "./components/BlackHole";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

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
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
