import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      <nav className={`nav-container ${isOpen ? "menu-open" : ""}`}>
        <div className="nav-content">
          <Link to="/" className="brand-link" onClick={() => setIsOpen(false)}>
            <div className="brand-container">
              <span className="brand-dot"></span>
              <h1 className="brand-name">BHAVITH.S</h1>
            </div>
          </Link>

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <div className={`hamburger ${isOpen ? "is-active" : ""}`}>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </button>

          <div className={`nav-right ${isOpen ? "active" : ""}`}>
            <div className="menu-items">
              {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase()}`} 
                  className="nav-item" 
                  onClick={() => setIsOpen(false)}
                >
                  <span className="nav-number">0{["ABOUT", "PROJECTS", "CONTACT"].indexOf(item) + 1}</span>
                  <span className="nav-text">{item}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
