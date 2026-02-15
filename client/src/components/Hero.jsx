import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <p className="hero-badge">★ 5.0 Rating · Best in Damak</p>
        <h1 className="hero-title">Your Smile, Our Priority</h1>
        <p className="hero-subtitle">Best Dental Care in Damak</p>
        <div className="hero-actions">
          <Link to="/book" className="btn btn-primary hero-btn">Book Appointment</Link>
          <a href="tel:023574973" className="btn btn-secondary hero-btn">Call Now: 023-574973</a>
        </div>
      </div>
    </section>
  )
}
