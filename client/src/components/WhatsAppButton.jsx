import './WhatsAppButton.css'

const PHONE = '023574973' // Nepal - adjust with country code if needed e.g. 97723123456

export default function WhatsAppButton() {
  const url = `https://wa.me/${PHONE.replace(/\D/g, '')}`
  return (
    <a
      href={url}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-icon">💬</span>
    </a>
  )
}
