import { useState, useEffect } from 'react'
import { getItems, createItem } from './api'

export default function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    loadItems()
  }, [])

  async function loadItems() {
    setLoading(true)
    setError(null)
    try {
      const data = await getItems()
      setItems(data.items || [])
    } catch (err) {
      setError(err.message || 'Failed to load data')
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    setSubmitting(true)
    setError(null)
    try {
      await createItem({ name: name.trim() })
      setName('')
      await loadItems()
    } catch (err) {
      setError(err.message || 'Failed to create item')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h1>Manavdeltal App</h1>
      <p style={{ color: '#64748b' }}>React frontend + PHP/MySQL backend</p>

      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add item name..."
          style={{
            padding: '8px 12px',
            marginRight: 8,
            width: 240,
            border: '1px solid #e2e8f0',
            borderRadius: 8,
          }}
        />
        <button
          type="submit"
          disabled={submitting}
          style={{
            padding: '8px 16px',
            background: '#0d9488',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            fontWeight: 600,
            cursor: submitting ? 'not-allowed' : 'pointer',
          }}
        >
          {submitting ? 'Adding…' : 'Add'}
        </button>
      </form>

      {error && (
        <p style={{ color: '#dc2626', marginBottom: 16 }}>{error}</p>
      )}

      {loading ? (
        <p>Loading…</p>
      ) : items.length === 0 ? (
        <p style={{ color: '#64748b' }}>No items yet. Add one above or check that the PHP API is running.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                padding: '12px 16px',
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: 8,
                marginBottom: 8,
              }}
            >
              #{item.id} — {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
