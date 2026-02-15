import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../components/layout/Container'

const doctors = [
  { name: 'Dr. Manav', specialization: 'General & Cosmetic Dentistry', qualification: 'BDS, MDS', photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop' },
  { name: 'Dr. Senior Dentist', specialization: 'Orthodontics & Implants', qualification: 'BDS, MDS (Ortho)', photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop' },
  { name: 'Dr. Team Member', specialization: 'Pediatric & General Dentistry', qualification: 'BDS', photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop' },
]

export default function Doctors() {
  const [active, setActive] = useState(0)

  return (
    <main className="bg-neutral-50 py-24">
      <Container>
        <div className="text-center mb-12">
          <p className="text-body-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Our Team</p>
          <h1 className="text-h2 text-neutral-900 mb-4">Meet Our Doctors</h1>
          <p className="text-body text-neutral-600 max-w-[560px] mx-auto">Experienced and caring professionals dedicated to your smile.</p>
        </div>

        <div className="lg:hidden">
          <div className="relative mx-auto max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-2xl overflow-hidden bg-white shadow-md"
              >
                <div className="aspect-square">
                  <img src={doctors[active].photo} alt={doctors[active].name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-h4 text-primary-600">{doctors[active].name}</h3>
                  <p className="text-body-sm font-medium text-neutral-800 mt-1">{doctors[active].specialization}</p>
                  <p className="text-body-sm text-neutral-600 mt-1">{doctors[active].qualification}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {doctors.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${i === active ? 'bg-primary-600' : 'bg-neutral-300'}`}
                  aria-label={`Doctor ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {doctors.map((d) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square">
                <img src={d.photo} alt={d.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-h4 text-primary-600">{d.name}</h3>
                <p className="text-body-sm font-medium text-neutral-800 mt-1">{d.specialization}</p>
                <p className="text-body-sm text-neutral-600 mt-1">{d.qualification}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </main>
  )
}
