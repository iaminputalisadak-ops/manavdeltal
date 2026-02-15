import { useState, useEffect } from 'react'
import { getServices } from '../services/api'
import { createAppointment } from '../services/api'
import './BookAppointment.css'

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
]

export default function BookAppointment() {
  const [services, setServices] = useState([])
  const [toast, setToast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time_slot: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    getServices()
      .then((list) => setServices(list.length ? list : [
        { id: 1, title: 'General Dentistry' },
        { id: 2, title: 'Cosmetic Dentistry' },
        { id: 3, title: 'Teeth Whitening' },
        { id: 4, title: 'Root Canal Treatment' },
        { id: 5, title: 'Dental Implants' },
        { id: 6, title: 'Orthodontics/Braces' },
        { id: 7, title: 'Tooth Extraction' },
        { id: 8, title: 'Dental Cleaning' },
        { id: 9, title: 'Pediatric Dentistry' },
      ]))
      .catch(() => setServices([{ id: 1, title: 'General Check-up' }]))
  }, [])

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.date) e.date = 'Please select a date'
    if (!form.time_slot) e.time_slot = 'Please select a time'
    if (!form.service) e.service = 'Please select a service'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      await createAppointment(form)
      showToast('Appointment requested successfully! We will contact you soon.', 'success')
      setForm({ name: '', phone: '', email: '', date: '', time_slot: '', service: '', message: '' })
      setErrors({})
    } catch (err) {
      showToast(err.message || 'Could not submit. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const minDate = new Date().toISOString().slice(0, 10)

  return (
    <main className="book-page">
      <div className="container">
        <h1 className="page-title">Book an Appointment</h1>
        <p className="page-subtitle">Fill in the form below and we’ll get back to you to confirm.</p>

        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Full Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-row">
            <label>Phone Number *</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="023-574973"
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          <div className="form-row">
            <label>Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-row">
            <label>Preferred Date *</label>
            <input
              type="date"
              value={form.date}
              min={minDate}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className={errors.date ? 'error' : ''}
            />
            {errors.date && <span className="form-error">{errors.date}</span>}
          </div>

          <div className="form-row">
            <label>Time Slot *</label>
            <select
              value={form.time_slot}
              onChange={(e) => setForm({ ...form, time_slot: e.target.value })}
              className={errors.time_slot ? 'error' : ''}
            >
              <option value="">Select time</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.time_slot && <span className="form-error">{errors.time_slot}</span>}
          </div>

          <div className="form-row">
            <label>Service Type *</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className={errors.service ? 'error' : ''}
            >
              <option value="">Select service</option>
              {services.map((s) => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
            </select>
            {errors.service && <span className="form-error">{errors.service}</span>}
          </div>

          <div className="form-row">
            <label>Message (optional)</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Any notes or concerns..."
              rows={4}
            />
          </div>

          <button type="submit" className="btn btn-primary book-submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Request Appointment'}
          </button>
        </form>
      </div>

      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </main>
  )
}
