import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "FluxoCut — AI-Powered Captioning & Localization Platform",
      description:
        "Built a captioning platform generating word-timed, broadcast-quality captions across 80+ languages, including 14 Indian and 68 international languages. Integrated translation and transliteration workflows with editor-ready templates for After Effects, DaVinci Resolve, and Premiere Pro.",
      technologies: ["AI", "Multilingual Processing", "After Effects", "DaVinci Resolve", "Premiere Pro"],
      image: "/images/fluxocut.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/Rishi0926",
    },
    {
      title: "LinkrCap — AI Startup Research & Launch Platform",
      description:
        "Built an AI platform that stress-tests startup ideas through deep research and generates investor-ready, fully editable pitch decks. Developed a structured launch roadmap and credit-based usage system to sequence execution and meter AI-powered features.",
      technologies: ["AI", "Deep Research", "Pitch Deck Generation", "Product Roadmapping"],
      image: "/images/linkrcap.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/Rishi0926",
    },
    {
      title: "MRCET StudentSNAP",
      description:
        "Web application for college faculty to perform CRUD operations on student details with E-Gate pass integration.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "Firebase"],
      image: "/images/mrcet.jpeg",
      liveUrl: "https://studentsnap.vercel.app/",
      githubUrl: "https://github.com/Rishi0926/mrcet-studentsnap",
    },
    {
      title: "Finance Maven",
      description:
        "Personal financial management tool with command-line interface for transaction tracking and visualization.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      image: "/images/finance.jpg",
      liveUrl: "https://financemaven.vercel.app/",
      githubUrl: "https://github.com/Rishi0926/finance-maven",
    },
    {
      title: "FinAssist AI",
      description:
        "AI-powered multilingual financial loan advisor with real-time voice interactions supporting 10+ languages.",
      technologies: ["MERN", "Firebase", "Llama 3.1"],
      image: "/images/finassistant.jpg",
      liveUrl: "https://finassist-sage.vercel.app/",
      githubUrl: "https://github.com/Rishi0926/finassist-ai",
    },
    {
      title: "QuickFolio",
      description:
        "A modern portfolio builder app that allows users to create stunning portfolios quickly with customizable templates and themes.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      image: "/images/portfolio.jpeg",
      liveUrl: "https://quickfolio-azure.vercel.app/",
      githubUrl: "https://github.com/Rishi0926/quickfolio",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} width={350} height={200} />
                <div className="project-overlay">
                  <a
                    href={project.liveUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
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

