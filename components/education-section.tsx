export default function EducationSection() {
  const educationData = [
    {
      year: "2022 - 2026",
      degree: "Bachelor of Technology — CSE Data Science",
      institution: "Malla Reddy College Of Engineering & Technology, Hyderabad",
      grade: "Current CGPA: 8.80",
    },
    {
      year: "2020 - 2022",
      degree: "Intermediate Education — MPC",
      institution: "KLN Junior College, Miryalaguda",
      grade: "Percentage: 86%",
    },
    {
      year: "2008 - 2020",
      degree: "Secondary School Certificate (SSC)",
      institution: "Dowhill High School, Miryalaguda",
      grade: "GPA: 10 / 10",
    },
  ]

  return (
    <section id="education">
      <div className="container">
        <div className="section-tag">
          <span>// Education</span>
        </div>
        <h2 className="section-title-large">
          Academic <span style={{ color: "var(--brand-accent)" }}>Background.</span>
        </h2>

        <div className="timeline-modern-list">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-modern-item">
              <div className="timeline-node-dot"></div>
              <div className="timeline-card-content">
                <span className="timeline-date-badge">{item.year}</span>
                <h3 className="timeline-role-title">{item.degree}</h3>
                <h4 className="timeline-org-name">{item.institution}</h4>
                <div style={{ color: "var(--brand-accent)", fontWeight: 700, fontSize: "0.95rem" }}>
                  {item.grade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
