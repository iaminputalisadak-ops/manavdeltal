import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import WhatsAppButton from './common/WhatsAppButton'
import ScrollToTop from './common/ScrollToTop'
import MobileCallBar from './common/MobileCallBar'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>Manav Dental Clinic | Best Dentist in Damak, Nepal</title>
        <meta name="description" content="Your smile, our priority. Energetic, friendly & affordable dental care in Damak. Book now: 023-574973." />
        <meta name="keywords" content="dental clinic, Damak, Nepal, dentist, teeth, Manav Dental" />
        <meta property="og:title" content="Manav Dental Clinic | Damak, Nepal" />
        <meta property="og:description" content="Best dental care in Damak. Book your appointment today." />
      </Helmet>
      <Navbar />
      <main className="flex-1 pb-20 sm:pb-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <MobileCallBar />
    </div>
  )
}
