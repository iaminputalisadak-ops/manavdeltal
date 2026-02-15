import { useState } from 'react'
import './Doctors.css'

const doctors = [
  { name: 'Dr. Manav', specialization: 'General & Cosmetic Dentistry', qualification: 'BDS, MDS', photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop' },
  { name: 'Dr. Senior Dentist', specialization: 'Orthodontics & Implants', qualification: 'BDS, MDS (Ortho)', photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop' },
  { name: 'Dr. Team Member', specialization: 'Pediatric & General Dentistry', qualification: 'BDS', photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop' },
]

export default function Doctors() {
  const [active, setActive] = useState(0)

  return (
    <main className="doctors-page">
      <div className="container">
        <h1 className="section-title">Meet Our Doctors</h1>
        <p className="section-subtitle">Experienced and caring professionals dedicated to your smile.</p>

        <div className="doctors-slider">
          {doctors.map((d, i) => (
            <div
              key={d.name}
              className={`doctor-card ${i === active ? 'active' : ''}`}
              style={{ '--index': i }}
            >
              <div className="doctor-photo-wrap">
                <img src={d.photo} alt={d.name} loading="lazy" />
              </div>
              <h3>{d.name}</h3>
              <p className="doctor-spec">{d.specialization}</p>
              <p className="doctor-qual">{d.qualification}</p>
            </div>
          ))}
        </div>

        <div className="doctors-dots">
          {doctors.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`doctor-dot ${i === active ? 'active' : ''}`}
              aria-label={`Doctor ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <div className="doctors-grid">
          {doctors.map((d) => (
            <div key={d.name} className="doctor-card-static">
              <div className="doctor-photo-wrap">
                <img src={d.photo} alt={d.name} loading="lazy" />
              </div>
              <h3>{d.name}</h3>
              <p className="doctor-spec">{d.specialization}</p>
              <p className="doctor-qual">{d.qualification}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
