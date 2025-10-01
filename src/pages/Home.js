import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="Home">
      <span id="intro">
        Hello World!,
        <br />
        I'm
        <span id="name">Bhavith S</span>
      </span>
      <div id="btn-container">
        <Link to="/projects">Explore my work</Link>
      </div>
    </section>
  );
}

export default Home;
