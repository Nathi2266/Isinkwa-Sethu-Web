import { useEffect, useState } from 'react'
import DashboardHeader from '@/components/admin/DashboardHeader'
import MessageFilters from '@/components/admin/MessageFilters'
import MessageStats from '@/components/admin/MessageStats'
import MessagesTable from '@/components/admin/MessagesTable'
import { useMessageFilters } from '@/hooks/useMessageFilters'
import { fetchContactMessages } from '@/lib/api'
import { useAdminAuth } from '@/contexts/AdminAuthContext'

export default function AdminDashboard() {
  const { token } = useAdminAuth()
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const {
    filters,
    filteredMessages,
    hasActiveFilters,
    updateFilter,
    clearFilters,
    totalCount,
    filteredCount,
  } = useMessageFilters(messages)

  useEffect(() => {
    if (!token) return
    fetchContactMessages(token)
      .then(setMessages)
      .catch((err) => setError(err.message || 'Failed to load messages'))
      .finally(() => setLoading(false))
  }, [token])

  return (
    <main className="flex-1 section-padding">
      <DashboardHeader />

      <div className="mt-8 space-y-6">
        <MessageStats
          totalCount={totalCount}
          filteredCount={filteredCount}
          hasActiveFilters={hasActiveFilters}
        />

        <MessageFilters
          filters={filters}
          onFilterChange={updateFilter}
          onClear={clearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        <MessagesTable messages={filteredMessages} loading={loading} error={error} />
      </div>
    </main>
  )
}
