import { Navigate, Routes, Route } from 'react-router-dom'
import { withProfiler, withSentryReactRouterV7Routing } from '@sentry/react'
import PageLayout from '@/components/layout/PageLayout'
import AdminLayout from '@/components/admin/AdminLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Vision from '@/pages/Vision'
import Ownership from '@/pages/Ownership'
import ImpactPage from '@/pages/ImpactPage'
import Community from '@/pages/Community'
import Contact from '@/pages/Contact'
import AdminLogin from '@/pages/admin/AdminLogin'
import AdminDashboard from '@/pages/admin/AdminDashboard'
import MessageDetail from '@/pages/admin/MessageDetail'
import JoinUs from '@/pages/JoinUs'
import AdminJoinRequests from '@/pages/admin/AdminJoinRequests'
import JoinRequestDetail from '@/pages/admin/JoinRequestDetail'
import ThemeToggleFab from '@/components/theme/ThemeToggleFab'

const SentryRoutes = withSentryReactRouterV7Routing(Routes)

function App() {
  return (
    <>
    <SentryRoutes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard/:messageId" element={<MessageDetail />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="join-requests/:requestId" element={<JoinRequestDetail />} />
        <Route path="join-requests" element={<AdminJoinRequests />} />
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/ownership" element={<Ownership />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Route>
    </SentryRoutes>
    <ThemeToggleFab />
    </>
  )
}

export default withProfiler(App)
