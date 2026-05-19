import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'
import { cn } from '@/lib/utils'

export default function StatCounter({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  className,
  size = 'default',
}) {
  const { ref, display } = useCountUp(end, { prefix, suffix, decimals })

  return (
    <motion.article
      ref={ref}
      className={cn('text-center', className)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <p
        className={cn(
          'font-display font-bold text-gold',
          size === 'lg' ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'
        )}
      >
        {display}
      </p>
      <p className="mt-3 text-sm text-cream/65">{label}</p>
    </motion.article>
  )
}
