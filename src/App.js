import { useState, useEffect } from 'react';
import "./App.css"
import About from "./components/About.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import ScrollTracker from "./components/ScrollTracker.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "white"; // Get stored theme
  });

  useEffect(() => {
    localStorage.setItem("theme", theme ? "white" : "dark"); // Store theme preference
  }, [theme]);

  useEffect(() => {
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
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollTracker />
      <Home theme={theme} />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <hr />
      <Footer theme={theme} />
    </div>
  );
}

export default App;