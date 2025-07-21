"use client"

import type React from "react"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const showNotification = (message: string, type: "success" | "error") => {
    // Remove existing notifications
    const existingNotification = document.querySelector(".notification")
    if (existingNotification) {
      existingNotification.remove()
    }

    // Create notification element
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <span>${message}</span>
        <button class="notification-close" aria-label="Close notification">&times;</button>
      </div>
    `

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === "success" ? "#10b981" : "#ef4444"};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      transform: translateX(120%);
      opacity: 0;
      transition: transform 0.3s ease, opacity 0.3s ease;
      max-width: 400px;
    `

    const closeButton = notification.querySelector(".notification-close") as HTMLElement
    if (closeButton) {
      closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 0.5rem;
        line-height: 1;
      `
    }

    // Add notification to body
    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
      notification.style.opacity = "1"
    }, 100)

    // Close button functionality
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        notification.style.transform = "translateX(120%)"
        notification.style.opacity = "0"
        setTimeout(() => {
          notification.remove()
        }, 300)
      })
    }

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.transform = "translateX(120%)"
        notification.style.opacity = "0"
        setTimeout(() => {
          notification.remove()
        }, 300)
      }
    }, 5000)
  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showNotification("Please fill in all fields", "error")
      return
    }

    if (!isValidEmail(formData.email)) {
      showNotification("Please enter a valid email address", "error")
      return
    }

    // Simulate form submission
    showNotification("Message sent successfully! I'll get back to you soon.", "success")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{"Let's Connect!"}</h3>
            <p>
              {
                "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation."
              }
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>chinthakuntlarishikeshreddy@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 9398854672</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
            <div className="languages">
              <h4>Languages</h4>
              <div className="language-tags">
                <span>English (Proficient)</span>
                <span>Telugu (Native)</span>
                <span>Hindi (Proficient)</span>
              </div>
            </div>
            <div className="interests">
              <h4>Interests</h4>
              <div className="interest-tags">
                <span>
                  <i className="fas fa-video"></i> Video Editing
                </span>
                <span>
                  <i className="fas fa-music"></i> Music
                </span>
                <span>
                  <i className="fas fa-cricket-ball"></i> Cricket
                </span>
                <span>
                  <i className="fas fa-utensils"></i> Cooking
                </span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
