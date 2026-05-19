import './sentry.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Sentry, isSentryEnabled } from './sentry.js'
import App from './App.jsx'
import SentryErrorFallback from '@/components/SentryErrorFallback'
import { AdminAuthProvider } from '@/contexts/AdminAuthContext'
import './styles/globals.css'
import './styles/motion.css'

function Root() {
  const app = (
    <StrictMode>
      <BrowserRouter>
        <AdminAuthProvider>
          <App />
        </AdminAuthProvider>
      </BrowserRouter>
    </StrictMode>
  )

  if (!isSentryEnabled) return app

  return (
    <Sentry.ErrorBoundary fallback={SentryErrorFallback} showDialog={false}>
      {app}
    </Sentry.ErrorBoundary>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
