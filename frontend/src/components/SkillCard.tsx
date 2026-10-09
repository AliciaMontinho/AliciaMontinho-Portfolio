import "./SkillCard.css";

interface SkillCardProps {
  name: string;
  icon: string;
}

function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="skill-card">
      <img src={icon} alt={`${name} icon`} />
      <span>{name}</span>
    </div>
  );
}

export default SkillCard;