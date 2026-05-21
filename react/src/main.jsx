import { initSentry, sentryEnabled } from './sentry.js'
import './lib/theme-init.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { SentryErrorBoundary } from '@/components/SentryErrorBoundary'
import { AdminAuthProvider } from '@/contexts/AdminAuthContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './styles/globals.css'
import './styles/motion.css'

initSentry()

function Root() {
  const app = (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <AdminAuthProvider>
            <App />
          </AdminAuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  )

  if (!sentryEnabled) return app

  return <SentryErrorBoundary>{app}</SentryErrorBoundary>
}

createRoot(document.getElementById('root')).render(<Root />)
