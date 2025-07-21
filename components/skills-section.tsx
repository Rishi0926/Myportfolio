export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      icon: "fas fa-code",
      skills: ["Java", "JavaScript", "Python", "R"],
    },
    {
      title: "Frontend",
      icon: "fas fa-paint-brush",
      skills: ["HTML5", "CSS3", "React JS"],
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: ["Django", "Express JS", "Node JS"],
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools & Software",
      icon: "fas fa-tools",
      skills: ["PowerBI", "VS Code", "PyCharm", "Git/GitHub"],
    },
    {
      title: "Coursework",
      icon: "fas fa-book",
      skills: ["DSA", "OS", "DBMS", "CN"],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <i className={category.icon}></i> {category.title}
              </h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
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
