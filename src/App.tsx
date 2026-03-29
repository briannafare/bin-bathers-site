import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Home } from './pages/Home'
import { RunATerritory } from './pages/RunATerritory'
import { AnnouncementBar } from './components/layout/AnnouncementBar'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/run-a-territory" element={<Layout><RunATerritory /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
