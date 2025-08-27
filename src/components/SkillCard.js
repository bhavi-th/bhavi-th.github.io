import React from "react";
import "./SkillCard.css"; // Create a CSS file for styling

const SkillCard = ({ link, skillName, description, icon }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="Skill-card fade-elements">
            <img id={skillName} src={icon} alt={`${skillName} logo`} className="skill-icon" />
            <h3>{skillName}</h3>
            <p>{description}</p>
        </a>
    );
};

export default SkillCard;
