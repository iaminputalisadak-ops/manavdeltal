import { useState, useEffect, useRef } from 'react'
import './AboutSection.css'

const COUNTER_TARGETS = { years: 10, patients: 5000 }

export default function AboutSection() {
  const [years, setYears] = useState(0)
  const [patients, setPatients] = useState(0)
  const sectionRef = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        if (!counted.current && entries[0].isIntersecting) {
          counted.current = true
          const duration = 1500
          const steps = 60
          const step = duration / steps
          let t = 0
          const timer = setInterval(() => {
            t++
            const p = Math.min(t / steps, 1)
            const ease = 1 - Math.pow(1 - p, 2)
            setYears(Math.round(COUNTER_TARGETS.years * ease))
            setPatients(Math.round(COUNTER_TARGETS.patients * ease))
            if (t >= steps) clearInterval(timer)
          }, step)
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container about-grid">
        <div className="about-image-wrap">
          <div className="about-image" />
        </div>
        <div className="about-content">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>About Us</h2>
          <p className="about-lead">
            Manav Dental Clinic is your trusted dental care partner in Damak. We believe in making quality dental care <strong>energetic, friendly, and affordable</strong> for every patient.
          </p>
          <p>
            Our team is dedicated to your smile and oral health. From routine check-ups to advanced treatments, we provide a comfortable environment where you and your family can receive the best care.
          </p>
          <div className="about-counters">
            <div className="about-counter">
              <span className="about-counter-value">{years}+</span>
              <span className="about-counter-label">Years Experience</span>
            </div>
            <div className="about-counter">
              <span className="about-counter-value">{patients}+</span>
              <span className="about-counter-label">Happy Patients</span>
            </div>
          </div>
          <a href="/#services" className="btn btn-outline">Learn More</a>
        </div>
      </div>
    </section>
  )
}
