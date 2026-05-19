import { Button } from '@/components/ui/button'

export default function SentryErrorFallback({ error, resetError }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        Something went wrong
      </p>
      <h1 className="mb-4 font-display text-3xl text-cream sm:text-4xl">
        We hit an unexpected error
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        Our team has been notified. You can try again or return to the home page.
      </p>
      {import.meta.env.DEV && error?.message && (
        <pre className="mb-8 max-w-lg overflow-auto rounded-lg border border-gold/20 bg-muted/30 p-4 text-left text-xs text-cream">
          {error.message}
        </pre>
      )}
      <div className="flex flex-wrap justify-center gap-3">
        <Button type="button" variant="gold" onClick={resetError}>
          Try again
        </Button>
        <Button type="button" variant="outline" asChild>
          <a href="/">Go home</a>
        </Button>
      </div>
    </div>
  )
}
