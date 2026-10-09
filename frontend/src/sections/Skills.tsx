import SkillCard from "../components/SkillCard";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: "/src/assets/icons/HTML.png" },
  { name: "CSS", icon: "/src/assets/icons/css.png" },
  { name: "JavaScript", icon: "/src/assets/icons/js.png" },
  { name: "Java", icon: "/src/assets/icons/java.png" },
  { name: "PHP", icon: "/src/assets/icons/php.png" },
  { name: "React", icon: "/src/assets/icons/react.png" },
  { name: "TypeScript", icon: "/src/assets/icons/typescript.png" },
  { name: "WordPress + Divi", icon: "/src/assets/icons/wordpress.png" },
  { name: "Git", icon: "/src/assets/icons/git.png" },
  { name: "MySQL", icon: "/src/assets/icons/mysql.png" },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <h2>Skills</h2>

        <p className="skills-description">
          Tecnologías y herramientas que utilizo y continúo aprendiendo
          durante mi formación como desarrolladora.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;