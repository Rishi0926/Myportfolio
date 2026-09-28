export default function AchievementsSection() {
  const achievements = [
    {
      icon: "fas fa-award",
      title: "Academic Excellence",
      detail: "8.80 Current CGPA in B.Tech CSE Data Science",
      desc: "Consistently top-ranking academic performance with focus on Data Structures, AI, and Big Data Analytics.",
    },
    {
      icon: "fas fa-users",
      title: "15K+ Digital Audience",
      detail: "Instagram Creator & Video Editing Platform",
      desc: "Built an engaged online community of 15,000+ followers through creative video editing, tech content, and multimedia storytelling.",
    },
    {
      icon: "fas fa-rocket",
      title: "Multilingual AI Innovation",
      detail: "FluxoCut & FinAssist AI Launch",
      desc: "Engineered AI systems processing 80+ global languages, word-timed captioning, and real-time voice advisory.",
    },
  ]

  return (
    <section id="achievements" className="bg-grid-pattern">
      <div className="container">
        <div className="section-tag">
          <span>// Milestones</span>
        </div>
        <h2 className="section-title-large">
          Key Highlights & <span style={{ color: "var(--brand-accent)" }}>Achievements.</span>
        </h2>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-icon">
                <i className={item.icon}></i>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff", marginBottom: "0.25rem" }}>
                {item.title}
              </h3>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-accent)", marginBottom: "0.75rem" }}>
                {item.detail}
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
