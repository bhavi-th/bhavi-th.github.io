import "../styles/Projects.css";
import Card from "../components/Card";
import taskManager from "../assets/task-manager.png";

function Projects() {
  return (
    <section className="Projects" id="projects">
      <h2>My Projects</h2>
      <div className="cards-container">
        <Card
          skillName="Task Manager"
          icon={taskManager}
          description="A sleek React-based todo app for organizing tasks with ease. Features include create, edit, and complete workflows."
          link="https://bhavi-th.github.io/task-manager/"
          codeLink="https://github.com/bhavi-th/task-manager"
        />
      </div>
    </section>
  );
}

export default Projects;
