import React, { useEffect } from "react";
import "../styles/pages/AboutMe.css";

const AboutMe = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15 },
    );

    // Observe the content block and individual stat cards
    const elements = document.querySelectorAll(".about-content, .stat-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="AboutMe" id="about">
      <div className="about-container">
        {/* --- Left Column: Narrative --- */}
        <div className="about-content">
          <p className="about-subtitle">CORE_IDENTITY</p>
          <h2 className="about-title">
            Developer <br /> Manifest
          </h2>

          <div className="about-body">
            <p className="about-description">
              I am <strong>Bhavith S</strong>, a Computer Science Engineering
              student at BMSIT with a deep-seated obsession for{" "}
              <strong>minimalist systems</strong> and{" "}
              <strong>high-performance interfaces</strong>.
            </p>
            <p className="about-description secondary">
              My workflow is driven by the Arch Linux philosophy: simplicity,
              modern-tooling, and total control. I build full-stack ecosystems
              using the <strong>MERN stack</strong>, blending rigorous backend
              logic with immersive, 3D-accelerated frontends.
            </p>
          </div>

          <div className="mission-tags">
            <span>// ARCH_USER</span>
            <span>// MERN_SPECIALIST</span>
            <span>// NEOVIM_ENTHUSIAST</span>
            <span>// UI_ENGINEER</span>
          </div>
        </div>

        {/* --- Right Column: Stats Grid --- */}
        <div className="about-stats-grid">
          <div className="stat-card">
            <h4 className="stat-value">2+</h4>
            <p className="stat-label">Projects_Deployed</p>
          </div>
          <div className="stat-card">
            <h4 className="stat-value">2+ Yrs</h4>
            <p className="stat-label">System_Uptime</p>
          </div>
          <div className="stat-card">
            <h4 className="stat-value">150+</h4>
            <p className="stat-label">Git_Commits</p>
          </div>
          <div className="stat-card">
            <h4 className="stat-value">∞</h4>
            <p className="stat-label">Coffee_Units</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
