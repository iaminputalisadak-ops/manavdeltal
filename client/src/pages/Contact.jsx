import { useState } from 'react'
import { submitContact } from '../services/api'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState(null)
  const [loading, setLoading] = useState(false)

  const showToast = (msg, type) => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      await submitContact(form)
      showToast('Message sent! We will get back to you soon.', 'success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch (err) {
      showToast(err.message || 'Could not send. Try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="contact-page">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">Visit us or send a message. We’re here to help.</p>

        <div className="contact-layout">
          <div className="contact-info-cards">
            <div className="contact-card">
              <span className="contact-card-icon">📍</span>
              <h3>Address</h3>
              <p>MM5W+R62, Damak 57217</p>
              <a href="https://www.google.com/maps/search/MM5W%2BR62+Damak+57217" target="_blank" rel="noopener noreferrer">Get directions</a>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon">🕐</span>
              <h3>Hours</h3>
              <p>Open · Closes 6 PM</p>
              <p className="contact-note">Maha Shivratri might affect these hours.</p>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon">📞</span>
              <h3>Phone</h3>
              <p><a href="tel:023574973">023-574973</a></p>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon">🌐</span>
              <h3>Website</h3>
              <p><a href="https://manavdental.com" target="_blank" rel="noopener noreferrer">manavdental.com</a></p>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2>Send a message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-row">
                <label>Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-row">
                <label>Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Optional"
                />
              </div>
              <div className="form-row">
                <label>Message *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-map-wrap">
          <h2>Find us</h2>
          <div className="contact-map">
            <iframe
              title="Manav Dental Clinic location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.556789!2d87.7!3d26.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDM5JzAwLjAiTiA4N8KwNDInMDAuMCJF!5e0!3m2!1sen!2snp!4v1"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: 'var(--radius)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href="https://www.google.com/maps/search/MM5W%2BR62+Damak+57217" target="_blank" rel="noopener noreferrer" className="contact-map-link">
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {toast && (
        <div className={`toast toast-${toast.type}`}>{toast.msg}</div>
      )}
    </main>
  )
}
