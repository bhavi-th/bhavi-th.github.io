import "../styles/pages/AboutMe.css";

const AboutMe = () => {
  const stats = [
    { label: "Years of Experience", value: "2+" }, // Adjusted for a student/rising dev
    { label: "Projects Launched", value: "2+" },
    { label: "Technologies", value: "8+" },
    { label: "Coffee Consumed", value: "∞" },
  ];

  return (
    <section className="AboutMe" id="about">
      <div className="about-container">
        <div className="about-content">
          <h5 className="about-subtitle">ABOUT ME</h5>
          <h1 className="about-title">I'm Bhavith.S</h1>

          <div className="about-body">
            <p className="about-description">
              Currently pursuing my{" "}
              <strong>B.E. in Computer Science at BMSIT</strong>, I view the
              digital landscape as an infinite expanse for innovation. My focus
              lies in architecting robust web applications that don't just exist
              in the cloud, but solve{" "}
              <strong>tangible, real-world problems</strong>.
            </p>

            <p className="about-description secondary">
              From mastering foundational algorithms to exploring the frontiers
              of the Internet Computer, I am dedicated to building
              high-performance solutions with clean code and purposeful design.
              My mission is to bridge the gap between complex backend logic and
              intuitive user experiences.
            </p>
          </div>

          <div className="mission-tags">
            <span>BMSIT CSE</span>
            <span>Web3 Enthusiast</span>
            <span>Problem Solver</span>
          </div>
        </div>

        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
