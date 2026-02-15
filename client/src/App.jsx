import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import BookAppointment from './pages/BookAppointment'
import Doctors from './pages/Doctors'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="book" element={<BookAppointment />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
