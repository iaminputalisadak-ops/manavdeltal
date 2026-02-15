import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#services', label: 'Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/#testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setOpen(false)

  return (
    <header className={`navbar ${open ? 'open' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-icon">🦷</span>
          <span>Manav Dental Clinic</span>
        </Link>

        <nav className={`navbar-nav ${open ? 'open' : ''}`}>
          {navLinks.map(({ to, label }) => {
            const isHash = to.startsWith('/#')
            const path = isHash ? '/' : to
            const isActive = location.pathname === path || (path === '/' && location.pathname === '/')
            return (
              <Link
                key={to}
                to={to}
                className={`navbar-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <Link to="/book" className="navbar-cta btn btn-primary" onClick={closeMenu}>
          Book Appointment
        </Link>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
