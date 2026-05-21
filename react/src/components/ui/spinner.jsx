import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Spinner({ className, label = 'Loading' }) {
  return (
    <Loader2
      className={cn('size-4 animate-spin', className)}
      aria-hidden={label ? true : undefined}
    />
  )
}

export function SpinnerWithLabel({ className, label = 'Loading…' }) {
  return (
    <span className={cn('inline-flex items-center justify-center gap-2', className)} role="status">
      <Spinner />
      <span>{label}</span>
    </span>
  )
}
