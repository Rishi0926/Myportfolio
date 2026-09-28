"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollY = window.scrollY

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionId = section.getAttribute("id")

        if (scrollY >= sectionTop - 250 && sectionId) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
  ]

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-pill">
        <a href="#home" className="nav-logo-text">
          Rishikesh<span className="nav-logo-accent">.</span>
        </a>

        <div className="nav-links-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-item-btn ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={() => handleNavClick("contact")}
            className="nav-cta-btn"
          >
            Contact Me <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem" }}></i>
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-nav-drawer">
          {navItems.concat([{ id: "contact", label: "Contact" }]).map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
