import { useEffect } from "react";
import "../styles/pages/Timeline.css";

const timelineData = [
  {
    year: "2024 - PRESENT",
    title: "Full Stack Engineer",
    subtitle: "Self-Learning",
    description:
      "Creating scalable web ecosystems using the MERN stack with a focus on high-performance rendering. Currently deep-diving into React to bridge the gap between functional UI and immersive 3D astronomical visualizations. Optimized deployment workflows using Vite, Netlify, and Render for seamless CI/CD integration.",
    tags: ["React", "Node.js", "Three.js", "MongoDB", "Vite"],
    side: "left",
  },
  {
    year: "2022 - 2024",
    title: "Systems Foundation",
    subtitle: "Aurobindo Composite PU College",
    description:
      "Formalized core computational logic with an 88% academic focus on Computer Science. Developed a robust understanding of C++ and Memory Management. Transitioned from scripting to component-based architecture by mastering ES6+ JavaScript, laying the groundwork for complex state management and modular design.",
    tags: ["JavaScript", "C++", "Data Structures", "OOP"],
    side: "right",
  },
  {
    year: "2020 - 2022",
    title: "Curiosity Drive",
    subtitle: "Sri Aurobindo Vidya Mandir",
    description:
      "Initiated first-contact with the web stack during the lockdown period. Rapidly prototyped static environments using semantic HTML5 and CSS3. This 'Curiosity Drive' phase was dedicated to understanding the Document Object Model (DOM) and experimenting with early-stage responsive layouts before scaling into full-stack development.",
    tags: ["HTML5", "CSS3", "DOM Manipulation", "UI Design"],
    side: "left",
  },
];

const Timeline = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15, 
      rootMargin: "0px 0px -50px 0px", 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-container" id="experience">
      <div className="timeline-header">
        <h1>Career Timeline</h1>
        <p>System Logs & Academic Milestones</p>
      </div>

      <div className="timeline-wrapper">
        <div className="center-line"></div>

        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-item ${item.side}`}>
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <h2 className="timeline-title">{item.title}</h2>
              <h3 className="timeline-subtitle">{item.subtitle}</h3>
              <p className="timeline-description">{item.description}</p>

              <div className="timeline-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
