import "../styles/Card.css"; // Create a CSS file for styling

const Card = ({ skillName, description, icon, link, codeLink }) => {
  return (
    <div className="Card fade-elements">
      <img
        id={skillName}
        src={icon}
        alt={`${skillName} logo`}
        className="skill-icon"
      />
      <div className="Card-details">
        <h3>{skillName}</h3>
        <p>{description}</p>
        <div>
          <a href={link} alt="Project link" target="_blank" rel="noreferrer">
            Visit Project
          </a>
          <a
            href={codeLink}
            alt="Github repo link"
            target="_blank"
            rel="noreferrer"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
