import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      id: "fluxocut",
      num: "01",
      title: "FluxoCut — AI-Powered Captioning & Localization Platform",
      category: "AI / Multilingual Processing",
      description:
        "Built a captioning platform generating word-timed, broadcast-quality captions across 80+ languages, including 14 Indian and 68 international languages. Integrated translation and transliteration workflows with editor-ready templates for After Effects, DaVinci Resolve, and Premiere Pro.",
      technologies: ["AI", "Multilingual Processing", "After Effects", "DaVinci Resolve", "Premiere Pro"],
      image: "/images/fluxocut.jpg",
      liveUrl: "https://fluxocut.com/",
      githubUrl: "https://github.com/Rishi0926",
    },
    {
      id: "linkrcap",
      num: "02",
      title: "LinkrCap — AI Startup Research & Launch Platform",
      category: "AI / Founders & Pitch Decks",
      description:
        "Built an AI platform that stress-tests startup ideas through deep research and generates investor-ready, fully editable pitch decks. Developed a structured launch roadmap and credit-based usage system to sequence execution and meter AI-powered features.",
      technologies: ["AI", "Deep Research", "Pitch Deck Generation", "Product Roadmapping"],
      image: "/images/linkrcap.jpg",
      liveUrl: "https://linkrcap.com/",
      githubUrl: "https://github.com/Rishi0926",
    },
    {
      id: "studentsnap",
      num: "03",
      title: "MRCET StudentSNAP",
      category: "Campus / Management Systems",
      description:
        "Web application for college faculty to perform CRUD operations on student details with E-Gate pass integration and real-time attendance management.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "Firebase"],
      image: "/images/mrcet.jpeg",
      liveUrl: "https://studentsnap.vercel.app/",
      githubUrl: "https://github.com/Rishi0926/mrcet-studentsnap",
    },
    {
      id: "finassist",
      num: "04",
      title: "FinAssist AI",
      category: "AI / Voice Loan Advisor",
      description:
        "AI-powered multilingual financial loan advisor with real-time voice interactions supporting 10+ languages and intelligent loan eligibility scoring.",
      technologies: ["MERN", "Firebase", "Llama 3.1", "Voice AI"],
      image: "/images/finassistant.jpg",
      liveUrl: "https://finassist-sage.vercel.app/",
      githubUrl: "https://github.com/Rishi0926/finassist-ai",
    },
    {
      id: "financemaven",
      num: "05",
      title: "Finance Maven",
      category: "Data Analysis / CLI Tool",
      description:
        "Personal financial management tool with command-line interface for automated transaction tracking, budget analytics, and custom data visualization.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      image: "/images/finance.jpg",
      liveUrl: "https://financemaven.vercel.app/",
      githubUrl: "https://github.com/Rishi0926/finance-maven",
    },
    {
      id: "quickfolio",
      num: "06",
      title: "QuickFolio",
      category: "Web App / Portfolio Builder",
      description:
        "A modern portfolio builder app allowing developers and creators to build stunning portfolios quickly with customizable themes and instant deployment.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      image: "/images/portfolio.jpeg",
      liveUrl: "https://quickfolio-azure.vercel.app/",
      githubUrl: "https://github.com/Rishi0926/quickfolio",
    },
  ]

  return (
    <section id="projects" className="bg-grid-pattern">
      <div className="container">
        <div className="section-tag">
          <span>// Our Work</span>
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
          <div>
            <h2 className="section-title-large">
              What I've <span style={{ color: "var(--brand-accent)" }}>cooked till now.</span>
            </h2>
            <p className="section-subtitle">
              Featured software platforms, AI applications, and products built with production standards.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "2.5rem", fontWeight: 800, color: "#fff" }}>06</span>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)" }}>
              Products Shipped
            </div>
          </div>
        </div>

        {/* Ecliptz Quick Navigation Index */}
        <div className="projects-quick-index">
          {projects.map((p) => (
            <a key={p.id} href={`#project-${p.id}`} className="index-item-link">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span className="index-num">{p.num}</span>
                <span className="index-title">{p.title.split(" — ")[0]}</span>
              </div>
              <i className="fas fa-arrow-down" style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}></i>
            </a>
          ))}
        </div>

        {/* Ecliptz Projects Cards Grid */}
        <div className="projects-masonry-grid">
          {projects.map((project) => (
            <div key={project.id} id={`project-${project.id}`} className="project-card-ecliptz">
              <div className="project-thumb-box">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={340}
                  style={{ objectFit: "cover" }}
                />
                <div className="project-thumb-overlay">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-action-btn"
                      title="Live Website"
                    >
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-action-btn"
                      style={{ background: "#ffffff", color: "#000000" }}
                      title="GitHub Source"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-info-body">
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>
                  {project.category}
                </div>
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-desc-text">{project.description}</p>
                <div className="tech-badges-row">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
