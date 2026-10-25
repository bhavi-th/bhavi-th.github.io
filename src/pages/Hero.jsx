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
      <span id="hero-greet" className={startExpansion ? "collapse-cursor" : ""}>
        {currentText}
      </span>
      <div id="hero-content" className={startExpansion ? "expand-active" : ""}>
      </div>
    </div>
  );
};

export default Hero;
