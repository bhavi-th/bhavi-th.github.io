import { useState, useEffect } from "react";
import "./App.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor.jsx";

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
      <Cursor />
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
