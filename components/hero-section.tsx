"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const typeWriter = (element: HTMLElement, text: string, speed = 100) => {
      let i = 0
      element.innerHTML = "Hi, I'm "

      const highlightSpan = document.createElement("span")
      highlightSpan.className = "highlight"
      element.appendChild(highlightSpan)

      const type = () => {
        if (i < text.length) {
          highlightSpan.innerHTML += text.charAt(i)
          i++
          setTimeout(type, speed)
        }
      }
      type()
    }

    if (titleRef.current) {
      typeWriter(titleRef.current, "Chintha Kuntla Rishikesh Reddy", 50)
    }

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroImageContainer = document.querySelector(".hero-image .image-container") as HTMLElement
      if (heroImageContainer) {
        heroImageContainer.style.transform = `translateY(${scrolled * 0.1}px)`
      }

      const floatingIcons = document.querySelectorAll(".floating-icon")
      floatingIcons.forEach((icon, index) => {
        const speed = 0.2 + index * 0.05
        ;(icon as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-center">
            <h1 ref={titleRef} className="hero-title">
              Hi, I'm <span className="highlight">Chintha Kuntla Rishikesh Reddy</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer & Data Science Student</p>
            <p className="hero-description">
              Passionate about Data Analysis, AI development, and Generative AI technologies. Creating innovative
              solutions with cutting-edge technology.
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn btn-primary"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn btn-secondary"
              >
                View Projects
              </button>
            </div>
            <div className="social-links">
              <a href="mailto:chinthakuntlarishikeshreddy@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rishikeshreddy9/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Rishi0926" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/rishi_beatz01"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
