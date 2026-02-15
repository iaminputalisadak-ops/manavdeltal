import { Link } from 'react-router-dom'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react'
import Container from './Container'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { to: '/#services', label: 'General Dentistry' },
  { to: '/#services', label: 'Cosmetic Dentistry' },
  { to: '/#services', label: 'Teeth Whitening' },
  { to: '/book', label: 'Book Appointment' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-neutral-900 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦷</span>
              <span className="text-lg font-bold">Manav Dental Clinic</span>
            </Link>
            <p className="text-body-sm text-neutral-400 mb-6 max-w-xs">
              Your smile, our priority. Energetic, friendly & affordable dental care in Damak.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 text-white transition-colors hover:bg-primary-600" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 text-white transition-colors hover:bg-primary-600" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-body font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-body-sm text-neutral-400 transition-colors hover:text-white hover:translate-x-1 inline-block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-body font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-body-sm text-neutral-400 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-body font-semibold mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-body-sm text-neutral-400">
                <Phone className="h-4 w-4 shrink-0 text-primary-500" />
                023-574973
              </li>
              <li className="flex items-center gap-3 text-body-sm text-neutral-400">
                <Mail className="h-4 w-4 shrink-0 text-primary-500" />
                info@manavdental.com
              </li>
              <li className="flex items-center gap-3 text-body-sm text-neutral-400">
                <MapPin className="h-4 w-4 shrink-0 text-primary-500" />
                Damak-57217, Nepal
              </li>
              <li className="flex items-center gap-3 text-body-sm text-neutral-400">
                <Clock className="h-4 w-4 shrink-0 text-primary-500" />
                Sun-Fri 10AM-6PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-neutral-500">© {new Date().getFullYear()} Manav Dental Clinic. All rights reserved.</p>
          <p className="text-caption text-neutral-500">Designed with ❤️ in Nepal</p>
        </div>
      </Container>
    </footer>
  )
}
