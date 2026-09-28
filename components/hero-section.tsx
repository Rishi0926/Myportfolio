"use client"

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero-section bg-grid-pattern">
      <div className="radial-glow" style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Pulsing Status Pill */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <div className="section-tag">
            <span className="status-dot"></span>
            <span>AI Platform & Full-Stack Developer</span>
          </div>
        </div>

        {/* Ecliptz Hero Display Headline */}
        <h1 className="hero-display-title">
          Architect. Build. <br />
          <span className="text-accent-gradient">Dominate.</span>
        </h1>

        <p className="hero-subtitle-text">
          Hi, I'm <strong style={{ color: "#ffffff" }}>Chintha Kuntla Rishikesh Reddy</strong>. B.Tech Data Science student 
          crafting broadcast-quality AI platforms, multilingual captioning systems, and high-impact web products.
        </p>

        {/* CTAs */}
        <div className="hero-cta-group">
          <button onClick={() => scrollTo("projects")} className="btn-brand">
            <span>Explore Work</span>
            <i className="fas fa-arrow-right" style={{ fontSize: "0.85rem" }}></i>
          </button>
          <button onClick={() => scrollTo("contact")} className="btn-glass">
            <span>Get In Touch</span>
          </button>
        </div>

        {/* Social Icons Bar */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
          <a
            href="mailto:chinthakuntlarishikeshreddy@gmail.com"
            className="domain-pill"
            title="Email"
          >
            <i className="fas fa-envelope" style={{ color: "var(--brand-accent)" }}></i>
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Rishi0926"
            target="_blank"
            rel="noopener noreferrer"
            className="domain-pill"
            title="GitHub"
          >
            <i className="fab fa-github" style={{ color: "var(--brand-accent)" }}></i>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rishikeshreddy9/"
            target="_blank"
            rel="noopener noreferrer"
            className="domain-pill"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin" style={{ color: "var(--brand-accent)" }}></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/rishi_beatz01"
            target="_blank"
            rel="noopener noreferrer"
            className="domain-pill"
            title="Instagram"
          >
            <i className="fab fa-instagram" style={{ color: "var(--brand-accent)" }}></i>
            <span>15K+ Media</span>
          </a>
        </div>

        {/* Hero Stat Counters */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <div className="hero-stat-num">8.80</div>
              <div className="hero-stat-label">Current CGPA (CSE Data Science)</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-num">6+</div>
              <div className="hero-stat-label">Production Software Shipped</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-num">80+</div>
              <div className="hero-stat-label">Languages AI Captioning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
