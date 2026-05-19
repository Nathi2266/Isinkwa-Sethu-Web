import { useMemo, useState } from 'react'

export const TIME_OF_DAY_OPTIONS = [
  { value: 'all', label: 'All times' },
  { value: 'morning', label: 'Morning (6am–12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm–6pm)' },
  { value: 'evening', label: 'Evening (6pm–12am)' },
  { value: 'night', label: 'Night (12am–6am)' },
]

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
]

export const DATE_PRESET_OPTIONS = [
  { value: 'all', label: 'All time' },
  { value: 'today', label: 'Today' },
  { value: '7d', label: 'Last 7 days' },
  { value: '30d', label: 'Last 30 days' },
]

const INITIAL_FILTERS = {
  search: '',
  email: '',
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

function filterMessages(messages, filters) {
  let result = [...messages]
  const presetRange = resolvePresetRange(filters.datePreset)

  if (filters.search.trim()) {
    const q = filters.search.trim().toLowerCase()
    result = result.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.message.toLowerCase().includes(q)
    )
  }

  if (filters.email.trim()) {
    const q = filters.email.trim().toLowerCase()
    result = result.filter((m) => m.email.toLowerCase().includes(q))
  }

  if (presetRange) {
    result = result.filter((m) => {
      const d = new Date(m.created_at)
      return d >= presetRange.from && d <= presetRange.to
    })
  } else {
    if (filters.dateFrom) {
      const from = startOfDay(filters.dateFrom)
      result = result.filter((m) => new Date(m.created_at) >= from)
    }
    if (filters.dateTo) {
      const to = endOfDay(filters.dateTo)
      result = result.filter((m) => new Date(m.created_at) <= to)
    }
  }

  if (filters.timeOfDay !== 'all') {
    result = result.filter((m) => matchesTimeOfDay(new Date(m.created_at), filters.timeOfDay))
  }

  result.sort((a, b) => {
    const ta = new Date(a.created_at).getTime()
    const tb = new Date(b.created_at).getTime()
    return filters.sort === 'oldest' ? ta - tb : tb - ta
  })

  return result
}

export function useMessageFilters(messages) {
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  const filteredMessages = useMemo(
    () => filterMessages(messages ?? [], filters),
    [messages, filters]
  )

  const hasActiveFilters = useMemo(() => {
    return (
      filters.search.trim() !== '' ||
      filters.email.trim() !== '' ||
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
    filteredMessages,
    hasActiveFilters,
    updateFilter,
    clearFilters,
    totalCount: messages?.length ?? 0,
    filteredCount: filteredMessages.length,
  }
}

export function truncateMessage(text, maxLength = 96) {
  if (!text) return ''
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= maxLength) return normalized
  return `${normalized.slice(0, maxLength).trim()}…`
}
