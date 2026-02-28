import "../styles/pages/Hero.css";
import { useState, useEffect } from "react";

const Hero = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [distance, setDistance] = useState(26673.42);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDistance((prev) => prev + (Math.random() * 0.04 - 0.02));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const gravStrength = (1 / (distance / 8000)).toFixed(4);

  return (
    <section className="hero-viewport">
      <div className="scanning-grid"></div>
      <div className="orbital-ring inner"></div>
      <div className="orbital-ring outer"></div>

      <div className="hud-edge top-edge">
        <div className="hud-unit">
          <span className="tech-label">LOCAL_TIME</span>
          <div className="value-header">{time}</div>
        </div>
        <div className="hud-unit center-metric">
          <span className="tech-label">DIST_TO_SINGULARITY</span>
          <div className="metric-val">
            {distance.toFixed(3)} <span className="unit">LY</span>
          </div>
        </div>
        <div className="hud-unit text-right">
          <span className="tech-label">GRAV_STRENGTH</span>
          <div className="metric-val">
            {gravStrength} <span className="unit">G-UNIT</span>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <div className="identity-group">
          <h1 className="name-main">BHAVITH</h1>
          <h2 className="role-sub">FULL-STACK WEB ARCHITECT // 2026</h2>
        </div>
        <div className="cta-wrap">
          <button className="warp-button">INITIALIZE_PULL</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
