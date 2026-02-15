import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getServices } from '../services/api'
import './ServicesSection.css'

const defaultServices = [
  { title: 'General Dentistry', description: 'Routine check-ups, cleanings, and basic dental care.', icon: '🦷' },
  { title: 'Cosmetic Dentistry', description: 'Smile makeovers, veneers, and aesthetic treatments.', icon: '✨' },
  { title: 'Teeth Whitening', description: 'Professional whitening for a brighter smile.', icon: '😁' },
  { title: 'Root Canal Treatment', description: 'Pain-free root canal therapy to save your tooth.', icon: '🔬' },
  { title: 'Dental Implants', description: 'Permanent tooth replacement solutions.', icon: '🦷' },
  { title: 'Orthodontics/Braces', description: 'Braces and aligners for straight teeth.', icon: '📐' },
  { title: 'Tooth Extraction', description: 'Safe and comfortable extractions when needed.', icon: '⚕️' },
  { title: 'Dental Cleaning', description: 'Deep cleaning and scaling for healthy gums.', icon: '🧼' },
  { title: 'Pediatric Dentistry', description: 'Gentle dental care for children.', icon: '👶' },
]

export default function ServicesSection() {
  const [services, setServices] = useState(defaultServices)

  useEffect(() => {
    getServices()
      .then(setServices)
      .catch(() => {})
  }, [])

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive dental care for you and your family. Quality treatments in a friendly environment.
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.id || i} className="service-card" style={{ animationDelay: `${i * 0.05}s` }}>
              <span className="service-icon">{s.icon || '🦷'}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <Link to="/book" className="service-link">Book now →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
