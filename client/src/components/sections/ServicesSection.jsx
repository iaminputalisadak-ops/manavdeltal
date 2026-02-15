import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Stethoscope,
  Sparkles,
  Sun,
  Target,
  Pin,
  AlignLeft,
  MinusCircle,
  Droplets,
  Baby,
  ArrowRight,
} from 'lucide-react'
import Container from '../layout/Container'

const services = [
  { icon: Stethoscope, title: 'General Dentistry', desc: 'Routine check-ups, cleanings, and comprehensive dental care for the whole family.' },
  { icon: Sparkles, title: 'Cosmetic Dentistry', desc: 'Smile makeovers, veneers, and aesthetic treatments to enhance your smile.' },
  { icon: Sun, title: 'Teeth Whitening', desc: 'Professional whitening for a brighter, more confident smile.' },
  { icon: Target, title: 'Root Canal', desc: 'Pain-free root canal therapy to save your tooth and restore health.' },
  { icon: Pin, title: 'Dental Implants', desc: 'Permanent tooth replacement solutions that look and feel natural.' },
  { icon: AlignLeft, title: 'Orthodontics', desc: 'Braces and aligners for straighter teeth and better alignment.' },
  { icon: MinusCircle, title: 'Tooth Extraction', desc: 'Safe and comfortable extractions when needed.' },
  { icon: Droplets, title: 'Dental Cleaning', desc: 'Deep cleaning and scaling for healthy gums and fresh breath.' },
  { icon: Baby, title: 'Pediatric Dentistry', desc: 'Gentle dental care tailored for children.' },
]

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? services : services.slice(0, 4)

  return (
    <section id="services" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <p className="text-body-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Our Services</p>
          <h2 className="text-h2 text-neutral-900 mb-4">Comprehensive Dental Care</h2>
          <p className="text-body text-neutral-600 max-w-[560px] mx-auto mb-8">
            From preventive care to cosmetic transformations, we offer a full range of treatments.
          </p>
          <div className="w-12 h-0.5 bg-primary-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visible.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-h4 text-neutral-900 mt-5 mb-2">{item.title}</h3>
              <p className="text-body-sm text-neutral-600 leading-[22px] mb-4">{item.desc}</p>
              <Link
                to="/book"
                className="inline-flex items-center gap-1 text-body-sm font-medium text-primary-600 transition-transform group-hover:gap-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {!showAll && services.length > 4 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-button bg-primary-600 px-6 py-3 text-body-sm font-semibold text-white hover:bg-primary-700"
            >
              View All Services
            </button>
          </div>
        )}
      </Container>
    </section>
  )
}
