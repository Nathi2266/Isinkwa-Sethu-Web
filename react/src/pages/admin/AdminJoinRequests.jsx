import { useEffect, useState } from 'react'
import DashboardHeader from '@/components/admin/DashboardHeader'
import JoinRequestFilters from '@/components/admin/JoinRequestFilters'
import JoinRequestsTable from '@/components/admin/JoinRequestsTable'
import MessageStats from '@/components/admin/MessageStats'
import { useJoinRequestFilters } from '@/hooks/useJoinRequestFilters'
import { fetchJoinRequests } from '@/lib/api'
import { useAdminAuth } from '@/contexts/AdminAuthContext'

export default function AdminJoinRequests() {
  const { token } = useAdminAuth()
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const {
    filters,
    filteredRequests,
    hasActiveFilters,
    updateFilter,
    clearFilters,
    totalCount,
    filteredCount,
  } = useJoinRequestFilters(requests)

  useEffect(() => {
    if (!token) return
    fetchJoinRequests(token)
      .then(setRequests)
      .catch((err) => setError(err.message || 'Failed to load join requests'))
      .finally(() => setLoading(false))
  }, [token])

  return (
    <main className="flex-1 section-padding">
      <DashboardHeader
        title="Join requests"
        description="People who applied to join the movement. Review their details and follow up when ready."
      />

      <div className="mt-8 space-y-6">
        <MessageStats
          totalCount={totalCount}
          filteredCount={filteredCount}
          hasActiveFilters={hasActiveFilters}
        />

        <JoinRequestFilters
          filters={filters}
          onFilterChange={updateFilter}
          onClear={clearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        <JoinRequestsTable requests={filteredRequests} loading={loading} error={error} />
      </div>
    </main>
  )
}
