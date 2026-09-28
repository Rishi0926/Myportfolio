export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-flex-row">
          <div>
            <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", marginBottom: "0.25rem" }}>
              Chintha Kuntla Rishikesh Reddy<span style={{ color: "var(--brand-accent)" }}>.</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} All rights reserved. Crafted for high performance.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="mailto:chinthakuntlarishikeshreddy@gmail.com" className="domain-pill">
              <i className="fas fa-envelope" style={{ color: "var(--brand-accent)" }}></i>
            </a>
            <a href="https://www.linkedin.com/in/rishikeshreddy9/" target="_blank" rel="noopener noreferrer" className="domain-pill">
              <i className="fab fa-linkedin" style={{ color: "var(--brand-accent)" }}></i>
            </a>
            <a href="https://github.com/Rishi0926" target="_blank" rel="noopener noreferrer" className="domain-pill">
              <i className="fab fa-github" style={{ color: "var(--brand-accent)" }}></i>
            </a>
            <a href="https://www.instagram.com/rishi_beatz01" target="_blank" rel="noopener noreferrer" className="domain-pill">
              <i className="fab fa-instagram" style={{ color: "var(--brand-accent)" }}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
