import "../styles/Skills.css";
import SkillCard from "../components/SkillCard";
import ReactJS from "../assets/skills/react.svg";
import Git from "../assets/skills/git.svg";
import GitHub from "../assets/icon/github-inverted.svg";
import C from "../assets/skills/c.svg";
import Cpp from "../assets/skills/cpp.svg";
import HTML5 from "../assets/skills/html.svg";
import CSS3 from "../assets/skills/css.svg";
import JavaScript from "../assets/skills/js.svg";
import MongoDB from "../assets/skills/mongodb.svg";
import MySQL from "../assets/skills/mysql.svg";
import Python from "../assets/skills/python.svg";
import Postman from "../assets/skills/postman.svg";

const Skills = () => {
  const skills = [
    {
      link: "https://react.dev/",
      skillName: "React",
      description:
        "Experienced in building UIs with hooks and state management.",
      icon: ReactJS,
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      skillName: "HTML5",
      description: "Skilled in structuring web content with semantic markup.",
      icon: HTML5,
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      skillName: "CSS3",
      description:
        "Proficient in styling and responsive design using modern techniques.",
      icon: CSS3,
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      skillName: "JavaScript",
      description:
        "Experienced in developing dynamic and interactive web applications.",
      icon: JavaScript,
    },
    {
      link: "https://git-scm.com/",
      skillName: "Git",
      description:
        "Experienced in version control, branching, merging, and efficient repository management.",
      icon: Git,
    },
    {
      link: "https://github.com/",
      skillName: "GitHub",
      description: "Skilled in collaborative development and pull requests.",
      icon: GitHub,
    },
    {
      link: "https://en.wikipedia.org/wiki/C_%28programming_language%29",
      skillName: "C",
      description:
        "Strong foundation in system-level programming and algorithm optimization.",
      icon: C,
    },
    {
      link: "https://isocpp.org/",
      skillName: "C++",
      description:
        " Adept at object-oriented programming and performance-driven development.",
      icon: Cpp,
    },
    {
      link: "https://www.python.org/",
      skillName: "Python",
      description:
        "Versatile in scripting, automation, and data handling with Python.",
      icon: Python,
    },
    {
      link: "https://www.mongodb.com/",
      skillName: "MongoDB",
      description:
        "Knowledgeable in NoSQL databases, schema design, and query optimization.",
      icon: MongoDB,
    },
    {
      link: "https://www.mysql.com/",
      skillName: "MySQL",
      description:
        "Experienced in relational databases, SQL queries, and data integrity management.",
      icon: MySQL,
    },
    {
      link: "https://www.postman.com/",
      skillName: "Postman",
      description:
        "Proficient in API testing, request debugging, and automation.",
      icon: Postman,
    },
    // Add more skills here
  ];

  return (
    <section className="Skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-card-holder">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
