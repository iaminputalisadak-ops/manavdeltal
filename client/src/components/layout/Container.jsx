export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
