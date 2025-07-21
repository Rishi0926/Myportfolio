"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import AchievementsSection from "@/components/achievements-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <>
      <div className="floating-bg-elements">
        {/* Tech HUD Elements */}
        <div className="hud-element hud-circle" style={{ top: "10%", left: "5%", animationDelay: "0s" }}></div>
        <div className="hud-element hud-circle" style={{ top: "60%", right: "10%", animationDelay: "3s" }}></div>
        <div className="hud-element hud-circle" style={{ bottom: "20%", left: "15%", animationDelay: "6s" }}></div>

        <div className="hud-element data-line" style={{ top: "25%", left: "20%", animationDelay: "1s" }}></div>
        <div
          className="hud-element data-line"
          style={{ top: "70%", right: "25%", animationDelay: "4s", transform: "rotate(45deg)" }}
        ></div>
        <div
          className="hud-element data-line"
          style={{ bottom: "40%", left: "30%", animationDelay: "7s", transform: "rotate(-30deg)" }}
        ></div>

        <div className="hud-element matrix-code" style={{ top: "15%", right: "20%", animationDelay: "2s" }}>
          01101
        </div>
        <div className="hud-element matrix-code" style={{ top: "45%", left: "10%", animationDelay: "5s" }}>
          11010
        </div>
        <div className="hud-element matrix-code" style={{ bottom: "30%", right: "15%", animationDelay: "8s" }}>
          10110
        </div>

        <div className="hud-element digital-particle" style={{ top: "30%", left: "25%", animationDelay: "1.5s" }}></div>
        <div
          className="hud-element digital-particle"
          style={{ top: "50%", right: "30%", animationDelay: "4.5s" }}
        ></div>
        <div
          className="hud-element digital-particle"
          style={{ bottom: "25%", left: "35%", animationDelay: "7.5s" }}
        ></div>
        <div className="hud-element digital-particle" style={{ top: "80%", right: "5%", animationDelay: "2.5s" }}></div>

        {/* Natural Elements */}
        <div className="natural-element floating-leaf" style={{ top: "20%", left: "40%", animationDelay: "3s" }}></div>
        <div className="natural-element floating-leaf" style={{ top: "65%", right: "35%", animationDelay: "8s" }}></div>
        <div
          className="natural-element floating-leaf"
          style={{ bottom: "35%", left: "45%", animationDelay: "12s" }}
        ></div>

        <div
          className="natural-element floating-petal"
          style={{ top: "35%", right: "40%", animationDelay: "5s" }}
        ></div>
        <div
          className="natural-element floating-petal"
          style={{ bottom: "45%", left: "50%", animationDelay: "10s" }}
        ></div>
        <div
          className="natural-element floating-petal"
          style={{ top: "75%", left: "20%", animationDelay: "15s" }}
        ></div>

        <div className="natural-element pollen-dust" style={{ top: "40%", left: "60%", animationDelay: "6s" }}></div>
        <div
          className="natural-element pollen-dust"
          style={{ bottom: "50%", right: "45%", animationDelay: "11s" }}
        ></div>
        <div className="natural-element pollen-dust" style={{ top: "85%", right: "25%", animationDelay: "16s" }}></div>
        <div className="natural-element pollen-dust" style={{ top: "55%", left: "70%", animationDelay: "9s" }}></div>

        <div className="natural-element glowing-spore" style={{ top: "25%", right: "50%", animationDelay: "7s" }}></div>
        <div
          className="natural-element glowing-spore"
          style={{ bottom: "40%", left: "65%", animationDelay: "13s" }}
        ></div>
        <div className="natural-element glowing-spore" style={{ top: "90%", left: "30%", animationDelay: "18s" }}></div>
      </div>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
