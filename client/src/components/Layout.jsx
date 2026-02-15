import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import MobileCallBar from './MobileCallBar'
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-main">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppButton />
      <MobileCallBar />
    </div>
  )
}
