export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages & Core",
      icon: "fas fa-code",
      skills: ["Java", "JavaScript", "Python", "R", "TypeScript", "SQL"],
    },
    {
      title: "Frontend Engineering",
      icon: "fas fa-laptop-code",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend & Cloud",
      icon: "fas fa-server",
      skills: ["Node.js", "Express.js", "Django", "Firebase", "REST APIs"],
    },
    {
      title: "Databases & Storage",
      icon: "fas fa-database",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Data Science & AI",
      icon: "fas fa-brain",
      skills: ["Pandas", "Matplotlib", "PowerBI", "Llama 3.1", "Generative AI"],
    },
    {
      title: "Tools & Workflow",
      icon: "fas fa-tools",
      skills: ["VS Code", "PyCharm", "Git & GitHub", "Vercel", "After Effects"],
    },
  ]

  return (
    <section id="skills" className="bg-grid-pattern">
      <div className="container">
        <div className="section-tag">
          <span>// Tech Stack</span>
        </div>
        <h2 className="section-title-large">
          Technical Skills & <span style={{ color: "var(--brand-accent)" }}>Capabilities.</span>
        </h2>
        <p className="section-subtitle">
          Technologies, frameworks, and tools I use to build scalable web applications and intelligent data solutions.
        </p>

        <div className="skills-category-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <div className="skill-category-header">
                <i className={category.icon}></i>
                <span>{category.title}</span>
              </div>
              <div className="skill-tags-group">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
