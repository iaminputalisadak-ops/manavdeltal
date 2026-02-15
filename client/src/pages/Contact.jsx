import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'
import Container from '../components/layout/Container'
import { submitContact } from '../services/api'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  subject: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
})

export default function Contact() {
  const [toast, setToast] = useState(null)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  const onSubmit = async (data) => {
    setLoading(true)
    setToast(null)
    try {
      await submitContact(data)
      setToast({ type: 'success', message: 'Message sent! We will get back to you soon.' })
      reset()
    } catch (err) {
      setToast({ type: 'error', message: err.message || 'Could not send. Try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="py-24">
      <Container>
        <div className="text-center mb-12">
          <p className="text-body-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Contact</p>
          <h1 className="text-h2 text-neutral-900 mb-4">Get in Touch</h1>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md mb-8 h-[400px]">
          <iframe
            title="Manav Dental Clinic location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.556789!2d87.7!3d26.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDM5JzAwLjAiTiA4N8KwNDInMDAuMCJF!5e0!3m2!1sen!2snp!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 -mt-12 relative z-10">
          <div className="rounded-2xl bg-white p-8 text-center shadow-md">
            <Phone className="h-10 w-10 mx-auto text-primary-600 mb-3" />
            <p className="text-h4 font-semibold text-neutral-900">023-574973</p>
            <p className="text-body-sm text-neutral-600">Call us directly</p>
          </div>
          <div className="rounded-2xl bg-white p-8 text-center shadow-md">
            <MapPin className="h-10 w-10 mx-auto text-primary-600 mb-3" />
            <p className="text-h4 font-semibold text-neutral-900">Damak-57217</p>
            <p className="text-body-sm text-neutral-600">Visit our clinic</p>
          </div>
          <div className="rounded-2xl bg-white p-8 text-center shadow-md">
            <Clock className="h-10 w-10 mx-auto text-primary-600 mb-3" />
            <p className="text-h4 font-semibold text-neutral-900">Sun-Fri 10AM-6PM</p>
            <p className="text-body-sm text-neutral-600">Working hours</p>
          </div>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <h2 className="text-h3 text-neutral-900 mb-6">Send a message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Name *</label>
              <input
                {...register('name')}
                className="h-[52px] w-full rounded-[10px] border border-neutral-200 px-4 focus:border-primary-500 focus:ring-3 focus:ring-primary-100 focus:outline-none"
              />
              {errors.name && <p className="mt-1 text-body-sm text-error">{errors.name.message}</p>}
            </div>
            <div>
              <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Email *</label>
              <input
                {...register('email')}
                type="email"
                className="h-[52px] w-full rounded-[10px] border border-neutral-200 px-4 focus:border-primary-500 focus:ring-3 focus:ring-primary-100 focus:outline-none"
              />
              {errors.email && <p className="mt-1 text-body-sm text-error">{errors.email.message}</p>}
            </div>
            <div>
              <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Subject</label>
              <input {...register('subject')} className="h-[52px] w-full rounded-[10px] border border-neutral-200 px-4 focus:border-primary-500 focus:outline-none" />
            </div>
            <div>
              <label className="mb-1.5 block text-body-sm font-medium text-neutral-700">Message *</label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full rounded-[10px] border border-neutral-200 px-4 py-3 focus:border-primary-500 focus:ring-3 focus:ring-primary-100 focus:outline-none"
              />
              {errors.message && <p className="mt-1 text-body-sm text-error">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="h-[52px] w-full rounded-button bg-primary-600 font-semibold text-white hover:bg-primary-700 disabled:opacity-70"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {toast && (
          <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 rounded-button px-6 py-3 text-body-sm font-medium text-white ${toast.type === 'success' ? 'bg-success' : 'bg-error'}`}>
            {toast.message}
          </div>
        )}
      </Container>
    </main>
  )
}
