import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-hud">
      <div className="hud-corner top-l">
        <div className="corner-content">
          <span className="label-tiny">ENGINEER</span>
          {/* Clicking your name should take you back to the home top */}
          <Link to="/" className="brand-link">
            <span className="brand-id">BHAVITH.S</span>
          </Link>
        </div>
      </div>

      <div className="hud-corner top-r">
        <div className="nav-list">
          {/* Use "to" instead of "href" */}
          <Link to="/about" className="nav-node">
            <span className="node-text">ABOUT ME</span>
            <div className="node-dot"></div>
          </Link>

          <Link to="/projects" className="nav-node">
            <span className="node-text">PROJECTS</span>
            <div className="node-dot"></div>
          </Link>

          <Link to="/contact" className="nav-node">
            <span className="node-text">CONTACT</span>
            <div className="node-dot"></div>
          </Link>
        </div>
      </div>

      <div className="hud-frame-bottom">
        <div className="scan-line-horizontal"></div>
      </div>
    </nav>
  );
};

export default Navbar;
