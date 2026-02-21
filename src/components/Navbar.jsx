import "../styles/components/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              ABOUT ME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-link">
              MY WORK
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              CONTACT ME
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
