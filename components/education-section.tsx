export default function EducationSection() {
  const educationData = [
    {
      year: "2022 - 2026",
      degree: "Bachelor of Technology - CSE Data Science",
      institution: "Malla Reddy College Of Engineering & Technology, Hyderabad",
      grade: "Current CGPA: 8.80",
    },
    {
      year: "2020 - 2022",
      degree: "Intermediate Education - MPC",
      institution: "KLN Junior College, Miryalaguda",
      grade: "Percentage: 86%",
    },
    {
      year: "2008 - 2020",
      degree: "Secondary School Certificate",
      institution: "Dowhill High School, Miryalaguda",
      grade: "GPA: 10",
    },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={index} className="education-item">
              <div className="education-year">{item.year}</div>
              <div className="education-content">
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p className="grade">{item.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
