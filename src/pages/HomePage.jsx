import { useState, useEffect } from "react";
import BlackHole from "../components/BlackHole";
import "../styles/pages/HomePage.css";

const HomePage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const name = "Bhavith";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="HeroPage">
      <div
        className="mouse-photon"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      <main className="hero-main">
        <BlackHole className="black-hole" />
        <div className="hero-info">
          <h1 className="event-horizon-text">
            {name.split("").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
          <p className="hero-subtitle">
            CREATIVE DEVELOPER & ARCHITECT OF DIGITAL VOIDS
          </p>
          <button className="explore-btn">ENTER THE EVENT HORIZON</button>
        </div>
      </main>

      <div
        className="star-field"
        style={{
          transform: `translate(${mousePos.x / 50}px, ${mousePos.y / 50}px)`,
        }}
      ></div>
    </div>
  );
};

export default HomePage;
