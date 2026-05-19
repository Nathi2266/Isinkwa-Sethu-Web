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
      <div className="glass rounded-2xl border border-gold/10 p-10 text-center text-cream/70">
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
      <div className="glass rounded-2xl border border-gold/10 p-10 text-center text-cream/60">
        No contact messages yet.
      </div>
    )
  }

  return (
    <div className="glass overflow-hidden rounded-2xl border border-gold/15">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gold/15 bg-black/40">
              <th className="px-5 py-4 font-display font-semibold text-gold">Name</th>
              <th className="px-5 py-4 font-display font-semibold text-gold">Email</th>
              <th className="px-5 py-4 font-display font-semibold text-gold">Message</th>
              <th className="px-5 py-4 font-display font-semibold text-gold">Received</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((row, index) => (
              <tr
                key={row.id}
                className={cn(
                  'border-b border-gold/10 transition-colors hover:bg-gold/5',
                  index % 2 === 0 ? 'bg-transparent' : 'bg-black/20'
                )}
              >
                <td className="px-5 py-4 align-top font-medium text-cream">{row.name}</td>
                <td className="px-5 py-4 align-top text-cream/80">
                  <a href={`mailto:${row.email}`} className="hover:text-gold">
                    {row.email}
                  </a>
                </td>
                <td className="max-w-md px-5 py-4 align-top whitespace-pre-wrap text-cream/75">
                  {row.message}
                </td>
                <td className="px-5 py-4 align-top whitespace-nowrap text-cream/60">
                  {formatDate(row.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
