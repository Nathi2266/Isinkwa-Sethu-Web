import { useEffect, useState } from 'react'
import { fetchContactMessages } from '@/lib/api'
import MessagesTable from '@/components/admin/MessagesTable'
import { useAdminAuth } from '@/contexts/AdminAuthContext'

export default function AdminDashboard() {
  const { token } = useAdminAuth()
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) return
    fetchContactMessages(token)
      .then(setMessages)
      .catch((err) => setError(err.message || 'Failed to load messages'))
      .finally(() => setLoading(false))
  }, [token])

  return (
    <main className="flex-1 section-padding">
      <h1 className="font-display text-2xl font-bold text-cream">Contact Messages</h1>
      <p className="mt-2 text-sm text-cream/60">Messages submitted through the public contact form.</p>
      <div className="mt-8">
        <MessagesTable messages={messages} loading={loading} error={error} />
      </div>
    </main>
  )
}
