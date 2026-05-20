import { useMemo, useState } from 'react'
import {
  DATE_PRESET_OPTIONS,
  SORT_OPTIONS,
  TIME_OF_DAY_OPTIONS,
} from '@/hooks/useMessageFilters'

export { DATE_PRESET_OPTIONS, SORT_OPTIONS, TIME_OF_DAY_OPTIONS }

const INITIAL_FILTERS = {
  search: '',
  email: '',
  province: '',
  gender: '',
  dateFrom: '',
  dateTo: '',
  datePreset: 'all',
  timeOfDay: 'all',
  sort: 'newest',
}

function startOfDay(date) {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d
}

function endOfDay(date) {
  const d = new Date(date)
  d.setHours(23, 59, 59, 999)
  return d
}

function matchesTimeOfDay(date, period) {
  if (period === 'all') return true
  const hour = date.getHours()
  switch (period) {
    case 'morning':
      return hour >= 6 && hour < 12
    case 'afternoon':
      return hour >= 12 && hour < 18
    case 'evening':
      return hour >= 18 && hour < 24
    case 'night':
      return hour >= 0 && hour < 6
    default:
      return true
  }
}

function resolvePresetRange(preset) {
  const now = new Date()
  switch (preset) {
    case 'today':
      return { from: startOfDay(now), to: endOfDay(now) }
    case '7d': {
      const from = new Date(now)
      from.setDate(from.getDate() - 7)
      return { from: startOfDay(from), to: endOfDay(now) }
    }
    case '30d': {
      const from = new Date(now)
      from.setDate(from.getDate() - 30)
      return { from: startOfDay(from), to: endOfDay(now) }
    }
    default:
      return null
  }
}

function filterJoinRequests(requests, filters) {
  let result = [...requests]
  const presetRange = resolvePresetRange(filters.datePreset)

  if (filters.search.trim()) {
    const q = filters.search.trim().toLowerCase()
    result = result.filter(
      (r) =>
        r.first_name.toLowerCase().includes(q) ||
        r.last_name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.phone.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q) ||
        r.province.toLowerCase().includes(q) ||
        r.why_join.toLowerCase().includes(q)
    )
  }

  if (filters.email.trim()) {
    const q = filters.email.trim().toLowerCase()
    result = result.filter((r) => r.email.toLowerCase().includes(q))
  }

  if (filters.province.trim()) {
    const q = filters.province.trim().toLowerCase()
    result = result.filter((r) => r.province.toLowerCase().includes(q))
  }

  if (filters.gender.trim()) {
    const q = filters.gender.trim().toLowerCase()
    result = result.filter((r) => r.gender.toLowerCase().includes(q))
  }

  if (presetRange) {
    result = result.filter((r) => {
      const d = new Date(r.created_at)
      return d >= presetRange.from && d <= presetRange.to
    })
  } else {
    if (filters.dateFrom) {
      const from = startOfDay(filters.dateFrom)
      result = result.filter((r) => new Date(r.created_at) >= from)
    }
    if (filters.dateTo) {
      const to = endOfDay(filters.dateTo)
      result = result.filter((r) => new Date(r.created_at) <= to)
    }
  }

  if (filters.timeOfDay !== 'all') {
    result = result.filter((r) => matchesTimeOfDay(new Date(r.created_at), filters.timeOfDay))
  }

  result.sort((a, b) => {
    const ta = new Date(a.created_at).getTime()
    const tb = new Date(b.created_at).getTime()
    return filters.sort === 'oldest' ? ta - tb : tb - ta
  })

  return result
}

export function useJoinRequestFilters(requests) {
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  const filteredRequests = useMemo(
    () => filterJoinRequests(requests ?? [], filters),
    [requests, filters]
  )

  const hasActiveFilters = useMemo(() => {
    return (
      filters.search.trim() !== '' ||
      filters.email.trim() !== '' ||
      filters.province.trim() !== '' ||
      filters.gender.trim() !== '' ||
      filters.dateFrom !== '' ||
      filters.dateTo !== '' ||
      filters.datePreset !== 'all' ||
      filters.timeOfDay !== 'all' ||
      filters.sort !== 'newest'
    )
  }, [filters])

  const updateFilter = (key, value) => {
    setFilters((prev) => {
      const next = { ...prev, [key]: value }
      if (key === 'datePreset' && value !== 'all') {
        next.dateFrom = ''
        next.dateTo = ''
      }
      if ((key === 'dateFrom' || key === 'dateTo') && value) {
        next.datePreset = 'all'
      }
      return next
    })
  }

  const clearFilters = () => setFilters(INITIAL_FILTERS)

  return {
    filters,
    filteredRequests,
    hasActiveFilters,
    updateFilter,
    clearFilters,
    totalCount: requests?.length ?? 0,
    filteredCount: filteredRequests.length,
  }
}

export function truncateText(text, maxLength = 72) {
  if (!text) return ''
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= maxLength) return normalized
  return `${normalized.slice(0, maxLength).trim()}…`
}
