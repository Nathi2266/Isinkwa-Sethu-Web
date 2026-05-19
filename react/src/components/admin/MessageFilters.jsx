import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  DATE_PRESET_OPTIONS,
  SORT_OPTIONS,
  TIME_OF_DAY_OPTIONS,
} from '@/hooks/useMessageFilters'
import { cn } from '@/lib/utils'

const selectClassName =
  'flex h-11 w-full rounded-lg border border-gold/20 bg-input px-3 text-sm text-foreground transition-colors focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/30'

export default function MessageFilters({
  filters,
  onFilterChange,
  onClear,
  hasActiveFilters,
}) {
  return (
    <section className="glass rounded-2xl border border-gold/15 p-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-sm font-semibold text-icon-accent">Filters</h2>
          <p className="mt-1 text-xs text-theme-subtle">Narrow messages by search, date, time, or email.</p>
        </div>
        {hasActiveFilters ? (
          <Button type="button" variant="outline" size="sm" onClick={onClear}>
            <X className="size-4" />
            Clear filters
          </Button>
        ) : null}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="space-y-2 sm:col-span-2 lg:col-span-2">
          <Label htmlFor="filter-search">Search</Label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-theme-subtle" />
            <Input
              id="filter-search"
              placeholder="Name, email, or message text…"
              value={filters.search}
              onChange={(e) => onFilterChange('search', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="filter-email">Email</Label>
          <Input
            id="filter-email"
            type="email"
            placeholder="Filter by email…"
            value={filters.email}
            onChange={(e) => onFilterChange('email', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="filter-preset">Date range</Label>
          <select
            id="filter-preset"
            className={selectClassName}
            value={filters.datePreset}
            onChange={(e) => onFilterChange('datePreset', e.target.value)}
          >
            {DATE_PRESET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="filter-from">From date</Label>
          <Input
            id="filter-from"
            type="date"
            value={filters.dateFrom}
            disabled={filters.datePreset !== 'all'}
            onChange={(e) => onFilterChange('dateFrom', e.target.value)}
            className={cn(filters.datePreset !== 'all' && 'opacity-50')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="filter-to">To date</Label>
          <Input
            id="filter-to"
            type="date"
            value={filters.dateTo}
            disabled={filters.datePreset !== 'all'}
            onChange={(e) => onFilterChange('dateTo', e.target.value)}
            className={cn(filters.datePreset !== 'all' && 'opacity-50')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="filter-time">Time of day</Label>
          <select
            id="filter-time"
            className={selectClassName}
            value={filters.timeOfDay}
            onChange={(e) => onFilterChange('timeOfDay', e.target.value)}
          >
            {TIME_OF_DAY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="filter-sort">Sort</Label>
          <select
            id="filter-sort"
            className={selectClassName}
            value={filters.sort}
            onChange={(e) => onFilterChange('sort', e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  )
}
