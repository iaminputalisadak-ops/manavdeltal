import { useState } from 'react'
import './Gallery.css'

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
    <main className="gallery-page">
      <div className="container">
        <h1 className="section-title">Gallery</h1>
        <p className="section-subtitle">Our clinic, team, and care in focus.</p>

        <div className="gallery-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`gallery-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              type="button"
              className="gallery-item"
              onClick={() => setLightbox(img)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button type="button" className="lightbox-close" aria-label="Close">×</button>
          <img src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  )
}
