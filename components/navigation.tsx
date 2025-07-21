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

        if (scrollY >= sectionTop - 200 && sectionId) {
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

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Rishikesh</span>
        </div>
        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {["home", "about", "experience", "skills", "projects", "education", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={`nav-link ${activeSection === section ? "active" : ""}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
