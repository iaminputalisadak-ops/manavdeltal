import { useState, useEffect } from 'react'
import './TestimonialsSection.css'

const testimonials = [
  { name: 'Amit Kumar Sah', text: 'Perfect dental of Damak ❤️', stars: 5, date: '2 months ago' },
  { name: 'Ratna Mishra', text: 'Energetic, Friendly, Affordable!', stars: 5, subtitle: 'Local Guide', date: '11 months ago' },
  { name: 'Srijana Ramdam', text: 'Perfect and affordable to all patient 🦷🦷🦷', stars: 5, date: 'a year ago' },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Patients Say</h2>
        <p className="section-subtitle">Rated 5.0 on Google. Real reviews from real patients.</p>

        <div className="testimonials-slider">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card ${i === active ? 'active' : ''}`}
              style={{ '--index': i }}
            >
              <div className="testimonial-stars">
                {'★'.repeat(t.stars)}
              </div>
              <blockquote className="testimonial-text">"{t.text}"</blockquote>
              <footer className="testimonial-author">
                <strong>{t.name}</strong>
                {t.subtitle && <span className="testimonial-subtitle"> · {t.subtitle}</span>}
              </footer>
              <p className="testimonial-date">{t.date}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`testimonial-dot ${i === active ? 'active' : ''}`}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
