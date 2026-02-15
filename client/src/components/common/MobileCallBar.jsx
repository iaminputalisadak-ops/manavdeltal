import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex h-16 border-t border-neutral-200 bg-white shadow-lg sm:hidden">
      <a
        href="tel:023574973"
        className="flex flex-1 items-center justify-center gap-2 text-body font-semibold text-primary-600"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <Link
        to="/book"
        className="flex flex-1 items-center justify-center bg-primary-600 text-body font-semibold text-white"
      >
        Book Online
      </Link>
    </div>
  )
}
