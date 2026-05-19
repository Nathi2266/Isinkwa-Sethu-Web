import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardHoverLift } from '@/components/motion/variants'

export default function GlassCard({ children, className, hover = true, as: Tag = 'div' }) {
  if (hover) {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={cardHoverLift}
        className={cn('glass glow-gold-hover rounded-2xl', className)}
      >
        {children}
      </motion.div>
    )
  }

  const Comp = Tag
  return <Comp className={cn('glass glow-gold-hover rounded-2xl', className)}>{children}</Comp>
}
