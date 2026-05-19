import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/motion/PageTransition'
import ScrollProgress from '@/components/motion/ScrollProgress'
import GlowOrb from '@/components/primitives/GlowOrb'
import SentryRouteObserver from '@/components/SentryRouteObserver'
import SentryPageBoundary from '@/components/SentryPageBoundary'

export default function PageLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <SentryRouteObserver />
      <ScrollProgress />
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <GlowOrb className="theme-orb left-1/4 top-0 h-96 w-96" color="gold" />
        <GlowOrb className="theme-orb bottom-0 right-1/4 h-80 w-80" color="green" />
      </div>
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>
          <SentryPageBoundary>
            <Outlet />
          </SentryPageBoundary>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  )
}
