import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BlackHole from "./components/BlackHole";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";
import "./App.css";
import Timeline from "./pages/Timeline";

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsExpanded(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Home = () => (
    <>
      <BlackHole isExpanded={isExpanded} />
      <Hero />
      <Skills />
      <Timeline />
      <Projects limit={6} />
      <Contacts />
    </>
  );

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
