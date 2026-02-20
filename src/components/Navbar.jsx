import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/about">
            <nobr>ABOUT ME</nobr>
          </Link>
        </li>
        <li>
          <Link to="/work">
            <nobr>MY WORK</nobr>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <nobr>CONTACT ME</nobr>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
