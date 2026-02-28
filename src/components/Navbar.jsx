import "../styles/components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-hud">
      <div className="hud-corner top-l">
        <div className="bracket-l"></div>
        <div className="corner-content">
          <span className="label-tiny">ENGINEER</span>
          <span className="brand-id">BHAVITH.S</span>
        </div>
      </div>

      <div className="hud-corner top-r">
        <div className="nav-list">
          <a href="#about" className="nav-node">
            <span className="node-text">ABOUT</span>
            <div className="node-dot"></div>
          </a>
          <a href="#work" className="nav-node">
            <span className="node-text">PROJECTS</span>
            <div className="node-dot"></div>
          </a>
          <a href="#contact" className="nav-node">
            <span className="node-text">CONTACT</span>
            <div className="node-dot"></div>
          </a>
        </div>
        <div className="bracket-r"></div>
      </div>

      <div className="hud-frame-bottom">
        <div className="scan-line-horizontal"></div>
      </div>
    </nav>
  );
};

export default Navbar;
