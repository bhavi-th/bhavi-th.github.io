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
        <a href="#projects">View my work</a>
      </div>
    </section>
  );
}

export default Home;
