export default function DashboardHeader({
  title = 'Dashboard',
  description = 'Review contact form submissions, filter by date and time, and open any message to read the full details.',
}) {
  return (
    <header className="border-b border-gold/10 pb-6">
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-theme-muted">{description}</p>
    </header>
  )
}
