import "../styles/About.css";
import { useState, useEffect } from "react";

function About() {
  const [resumeAvailable, setResumeAvailable] = useState(true);

  useEffect(() => {
    setResumeAvailable(false);
  }, []);

  return (
    <section className="About" id="about">
      <div id="about-card" className="fade-elements">
        {resumeAvailable ? (
          <a href="/resume.pdf" id="resume" download="bhavith_resume.pdf">
            Download Resume
          </a>
        ) : (
          <></>
        )}
      </div>
      <div id="about-details" className="fade-elements">
        <span>About Me</span>
        <p id="about-intro">
          I'm a passionate undergraduate student studying Computer Science and
          Engineering student at BMS Institute of Technology and Management.
          Driven by curiosity and a passion for innovation, I'm eager to explore
          the limitless possibilities that technology offers.
        </p>
        <p id="about-skills">
          As a full-stack developer, I enjoy delving into coding,
          problem-solving, and learning about emerging technologies that shape
          the future. Through my journey, I aim to not only build technical
          expertise but also create impactful solutions that make a difference.
          Outside academics, I value creativity, teamwork, and continuous
          growth. Welcome to my portfolio!
        </p>
      </div>
    </section>
  );
}

export default About;
