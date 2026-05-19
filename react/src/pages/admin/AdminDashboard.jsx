import { useEffect, useState } from 'react'
import MessagesTable from '@/components/admin/MessagesTable'
import { useAdminAuth } from '@/contexts/AdminAuthContext'
import { fetchContactMessages } from '@/lib/api'

export default function AdminDashboard() {
  const { token } = useAdminAuth()
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError('')
      try {
        const data = await fetchContactMessages(token)
        if (!cancelled) setMessages(data)
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load messages')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [token])

  return (
    <>
      <header className="border-b border-gold/10 bg-black/30 px-6 py-5 sm:px-8">
        <h1 className="font-display text-2xl font-semibold text-cream">Dashboard</h1>
      </header>
      <section className="flex-1 overflow-auto p-6 sm:p-8">
        <MessagesTable messages={messages} loading={loading} error={error} />
      </section>
    </>
  )
}
