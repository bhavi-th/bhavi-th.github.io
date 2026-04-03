import { useEffect, useRef, useState } from "react";
import "../styles/pages/Skills.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
  const sectionRef = useRef(null);

  const techStack = [
    {
      id: "foundations",
      title: "Foundations",
      color: "blue",
      items: ["JavaScript", "React", "CSS3", "Git"],
    },
    {
      id: "architecture",
      title: "Architecture",
      color: "purple",
      items: ["Node.js", "Express", "RESTful APIs", "NoSQL"],
    },
    {
      id: "solutions",
      title: "Solutions",
      color: "white",
      items: ["UI/UX Design", "Performance Optimization", "Scalability"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="Skills" id="skills" ref={sectionRef}>
      <div className="skills-layout-container">
        
        <div className={`skills-header-block ${isVisible ? "fade-in-up" : ""}`}>
          <div className="section-subtitle">03 / SKILLS</div>
          <h2 className="section-main-title">Core <br />Tech Stack</h2>
          <div className="status-message">
            {activeTech 
              ? `Exploring // ${activeTech}`
              : "// Interactive Cascade"
            }
          </div>
        </div>

        <div className={`cascade-container ${isVisible ? "activate-stack" : ""}`}>
          {techStack.map((level, levelIndex) => (
            <div 
              key={level.id} 
              className={`cascade-level level-${level.color}`}
              style={{ "--level-index": levelIndex }}
            >
              <div className="level-meta">
                <span className="level-number">0{levelIndex + 1}</span>
                <span className="level-title-text">{level.title}</span>
              </div>

              <div className="skills-grid">
                {level.items.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="skill-block"
                    style={{ "--skill-index": skillIndex }}
                    onMouseEnter={() => setActiveTech(skill)}
                    onMouseLeave={() => setActiveTech(null)}
                  >
                    <div className="skill-content">
                      <span className="skill-name-text">{skill}</span>
                    </div>
                    <div className="hover-surge"></div>
                  </div>
                ))}
              </div>
              
              {levelIndex < techStack.length - 1 && (
                <div className="cascade-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
