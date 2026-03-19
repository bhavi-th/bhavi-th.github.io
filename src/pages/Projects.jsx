import { Link } from "react-router-dom";
import "../styles/pages/Projects.css";

const PROJECTS_DATA = [
  {
    title: "Personal Website",
    description: "A portfolio website built with React and Motoko.",
    tags: ["React", "Frontend"],
    link: "",
  },
  {
    title: "ATTSYS 2.0",
    description:
      "A simple attendance system which uses QR code to take attendance of the students.",
    tags: ["React", "Express", "Node", "MongoDB"],
    link: "https://attsys2-0.netlify.app",
  },
];

const Projects = ({ limit }) => {
  const displayedProjects = limit
    ? PROJECTS_DATA.slice(0, limit)
    : PROJECTS_DATA;
  return (
    <section className="Projects" id="projects">
      <div className="projects-container">
        <header className="projects-header">
          <p className="subtitle">PROJECTS</p>
          <h2 className="main-title">
            {limit ? "Featured Projects" : "All Projects"}
          </h2>
        </header>

        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <div className="tag-container">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link || "#"}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {limit && PROJECTS_DATA.length > limit && (
          <div className="view-more-container">
            <Link to="/projects" className="view-more-btn">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
