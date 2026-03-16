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

const Projects = () => {
  return (
    <section className="Projects" id="projects">
      <div className="projects-container">
        <header className="projects-header">
          <p className="subtitle">PROJECTS</p>
          <h2 className="main-title">Projects Completed</h2>
        </header>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project, index) => (
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

              {/* Added target="_blank" so users don't leave your site when clicking */}
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
      </div>
    </section>
  );
};

export default Projects;
