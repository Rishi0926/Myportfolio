export default function ExperienceSection() {
  const experiences = [
    {
      num: "01",
      role: "Full Stack Developer Intern",
      company: "Innoflexus IT Solutions",
      period: "2025",
      points: [
        "Worked on high-impact real-time applications and enterprise software solutions.",
        "Engineered and deployed a real-time web platform for academic campus management.",
        "Architected and implemented a secure Student Database system with role-based access control.",
      ],
    },
  ]

  return (
    <section id="experience">
      <div className="container">
        <div className="section-tag">
          <span>// My Experience</span>
        </div>
        <h2 className="section-title-large">
          Work Experience & <span style={{ color: "var(--brand-accent)" }}>Internships.</span>
        </h2>

        <div className="timeline-modern-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-modern-item">
              <div className="timeline-node-dot"></div>
              <div className="timeline-card-content">
                <span className="timeline-date-badge">{exp.period}</span>
                <h3 className="timeline-role-title">{exp.role}</h3>
                <h4 className="timeline-org-name">{exp.company}</h4>
                <ul style={{ paddingLeft: "1.25rem", color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {exp.points.map((pt, i) => (
                    <li key={i} style={{ marginBottom: "0.4rem" }}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
