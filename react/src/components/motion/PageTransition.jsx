import { motion } from 'framer-motion'
import { easePremium } from '@/components/motion/variants'

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: easePremium }}
    >
      {children}
    </motion.div>
  )
}
