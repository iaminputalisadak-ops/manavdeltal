import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Container from '../layout/Container'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-white to-primary-50">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary-100/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-primary-100/40 blur-2xl" />

      <Container className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 inline-block rounded-full bg-primary-50 px-4 py-2 text-body-sm font-medium text-primary-600"
          >
            ⭐ Rated 5.0 on Google — 8+ Happy Reviews
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-h1 font-bold text-neutral-900 mb-4 lg:text-display"
          >
            Your Smile Deserves the{' '}
            <span className="text-primary-600">Best Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-body-lg text-neutral-600 mb-8 max-w-[520px] leading-7 lg:mb-10"
          >
            Energetic, Friendly & Affordable dental care in Damak. From routine checkups to advanced treatments — we make every visit comfortable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/book"
              className="rounded-button inline-flex items-center justify-center bg-primary-600 px-8 py-4 text-body font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
            <a
              href="tel:023574973"
              className="rounded-button inline-flex items-center justify-center gap-2 border-2 border-primary-600 bg-white px-8 py-3.5 text-body font-semibold text-primary-600 transition-colors hover:bg-primary-50"
            >
              <Phone className="h-4 w-4" />
              Call: 023-574973
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-neutral-200 pt-10 lg:justify-start"
          >
            <div className="text-center">
              <p className="text-h4 font-bold text-primary-600">15+</p>
              <p className="text-body-sm text-neutral-600">Years Experience</p>
            </div>
            <div className="h-10 w-px bg-neutral-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-h4 font-bold text-primary-600">5000+</p>
              <p className="text-body-sm text-neutral-600">Patients</p>
            </div>
            <div className="h-10 w-px bg-neutral-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-h4 font-bold text-primary-600">5.0 ⭐</p>
              <p className="text-body-sm text-neutral-600">Rating</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full flex-shrink-0 lg:w-[45%]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg lg:aspect-auto lg:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
              alt="Dental care"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-4 left-4 rounded-2xl bg-white p-4 shadow-lg lg:left-0"
          >
            <p className="text-body-sm font-medium text-neutral-800">🦷 Next Available: Today 2:00 PM</p>
            <Link to="/book" className="text-body-sm font-semibold text-primary-600 hover:underline">
              Book Now →
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
