import "../styles/pages/Hero.css";

const Hero = () => {
  const name = "Bhavith";

  return (
    <div className="HeroPage">
      <main className="hero-main">
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
    </div>
  );
};

export default Hero;
