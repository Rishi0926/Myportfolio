export default function AchievementsSection() {
  const achievements = [
    {
      icon: "fas fa-trophy",
      title: "Finalist - The Great Bangalore Hackathon 2025",
      description:
        "Selected as one of the finalist teams from over 1,500+ applicants, with only 150 teams shortlisted.",
    },
    {
      icon: "fas fa-award",
      title: "Best Project Award",
      description: "Awarded for developing MRCET StudentSNAP, recognized by MRCET for innovation and impact.",
    },
    {
      icon: "fas fa-users",
      title: "Content Creator",
      description: "Instagram account with 15K+ followers. Video editor publishing creative content.",
    },
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
