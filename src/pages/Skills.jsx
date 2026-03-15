import { useEffect, useRef, useState } from "react";
import "../styles/pages/Skills.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const orbits = [
    {
      id: "inner",
      dist: "20vmin",
      speed: "20s",
      skills: [{ name: "React", type: "frontend" }],
    },
    {
      id: "mid",
      dist: "27vmin",
      speed: "35s",
      skills: [
        { name: "Express", type: "backend" },
        { name: "JavaScript", type: "frontend" },
      ],
    },
    {
      id: "outer",
      dist: "34vmin",
      speed: "50s",
      skills: [
        { name: "CSS", type: "frontend" },
        { name: "Node.js", type: "backend" },
        { name: "Git", type: "tools" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="Skills" id="skills" ref={sectionRef}>
      {/* Background Header Text */}
      <div className={`skills-bg-header ${isVisible ? "fade-in" : ""}`}>
        <h5 className="skills-subtitle">NEURAL NETWORK</h5>
        <h1 className="skills-title">My Tech Stack</h1>
      </div>

      {/* Foreground Orbits */}
      <div className={`solar-system-container ${isVisible ? "active" : ""}`}>
        {orbits.map((orbit) => (
          <div
            key={orbit.id}
            className="orbit-ring"
            style={{
              width: `calc(${orbit.dist} * 2)`,
              height: `calc(${orbit.dist} * 2)`,
              animationDuration: orbit.speed,
            }}
          >
            {orbit.skills.map((skill, index) => (
              <div
                key={index}
                className={`skill-node ${skill.type}`}
                style={{
                  "--index": index,
                  "--total": orbit.skills.length,
                  "--push": orbit.dist,
                }}
              >
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
