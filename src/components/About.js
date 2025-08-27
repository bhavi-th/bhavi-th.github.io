import "./About.css"
import { useState, useEffect } from "react";

function About() {
    const [resumeAvailable, setResumeAvailable] = useState(true);

    useEffect(() => {
        setResumeAvailable(false);
    }, [])

    return (
        <section className="About" id="about">
            <div id="about-card" className="fade-elements">
                <div id="image-cover">
                    <img alt="My Profile" src="#" />
                </div>
                <span id="name">
                    Bhavith S
                </span>
                <p>
                    Hello! I'm a passionate undergraduate student studying Computer Science and Engineering student at BMS Institute of Technology and Management.
                    Driven by curiosity and a passion for innovation, I'm eager to explore the limitless possibilities that technology offers.
                </p>
                {resumeAvailable ? <a href="/resume.pdf" id="resume" download="bhavith_resume.pdf">Download Resume</a> : <></>}
            </div>
            <div id="about-details" className="fade-elements">
                <span>About Me</span>
                <p id="about-intro">
                    As a full-stack developer, I enjoy delving into coding, problem-solving, and learning about emerging technologies that shape the future.
                    Through my journey, I aim to not only build technical expertise but also create impactful solutions that make a difference.
                    Outside academics, I value creativity, teamwork, and continuous growth.
                    Welcome to my portfolio!
                </p>
                <span>Experience and Skills</span>
                <p id="about-skills">
                    I am proficient in utilizing modern technologies to solve complex problems and have a keen interest in contributing to innovative projects.
                    My commitment to growth and collaboration has strengthened my ability to work effectively within diverse teams and communities.
                    Driven by curiosity and a passion for excellence,
                    I continuously strive to explore new opportunities and make a meaningful impact.
                </p>
            </div>
        </section>
    )
}

export default About;