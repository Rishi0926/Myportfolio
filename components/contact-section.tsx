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

  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setNotification({ message: "Please fill in all fields.", type: "error" })
      return
    }

    setNotification({ message: "Message sent successfully! I'll get back to you soon.", type: "success" })
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-tag">
          <span>// Get In Touch</span>
        </div>
        <h2 className="section-title-large">
          Let's build something <span style={{ color: "var(--brand-accent)" }}>extraordinary.</span>
        </h2>
        <p className="section-subtitle">
          Open for software engineering roles, AI product development, collaborations, or technical consultations.
        </p>

        {notification && (
          <div
            style={{
              padding: "1rem 1.5rem",
              borderRadius: "0.75rem",
              marginBottom: "2rem",
              background: notification.type === "success" ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)",
              border: `1px solid ${notification.type === "success" ? "#10b981" : "#ef4444"}`,
              color: notification.type === "success" ? "#34d399" : "#f87171",
              fontWeight: 600,
            }}
          >
            {notification.message}
          </div>
        )}

        <div className="contact-grid-wrapper">
          <div className="contact-info-panel">
            <div className="contact-item-row">
              <div className="contact-item-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-item-text">
                <label>Direct Email</label>
                <a href="mailto:chinthakuntlarishikeshreddy@gmail.com">chinthakuntlarishikeshreddy@gmail.com</a>
              </div>
            </div>

            <div className="contact-item-row">
              <div className="contact-item-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-item-text">
                <label>Phone Contact</label>
                <span>+91 9398854672</span>
              </div>
            </div>

            <div className="contact-item-row">
              <div className="contact-item-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-item-text">
                <label>Location</label>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            <div style={{ marginTop: "1rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-white)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Spoken Languages
              </div>
              <div className="pill-tags-wrap">
                <span className="domain-pill">English (Proficient)</span>
                <span className="domain-pill">Telugu (Native)</span>
                <span className="domain-pill">Hindi (Proficient)</span>
              </div>
            </div>

            <div style={{ marginTop: "0.5rem" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-white)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Interests & Passions
              </div>
              <div className="pill-tags-wrap">
                <span className="domain-pill"><i className="fas fa-video" style={{ color: "var(--brand-accent)" }}></i> Video Editing</span>
                <span className="domain-pill"><i className="fas fa-music" style={{ color: "var(--brand-accent)" }}></i> Music Production</span>
                <span className="domain-pill"><i className="fas fa-cricket-ball" style={{ color: "var(--brand-accent)" }}></i> Cricket</span>
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            <form onSubmit={handleSubmit}>
              <div className="form-group-field">
                <input
                  type="text"
                  name="name"
                  className="form-input-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group-field">
                <input
                  type="email"
                  name="email"
                  className="form-input-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group-field">
                <input
                  type="text"
                  name="subject"
                  className="form-input-control"
                  placeholder="Subject / Project Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group-field">
                <textarea
                  name="message"
                  className="form-input-control"
                  placeholder="Tell me about your project or role details..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-brand" style={{ width: "100%" }}>
                <span>Send Message</span>
                <i className="fas fa-paper-plane" style={{ fontSize: "0.85rem" }}></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
