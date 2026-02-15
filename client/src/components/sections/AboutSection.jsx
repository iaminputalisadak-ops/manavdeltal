import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Container from '../layout/Container'

const features = ['Experienced Dentists', 'Modern Equipment', 'Affordable Pricing', 'Friendly Environment']

export default function AboutSection() {
  return (
    <section id="about" className="bg-neutral-50 py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Manav Dental Clinic"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-button bg-primary-600 px-6 py-4 text-white shadow-md">
                <span className="block text-2xl font-bold">15+</span>
                <span className="text-caption">Years Experience</span>
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 hidden h-48 w-48 overflow-hidden rounded-2xl border-[6px] border-white shadow-md lg:block">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80"
                alt="Dental care"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-body-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">About Us</p>
            <h2 className="text-h2 text-neutral-900 mb-6">Trusted Dental Care in Damak Since 2009</h2>
            <p className="text-body text-neutral-600 mb-4">
              Manav Dental Clinic has been serving the Damak community with energetic, friendly, and affordable dental care. We believe everyone deserves a healthy smile.
            </p>
            <p className="text-body text-neutral-600 mb-8">
              Our mission is to provide quality treatments in a comfortable environment, using modern equipment and a caring approach.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success/20 text-success">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-body-sm font-medium text-neutral-800">{f}</span>
                </div>
              ))}
            </div>

            <Link
              to="/doctors"
              className="inline-flex rounded-button bg-primary-600 px-8 py-4 text-body font-semibold text-white hover:bg-primary-700"
            >
              Meet Our Team →
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
