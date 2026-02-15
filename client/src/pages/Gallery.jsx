import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../components/layout/Container'

const FILTERS = ['All', 'Clinic', 'Team', 'Treatments']

const images = [
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', category: 'Clinic', alt: 'Clinic interior' },
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80', category: 'Clinic', alt: 'Dental chair' },
  { src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80', category: 'Team', alt: 'Dentist' },
  { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80', category: 'Team', alt: 'Dental team' },
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80', category: 'Treatments', alt: 'Treatment' },
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', category: 'Treatments', alt: 'Care' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All' ? images : images.filter((i) => i.category === filter)

  return (
    <main className="bg-neutral-50 py-24">
      <Container>
        <div className="text-center mb-12">
          <p className="text-body-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Gallery</p>
          <h1 className="text-h2 text-neutral-900 mb-4">Our Clinic in Focus</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-body-sm font-semibold transition-colors ${
                filter === f ? 'bg-primary-600 text-white' : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, i) => (
            <motion.button
              key={`${img.src}-${i}`}
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setLightbox(img)}
            >
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[90vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
