import { useState, useEffect } from "react";
import "./App.css";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";
import Projects from "./pages/Projects.js";
import Skills from "./pages/Skills.js";
import Contact from "./pages/Contact.js";
import Footer from "./components/Footer.js";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "white";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme); // persist theme
    const body = document.querySelector("body");

    if (theme !== "white") {
      body.classList.add("inverted");
    } else {
      body.classList.remove("inverted");
    }
  }, [theme]);

  useEffect(() => {
    // document.querySelector("body").classList.add("inverted");
    const elementsToObserve = document.querySelectorAll(".fade-elements");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    elementsToObserve.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
