import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Container from '../layout/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  { name: 'Amit Kumar Sah', text: 'Perfect dental of Damak ❤️', stars: 5, date: '2 months ago', initial: 'AS' },
  { name: 'Ratna Mishra', text: 'Energetic, Friendly, Affordable!', stars: 5, date: '11 months ago', initial: 'RM' },
  { name: 'Srijana Ramdam', text: 'Perfect and affordable to all patients', stars: 5, date: '1 year ago', initial: 'SR' },
  { name: 'Rajesh K.', text: 'Very professional and clean clinic. Highly recommend.', stars: 5, date: '6 months ago', initial: 'RK' },
  { name: 'Sunita M.', text: 'Best dental experience in Damak. Gentle and caring staff.', stars: 5, date: '8 months ago', initial: 'SM' },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-neutral-50 py-24">
      <Container>
        <div className="text-center mb-12">
          <p className="text-body-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-3">Testimonials</p>
          <h2 className="text-h2 text-neutral-900 mb-4">What Our Patients Say</h2>
          <div className="w-12 h-0.5 bg-primary-500 mx-auto" />
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.15, spaceBetween: 24 },
            1024: { slidesPerView: 2, spaceBetween: 32 },
            1280: { slidesPerView: 3, spaceBetween: 32 },
          }}
          pagination={{ clickable: true }}
          className="!pb-12 [&_.swiper-pagination-bullet]:!bg-neutral-300 [&_.swiper-pagination-bullet-active]:!bg-primary-600"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-amber-500 text-xl">★</span>
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -left-1 -top-2 h-10 w-10 text-primary-200" />
                  <p className="text-body text-neutral-700 italic pl-8 mt-4 mb-6">"{t.text}"</p>
                </div>
                <div className="border-t border-neutral-100 pt-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-semibold text-body-sm">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-neutral-900">{t.name}</p>
                    <p className="text-caption text-neutral-500">Google Review · {t.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/Manav+Dental+Clinic+Damak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm font-medium text-primary-600 hover:underline"
          >
            See All Reviews on Google →
          </a>
          <p className="text-caption text-neutral-500 mt-2">5.0 ⭐ based on 8 reviews on Google</p>
        </div>
      </Container>
    </section>
  )
}
