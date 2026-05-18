import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/components/motion/variants'

export function SectionReveal({ children, className, id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.section>
  )
}

export function FadeItem({ children, className }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}
