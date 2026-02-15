import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Container from '../components/layout/Container'
import { createAppointment } from '../services/api'
import { TIME_SLOTS, SERVICE_OPTIONS } from '../utils/constants'

const schema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\d{10,}$/, 'Enter a valid 10+ digit phone number'),
  email: z.string().email('Invalid email'),
  appointment_date: z.string().min(1, 'Select a date'),
  time_slot: z.string().min(1, 'Select a time'),
  service: z.string().min(1, 'Select a service'),
  message: z.string().optional(),
}).refine(
  (data) => data.appointment_date ? new Date(data.appointment_date) > new Date() : false,
  { message: 'Date must be in the future', path: ['appointment_date'] }
)

export default function BookAppointment() {
  const [toast, setToast] = useState(null)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { full_name: '', phone: '', email: '', appointment_date: '', time_slot: '', service: '', message: '' },
  })

  const onSubmit = async (data) => {
    setLoading(true)
    setToast(null)
    try {
      await createAppointment({
        name: data.full_name,
        phone: data.phone,
        email: data.email,
        date: data.appointment_date,
        time_slot: data.time_slot,
        service: data.service,
        message: data.message || '',
      })
      setToast({ type: 'success', message: 'Appointment booked! We will call you to confirm.' })
      reset()
    } catch (err) {
      setToast({ type: 'error', message: err.message || 'Could not submit. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const minDate = new Date().toISOString().slice(0, 10)

  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr]">
        <div className="bg-gradient-to-b from-primary-700 to-primary-900 px-8 py-16 text-white lg:py-24">
          <Container className="!max-w-none !px-0">
            <p className="text-body-sm font-semibold uppercase tracking-wider text-white/80 mb-2">Book Appointment</p>
            <h1 className="text-h2 mb-4">Schedule Your Visit Today</h1>
            <p className="text-body text-white/70 mb-10">
              Fill out the form and our team will confirm your appointment within 2 hours.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-caption text-white/60">Phone</p>
                  <a href="tel:023574973" className="font-medium">023-574973</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-caption text-white/60">Email</p>
                  <a href="mailto:info@manavdental.com" className="font-medium">info@manavdental.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-caption text-white/60">Location</p>
                  <p className="font-medium">Damak-57217, Nepal</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-caption text-white/60">Hours</p>
                  <p className="font-medium">Sun-Fri, 10 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="bg-white p-8 lg:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xl space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Full Name *</label>
                <input
                  {...register('full_name')}
                  className="h-[52px] w-full rounded-[10px] border border-neutral-200 px-4 text-body focus:border-primary-500 focus:ring-3 focus:ring-primary-100 focus:outline-none"
                  placeholder="Your full name"
                />
                {errors.full_name && <p className="mt-1 text-body-sm text-error">{errors.full_name.message}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Phone *</label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="h-[52px] w-full rounded-[10px] border border-neutral-200 px-4 text-body focus:border-primary-500 focus:ring-3 focus:ring-primary-100 focus:outline-none"
                  placeholder="023-574973"
                />
                {errors.phone && <p className="mt-1 text-body-sm text-error">{errors.phone.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Email *</label>
                <input
                  {...register('email')}
                  type="email"
                  className="h-[52px] w-full rounded-[10px] border border-neutral-200 px-4 text-body focus:border-primary-500 focus:ring-3 focus:ring-primary-100 focus:outline-none"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-body-sm text-error">{errors.email.message}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Preferred Date *</label>
                <input
                  {...register('appointment_date')}
                  type="date"
                  min={minDate}
                  className="h-[52px] w-full rounded-[10px] border border-neutral-200 px-4 text-body focus:border-primary-500 focus:ring-3 focus:ring-primary-100 focus:outline-none"
                />
                {errors.appointment_date && <p className="mt-1 text-body-sm text-error">{errors.appointment_date.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Time Slot *</label>
                <select
                  {...register('time_slot')}
                  className="h-[52px] w-full rounded-[10px] border border-neutral-200 px-4 text-body focus:border-primary-500 focus:ring-3 focus:ring-primary-100 focus:outline-none"
                >
                  <option value="">Select time</option>
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.time_slot && <p className="mt-1 text-body-sm text-error">{errors.time_slot.message}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Service *</label>
                <select
                  {...register('service')}
                  className="h-[52px] w-full rounded-[10px] border border-neutral-200 px-4 text-body focus:border-primary-500 focus:ring-3 focus:ring-primary-100 focus:outline-none"
                >
                  <option value="">Select service</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-body-sm text-error">{errors.service.message}</p>}
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Message (optional)</label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full rounded-[10px] border border-neutral-200 px-4 py-3 text-body focus:border-primary-500 focus:ring-3 focus:ring-primary-100 focus:outline-none"
                placeholder="Any notes or concerns..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="h-[52px] w-full rounded-button bg-primary-600 text-body font-semibold text-white transition-colors hover:bg-primary-700 disabled:opacity-70"
            >
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>
          </form>
        </div>
      </div>

      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 rounded-button px-6 py-3 text-body-sm font-medium text-white shadow-lg ${
            toast.type === 'success' ? 'bg-success' : 'bg-error'
          }`}
        >
          {toast.message}
        </div>
      )}
    </main>
  )
}
