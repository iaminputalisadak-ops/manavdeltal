import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Container from './Container'

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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/' && !location.hash
    if (to.startsWith('/#')) return location.pathname === '/' && location.hash === to.slice(1)
    return location.pathname === to
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-neutral-200 bg-white transition-all duration-300 ease-out ${
          scrolled ? 'h-16 shadow-md' : 'h-20'
        }`}
      >
        <Container className="h-full">
          <div className="flex h-full items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
              <span className="text-3xl" aria-hidden>🦷</span>
              <div className="leading-tight">
                <span className="block text-[20px] font-bold text-primary-700">Manav Dental Clinic</span>
                <span className="block text-caption text-neutral-600">Damak, Nepal</span>
              </div>
            </Link>

            {/* Desktop: centered nav links */}
            <nav className="hidden lg:flex flex-1 justify-center items-center">
              <div className="flex items-center gap-8">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`relative py-2 text-[15px] font-medium transition-colors duration-200 border-b-2 min-w-0 ${
                      isActive(to)
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-neutral-800 hover:text-primary-600'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Desktop: phone + CTA */}
            <div className="hidden lg:flex items-center gap-6 shrink-0">
              <a
                href="tel:023574973"
                className="flex items-center gap-2 text-[15px] font-medium text-neutral-800 transition-colors hover:text-primary-600"
              >
                <Phone className="h-5 w-5 text-primary-600 shrink-0" />
                023-574973
              </a>
              <Link
                to="/book"
                className="shrink-0 rounded-[12px] bg-primary-600 px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 hover:-translate-y-px hover:shadow-md"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile: hamburger */}
            <button
              type="button"
              className="lg:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-neutral-800 hover:bg-neutral-100 transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile / Tablet menu overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 lg:hidden"
              aria-hidden
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl lg:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-neutral-100 px-4">
                <span className="text-lg font-bold text-primary-700">Menu</span>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-neutral-100"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col overflow-auto py-4 pb-24">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`flex h-14 items-center justify-center px-6 text-body font-medium transition-colors ${
                      isActive(to) ? 'bg-primary-50 text-primary-600' : 'text-neutral-800 hover:bg-neutral-50'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="absolute bottom-0 left-0 right-0 border-t border-neutral-100 bg-white p-4">
                <Link
                  to="/book"
                  className="flex h-12 items-center justify-center rounded-[12px] bg-primary-600 text-body font-semibold text-white hover:bg-primary-700"
                  onClick={() => setOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
