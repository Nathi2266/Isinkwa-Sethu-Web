import { Inbox, Filter } from 'lucide-react'
import { cn } from '@/lib/utils'

function StatCard({ label, value, icon: Icon, highlight }) {
  return (
    <div
      className={cn(
        'glass rounded-2xl border p-5',
        highlight ? 'border-gold/25 bg-gold/5' : 'border-gold/10'
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-theme-subtle">{label}</p>
          <p className="mt-2 font-display text-3xl font-bold text-foreground">{value}</p>
        </div>
        <div
          className={cn(
            'flex size-10 items-center justify-center rounded-lg',
            highlight ? 'bg-gold/15 text-icon-accent' : 'bg-muted text-icon'
          )}
        >
          <Icon className="size-5" aria-hidden />
        </div>
      </div>
    </div>
  )
}

export default function MessageStats({ totalCount, filteredCount, hasActiveFilters }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <StatCard label="Total messages" value={totalCount} icon={Inbox} highlight />
      <StatCard
        label={hasActiveFilters ? 'Matching filters' : 'Showing'}
        value={filteredCount}
        icon={Filter}
        highlight={hasActiveFilters}
      />
    </div>
  )
}
