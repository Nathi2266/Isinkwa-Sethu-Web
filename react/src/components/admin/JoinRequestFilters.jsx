import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GENDER_OPTIONS } from '@/config/join'
import {
  DATE_PRESET_OPTIONS,
  SORT_OPTIONS,
  TIME_OF_DAY_OPTIONS,
} from '@/hooks/useJoinRequestFilters'
import { cn } from '@/lib/utils'

const selectClassName =
  'flex h-11 w-full rounded-lg border border-gold/20 bg-input px-3 text-sm text-foreground transition-colors focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/30'

export default function JoinRequestFilters({
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
          <p className="mt-1 text-xs text-theme-subtle">Search applicants by name, location, date, and more.</p>
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
          <Label htmlFor="join-search">Search</Label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-theme-subtle" />
            <Input
              id="join-search"
              placeholder="Name, email, phone, location…"
              value={filters.search}
              onChange={(e) => onFilterChange('search', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="join-email">Email</Label>
          <Input
            id="join-email"
            type="email"
            placeholder="Filter by email…"
            value={filters.email}
            onChange={(e) => onFilterChange('email', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="join-province">Province</Label>
          <Input
            id="join-province"
            placeholder="e.g. Gauteng"
            value={filters.province}
            onChange={(e) => onFilterChange('province', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="join-gender">Gender</Label>
          <select
            id="join-gender"
            className={selectClassName}
            value={filters.gender}
            onChange={(e) => onFilterChange('gender', e.target.value)}
          >
            <option value="">All</option>
            {GENDER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="join-preset">Date range</Label>
          <select
            id="join-preset"
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
          <Label htmlFor="join-from">From date</Label>
          <Input
            id="join-from"
            type="date"
            value={filters.dateFrom}
            disabled={filters.datePreset !== 'all'}
            onChange={(e) => onFilterChange('dateFrom', e.target.value)}
            className={cn(filters.datePreset !== 'all' && 'opacity-50')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="join-to">To date</Label>
          <Input
            id="join-to"
            type="date"
            value={filters.dateTo}
            disabled={filters.datePreset !== 'all'}
            onChange={(e) => onFilterChange('dateTo', e.target.value)}
            className={cn(filters.datePreset !== 'all' && 'opacity-50')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="join-time">Time of day</Label>
          <select
            id="join-time"
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
          <Label htmlFor="join-sort">Sort</Label>
          <select
            id="join-sort"
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
