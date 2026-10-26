import { useState, useEffect } from "react";
import "../styles/pages/Hero.css";

const Hero = ({ coverFinished, onHeroComplete, onExpansionStart }) => {
  const greetings = [
    "ನಮಸ್ಕಾರ",
    "हरिः ॐ",
    "Hello"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [startExpansion, setStartExpansion] = useState(false);

  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    if (!coverFinished) return;

    const waitTimer = setTimeout(() => {
      setIsWaiting(false);
    }, 2000);

    return () => clearTimeout(waitTimer);
  }, [coverFinished]);

  useEffect(() => {
    if (!coverFinished || isWaiting || startExpansion) return;

    const fullText = greetings[currentIndex];
    const typingSpeed = isDeleting ? 75 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText + 1 === fullText.length || currentText === fullText) {
          if (currentIndex === greetings.length - 1) {
            setTimeout(() => setIsDeleting(true), 1000);
          } else {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);

          if (currentIndex === greetings.length - 1) {
            setStartExpansion(true);
            if (onExpansionStart) onExpansionStart();

            setTimeout(() => {
              if (onHeroComplete) onHeroComplete();
            }, 2500);
          } else {
            setCurrentIndex((prev) => prev + 1);
          }
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, coverFinished, startExpansion, greetings, onHeroComplete]);

  if (!coverFinished) {
    return <div className="hero"></div>;
  }

  return (
    <div className="hero">
      {startExpansion && (
        <nav className="hero-nav" aria-label="Main navigation">
          <span className="hero-nav-brand">BHAVITH S</span>
          <div className="hero-nav-links">
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      )}
      <span id="hero-greet" className={startExpansion ? "collapse-cursor" : ""}>
        {currentText}
      </span>
      <div id="hero-content" className={startExpansion ? "expand-active" : ""}>
        <div className="hero-copy">
          <p className="hero-eyebrow">COMPUTER SCIENCE · FULL-STACK DEVELOPMENT</p>
          <h1>Bhavith S</h1>
          <p className="hero-intro">
            Building thoughtful digital experiences with clean systems and
            considered detail.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="hero-action hero-action-primary">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="hero-action hero-action-secondary">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
