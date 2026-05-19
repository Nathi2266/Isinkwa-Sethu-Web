import { Routes, Route } from 'react-router-dom'
import PageLayout from '@/components/PageLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Vision from '@/pages/Vision'
import Ownership from '@/pages/Ownership'
import ImpactPage from '@/pages/ImpactPage'
import Community from '@/pages/Community'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/ownership" element={<Ownership />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
