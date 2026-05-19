import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { addRouteBreadcrumb, setPageContext } from '@/lib/monitoring'

export default function SentryRouteObserver() {
  const { pathname } = useLocation()

  useEffect(() => {
    setPageContext(pathname)
    addRouteBreadcrumb(pathname)
  }, [pathname])

  return null
}
