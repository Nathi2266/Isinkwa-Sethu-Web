import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { truncateMessage } from '@/hooks/useMessageFilters'
import { cn } from '@/lib/utils'

function formatDate(value) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(value))
  } catch {
    return value
  }
}

export default function MessagesTable({ messages, loading, error }) {
  if (loading) {
    return (
      <div className="glass rounded-2xl border border-gold/10 p-10 text-center text-theme-muted">
        Loading messages…
      </div>
    )
  }

  if (error) {
    return (
      <div className="glass rounded-2xl border border-red-500/30 p-10 text-center text-red-300">
        {error}
      </div>
    )
  }

  if (!messages?.length) {
    return (
      <div className="glass rounded-2xl border border-gold/10 p-10 text-center text-theme-muted">
        No messages match your filters. Try adjusting or clearing filters.
      </div>
    )
  }

  return (
    <div className="glass overflow-hidden rounded-2xl border border-gold/15">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gold/15 bg-table-head">
              <th className="px-5 py-4 font-display font-semibold text-icon-accent">Name</th>
              <th className="px-5 py-4 font-display font-semibold text-icon-accent">Email</th>
              <th className="px-5 py-4 font-display font-semibold text-icon-accent">Preview</th>
              <th className="px-5 py-4 font-display font-semibold text-icon-accent">Received</th>
              <th className="w-12 px-3 py-4" aria-hidden />
            </tr>
          </thead>
          <tbody>
            {messages.map((row, index) => (
              <tr
                key={row.id}
                className={cn(
                  'group border-b border-gold/10 transition-colors hover:bg-gold/5',
                  index % 2 === 0 ? 'bg-transparent' : 'bg-table-stripe'
                )}
              >
                <td className="px-5 py-4 align-top">
                  <Link
                    to={`/admin/dashboard/${row.id}`}
                    className="font-medium text-icon-accent underline-offset-4 hover:underline"
                  >
                    {row.name}
                  </Link>
                </td>
                <td className="px-5 py-4 align-top text-theme-muted">
                  <a href={`mailto:${row.email}`} className="hover:text-icon-accent">
                    {row.email}
                  </a>
                </td>
                <td className="max-w-sm px-5 py-4 align-top text-theme-muted">
                  <p className="line-clamp-2">{truncateMessage(row.message)}</p>
                </td>
                <td className="px-5 py-4 align-top whitespace-nowrap text-theme-muted">
                  {formatDate(row.created_at)}
                </td>
                <td className="px-3 py-4 align-top">
                  <Link
                    to={`/admin/dashboard/${row.id}`}
                    className="inline-flex size-9 items-center justify-center rounded-lg text-theme-subtle transition-colors hover:bg-gold/10 hover:text-icon-accent"
                    aria-label={`View message from ${row.name}`}
                  >
                    <ChevronRight className="size-5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
