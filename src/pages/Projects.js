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
          description="This is a modern and intuitive todo list application built using React,
                        designed to help users efficiently organize their tasks and boost productivity.
                        With its sleek interface and robust functionality,
                        this app simplifies task management, allowing users to create,
                        edit, and mark tasks as complete with ease."
          link="https://bhavi-th.github.io/task-manager/"
          codeLink="https://github.com/bhavi-th/task-manager"
        />
      </div>
    </section>
  );
}

export default Projects;
