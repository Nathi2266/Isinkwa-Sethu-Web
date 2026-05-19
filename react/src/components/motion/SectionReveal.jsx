import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, defaultViewport } from '@/components/motion/variants'

export function SectionReveal({ children, className, id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer}
    >
      {children}
    </motion.section>
  )
}

export function FadeItem({ children, className, variants = fadeUp }) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
