import { Link } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#services', label: 'Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/book', label: 'Book Appointment' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  'General Dentistry',
  'Cosmetic Dentistry',
  'Teeth Whitening',
  'Root Canal',
  'Dental Implants',
  'Orthodontics',
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-about">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">🦷</span>
            Manav Dental Clinic
          </Link>
          <p>Your Smile, Our Priority. Energetic, friendly, and affordable dental care in Damak.</p>
          <a href="https://www.google.com/maps/search/MM5W%2BR62+Damak+57217" target="_blank" rel="noopener noreferrer" className="footer-map-link">
            View on Google Maps
          </a>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link to="/#services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4>Contact</h4>
          <p><a href="tel:023574973">📞 023-574973</a></p>
          <p><a href="https://manavdental.com" target="_blank" rel="noopener noreferrer">🌐 manavdental.com</a></p>
          <p>📍 MM5W+R62, Damak 57217</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">© {new Date().getFullYear()} Manav Dental Clinic. Damak-57217, Nepal.</p>
          <button type="button" className="footer-back-top" onClick={scrollToTop} aria-label="Back to top">
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
