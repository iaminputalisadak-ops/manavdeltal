import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-white shadow-md hover:bg-primary-700"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  )
}
