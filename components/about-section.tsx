export default function AboutSection() {
  const domains = [
    { name: "AI Platforms", icon: "fas fa-brain" },
    { name: "Full-Stack Web", icon: "fas fa-code" },
    { name: "Multilingual Processing", icon: "fas fa-language" },
    { name: "Data Science", icon: "fas fa-chart-bar" },
    { name: "Automations", icon: "fas fa-bolt" },
    { name: "Web3 & Blockchain", icon: "fas fa-cubes" },
  ]

  const processSteps = [
    {
      num: "01",
      title: "Understand",
      desc: "Deep-dive into technical & real-world requirements until every constraint and user workflow is crystal clear.",
    },
    {
      num: "02",
      title: "Design & Architect",
      desc: "Structure scalable data schemas, UI components, and API integration paths before writing code.",
    },
    {
      num: "03",
      title: "Build & Ship",
      desc: "Deliver full-stack, broadcast-quality software end-to-end with high speed, clean code, and zero friction.",
    },
  ]

  return (
    <section id="about">
      <div className="container">
        <div className="section-tag">
          <span>// Who I Am</span>
        </div>
        <h2 className="section-title-large">
          Building whole products that define categories,{" "}
          <span style={{ color: "var(--brand-accent)" }}>not just prototypes.</span>
        </h2>

        {/* Domain Pills */}
        <div className="pill-tags-wrap" style={{ marginBottom: "3rem" }}>
          {domains.map((item, index) => (
            <div key={index} className="domain-pill">
              <i className={item.icon} style={{ color: "var(--brand-accent)" }}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        {/* 2-Column Layout */}
        <div className="about-grid-layout">
          <div className="about-card-glass">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              Passionate Engineering & Data Innovation
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              Motivated 4th Year B.Tech CSE Data Science student at Malla Reddy College of Engineering & Technology,
              Hyderabad, with an average CGPA of <strong>8.80</strong>. I specialize in building real-world AI platforms,
              multilingual loan advisors, broadcast captioning engines, and modern full-stack web applications.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
              Adept at collaborating in dynamic environments and creating data-driven solutions for complex domain challenges.
              Continuously expanding expertise in Generative AI, Large Language Models, and modern frontend/backend architecture.
            </p>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)" }}>
              <div style={{ fontStyle: "italic", color: "var(--brand-accent)", fontWeight: 600 }}>
                “Fast execution is a by-product of knowing exactly what you're making before you make it.”
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              My Execution Process
            </h3>
            <div className="process-steps-list">
              {processSteps.map((step, idx) => (
                <div key={idx} className="process-step-item">
                  <span className="process-step-num">{step.num}</span>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "0.3rem" }}>
                      {step.title}
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
