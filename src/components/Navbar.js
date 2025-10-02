import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";

export default function Navbar({ theme, setTheme }) {
  const [hamClicked, setHamClicked] = useState(false);
  const hamburger = useRef();

  const toggleMenu = (ele) => {
    hamburger.current.className = !hamClicked ? "active" : "";
    setHamClicked((prev) => !prev);
  };

  return (
    <nav className="Navbar">
      <div id="logo">&lt;bhavi-th/&gt;</div>
      <div id="hamburger" ref={hamburger} onClick={toggleMenu}>
        <div id="ham-beg"></div>
        <div id="ham-mid"></div>
        <div id="ham-end"></div>
      </div>
      <ul id="links" className={hamClicked ? "show-links" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div
          id="theme"
          title="Click to change the site theme"
          onClick={() => {
            console.log(theme, " from navbar theme button");
            setTheme(theme === "white" ? "dark" : "white");
            console.log(theme, " from navbar theme button");
          }}
        >
          <img
            src={theme === "dark" ? sunIcon : moonIcon}
            alt="Theme toggle icon"
            className="theme-icon"
          />
        </div>
      </ul>
      <div
        id="theme"
        title="Click to change the site theme"
        onClick={() => {
          console.log(theme, " from navbar theme button");
          setTheme(theme === "white" ? "dark" : "white");
          console.log(theme, " from navbar theme button");
        }}
      >
        <img
          src={theme === "dark" ? sunIcon : moonIcon}
          alt="Theme toggle icon"
          className="theme-icon"
        />
      </div>
    </nav>
  );
}
