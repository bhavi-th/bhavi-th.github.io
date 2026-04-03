import Timeline from "./Timeline";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";

const Home = () => (
  <div className="home-container">
    <section className="home-section">
      <Hero />
    </section>

    <section className="home-section">
      <Skills />
    </section>

    <section className="home-section">
      <Timeline />
    </section>

    <section className="home-section">
      <Projects limit={6} />
    </section>

    <section className="home-section">
      <Contacts />
    </section>
  </div>
);

export default Home;
