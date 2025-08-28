import { useState, useEffect } from 'react';
import "./Navbar.css";
import sunIcon from '../assets/sun.png';
import moonIcon from '../assets/moon.png';

export default function Navbar({ theme, setTheme }) {

    const [activeLink, setActiveLink] = useState("home");
    const [hamClicked, setHamClicked] = useState(false);

    const toggleMenu = (ele) => {
        ele.target.className = !hamClicked ? "active" : "";
        setHamClicked((prev) => !prev);
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -40% 0px"
        });

        document.querySelectorAll("section").forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "white") {
            setTheme(true);
        }
    }, [setTheme]);

    const toggleTheme = () => {
        document.body.classList.toggle("inverted");
        setTheme((prev) => {
            const newTheme = !prev ? "white" : "dark";
            localStorage.setItem("theme", newTheme);
            return !prev;
        });
    };

    return (
        <nav className="Navbar">
            <div id="logo">&lt;bhavi-th/&gt;</div>
            <div id="hamburger" onClick={toggleMenu}>
                <div id="ham-first"></div>
                <div id="ham-mid"></div>
                <div id="ham-last"></div>
            </div>
            <ul id="links" className={hamClicked ? "show-links" : ""}>
                <a href="#home" className={activeLink === "home" ? "active" : ""}>
                    <li>
                        Home
                    </li>
                </a>
                <a href="#about" className={activeLink === "about" ? "active" : ""}>
                    <li>
                        About
                    </li>
                </a>
                <a href="#skills" className={activeLink === "skills" ? "active" : ""}>
                    <li>
                        Skills
                    </li>
                </a>
                <a href="#projects" className={activeLink === "projects" ? "active" : ""}>
                    <li>
                        Projects
                    </li>
                </a>
                <a href="#contact" className={activeLink === "contact" ? "active" : ""}>
                    <li>
                        Contact
                    </li>
                </a>
                <div
                    id="theme"
                    title="Click to change the site theme"
                    onClick={toggleTheme}
                >
                    <img
                        src={theme ? moonIcon : sunIcon}
                        alt="Theme toggle icon"
                        className="theme-icon"
                    />
                </div>
            </ul>
        </nav>
    );
}