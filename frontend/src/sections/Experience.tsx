import "./Experience.css";

const experiences = [
{
category: "FORMACIÓN",
title: "Desarrollo de Aplicaciones Web",
subtitle: "DAW · Formación técnica",
description:
"Desarrollo de aplicaciones web, programación frontend y backend, bases de datos y creación de proyectos.",
tags: ["HTML & CSS", "JavaScript", "PHP", "MySQL"],
},
{
category: "EXPERIENCIA PROFESIONAL",
title: "Retail & Customer Experience",
subtitle: "Atención al cliente · Moda y deporte",
description:
"Experiencia en atención al cliente, conocimiento del producto y presentación comercial. Habilidades que me ayudan a comprender las necesidades de las personas y la importancia de crear experiencias intuitivas y atractivas.",
tags: ["Comunicación", "Experiencia de usuario", "Producto"],
},
{
category: "ACTUALMENTE",
title: "Desarrollo de Aplicaciones Multiplataforma",
subtitle: "DAM · Formación en curso",
description:
"Ampliando mis conocimientos de programación y desarrollo de software para crear soluciones digitales cada vez más completas.",
tags: ["Java", "Programación", "Desarrollo de software"],
},
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <header className="experience-header">
          <span className="experience-eyebrow">MI TRAYECTORIA</span>

          <h2>
            More than just <span>code.</span>
          </h2>

          <p>
            Mi experiencia combina tecnología, creatividad y una visión centrada
            en las personas. Me gusta crear experiencias digitales que no solo
            funcionen bien, sino que también tengan sentido visual y práctico.
          </p>
        </header>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-card" key={experience.title}>
              <div className="experience-number">0{index + 1}</div>

              <div className="experience-content">
                <span className="experience-category">{experience.category}</span>

                <h3>{experience.title}</h3>

                <h4>{experience.subtitle}</h4>

                <p>{experience.description}</p>

                <div className="experience-tags">
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
