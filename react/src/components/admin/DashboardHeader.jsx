import SentryVerifyButton from '@/components/SentryVerifyButton'

export default function DashboardHeader() {
  return (
    <header className="border-b border-gold/10 pb-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-cream">Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-theme-muted">
            Review contact form submissions, filter by date and time, and open any message to read the
            full details.
          </p>
        </div>
        <div className="ml-4 mt-2">
          <SentryVerifyButton />
        </div>
      </div>
    </header>
  )
}
